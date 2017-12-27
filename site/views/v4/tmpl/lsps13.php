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

DROP TABLE IF EXISTS `jt_vlsps13s`;
DROP VIEW IF EXISTS `jt_vlsps13s`;
CREATE OR REPLACE VIEW jt_vlsps13s AS

SELECT l.id,l.id_organo, l.anoj, l.ordering, l.id_expediente 
,e.name 'e__name', e.txt_tipojuicio 'e__txt_tipojuicio', e.numero 'e__numero', e.ano 'e__ano' 
,
 CONCAT_WS(' ',l.field2444_paterno, l.field2444_materno, l.field2444_nombre) AS field2444,
 l.field2444_paterno, l.field2444_materno, l.field2444_nombre, l.field2444_isMoral 
,
 field2445, calculatePath(f_2445.id,f_2445.filename) AS field2445_file , DATE_ADD(f_2445.created, INTERVAL -6 HOUR) AS  'f_2445_created'

FROM jt_lsps13s l
LEFT JOIN jt_expedientes e ON e.id = l.id_expediente 

LEFT JOIN jt_uploadedfiles f_2445 ON l.field2445 = f_2445.id 
;

*/


require_once ( JPATH_COMPONENT . '/helpers/Book2ExtJSApp.php' );
class lsc02App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getModelFields() {
        $fields = parent::getModelFields();		
		//FECHA DE LA FIRMA
        $fields[] = array(
            'name'=> 'f_2445_created',
            'type'=> 'date',
            'dateFormat'=> 'Y-m-d H:i:s',
			'persist'=> false
        );
		
        return $fields;
    }
    
    function getViewColumns() {
        $columns = parent::getViewColumns();
        
        $columns[] = array(
            'width'=> 150,
            'dataIndex'=> 'f_2445_created',
            'text'=> 'FECHA DE FIRMA',
            'xtype'=> 'datetimecolumn'
        );
        return $columns;
    }
}

$bookApp = new lsc02App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r( $bookApp->getViewColumns());
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