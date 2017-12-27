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
class ljccm12App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getAppGridConfiguration() {
        $gridB2 = parent::getAppGridConfiguration();
        $gridB2['onSetActiveRecord'] = $this->t349h->insertAs_Is('function(record){
                    this.validate(record.data.field7);
            },
            validate: function(newValue){
                    var field8 = Ext.getCmp("field8");
                    switch(newValue){
                            default:
                            case null:
                                    field8.setReadOnly(true);
                            break;
                            case 0:
                                    field8.setReadOnly(true);
                                    field8.setValue(null);
                            break;
                            case 1:
                                    field8.setReadOnly(false);
                            break;
                    }
            }');
        return $gridB2;
    }
 
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field7']['listeners'] = $this->t349h->insertAs_Is('{
                change: function( field, newValue, oldValue, eOpts ){
                        Ext.getCmp("book").validate(newValue);
                }
            }');
        $fields['field8']['id'] = 'field8';
        return $fields;
    }
}

$bookApp = new ljccm12App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    ($bookApp->getViewFormFields());
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