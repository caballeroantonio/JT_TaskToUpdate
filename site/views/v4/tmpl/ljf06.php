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
class ljf06App extends Tsjdf_libros2HelpersBook2ExtJSApp{

    function getAppConfiguration() {
        $app = parent::getAppConfiguration();
        //solicitaron que el catálogo organos solo muestre las salas por materia, se modificó el proxy
        $key = $app['onStoresReady'];
        $key_value = $this->t349h->getReplacement($key);
        $search = "var fooColumn = Ext.widget('gridcolumn',{hidden: true, renderTo: Ext.getBody()});";
        $subject = $search."\n".'var organos = Ext.StoreMgr.get("catalogo.organos");
            organos.filter([
                    {property: "id_tipoorgano", value: /2$/},
            ]);
            organos.sort([
                    {
                            property : "id_materia",
                    },
                    {
                            property : "numero",
                    }
            ]);';
        $value = str_replace($search, $subject, $key_value );

        $this->t349h->setReplacement($app['onStoresReady'], $value);

        return $app;
    }
}

$bookApp = new ljf06App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r($bookApp->getAppConfiguration());
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