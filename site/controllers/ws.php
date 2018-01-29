<?php
/**
 * @version     3.10
 * @package     com_tsjdf_libros2
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license    Licencia Pública General GNU versión 2 o posterior. Consulte LICENSE.txt
 */

// No direct access.
defined('_JEXEC') or die;

require_once JPATH_COMPONENT.'/controller.php';

/**
 * WS list controller class.
 * Voy a implementar las tareas que se invócan por ajax desde ExtJS
 */
class Tsjdf_libros2ControllerWS extends Tsjdf_libros2Controller
{
    /**
      @var JDatabase Reference to the global database object
     */
    protected $db;
    /**
     * @var JQuery Variable para todos los queries
     */
    protected $query;
    /**
    * @var string clave del libro
    */
    protected $clave;
    /**
     * @var object parámetros del componente
     */
    protected $params;
    /**
     * @var array Variable que se utiliza para encapsular la respuesta json
     */
    protected $result;
    
    function __construct(){
        parent :: __construct();
        $this->db = JFactory::getDBO();
        $this->query = $this->db->getQuery(true);
        $this->clave = JRequest :: getCmd('clave');
        $this->params = JComponentHelper::getParams('com_tsjdf_libros2');
        
	$this->result = array('data'=> array(), 'success' => true, 'warning' => false, 'message' => '');
        
        $format = JRequest :: getCmd('format','html');
        switch($format){
                case 'txt':
                        JFactory::getDocument()->setMimeEncoding('text/plain');
                break;
        }
    }
    
    public function exportQuery($export_title, $export_query){
        $this->checkLogin();
        $export_format = $this->params->get('export_format');
        //al superadministrador le sirve más el query.
        if($this->user->id == 1)
            $export_format = 'sql';
        //archivos de salida
        $file = [];
        $file['sql'] = sys_get_temp_dir().'/'.time().'-'.JUserHelper::genRandomPassword(8);
//        $path = str_replace('\\', '/', JPATH_ROOT).'/tmp/';
//        file_exists($path) or mkdir($path, 0777, true);
//        $file['sql'] = __DIR__.'/buscame';//$path.time().'-'.JUserHelper::genRandomPassword(8);
        $file['html'] = $file['sql'].'.html';
        $file['exml'] = $file['sql'].'.exml';
        $file['xlsx'] = $file['sql'].'.xlsx';
        $file['sql'] .= '.sql';

        //salida a .sql
        $result_var = file_put_contents($file['sql'], $export_query);
        if(!$result_var)
            $this->doDie($file['sql'], 'error escribiendo sql');
        
        if($export_format == 'sql'){
            header('Content-type: text/plain',1);
            $this->doOutput($file[$export_format], "{$export_title}.{$export_format}");
        }
        
        //salida a .html
        $config = JFactory::getConfig();
        $my_cmd = "mysql --host={$config->get('host')} --user={$config->get('user')} --password={$config->get('password')} --database={$config->get('db')} --default-character-set=utf8";
        $my_cmd .= " -H < \"{$file['sql']}\" > \"{$file['html']}\"";
        if($this->user->id == 1)
            $my_cmd .= ' 2>&1';
        exec($my_cmd, $output, $result_var);
        unlink($file['sql']);
        if($result_var)
            $this->doDie($file['html'], 'error comando mysql');
        if ($export_format == 'html') {
            echo '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>'.$export_title.'</title>
        </head>

        <body>';
            header('Content-type: text/html',1);
            $this->doOutput($file[$export_format], "{$export_title}.{$export_format}");
        }
        
        if($export_format == 'exl_redirect'){
            $export_title = urlencode($export_title);
            $file['html_redirect'] = 'tmp/'.basename($file['html']);
            rename($file['html'], JPATH_ROOT.'/'.$file['html_redirect']);
            $file['html_redirect'] = JURI::base().$file['html_redirect'];
            //prueba
//            $file['html_redirect'] = 'http://caballeroantonio.dyndns-ip.com:3080/gpcb/tmp/'
//                    .basename($file['html']);
            $prettyURL = $this->params->get('exlURL','noexisto');
            $file['html_redirect'] = "{$prettyURL}?url={$file['html_redirect']}&title={$export_title}";
            $this->setRedirect($file['html_redirect']);
            return;
        }
        
        //salida a .xml
        if(PHP_OS == 'WINNT')
            $my_cmd = '';
        else
            $my_cmd = 'python3 ';
        $my_cmd .= __DIR__."/mysqlH2exml.py \"{$file['html']}\" > \"{$file['exml']}\" 2>&1";
        exec($my_cmd, $output, $result_var);
		unlink($file['html']);
        if($result_var)
            $this->doDie($file['exml'], 'error comando mysqlH2exml.py');
        if ($export_format == 'exml') {
            header('Content-type: application/vnd.ms-excel',1);
            $this->doOutput($file[$export_format], "{$export_title}.{$export_format}");
        }
        
        //salida a .xlsx
		//sudo sh -x /root/cronjobs/restart-libreoffice.sh #si se traba
        if(PHP_OS == 'WINNT')
            $my_cmd = '';
        else
            $my_cmd = 'python3 ';
        $my_cmd .= __DIR__."/unoconv0.7.py -f xlsx \"{$file['exml']}\"";
        echo $my_cmd;        exit();
        exec($my_cmd, $output, $result_var);
		unlink($file['exml']);
        if($result_var)
            $this->doDie($file['xlsx'], 'error comando mysqlH2exml.py');
        if ($export_format == 'xlsx') {
            header('Content-type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',1);
            $this->doOutput($file[$export_format], $export_title);
        }
    }
    
    private function doOutput($the_file, $export_title){
//        header('Content-Disposition: attachment;filename='.$export_title,1);
        readfile($the_file);
        unlink($the_file);
        exit;
    }

    private function doDie($the_file, $message){
        readfile($the_file);
		unlink($the_file);
        die('<br/>'.$message);
    }
    

    
        /**
     * aplicar los filtros que vienen del GRID ExtJS
     * @param array $filter Los filtros que se van a aplicar
     * @param object $query la referencia del query
     * @param boolean $seachJoins se relaciona con $thefilter['data']['type'] == 'hasmany' para hacer joins
     * @todo re-codificar [$query->where("l.] en index.php?option=com_tsjdf_libros2&task=libros.read&store=admin&store=admin&clave=empleados no me gusta que el alias sea 'l'
     */
    protected function applyFilter($filter, &$query, $seachJoins = true){
            /*
                    en $joins pongo los joins para buscar si se repiten
                    l	libro		jtvl_XXX
                    e	expediente	jt_expedientes
            */
            $joins = array();
            if(!is_array($filter))
               $filter = json_decode($filter, true);
            foreach($filter as $filterIndex => $thefilter){
                //ExtJS está enviando filter [{"property":"tipojuicio"}], para cargar asincronamente.
                if(!isset($thefilter['data']))
                    break;
                    $thefilter['data']['value'] = $this->db->escape($thefilter['data']['value']);
                    switch($thefilter['data']['type']){
                            case 'string':
                                    $query->where("l.{$thefilter['field']} LIKE '%{$thefilter['data']['value']}%'");
                            break;
                            case 'date':
                                    switch($thefilter['data']['comparison']){
                                            case 'eq':
                                                    $query->where("l.{$thefilter['field']} LIKE '{$thefilter['data']['value']}%'");
                                            break;
                                            case 'lt':
                                                    $query->where("l.{$thefilter['field']} < '{$thefilter['data']['value']}'");
                                            break;
                                            case 'gt':
                                                    $query->where("l.{$thefilter['field']} > '{$thefilter['data']['value']}'");
                                            break;
                                    }
                            break;
                            case 'numeric':
                                    switch($thefilter['data']['comparison']){
                                            case 'eq':
                                                    $query->where("l.{$thefilter['field']} = '{$thefilter['data']['value']}'");
                                            break;
                                            case 'lt':
                                                    $query->where("l.{$thefilter['field']} < '{$thefilter['data']['value']}'");
                                            break;
                                            case 'gt':
                                                    $query->where("l.{$thefilter['field']} > '{$thefilter['data']['value']}'");
                                            break;
                                    }
                            break;
                            case 'list':
                                    $values = explode(',', $thefilter['data']['value']);
                                    foreach($values as $value){
                                            $query->where("l.{$thefilter['field']} = {$value}",'AND');
                                    }
                            break;
                            case 'hasmany':
                                    //$hasmany-> id_field, $hasmany->tabla
                                    if($thefilter['field'] == 'partescontenciosas'){
                                             $hasmany = new stdClass();
                                             $hasmany->id_field = 2156;
                                             $hasmany->tabla = 'jtvsl_partescontenciosas';

                                             if ($seachJoins && !in_array("e", $joins)){
                                                     array_push($joins, 'e');
                                                    $query->join('INNER', 'jt_expedientes e ON l.id_expediente = e.id');
                                             }
                                             if ($seachJoins && !in_array('p', $joins)){
                                                     array_push($joins, 'p');
                                                    $query->join('INNER', "{$hasmany->tabla} p ON e.id = p.id_record AND p.id_field = {$hasmany->id_field} ");
                                             }
                                             $query->where("p.{$thefilter['data']['field']} LIKE '%{$thefilter['data']['value']}%' \n",'AND');

                                    }
                                    else if($thefilter['field'] == 'id_expediente'){					 
                                             if ($seachJoins && !in_array("e", $joins)){
                                                     array_push($joins, 'e');
                                                    $query->join('INNER', 'jt_expedientes e ON l.id_expediente = e.id');
                                             }
                                             $query->where("e.{$thefilter['data']['field']} = '{$thefilter['data']['value']}' \n",'AND');
                                    }else{
                                            $this->setQuery("SELECT c.id AS id_field, l.tabla, l.view FROM jt3_campos c
                                                    INNER JOIN jtc_libros l ON l.clave = c.store
                                                    WHERE c.clave = '{$this->clave}' 
                                                    AND c.dataType = 'parent'
                                                    AND c.dataIndex = '{$thefilter['field']}';");
                                            $hasmany = $this->db->loadObject();
                                            if ($seachJoins && !in_array("c{$hasmany->id_field}", $joins)){
                                                    array_push($joins, "c{$hasmany->id_field}");
                                                    $query->join('INNER', "{$hasmany->view} c{$hasmany->id_field} ON l.id = c{$hasmany->id_field}.id_record 
                                                                    AND c{$hasmany->id_field}.id_field = {$hasmany->id_field}");
                                            }						
                                            $query->where("c{$hasmany->id_field}.{$thefilter['data']['field']} LIKE '%{$thefilter['data']['value']}%' \n",'AND');
                                    }
                            break;
                    }
            }
    }
        
    /**
    * rule: acceso restringido a visitantes
    */
    protected function checkLogin($do_redirect=false){
        if($this->user->guest){
            
            if($do_redirect){
                $this->setRedirect('index.php?option=com_users&view=login',JText::_('COM_TSJDF_LIBROS2_LOGIN_REQUIRED'));
                return;
            }
            
            $this->result['success'] = false;
            $this->result['message'] .= 'La sesión ha caducado. Vuelve a identificarte.<br/>';
            http_response_code(401);
            $this->finish();
        }
    }
    
    /**
    * rule: sólo jueces pueden consultar
    */
    protected function juecesOnly(){
        $this->checkLogin();
        if(!in_array($this->empleado->id_rol, [91,131])){
            $this->result['success'] = false;
            $this->result['message'] .= 'Acceso exclusivo para jueces y magistrados.<br/>';
            $this->finish();
        }
    }
    
    /**
     * Verifica credenciales de administrador
     * @param boolean $do_redirect Redirect to login page
     */
    protected function adminOnly($do_redirect=false){
        $this->checkLogin($do_redirect);
        if(!in_array(7, $this->user->getAuthorisedGroups())){
            if($do_redirect){
                $this->setRedirect('index.php','Necesitas permisos de administrador.');
                return;
            }else{
                $this->result['success'] = false;
                $this->result['message'] .= 'Necesitas permisos de administrador.<br/>';
                $this->finish();   
            }
        }
    }
	
    /**
     * responde json y cierra
     */
    protected function finish(){
        echo json_encode($this->result);
        exit();
    }
    
    protected function setQuery($query){
        $this->db->setQuery($query);
        //rule: caballeroantonio puede depurar
        if ($this->user->id == 1) {
            $this->result['query'][] = (string) $query;
        }
    }
    
    function borrame(){
        echo 'hola mundo';
        $this->exportQuery('hola mundo', 'SELECT * FROM jtc_organos WHERE id = 1;');
    }
}