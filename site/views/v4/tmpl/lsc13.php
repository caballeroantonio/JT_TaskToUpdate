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
class lsc13App extends Tsjdf_libros2HelpersBook2ExtJSApp{
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field2283'] = array(
'xtype'=> 'combotextfieldset',
'fieldname'=> 'field2283',
'valueField'=> 'id',
'allowBlank'=> false,
'other_id'=> 116,
'title'=> $fields['field2283']['fieldLabel'],
'store'=> $fields['field2283']['store'],
'displayField'=> $fields['field2283']['displayField'],
        );
        return $fields;
    }
}

$bookApp = new lsc13App($this->libro, $this->empleado);
if(JRequest::getVar('format')){
    print_r ($bookApp->getViewFormFields());
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