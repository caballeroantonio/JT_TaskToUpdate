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


require_once ( JPATH_COMPONENT . '/helpers/Book2ExtJSApp.php' );
class lsps02App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    public  $txt_field2366 = '';
            
    function getViewInitialConditions() {
        $obj = parent::getViewInitialConditions();
        $obj->txt_field2366 = $this->txt_field2366;
        return $obj;
    }
}

$bookApp = new lsps02App($this->libro, $this->empleado);

        $db = JFactory::getDBO();
        $db->setQuery("SELECT s.id AS 'id', CONCAT_WS(' - ',s.secretaria,  u__name) 'txt'
FROM jtc_secretarias s
LEFT JOIN jtva_empleados e ON s.id_organo = e.e__id_organo AND s.id = e.e__id_secretaria AND e.e__id_rol = 91 AND e.u__block = 0
WHERE s.secretaria LIKE 'Ponencia%' AND s.id = '{$this->empleado->id_secretaria}'
ORDER BY s.description 
LIMIT 1;");
        $magistradop = $db->loadObject();
if($this->empleado->id_secretaria AND $magistradop){
        $bookApp->txt_field2366 = $magistradop->txt;
}
        
//if(JRequest::getVar('format')){
//    ($bookApp->getAppConfiguration());
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