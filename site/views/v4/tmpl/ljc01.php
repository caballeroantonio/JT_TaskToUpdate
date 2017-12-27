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
class ljc01App extends Tsjdf_libros2HelpersBook2ExtJSApp{


    /**
     * Regla de negocios, en cuantías determinadas el monto es obligatorio.
     */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field7']['itemId'] = 'field7';
        $fields['field14']['itemId'] = 'field14';
        $fields['field6']['listeners'] = $this->t349h->insertAs_Is('{
                change: function(field, newValue, oldValue, options){
                    var field7 = field.up().down(\'#field7\');
                    field7.allowBlank = !(field.value == 1);
                    field7.isValid();
                    var field14 = field.up().down(\'#field14\');
                    field14.allowBlank = field7.allowBlank;
                    field14.isValid();
                }
            }');
        return $fields;
    }
}

$bookApp = new ljc01App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r( $bookApp->getViewFormFields()['field7'] );
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