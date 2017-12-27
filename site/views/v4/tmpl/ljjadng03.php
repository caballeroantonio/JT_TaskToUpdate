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
class ljjadng03App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getViewColumns() {
        $columns = parent::getViewColumns();

        array_splice($columns, 
            array_search('e__txt_tipojuicio', array_keys($columns),1),//offset
            1,array(
                'e__txt_tipojuicio' => $columns['e__txt_tipojuicio'],
                'e__numero' => array(
                    'xtype' => 'gridcolumn',
                    'dataIndex' =>  'e__numero',
                    'text' => 'SECRETARÍA',
                    'renderer' => $this->t349h->insertAs_Is('function(value){
                        return value%2?"A":"B";
                    }'),
                )
            )
        );
                
        return $columns;
    }
    
    function getModelConfiguration() {
        $model = parent::getModelConfiguration();

        $model['fields'][] = array(
            'name' => 'e__numero',
            'type' => 'int',
            'persist' => false,
        );
        
        return $model;
    }
    

}

$bookApp = new ljjadng03App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r($bookApp->getViewColumns());
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