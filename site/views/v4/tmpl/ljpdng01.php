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
class ljpdng01App extends Tsjdf_libros2HelpersBook2ExtJSApp{    
    function getViewRowExpanderBodyTpl() {
        $rowexpander = str_replace('<tpl for="field9">
  <tr>
    <td>{#}</td>','<tpl for="field9">
  <tr>
    <td>{[String.fromCharCode(96 + xindex)]}</td>',parent::getViewRowExpanderBodyTpl());
        
        $rowexpander = str_replace('<tpl for="Expediente.demandados">
  <tr>
    <td>{#}</td>','<tpl for="Expediente.demandados">
  <tr>
    <td>{[String.fromCharCode(96 + xindex)]}</td>',$rowexpander);
        return $rowexpander;
    }

    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field9']['columns']['sfield16']['flex'] = true;
        return $fields;
    }

}

$bookApp = new ljpdng01App($this->libro, $this->empleado);
if(JRequest::getVar('format')){
    print_r($bookApp->getViewRowExpanderBodyTpl());
    return;
}
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