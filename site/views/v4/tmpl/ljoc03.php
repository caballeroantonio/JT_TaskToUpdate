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
class ljoc03App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getViewColumns() {
        $columns = parent::getViewColumns();
        $columns['e__txt_tipojuicio']['flex'] = 1;
        return $columns;
    }
    
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field20']['initialConditions']['sfield9'] = 'BANSEFI';
        return $fields;
    }
}

$bookApp = new ljoc03App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r($bookApp->getViewColumns()['e__txt_tipojuicio']);
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