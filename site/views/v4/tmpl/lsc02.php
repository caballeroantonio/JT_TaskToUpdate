<?php 
/**
* @package TSJDF
* @author caballeroantonio
* @website Sistemas de Lectura y Facturación Inmediata
* @email caballeroantonio@hotmail.com
* @copyright GNU General Public License version 3, or later
* @license GNU General Public License version 3, or later
**/

// no direct access
defined('_JEXEC') or die('Restricted access');

/*
#firma de entrada y salida asociada a los archivos uploaded referenciados a la hora local

DROP TABLE IF EXISTS `jt_vlsc02s`;
DROP VIEW IF EXISTS `jt_vlsc02s`;
CREATE OR REPLACE VIEW jt_vlsc02s AS

SELECT l.id,l.id_organo, l.anoj, l.ordering, l.id_expediente 
#,e.name 'e__name', e.txt_tipojuicio 'e__txt_tipojuicio', e.numero 'e__numero', e.ano 'e__ano' 
,l.field126,
 field130, calculatePath(f_2167.id,f_2167.filename) AS field130_file 
,
 field127, calculatePath(f_2169.id,f_2169.filename) AS field127_file 

,DATE_ADD(f_2167.created, INTERVAL -6 HOUR) 'field128', DATE_ADD(f_2169.created, INTERVAL -6 HOUR) 'field129'
FROM jt_lsc02s l
#LEFT JOIN jt_expedientes e ON e.id = l.id_expediente 

LEFT JOIN jt_uploadedfiles f_2167 ON l.field130 = f_2167.id 

LEFT JOIN jt_uploadedfiles f_2169 ON l.field127 = f_2169.id 
;

*/


require_once ( JPATH_COMPONENT . '/helpers/Book2ExtJSApp.php' );
class lsc02App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getModelFields_() {
        $fields = parent::getModelFields();
        unset($fields['e__name']);
        unset($fields['e__txt_tipojuicio']);
		
		//FECHA Y HORA DE ENTRADA
        $fields[] = array(
            'name'=> 'field128',
            'type'=> 'date',
            'dateFormat'=> 'Y-m-d H:i:s',
			'persist'=> false
        );
		//FECHA Y HORA DE SALIDA
        $fields[] = array(
            'name'=> 'field129',
            'type'=> 'date',
            'dateFormat'=> 'Y-m-d H:i:s',
			'persist'=> false
        );
		
        return $fields;
    }
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
		unset($fields['id_expediente']);		
//		unset($fields['field130h']);
//		unset($fields['field127h']);
        return $fields;
    }
    
    function getViewColumns() {
        $columns = parent::getViewColumns();
		unset($columns['e__name']);
		unset($columns['e__txt_tipojuicio']);
        
        $columns[] = array(
            'width'=> 150,
            'dataIndex'=> 'field128',
            'text'=> 'FECHA Y HORA DE ENTRADA',
            'tooltip'=> 'FECHA Y HORA DE ENTRADA',
            'xtype'=> 'datetimecolumn'
        );
        $columns[] = array(
            'width'=> 150,
            'dataIndex'=> 'field129',
            'text'=> 'FECHA Y HORA DE SALIDA',
            'tooltip'=> 'FECHA Y HORA DE SALIDA',
            'xtype'=> 'datetimecolumn'
        );
        return $columns;
    }
    
    
    function getViewFilters() {
        $filters = parent::getViewFilters();
        unset($filters['id_expediente']);
        unset($filters['partescontenciosas']);
		//add fecha entrada y salida
        return $filters;
    }
	
    function getViewRowExpanderBodyTpl() {
$template = <<<EOD
<tpl if="T397_comment">
			<p>
				<b>Observaciones del visitador: </b>{T397_comment:this.insertBreaks}
			</p>
			</tpl>
<p>
							<b>FIRMA FIRMA DE ENTRADA: </b><br/>
							<img src="/gpcb/{field130_file}" />
						</p><p>
							<b>FIRMA FIRMA DE SALIDA: </b><br/>
							<img src="/gpcb/{field127_file}" />
						</p>
EOD;
        return $template;
	}
}

$bookApp = new lsc02App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r( $bookApp->getViewRowExpanderBodyTpl());
//    return;
//}
?> 
<!--ExtJS model-->
<script language="javascript">
	Ext.define('tsjdf.model.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getModelConfiguration()) ?>);
</script>
<!--ExtJS store-->
<script language="javascript">
	Ext.define('tsjdf.store.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getStoreConfiguration()) ?>);
</script>
<!--app-->
<script language="javascript">
	Ext.application(<?= $bookApp->encode($bookApp->getAppConfiguration()) ?>);
</script>