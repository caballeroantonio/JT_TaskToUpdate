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

require_once(JPATH_SITE.'/components/com_tsjdf_libros2/extjs.php');
/*
no puedo usar directamente la clave del libro porque externos no la conocen, y si la toman de la url id_tipoorgano y id_materia pueden no coincir debido a que 
he reutilizado tablas entre materias cuando la estructura es la misma como en el caso de el libro clave jc11 que utiliza la tabla jt_ljf11s
*/
?>
<h1>Instrucciones: Bla bla bla....</h1>
<p>
para ordenar por oficios (donde oficio es field4):<br/>
ORDER BY CONVERT(field4, UNSIGNED ), ordering;
</p>
<div id="extjs-content"></div>
<script language="javascript">
Ext.define('ResetPanel', {
    extend: 'Ext.panel.Panel',

    bodyPadding: 10,
    title: 'Query para reenumerar un libro',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			defaults: {
//				border: false,
			},
            items: [
                {
					xtype: 'form',
					defaults: {
					    anchor: '100%',
					},
					itemId: 'frmMateria',
					items: [
					    {
							xtype: 'combobox',
							itemId: 'cmbTipoOrgano',
							fieldLabel: 'Tipo de órgano',
							allowBlank: false,
							displayField: 'tipo',
							forceSelection: true,
							queryMode: 'local',
							store: 'catalogo.tipoorgano',
							valueField: 'id'
					    },
					    {
							xtype: 'combobox',
							itemId: 'cmbMateria',
							fieldLabel: 'Materia',
							allowBlank: false,
							displayField: 'materia',
							forceSelection: true,
							queryMode: 'local',
							store: 'catalogo.materia',
							valueField: 'id'
					    },
					    {
							xtype: 'toolbar',
							baseCls: 'Xx-toolbar',
							items: [
							    {
							        xtype: 'tbfill'
							    },
							    {
							        xtype: 'button',
							        text: 'Filtrar',
									formBind: true,
							        handler: function(button, e) {
										var form = this.down('#frmMateria');
										if(form.isValid()){
											var id_tipoorgano = this.down('#cmbTipoOrgano').getValue();
											var id_materia =  this.down('#cmbMateria').getValue();											
											var aStore = this.storeLibros;
											aStore.clearFilter();
											aStore.filter([
												{exactMatch: true, property:'id_tipoorgano',value: id_tipoorgano},
												{exactMatch: true, property:'id_materia',value: id_materia},
												{exactMatch: true, property:'published',value: true},
											]);
											
											var aStore = this.storeOrganos;
											aStore.clearFilter();
											aStore.filter([
													{exactMatch: true, property:'id_tipoorgano',value: id_tipoorgano},
													{exactMatch: true, property:'id_materia', value: id_materia},
												]);
											form.getForm().reset();
											this.down('#frmLibro').getForm().reset();
										}
							        },
									scope: this,
							    }
							]
					    }
					]
                },
                {
					xtype: 'form',
					itemId: 'frmLibro',
					defaults: {
					    anchor: '100%',
					},
					bodyPadding: 10,
					items: [
						{
						xtype: 'fieldset',
						title: 'Origen de los datos (tomo del libro)',
						defaults: {
							anchor: '100%',
						},
						items: [
					    	{
							xtype: 'combobox',
							itemId: 'cmbLibro',
							fieldLabel: 'Nombre del libro',
							name: 'id_libro',
							allowBlank: false,
							displayField: 'nombre',
							forceSelection: true,
							queryMode: 'local',
							store: 'catalogo.libros',
							valueField: 'id',
							listeners: {
								/*change: function(field, newValue, oldValue, options) {
									//newValue da problemas porque toma valores de string cuando lo usan para filtrar con teclado
								},*/
								select: function( combo, records, eOpts ) {
									cmbSecretaria = this.down('#cmbSecretaria');
									cmbSecretaria.clearValue();
	
									var data = records[0].data;
									cmbSecretaria.disable();
									created_by = this.down('#created_by');
									created_by.disable();
									switch(data.distribution){
										case 2:
											cmbSecretaria.enable();
										break;
										case 3:
											created_by.enable();
										break;
									}
								},
								scope: this
							},
					    },
					    {
							xtype: 'combobox',
							itemId: 'cmbOrgano',
							fieldLabel: 'Órgano',
							name: 'id_organo',
							allowBlank: false,
							displayField: 'organo',
							forceSelection: true,

							queryMode: 'local',
							store: 'catalogo.organos',
							valueField: 'id',
							listeners: {
								/*change: function(field, newValue, oldValue, options) {
									//newValue da problemas porque toma valores de string cuando lo usan para filtrar con teclado
								},*/
								select: function( combo, records, eOpts ) {
									this.down('#cmbSecretaria').clearValue();
									var aStore = this.storeSecretaria
									aStore.clearFilter();
									aStore.filter({exactMatch: true, property:'id_organo',value:records[0].data.id});
								},
								scope: this
							},
					    },
					    {
							xtype: 'combobox',
							disabled: true,
							itemId: 'cmbSecretaria',
							fieldLabel: 'Secretaría',
							name: 'id_secretaria',
							allowBlank: false,
							displayField: 'description',
							forceSelection: true,
							queryMode: 'local',
							store: 'catalogo.secretarias',
							valueField: 'id'
					    },
					    {
							xtype: 'numberfield',
							fieldLabel: 'id del usuario (distribution=3)',
							name: 'created_by',
							allowBlank: false,
							minValue: 1,
							disabled: true,
							itemId: 'created_by',
					    },
					    {
							xtype: 'numberfield',
							fieldLabel: 'WHERE ordering >',
							name: 'consecutivo_gt',
							allowBlank: false,
							minValue: 0
					    },
					    {
							xtype: 'numberfield',
							anchor: '100%',
							fieldLabel: 'Año judicial',
							name: 'anoj',
							allowBlank: false,
							minValue: 2013,
							value: 2016
					    },
						]},
					    {
							xtype: 'numberfield',
							fieldLabel: 'Consecutivo inicial',
							name: 'consecutivo_i',
							allowBlank: false,
							minValue: 0,
					    },
					],
					dockedItems: [
					    {
							xtype: 'toolbar',
							baseCls: 'Xx-toolbar',
							dock: 'bottom',
							items: [
							    {
							        xtype: 'button',
							        text: 'Armar query',
									formBind: true,
									handler: function(button, e){		
										var form = this.down('#frmLibro');
										if(form.isValid()){
											var obj = form.getForm().getFieldValues();
											obj.tabla = this.storeLibros.getById(obj.id_libro).data.tabla;
											this.down('#cmpQuery').update(obj);
//											form.getForm().reset();
										}									
									},
									scope: this,
							    },
							    {
							        xtype: 'tbfill'
							    },
							    {
							        xtype: 'button',
							        text: 'Ejecutar query',
									formBind: true,
									handler: function(button, e){
										var form = this.down('#frmLibro');
										if(form.isValid()){
											form.submit({
												url: 'index.php?option=com_tsjdf_libros&view=admin&tmpl=component&task=reenumerar',
												waitMsg: 'Reenumerando ...',
												success: this.onComplete,
												failure: this.onComplete,
												scope: this
											});
										}									
									},
									scope: this,
							    }
							]
					    }
					]
                },
                {
					xtype: 'component',
					itemId: 'cmpQuery',
					tpl: [
<?php 
$XTemplate = '
SET @ordering:= {consecutivo_i - 1};
UPDATE {tabla}
SET ordering = @ordering :=  @ordering + 1
WHERE 1
AND id_organo = {id_organo}
<tpl if="id_secretaria">
	AND id_secretaria = {id_secretaria}
</tpl>
<tpl if="created_by">
	AND created_by = {created_by}
</tpl>
AND ordering > {consecutivo_gt}
AND anoj = {anoj}
ORDER BY ordering;
';

?>
						'<?= str_replace("\r\n","<br/>",$XTemplate) ?>'
					]
                }
            ]
        });

        me.callParent(arguments);
    },
	onComplete: function(basicform, action) {
//		this.down('#frmLibro').getForm().reset();
		if(action.result){
			Ext.MessageBox.show({
				title: this.title,
				msg: action.result.message,
				icon: Ext.MessageBox.INFO,
				buttons: Ext.Msg.OK
			});
		}else{
			Ext.MessageBox.show({
				title: this.title,
				msg: 'Error inesperado.',
				icon: Ext.MessageBox.ERROR,
				buttons: Ext.Msg.OK
			});
		}
	}	

});

	Ext.application({
		stores: [
			'catalogo.tipoorgano',
			'catalogo.materia',
			'catalogo.secretarias',
			'catalogo.organos',
			'catalogo.libros',
		],				
		name: 'tsjdf',
		appFolder: 'resources_<?= $this->cmp_params->get('assetVersion') ?>/tsjdf_libros/app',
		launch: function(){			
			myMask = new Ext.LoadMask(document.body,{msg:"Cargando recursos..."});
			myMask.show();
			var catalogo_secretarias = Ext.create('tsjdf.store.catalogo.secretarias');
			catalogo_secretarias.proxy.url = 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=all_secretarias';

			Ext.create('ResetPanel', {
				width: 600,
				renderTo: 'extjs-content',
				storeTipoOrgano: Ext.create('tsjdf.store.catalogo.tipoorgano').load(),
				storeMateria: Ext.create('tsjdf.store.catalogo.materia').load(),
				storeLibros: Ext.create('tsjdf.store.catalogo.libros').load({
					callback: function(){
						this.filter({exactMatch: true, property:'id',value:0});
					}
				}),
				storeOrganos: Ext.create('tsjdf.store.catalogo.organos').load({
					callback: function(){
						this.filter({exactMatch: true, property:'id',value: 0});
					}
				}),
				storeSecretaria: catalogo_secretarias.load({
					callback: function(){
						this.filter({exactMatch: true, property:'id',value: 0});
					},
				}),
			});

			myMask.hide();
			myMask.msg = 'Espere un momento...';
			window.dispatchEvent(new Event('resize'));
		},
	});
</script>
