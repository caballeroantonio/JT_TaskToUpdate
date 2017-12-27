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
class ljf05App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getAppGridConfiguration(){
        $gridB2 = parent::getAppGridConfiguration();
        $gridB2['initialConditions']->field8 = 0;
        $gridB2['onSetActiveRecord'] = $this->t349h->insertAs_Is('function(record){
                    var field7 = Ext.getCmp("field7");
                    if(record.data.field8){
                            field7.setValue(null);
                            field7.setReadOnly(true);
                    }else
                            field7.setReadOnly(false);
            }');
        return $gridB2;
    }
    
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field8']['listeners'] = $this->t349h->insertAs_Is('{
                change: function(field, newValue, oldValue, options){
                        var field7 = Ext.getCmp("field7");
                        if(newValue){
                                field7.setValue(null);
                                field7.setReadOnly(true);
                        }else{
                                field7.setReadOnly(false);
                        }
                }
            }');
        $fields['field7']['id'] = 'field7';
        return $fields;
    }
}

$bookApp = new ljf05App($this->libro, $this->empleado);
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