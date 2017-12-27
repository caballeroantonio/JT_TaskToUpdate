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
class ljjadg05pp extends Tsjdf_libros2HelpersBook2ExtJSApp{
    
    /*
     * Tiene agrupadas las columnas y campos año, mes, dia en combo duración.
     * [field9/ADOLESCENTES]['columns'][sfield11/años, sfield12/meses, sfield13/dias]
     */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        
        $columns =& $fields['field9']['columns'];
        $duracion_column = array(
            'text' => 'DURACIÓN',
            'columns' => [
                $columns['sfield11'],
                $columns['sfield12'],
                $columns['sfield13'],
            ]
        );

        $columns['sfield11'] = $duracion_column;
//        unset($columns['sfield11']);
        unset($columns['sfield12']);
        unset($columns['sfield13']);
        
        $formItems =& $fields['field9']['formItems'];
        $duracion_field = array(
            'xtype' => 'fieldset',
            'title' => 'DURACIÓN',
            'items' => [
                $formItems['sfield11'],
                $formItems['sfield12'],
                $formItems['sfield13'],
            ],
        );        
        
        $formItems['sfield11'] = $duracion_field;
//        unset($formItems['sfield11']);
        unset($formItems['sfield12']);
        unset($formItems['sfield13']);
        
        return $fields;
    }
}

$bookApp = new ljjadg05pp($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    ( $bookApp->getViewColumns() );
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