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
class ljf14App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field11']['listeners'] = $this->t349h->insertAs_Is('{
                change: function(field, newValue, oldValue, options){
                    var field12 = Ext.getCmp("field12");
                    field12.setMinValue(newValue);
                        
                },
            }');
        $fields['field12']['id'] = 'field12';
        $fields['field12']['emptyText'] = 'Mayor a fecha en que se gira oficio';
        
        
        return $fields;
    }
}

$bookApp = new ljf14App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r ($bookApp->getViewFormFields()['field12']);
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