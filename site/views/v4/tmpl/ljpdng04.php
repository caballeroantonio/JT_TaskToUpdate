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
class ljpdng04App extends Tsjdf_libros2HelpersBook2ExtJSApp{

//    function getAppGridConfiguration(){
//        $gridB2 = parent::getAppGridConfiguration();
//        $gridB2['initialConditions']->field2 = $this->t349h->insertAs_Is('new Date()');
//        return $gridB2;
//    }
    function getViewInitialConditions() {
        $obj = parent::getViewInitialConditions();
        $obj->field2 = $this->t349h->insertAs_Is('new Date()');
        return $obj;
    }
}

$bookApp = new ljpdng04App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r($bookApp->getAppConfiguration());
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