<?php
/**
* @package TSJDF
* @author caballeroantonio
* @website Sistemas de Lectura y Facturación Inmediata
* @email caballeroantonio@hotmail.com
* @copyright GNU General Public License version 3, or later
* @license GNU General Public License version 3, or later
**/

$this->cmp_params = JComponentHelper::getParams('com_tsjdf_libros2');

$doc = JFactory::getDocument();
//Ext, ux & tx scripts and styles
$doc->addScript("resources_{$this->cmp_params->get('assetVersion')}/ExtJS/ext-all.js");
$doc->addScript("resources_{$this->cmp_params->get('assetVersion')}/app_ux_tx.min.js");

$doc->addStyleSheet( "resources_{$this->cmp_params->get('assetVersion')}/ExtJS/resources/css/ext-all-gray.css" );
$doc->addStyleSheet( "resources_{$this->cmp_params->get('assetVersion')}/tsjdf_libros/css/tsjdf_libros.css" );
$doc->addStyleSheet( "resources_{$this->cmp_params->get('assetVersion')}/tsjdf_libros/css/msg-box.css" );

//Ext ux Filters styles
$doc->addStyleSheet( "resources_{$this->cmp_params->get('assetVersion')}/ExtJS/ux/grid/css/GridFilters.css" );
$doc->addStyleSheet( "resources_{$this->cmp_params->get('assetVersion')}/ExtJS/ux/grid/css/RangeMenu.css" );

$params = JComponentHelper::getParams('com_tsjdf_libros');
$ExtJS_disableCaching = $params->get('ExtJS_disableCaching');

/**
*	Sobreescribe los campos torales
*/
    function overWritePrototypeExtjs($torales) {
		$prototypes = '';
		$prototypes .= "Ext.tx.form.field.ExpedientePicker.prototype.fieldLabel = '{$torales->expFriendlyName}';\n";
        return $prototypes;
    }
?>
<script language="javascript">
	Ext.Loader.setConfig({
		disableCaching: <?php echo $ExtJS_disableCaching?"true":"false" ?>,
		enabled: true,
		paths: {
			'Ext.ux': 'resources_<?=$this->cmp_params->get('assetVersion')?>/ExtJS/ux',
			'Ext.tx': 'resources_<?=$this->cmp_params->get('assetVersion')?>/ExtJS/tx',
		    'tsjdf': 'resources_<?=$this->cmp_params->get('assetVersion')?>/tsjdf_libros/app',
<?php /*?>
//			'Gnt': 'http://localhost/Sencha/Bryntum-2.x-45d-trial/gantt-2.1.5-trial/js2/Gnt',
//			'Sch': 'http://localhost/Sencha/Bryntum-2.x-45d-trial/gantt-2.1.5-trial/js2/Sch'
<?php */?>
		},
	});
	Ext.Loader.require(
		['Ext.tx.form.field.ExpedientePicker'],
		function(){
			 Ext.override(Ext.form.field.Date, {
				submitFormat: 'Y-m-d',
			 });
			<?php
				/*
				si accedo desde com1 es probable que el modelo no sea accesible
				@todo: ver que no haya referencias a com1
				*/
				
				$model = JModelLegacy::getInstance('Libros', 'Tsjdf_libros2Model');
				if($model){
					$torales = $model::getToralFieldLabels();
					echo overWritePrototypeExtjs($torales);
				}
			?>
		}			
	);
</script>