<?php 
/**
 * @version     3.10
 * @package     com_tsjdf_libros2
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license    Licencia Pública General GNU versión 2 o posterior. Consulte LICENSE.txt
 */

/**
 * - Redefinir el print_button
 * - Usar todos los joins para exportar a la primera
 * 
 */

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once(JPATH_SITE.'/components/com_tsjdf_libros2/extjs.php');

$this->document->setTitle('Histórico de cargos');
$this->document->setDescription('Muestra los cargos que han tenido los usuarios.');
?> 
<style>
.x-column-header-text {
	white-space: normal !important;
}
</style> 
<div id="extjs-content"></div>
<!--ExtJS model-->
<script language="javascript">    
Ext.define('tsjdf.model.libro.h_accounts', {
	extend: 'Ext.data.Model',
	
	proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&&task=jt4grid.read&clave=h_accounts',
<?php /*?>			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=libro&clave=h_accounts',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=libro&clave=h_accounts',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=libro&clave=h_accounts'<?php */?>
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data'
		},
		writer: {
			type: 'json',
			allowSingle: false,
			encode: true,
			root: 'data',
			writeAllFields: false,
		},
	},

	fields: [
		{
			name: 'e__id',
			type: 'int',
                        persist: false,
		},
                
		{
			name: 'u__name',
			useNull: true,
 
			type: 'string',
			persist: false,	
		},	
 
		{
			name: 'u__username',
			useNull: true,
 
			type: 'string',
		 
		},	
		 
		{
			name: 'e__id_rol',
			useNull: true,
 
			type: 'int',
                        persist: false,
		 
		},	
 
		{
			name: 'e__id_organo',
			useNull: true,
 
			type: 'int',
                        persist: false,
		 
		},	
 
		{
			name: 'e__id_secretaria',
			useNull: true,
 
			type: 'int',
                        persist: false,
		 
		},	
 
		{
			name: 'u__block',
			useNull: true,
 
			type: 'int',
                        persist: false,
		 
		},	
 
		{
			name: 'begin',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s',
                        persist: false,
		 
		},	
 
		{
			name: 'end',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s',
                        persist: false,
		 
		},	
 
	]
});
</script>
<!--ExtJS store-->
<script language="javascript">
Ext.define('tsjdf.store.libro.h_accounts', {
	extend: 'Ext.data.Store',

	requires: [
		'tsjdf.model.libro.h_accounts'
	],
	
	remoteSort: true,
	storeId: 'libro.h_accounts',
	model: 'tsjdf.model.libro.h_accounts',
});
</script>
<!--app-->
<script language="javascript">
	Ext.application({			
		requires: [
			'Ext.tx.grid.Book2',
                        'Ext.tx.button.PrintBookButton',
		],
 
		stores: [
			'catalogo.SiNo','catalogo.roles','catalogo.organos','catalogo.secretarias','libro.h_accounts', 
		],				
		name: 'tsjdf',
		appFolder: 'resources_<?= $this->cmp_params->get('assetVersion') ?>/tsjdf_libros/app',
		launch: function(){
                    
Ext.tx.button.PrintBookButton.override({
	theForm: Ext.create('Ext.tx.form.WindowRequest',{
		method: "POST",
		baseParams: {
			option: 'com_tsjdf_libros2',
			task: 'jt4grid.export',
                        clave: 'h_accounts',
		},
	}),
});
                    
                    
			myMask = new Ext.LoadMask(document.body,{msg:"Cargando recursos..."});
			myMask.show();
			
			//cargo todas las secretarias
			var catalogo_secretarias = Ext.create('tsjdf.store.catalogo.secretarias');
			catalogo_secretarias.proxy.url = 'index.php?option=com_tsjdf_libros2&task=v4.read&store=catalogo&clave=all_secretarias';
			catalogo_secretarias.load({
				scope: this,
				callback: function(records, operation, success) {
					this.onStoresReady();
				},
		   });
			
			Ext.create('tsjdf.store.catalogo.roles').load({
				scope: this,
				callback: this.onStoresReady
			});Ext.create('tsjdf.store.catalogo.organos').load({
				scope: this,
				callback: this.onStoresReady
			});
			/*Ext.create('tsjdf.store.catalogo.secretarias').load({
				scope: this,
				callback: this.onStoresReady
			});  */
		},
		onStoresReady: function(){
			if( 1
				& !Ext.StoreManager.get('catalogo.SiNo').isLoading()  
				& !Ext.StoreManager.get('catalogo.roles').isLoading()  
				& !Ext.StoreManager.get('catalogo.organos').isLoading()  
				& !Ext.StoreManager.get('catalogo.secretarias').isLoading()  
 
			){
					var fooColumn = Ext.widget('gridcolumn',{hidden: true, renderTo: Ext.getBody()});
					Ext.create('Ext.tx.grid.Book2', {
						renderTo: 'extjs-content',
						height: 700,						
						//title: '<?= $this->document->getTitle() ?>',
						store: 'libro.h_accounts',
						isRoot: false,
						show_pagingtoolbar: true,
						id: 'book',
                                                
                                                //editor not required
                                                listeners: {
                                                        viewready: function(view) {
                                                                view.store.load();
                                                        },
                                                },
						features: [
							{
								ftype: 'search',
								targetCt: "toolbar[dock=top]",
								filters: [
			{
				dataIndex: 'e__id',
				filterText: 'id_user',
			},
			{
				dataIndex: 'u__name',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_USER_NAME') ?>',
			},
			{
				dataIndex: 'u__username',
				filterText: '<?= JText::_('JGLOBAL_USERNAME') ?>',
			},
			{
				dataIndex: 'e__id_rol',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_ROL') ?>',
				
				type: 'list',
				labelField: 'text',
				store: 'catalogo.roles',
				phpMode: true,
				single: true
			},
			{
				dataIndex: 'e__id_organo',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_ORGANO') ?>',
				
				type: 'list',
				labelField: 'organo',
				store: 'catalogo.organos',
				phpMode: true,
				single: true
			},
			/*{
				dataIndex: 'e__id_secretaria',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_SECRETARIA') ?>',
				
				type: 'list',
				labelField: 'secretaria',
				store: 'catalogo.secretarias',
				phpMode: true,
				single: true
			},*/
			{
				dataIndex: 'u__block',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BLOCK') ?>',
				
				type: 'list',
				labelField: 'text',
				store: 'catalogo.SiNo',
				phpMode: true,
				single: true
			},
			{
				dataIndex: 'begin',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BEGIN') ?>',
				
				//menuItems : ['before', 'after'],
				dateFormat: 'Y-m-d',
			},
			{
				dataIndex: 'end',
				filterText: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_END') ?>',
				
				//menuItems : ['before', 'after'],
				dateFormat: 'Y-m-d',
			}, 
								]
							},
						],
						
 
						onException: function(){
							Ext.MessageBox.show({
								title: '<?= $this->document->getTitle() ?> - detenido',
								msg: 'La aplicación ha sido detenida porque ocurrió un error inesperado. Por favor actualice la página e inténtelo de nuevo.',
								icon: Ext.MessageBox.ERROR,
								buttons: Ext.Msg.OK
							});
						},
						columns: [
							{
								xtype: 'statuscolumn',
							},
							{
								minWidth: 100,
								dataIndex: 'u__name',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_USER_NAME') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_USER_NAME') ?>',
								hidden: true,
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"username").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'u__username',
								text: '<?= JText::_('JGLOBAL_USERNAME') ?>',
								tooltip: '<?= JText::_('JGLOBAL_USERNAME') ?>',
							},
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Cargo").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_rol',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_ROL') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_ROL') ?>',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.roles').getById(value);
									if(value !== null)
										return value.get('text');
								},
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Órgano").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_organo',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_ORGANO') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_ORGANO') ?>',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.organos').getById(value);
									if(value !== null)
										return value.get('organo');
								},
                                                                flex: 1,
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Secretaría").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_secretaria',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_SECRETARIA') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_SECRETARIA') ?>',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.secretarias').getById(value);
									if(value !== null)
										return value.get('secretaria');
								},
								hidden: true,
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),'<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BLOCK') ?>').width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'u__block',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BLOCK') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BLOCK') ?>',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.SiNo').getById(value);
									if(value !== null)
										return value.get('text');
								},
							},
		 
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),'<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BEGIN') ?>').width + 15,
								//maxWidth: 200,
								dataIndex: 'begin',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BEGIN') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_BEGIN') ?>',
								xtype: 'datetimecolumn',
							}, 
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_END') ?>").width + 15,
								//maxWidth: 200,
								dataIndex: 'end',
								text: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_END') ?>',
								tooltip: '<?= JText::_('COM_TSJDF_LIBROS2_H_ACCOUNTS_END') ?>',
								xtype: 'datetimecolumn',
							}, 
         
						],
					}).down('toolbar').remove('addBtn');
				myMask.hide();
				myMask = new Ext.LoadMask(Ext.getCmp('book').getEl(),{msg:"Espere un momento..."});
				window.dispatchEvent(new Event('resize'));
			}
		}
	});
</script>
