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
class ljoc05App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    /*
     * Solicitaron que sólo cuando se elija la opción de tipo de sentencia interlocutora, se deberá mostrar el campo de Fecha de citación.
     */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $fields['field5']['itemId'] = 'field5';
        $fields['field5']['hidden'] = true;
        $fields['field8']['listeners'] = $this->t349h->insertAs_Is('{
                change: function(field, newValue, oldValue, options){
                    var field5 = field.up().down(\'#field5\');
                    var condicion = newValue==2;
                    field5.setVisible(condicion);
                    field5.allowBlank = !condicion;
                    if(!condicion)
                        field5.setValue(null);
                }
            }');
        return $fields;
    }
}

$bookApp = new ljoc05App($this->libro, $this->empleado);
if(JRequest::getVar('format')){
    print_r($bookApp->getViewFormFields());
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