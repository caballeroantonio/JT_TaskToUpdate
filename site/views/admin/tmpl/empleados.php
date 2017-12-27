<?php 
/**
 * @package TSJDF
 * @author caballeroantonio
 * @website Sistemas de Lectura y Facturación Inmediata
 * @email caballeroantonio@hotmail.com
 * @copyright GNU General Public License version 3, or later
 * @license GNU General Public License version 3, or later
 * 
 * @todo cómo book2 no está marcado como root entonces no hace sync, entonces no aparecerá la mask
			destroy: 'index.php?option=com_tsjdf_libros2&task=v5.destroy&store=admin&clave=empleados',
**/

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once(JPATH_SITE.'/components/com_tsjdf_libros2/extjs.php');
?> 
<style>
.x-column-header-text {
	white-space: normal !important;
}
</style> 
<div id="extjs-content"></div>
<!--ExtJS model-->
<script language="javascript">
Ext.define('tsjdf.model.libro.empleados', {
	extend: 'Ext.data.Model',
	
	proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v5.read&store=admin&clave=empleados',
			create: 'index.php?option=com_tsjdf_libros2&task=v5.create&store=admin&clave=empleados',
			update: 'index.php?option=com_tsjdf_libros2&task=v5.update&store=admin&clave=empleados',
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
			writeAllFields: true,
		}
	},
	idProperty: 'e__id',
	fields: [
		{
			name: 'e__id',
			type: 'int'
		},
		 
		{
			name: 'e__created',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s',
		 	persist: false,
		},	
 
		{
			name: 'e__created_by',
			useNull: true,
 
			type: 'string',
		 	persist: false,
		},	
 
		{
			name: 'e__modified',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s',
		 	persist: false,
		},	
 
		{
			name: 'e__modified_by',
			useNull: true,
 
			type: 'string',
		 	persist: false,
		},	
 
		{
			name: 'u__lastvisitDate',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s',
		 	persist: false,
		},	
 
		{
			name: 'u__block',
			//useNull: true,
 
			type: 'int',
		 	defaultValue: 0,
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
			name: 'u__email',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__id_salutation',
			//useNull: true,
 
			type: 'int',
		 	defaultValue: 88,
		},	
 
		{
			name: 'e__nombre',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__paterno',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__materno',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__id_rol',
			useNull: true,
 
			type: 'int',
		 
		},	
 
		{
			name: 'e__id_organo',
			useNull: true,
 
			type: 'int',
		 
		},	
 
		{
			name: 'e__id_secretaria',
			useNull: true,
 
			type: 'int',
		 
		},	
 
		{
			name: 'e__curp',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__rfc',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__no_empleado',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'e__plaza',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		/*{
			name: 'e__ponencia',
			useNull: true,
 
			type: 'int',
		 
		},*/
 
		{
			name: 'u__requireReset',
			useNull: true,
 
			type: 'int',
		 	defaultValue: 1,
		},	
 
		{
			name: 'e__registros',
			useNull: true,
 
			type: 'number',
		 	persist: false,
		},	
 
		{
			name: 'e__pregistros',
			useNull: true,
 
			type: 'string',
		 	persist: false,
		},
 
	]
});
</script>
<!--ExtJS store-->
<script language="javascript">
Ext.define('tsjdf.store.libro.empleados', {
	extend: 'Ext.data.Store',

	requires: [
		'tsjdf.model.libro.empleados'
	],
	
	remoteSort: true,
	storeId: 'libro.empleados',
	model: 'tsjdf.model.libro.empleados',
	autoSync: true,
});
</script>
<!--app-->
<script language="javascript">
	Ext.application({			
		requires: [
			'Ext.tx.grid.Book2',
			'Ext.tx.grid.column.EmpleadoSettings',
			'Ext.tx.form.field.CURP',
			'Ext.tx.form.field.RFC',
		],
 
		stores: [
			'catalogo.tipojuicio',
			'catalogo.SiNo','catalogo.general24','catalogo.roles','catalogo.organos','catalogo.secretarias','libro.empleados', 
		],				
		name: 'tsjdf',
		appFolder: 'resources_<?= $this->cmp_params->get('assetVersion') ?>/tsjdf_libros/app',
		launch: function(){
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
			
			Ext.create('tsjdf.store.catalogo.tipojuicio').load({
				scope: this,
				callback: this.onStoresReady
			});Ext.create('tsjdf.store.catalogo.general24').load({
				scope: this,
				callback: this.onStoresReady
			});Ext.create('tsjdf.store.catalogo.roles').load({
				scope: this,
				callback: this.onStoresReady
			});Ext.create('tsjdf.store.catalogo.organos').load({
				scope: this,
				callback: this.onStoresReady
			});
			/*Ext.create('tsjdf.store.catalogo.secretarias').load({
				scope: this,
				callback: this.onStoresReady
			});*/
			Ext.create('tsjdf.store.libro.empleados').load({
				scope: this,
				callback: this.onStoresReady
			});  
		},
		onStoresReady: function(){
			if( 1
				& !Ext.StoreManager.get('catalogo.tipojuicio').isLoading()  
				& !Ext.StoreManager.get('catalogo.SiNo').isLoading()  
				& !Ext.StoreManager.get('catalogo.general24').isLoading()  
				& !Ext.StoreManager.get('catalogo.roles').isLoading()  
				& !Ext.StoreManager.get('catalogo.organos').isLoading()  
				& !Ext.StoreManager.get('catalogo.secretarias').isLoading()  
				& !Ext.StoreManager.get('libro.empleados').isLoading()  
 
			){
					var fooColumn = Ext.widget('gridcolumn',{hidden: true, renderTo: Ext.getBody()});
					Ext.create('Ext.tx.grid.Book2', {
						renderTo: 'extjs-content',
						height: 700,						
						title: 'Administración del personal',
						store: 'libro.empleados',
						isRoot: false,
						show_pagingtoolbar: true,
						id: 'book',
						features: [
							{
								ftype: 'search',
								targetCt: "toolbar[dock=top]",
								filters: [
			{
				dataIndex: 'e__id',
				filterText: 'id',
			},
			/*{
				dataIndex: 'e__created',
				filterText: 'Creado',
				
				//menuItems : ['before', 'after'],
				dateFormat: 'Y-m-d',
			},
			{
				dataIndex: 'e__created_by',
				filterText: 'Creado por',
			},
			{
				dataIndex: 'e__modified',
				filterText: 'Modificado',
				
				//menuItems : ['before', 'after'],
				dateFormat: 'Y-m-d',
			},
			{
				dataIndex: 'e__modified_by',
				filterText: 'Modificado por',
			},
			{
				dataIndex: 'u__lastvisitDate',
				filterText: 'Último login',
				
				//menuItems : ['before', 'after'],
				dateFormat: 'Y-m-d',
			},*/
			{
				dataIndex: 'u__block',
				filterText: 'Acceso restringido',
				
				type: 'list',
				labelField: 'text',
				store: 'catalogo.SiNo',
				phpMode: true,
				single: true
			},
			/*{
				dataIndex: 'u__name',
				filterText: 'Nombre',
			},*/
			{
				dataIndex: 'u__username',
				filterText: 'username',
			},
			{
				dataIndex: 'u__email',
				filterText: 'email',
				vtype: 'email'
			},
			/*{
				dataIndex: 'e__id_salutation',
				filterText: 'Título',
				
				type: 'list',
				labelField: 'text',
				store: 'catalogo.general24',
				phpMode: true,
				single: true
			},*/
			{
				dataIndex: 'e__nombre',
				filterText: 'Nombre',
			},
			{
				dataIndex: 'e__paterno',
				filterText: 'A. Paterno',
			},
			{
				dataIndex: 'e__materno',
				filterText: 'A. Materno',
			},
			{
				dataIndex: 'e__id_rol',
				filterText: 'Puesto',
				
				type: 'list',
				labelField: 'text',
				store: 'catalogo.roles',
				phpMode: true,
				single: true
			},
			{
				dataIndex: 'e__id_organo',
				filterText: 'Órgano',
				
				type: 'list',
				labelField: 'organo',
				store: 'catalogo.organos',
				phpMode: true,
				single: true
			},
			{
				dataIndex: 'e__id_secretaria',
				filterText: 'Secretaría/Ponencia',
				
				type: 'list',
				labelField: 'description',
				store: 'catalogo.secretarias',
				phpMode: true,
				single: true
			},
			{
				dataIndex: 'e__curp',
				filterText: 'CURP',
			},
			{
				dataIndex: 'e__rfc',
				filterText: 'RFC',
			},
			{
				dataIndex: 'e__no_empleado',
				filterText: 'No. de empleado',
			},
			{
				dataIndex: 'e__plaza',
				filterText: 'No. de plaza',
			},
			/*{
				dataIndex: 'e__ponencia',
				filterText: 'Ponencia',
			},*/
								]
							},
						],
						
 
						onException: function(){
							Ext.MessageBox.show({
								title: 'Administración del personal - detenido',
								msg: 'La aplicación ha sido detenida porque ocurrió un error inesperado. Por favor actualice la página e inténtelo de nuevo.',
								icon: Ext.MessageBox.ERROR,
								buttons: Ext.Msg.OK
							});
						},
						columns: [
							{
								xtype: 'statuscolumn',
							},
<?php 
//@todo: implementar las task
if($this->user->id == 1):
?>							
							{
								xtype: 'destroycolumn'
							},
							{
								xtype: 'actioncolumn',
								tooltip: 'Cerrar sesión',
								menuText: 'Cerrar sesión',
								header: '<img src="resources/images/fatcow-hosting-icons-2000/16x16/session_idle_time.png" />',
								icon   : 'resources/images/fatcow-hosting-icons-2000/16x16/delete.png',
								maxWidth: 25,
								hidden: true,
								menuDisabled: true,
								resizable: false,
								sortable : false,
								handler: function(grid, rowIndex, colIndex) {
									var store = grid.store, record = store.getAt(rowIndex);
									if(!confirm("Estas seguro de que quieres cerrar la sesión de " + record.data.u__username + " ?"))
										return;
								}
							},
							{
								xtype: 'actioncolumn',
								tooltip: 'Cambiar contraseña',
								menuText: 'Cambiar contraseña',
								header: '<img src="resources/images/open_icon_library-standard/icons/png/16x16/apps/system-password.png" />',
								icon   : 'resources/images/open_icon_library-standard/icons/png/16x16/apps/system-password-2.png',
								maxWidth: 25,
								hidden: true,
								menuDisabled: true,
								resizable: false,
								sortable : false,
								handler: function(grid, rowIndex, colIndex) {
									var store = grid.store, record = store.getAt(rowIndex);
									if(!confirm("Estas seguro de que quieres cambiar la contraseña de " + record.data.u__username + " ?"))
										return;
								}
							},
<?php endif;?>
							
							{
								xtype: 'gridcolumn',
								dataIndex: 'e__id',
								text: 'id',
								tooltip: 'El número siguiente al último registro realizado.',
								width: 50,
								hidden: true,
							},
							{
								width: 130,
								dataIndex: 'e__created',
								text: 'Creado',
								tooltip: 'Creado',
								xtype: 'datetimecolumn',
								hidden: true,
							}, 
         
							{
								width: 200,
								dataIndex: 'e__created_by',
								text: 'Creado por',
								tooltip: 'Creado por',
								hidden: true,
							},
         
							{
								width: 130,
								dataIndex: 'e__modified',
								text: 'Modificado',
								tooltip: 'Modificado',
								xtype: 'datetimecolumn',
								hidden: true,
							}, 
         
							{
								width: 200,
								dataIndex: 'e__modified_by',
								text: 'Modificado por',
								tooltip: 'Modificado por',
								hidden: true,
							},
         
							{
								width: 130,
								dataIndex: 'u__lastvisitDate',
								text: 'Último login',
								tooltip: 'Último login',
								xtype: 'datetimecolumn',
								hidden: true,
							}, 
         
							{
								xtype: 'booleancolumn',
								tooltip: 'Se suspenden los privilegios del usuario en todo el sistema',
//								menuText: 'Acceso restringido',
								header: '<img src="resources/images/open_icon_library-standard/icons/png/16x16/actions/lock-edit.png" />',
								maxWidth: 25,
								hideable : false,
								menuDisabled: true,
								resizable: false,
								sortable : false,
								dataIndex: 'u__block',
							},
							{xtype: 'esettingscolumn'},
		 
							{
								minWidth: 100,
								dataIndex: 'u__name',
								text: 'Nombre',
								tooltip: 'Nombre',
								flex: 1,
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"username").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'u__username',
								text: 'username',
								tooltip: 'username',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"email").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'u__email',
								text: 'email',
								tooltip: 'email',
							},
         
							/*{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Título").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_salutation',
								text: 'Título',
								tooltip: 'Título',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.general24').getById(value);
									if(value !== null)
										return value.get('text');
								},
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Nombre").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__nombre',
								text: 'Nombre',
								tooltip: 'Nombre',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"A. Paterno").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__paterno',
								text: 'A. Paterno',
								tooltip: 'A. Paterno',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"A. Materno").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__materno',
								text: 'A. Materno',
								tooltip: 'A. Materno',
							},*/
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Puesto").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_rol',
								text: 'Puesto',
								tooltip: 'Puesto',
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
								text: 'Órgano',
								tooltip: 'Órgano',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.organos').getById(value);
									if(value !== null)
										return value.get('organo');
								},
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Secretaría").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__id_secretaria',
								text: 'Secretaría/Ponencia',
								renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
									value = Ext.StoreMgr.get('catalogo.secretarias').getById(value);
									if(value !== null)
										return value.get('secretaria');
								},
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"CURP").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__curp',
								text: 'CURP',
								tooltip: 'CURP',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"RFC").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__rfc',
								text: 'RFC',
								tooltip: 'RFC',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"No. de empleado").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__no_empleado',
								text: 'No. de empleado',
								tooltip: 'No. de empleado',
							},
         
							{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"No. de plaza").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__plaza',
								text: 'No. de plaza',
								tooltip: 'ej. 0324-4',
							},
         
							/*{
								width: Ext.util.TextMetrics.measure(fooColumn.getEl(),"Ponencia").width + 15,
								minWidth: 100,//maxWidth: 200,
								dataIndex: 'e__ponencia',
								text: 'Ponencia',
								tooltip: 'en sala',
							},*/
         
							{
								//width: 130,
								dataIndex: 'e__registros',
								text: 'Registros',
								tooltip: 'Total de registros',
								xtype: 'numbercolumn',
								format:'0',
							},
         
							{
								//width: 130,
								dataIndex: 'e__pregistros',
								text: '% de uso',
								tooltip: '% de uso',
							}, 
		 
						],
 
						formItems: [ 
							/*{
								xtype: 'datetimefield',
								name: 'e__created',
								fieldLabel: 'Creado',
							},
         
							{
								xtype: 'textfield',
								name: 'e__created_by',
								fieldLabel: 'Creado por',
								maxLength: 45,
							},
         
							{
								xtype: 'datetimefield',
								name: 'e__modified',
								fieldLabel: 'Modificado',
							},
         
							{
								xtype: 'textfield',
								name: 'e__modified_by',
								fieldLabel: 'Modificado por',
								maxLength: 45,
							},
         
							{
								xtype: 'datetimefield',
								name: 'u__lastvisitDate',
								fieldLabel: 'Último login',
							},*/
         
							{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								
								store: 'catalogo.SiNo',
								valueField: 'id',
								name: 'u__block',
								fieldLabel: 'Acceso restringido',
								allowBlank: false,
							},
		 
							/*{
								xtype: 'textfield',
								name: 'u__name',
								fieldLabel: 'Nombre',
								maxLength: 45,
							},*/
         
							{
								xtype: 'textfield',
								name: 'u__username',
								fieldLabel: 'username',
								maxLength: 150,
//								allowBlank: false,
							},
         
							{
								xtype: 'textfield',
								name: 'u__email',
								fieldLabel: 'email',
								maxLength: 100,
								vtype: 'email',
							},
         
							{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								
								store: 'catalogo.general24',
								displayField: 'text',
								valueField: 'id',
								name: 'e__id_salutation',
								fieldLabel: 'Título',
								allowBlank: false,
							},
         
							{
								xtype: 'textfield',
								name: 'e__nombre',
								fieldLabel: 'Nombre',
								maxLength: 255,
								allowBlank: false,
							},
         
							{
								xtype: 'textfield',
								name: 'e__paterno',
								fieldLabel: 'A. Paterno',
								maxLength: 45,
								allowBlank: false,
							},
         
							{
								xtype: 'textfield',
								name: 'e__materno',
								fieldLabel: 'A. Materno',
								maxLength: 45,
								//allowBlank: false,
							},
                                                                
							{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								
								store: 'catalogo.organos',
								displayField: 'organo',
								valueField: 'id',
								name: 'e__id_organo',
								fieldLabel: 'Órgano',
								allowBlank: false,
								id: 'cmbOrgano',
								listeners: {
									change: function(field, newValue, oldValue, options) {
                                                                            var aStore = Ext.StoreMgr.get('catalogo.secretarias');
                                                                            aStore.clearFilter();
                                                                            aStore.filter({exactMatch: true, property:'id_organo',value:newValue});
                                                                            
                                                                            var empleado = Ext.getCmp('book').activeRecord.data;
                                                                            if(empleado.e__id_organo == newValue)
                                                                                return;
                                                                            //var oStore = Ext.StoreMgr.get('catalogo.organos');
                                                                            //Ext.getCmp('txtPonencia').allowBlank = !(oStore.getById(newValue).data.id_tipoorgano == 2);
                                                                            Ext.getCmp('cmbRol').clearValue();
                                                                            Ext.getCmp('cmbSecretaria').clearValue();
									},
									//scope: this,
								},
							},
         
							{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								
								store: 'catalogo.roles',
								displayField: 'text',
								valueField: 'id',
								name: 'e__id_rol',
								fieldLabel: 'Puesto',
								allowBlank: false,
								id: 'cmbRol',
								listeners: {
									change: function(field, newValue, oldValue, options) {
                                                                            var cmbSecretaria = Ext.getCmp('cmbSecretaria');
                                                                            cmbSecretaria.clearInvalid();
                                                                            cmbSecretaria.clearValue();
                                                                            
                                                                            var cmbOrgano = Ext.getCmp('cmbOrgano');
                                                                            if(!cmbOrgano.value)
                                                                                return;
                                                                            
                                                                            var organo = Ext.StoreMgr.get('catalogo.organos').getById(cmbOrgano.value).data;
                                                                            switch(organo.id_tipoorgano){
                                                                                case 1:
                                                                                    /*
                                                                                     * 92: Secretario de acuerdos
                                                                                     * 94: Pasante/Auxiliar de secretario de acuerdos
                                                                                     * 100: Secretario conciliador - no todas los organos tienen secretarias conciliadoras definidas
                                                                                     */
                                                                                    cmbSecretaria.allowBlank = !(newValue == 92 || newValue == 94);
                                                                                break;
                                                                                case 2:
                                                                                    cmbSecretaria.allowBlank = (newValue == 92 || newValue == 94);
                                                                                break;
                                                                            }
									},
									//scope: this,
								},
							},
         
							{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								
								store: 'catalogo.secretarias',
								displayField: 'description',
								valueField: 'id',
								name: 'e__id_secretaria',
								fieldLabel: 'Secretaría/Ponencia',
								id: 'cmbSecretaria'
							},
         
							{
								xtype: 'curpfield',
								name: 'e__curp',
							},
         
							{
								xtype: 'rfcfield',
								name: 'e__rfc',
							},
         
							{
								xtype: 'textfield',
								name: 'e__no_empleado',
								fieldLabel: 'No. de empleado',
								maxLength: 45,
							},
         
							{
								xtype: 'textfield',
								name: 'e__plaza',
								fieldLabel: 'No. de plaza',
								maxLength: 45,
							},
         
							/*{
								xtype: 'numberfield',
								name: 'e__ponencia',
								fieldLabel: 'Ponencia',
								
								allowDecimals: false,
								minValue: 0,
								id: 'txtPonencia'
							},*/
		 
						],
						/*subrecords: [
 
						]*/
					});
				myMask.hide();
				myMask = new Ext.LoadMask(Ext.getCmp('book').getEl(),{msg:"Espere un momento..."});
				window.dispatchEvent(new Event('resize'));
			}
		},
	});
</script>
