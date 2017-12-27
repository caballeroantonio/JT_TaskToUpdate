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
class ljccm05App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getAppGridConfiguration() {
        $gridB2 = parent::getAppGridConfiguration();
        $gridB2['onSetActiveRecord'] = $this->t349h->insertAs_Is('function(record){
                    this.validate(record.data.field9);
            },
            validate: function(value){
                    var field11 = Ext.getCmp("field11");
                            if(value){
                                    field11.setValue(null);
                                    field11.setReadOnly(true);
                            }else{
                                    field11.setReadOnly(false);
                            }
            }');
        return $gridB2;
    }
    
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field9']['listeners'] = $this->t349h->insertAs_Is('{
                change: function(field, newValue, oldValue, options){
                        Ext.getCmp("book").validate(newValue);
                },
            }');
        $fields['field11']['id'] = 'field11';
        return $fields;
    }
}

$bookApp = new ljccm05App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    ( $bookApp->getViewFormFields() );
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