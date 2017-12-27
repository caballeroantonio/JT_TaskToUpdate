<?php

/**
 * @version     3.10
 * @package     com_tsjdf_libros2
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license    Licencia Pública General GNU versión 2 o posterior. Consulte LICENSE.txt
 */
// No direct access
defined('_JEXEC') or die;

require_once 'ws.php';
/**
 * Jt4grid controller class.
 *
 * @since  1.6
 */
class Tsjdf_libros2ControllerReports extends Tsjdf_libros2ControllerWS{
        
    
	public function click_export(){
        $this->adminOnly(1);

        $report = JRequest::getCmd('report');
        $file = __DIR__."/../views/reports/tmpl/{$report}.sql";
        
        $approved_request = true;
        $message = 'unknown warning';
        
        /**
         * protección ante operaciones fraudulentas
         */
        
        $validate_scheme = (int) $this->params->get('validate_scheme');
        if($validate_scheme)
            $myserver = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'];
        if($validate_scheme && 0 !== strpos($_SERVER['HTTP_REFERER'], $myserver)){
            $approved_request = false;
            $message = JText::_('COM_TSJDF_LIBROS2_REPORTS_SAME_SERVER');
        }else if (!isset($_SERVER['HTTP_REFERER'])){
            $approved_request = false;
            $message = JText::_('COM_TSJDF_LIBROS2_REPORTS_NO_REFERER');
        }else if(file_exists(!$file)){
            $approved_request = false;
            $message = JText::_('COM_TSJDF_LIBROS2_REPORTS_FILE_NOT_EXIST');
        }
        
        if($approved_request){
            $query = file_get_contents($file);
            parent::exportQuery($report, $query);
        }else{
            //se desactiva la cuenta
            $this->db->setQuery("UPDATE jos_users SET block='1' WHERE id='{$this->user->id}';");
            $this->db->execute();  
//se pone una nota a la acción del usuario            
$query = <<<EOT
    INSERT INTO jos_user_notes (catid, user_id, subject, body, state, created_user_id, created_time)
    SELECT id AS catid, '{$this->user->id}', 'inappropriate-use-of-reports', '{$message}', 1, 1, NOW()
    FROM jos_categories 
    WHERE alias = 'inappropriate-use-of-reports' AND extension = 'com_users';
EOT;
            $this->db->setQuery($query);
            $this->db->execute(); 

            //funciona bien cuando solo es una sesión
            $session = JFactory::getSession();
            $session->destroy();
            
            //en caso de que el usuario tenga varias sesiones
            $this->db->setQuery("DELETE FROM jos_session WHERE userid = '{$this->user->id}';");
            $this->db->execute();
            
            JError::raiseWarning( 100, $message);
        }
    }
    
    public function getmonthstats(){
        $this->adminOnly(1);
        $post = JRequest::get( 'post' );
        foreach ($post as $key => $value) {
            if (!strpos($key, '__')){
                unset($post[$key]);
                continue;
            }
            $value = JRequest::getCmd($key);//avoid sql injection
            if(!$value)
                continue;

            $key = str_replace('__', '.' , $key);
            $this->query->where("{$key} = {$this->db->quote($value)}");
        }
        
        $this->query
            ->select("r.id_organo, r.id_libro, o.organo 'Órgano', l.nombre 'Nombre del libro' , r.year 'Año' \n")
            ->select("r.m1 'Enero', r.m2 'Febrero', r.m3 'Marzo', r.m4 'Abril', r.m5 'Mayo', r.m6 'Junio', r.m7 'Julio', r.m8 'Agosto', r.m9 'Septiembre', r.m10 'Octubre', r.m11 'Noviembre', r.m12 'Diciembre' \n")
            ->select("(@p_rows := r.m1 + r.m2 + r.m3 + r.m4 + r.m5 + r.m6 + r.m7 + r.m8 + r.m9 + r.m10 + r.m11 + r.m12) AS 'Registros' \n")
            ->select("(@p_rows2 := r2.m1 + r2.m2 + r2.m3 + r2.m4 + r2.m5 + r2.m6 + r2.m7 + r2.m8 + r2.m9 + r2.m10 + r2.m11 + r2.m12) AS 'Registros año anterior' \n")
            ->select("CONCAT_WS('', IF(@p_rows2, round(@p_rows*100/@p_rows2,2), 'NA'), '%') '% aumento respecto del año anterior' \n")
            ->from('jtr_crecimiento2 r')
            ->join('INNER', "jtc_libros l ON l.id = r.id_libro AND l.published")
            ->join('INNER', "jtc_organos o ON o.id = r.id_organo AND o.numero != 100")
            ->join('LEFT', "jtr_crecimiento2 r2 ON r2.id_libro = r.id_libro AND r2.id_organo = r.id_organo AND r2.year = r.year -1")
            ->where("o.id_tipoorgano = 1")
            ->order("r.id")
//            ->setLimit(50)
            ;
        parent::exportQuery("Estadísticas por mes", $this->query);
    }
    
    public function getsatcivil(){
        $this->adminOnly(1);

        $q_jc01 = $this->db->getQuery(true);
        $q_jc01->select("l.id_organo, l.id_expediente, l.anoj, l.ordering, l.created AS 'l__created', o.organo AS 'o__organo' \n")
            ->select("e.name AS 'expediente', e.txt_tipojuicio \n")
            ->select("c23.cuantia AS 't_cuantia', c24.currency AS 't_moneda', l.field7 AS 'monto' \n")
            ->select("l.field7*COALESCE(c24.conversion, 1) AS 'monto_mxn' \n")
            ->from('jt_ljc01s l')
            ->join('LEFT', 'jtc_organos o ON o.id = l.id_organo')
            ->join('LEFT', 'jt_expedientes e ON e.id = l.id_expediente')
            ->join('LEFT', 'jtc_cuantia c23 ON c23.id = l.field6')
            ->join('LEFT', 'jtc_country c24 ON c24.id = l.field14')
            ->where('o.organo != 100')
            ;
        
        $q_jccm01 = $this->db->getQuery(true);
        $q_jccm01->select("l.id_organo, l.id_expediente, l.anoj, l.ordering, l.created AS 'l__created', o.organo AS 'o__organo' \n")
            ->select("e.name AS 'expediente', e.txt_tipojuicio \n")
            ->select("c398.cuantia AS 't_cuantia', '' AS 't_moneda', l.field7 AS 'monto' \n")
            ->select("l.field7 AS 'monto_mxn' \n")
            ->from('jt_ljccm01s l')
            ->join('LEFT', 'jtc_organos o ON o.id = l.id_organo')
            ->join('LEFT', 'jt_expedientes e ON e.id = l.id_expediente')
            ->join('LEFT', 'jtc_cuantia c398 ON c398.id = l.field6')
            ->where('o.organo != 100')
            ;

        $q_joc01 = $this->db->getQuery(true);
        $q_joc01->select("l.id_organo, l.id_expediente, l.anoj, l.ordering, l.created AS 'l__created', o.organo AS 'o__organo' \n")
            ->select("e.name AS 'expediente', e.txt_tipojuicio \n")
            ->select("'' AS 't_cuantia', c1576.currency AS 't_moneda', l.field6 AS 'monto' \n")
            ->select("l.field6*COALESCE(c1576.conversion, 1) AS 'monto_mxn' \n")
            ->from('jt_ljoc01s l')
            ->join('LEFT', 'jtc_organos o ON o.id = l.id_organo')
            ->join('LEFT', 'jt_expedientes e ON e.id = l.id_expediente')
            ->join('LEFT', 'jtc_country c1576 ON c1576.id = l.field6_divisa')
            ->where('o.organo != 100')
            ;
        
        $l__created_lt = JRequest::getString( 'l__created_lt' );
        if($l__created_lt){
            $q_jc01->where("l.created <= {$this->db->quote($l__created_lt)}");
            $q_jccm01->where("l.created <= {$this->db->quote($l__created_lt)}");
            $q_joc01->where("l.created <= {$this->db->quote($l__created_lt)}");
        }
        
        $l__created_gt = JRequest::getString( 'l__created_gt' );
        if($l__created_gt){
            $q_jc01->where("l.created >= {$this->db->quote($l__created_gt)}");
            $q_jccm01->where("l.created >= {$this->db->quote($l__created_gt)}");
            $q_joc01->where("l.created >= {$this->db->quote($l__created_gt)}");
        }
        
        $monto_lt = JRequest::getFloat( 'monto_lt' );
        if($monto_lt){
            $q_jc01->where("l.field7*COALESCE(c24.conversion,1) <= {$this->db->quote($monto_lt)}");
            $q_jccm01->where("l.field7 <= {$this->db->quote($monto_lt)}");
            $q_joc01->where("l.field6*COALESCE(c1576.conversion,1) <= {$this->db->quote($monto_lt)}");
        }
        
        $monto_gt = JRequest::getFloat( 'monto_gt' );
        if($monto_gt){
            $q_jc01->where("l.field7*COALESCE(c24.conversion,1) >= {$this->db->quote($monto_gt)}");
            $q_jccm01->where("l.field7 >= {$this->db->quote($monto_gt)}");
            $q_joc01->where("l.field6*COALESCE(c1576.conversion,1) >= {$this->db->quote($monto_gt)}");
        }
        
        $this->query = (string) "DROP TABLE IF EXISTS tmp_cuantia;
CREATE TEMPORARY TABLE IF NOT EXISTS tmp_cuantia (
SELECT * FROM(
	({$q_jc01})
	UNION 
	({$q_jccm01})
	UNION 
	({$q_joc01})
) r 
);
ALTER TABLE `tmp_cuantia` 
ADD COLUMN `id` INT NOT NULL AUTO_INCREMENT,
ADD PRIMARY KEY (`id`);

SELECT 
r.id 'sc', r.anoj 'Año judicial', r.ordering 'ordering en libro', r.l__created 'creado', r.o__organo 'Órgano', 
r.expediente 'Expediente', r.txt_tipojuicio 'Tipo de juicio', r.t_cuantia 'CUANTÍA', 
r.t_moneda 'TIPO DE MONEDA', r.monto 'SUERTE PRINCIPAL', r.monto_mxn 'MONTO MXN'
,p.txt_ijuridico 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT', tp.text 'Tipo de persona'
, p.fullname 'Nombre', p.a__curp 'CURP', p.a__rfc 'RFC', p.a__address 'Dirección'
FROM tmp_cuantia r
LEFT JOIN jtvsl_partescontenciosas p ON p.id_field = 2156 AND p.id_record = r.id_expediente
LEFT JOIN jtc_general tp ON tp.id = p.isMoral + 104
ORDER BY r.id_organo, r.anoj, r.ordering, p.p__id_field
;";
//        echo $this->query;
//        die;
        parent::exportQuery("Montos en juicios civiles", $this->query);
    }
}
