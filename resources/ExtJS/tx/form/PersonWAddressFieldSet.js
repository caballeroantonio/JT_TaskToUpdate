Ext.define('Ext.tx.form.PersonWAddressFieldSet', {
    extend: 'Ext.container.Container',
    alias: 'widget.personwaddressfieldset',
	
    requires: [
		'Ext.tx.form.PersonFieldSet',
		'Ext.tx.form.field.CURP',
		'Ext.tx.form.field.RFC',
	],
	
	personFieldPrefix: '',
	addressFieldPrefix: '',
	regimeSelector: true,

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [
				{
						xtype: 'personfieldset',
						personFieldPrefix: me.personFieldPrefix,
						regimeSelector: this.regimeSelector,
						alwaysChange: false, //sólo para que no se vea el asterisco.
				},
				{
					xtype: 'fieldset',
					title: 'Dirección',
					items: [
						{
								xtype: 'curpfield',
								name: me.addressFieldPrefix + 'curp',
						},
						{
								xtype: 'rfcfield',
								name: me.addressFieldPrefix + 'rfc',
						},
	
						{
								xtype: 'textfield',
								name: me.addressFieldPrefix + 'calle',
								fieldLabel: 'Calle',
								maxLength: 255,
                                                                itemId: 'calle',
                                                                
						},
	
						{
								xtype: 'textfield',
								name: me.addressFieldPrefix + 'numero',
								fieldLabel: 'Número',
								maxLength: 45,
                                                                itemId: 'numero',
						},
	
						{
								xtype: 'textfield',
								name: me.addressFieldPrefix + 'colonia',
								fieldLabel: 'Colonia',
								maxLength: 255,
                                                                itemId: 'colonia',
						},
	
						{
								xtype: 'textfield',
								name: me.addressFieldPrefix + 'cp',
								fieldLabel: 'C.P.',
								regex: /^\d{5}$/,
								regexText: 'El Código Postal Mexicano consta de cinco dígitos.',
								maxLength: 5,
								minLength: 5,
								enforceMaxLength: true,
						},
	
						{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
	
								store: 'catalogo.entidadesf',
								displayField: 'entidadfn',
								valueField: 'id',
								name: me.addressFieldPrefix + 'id_entidadf',
								fieldLabel: 'Estado',
                                                                itemId: 'id_entidadf',
								autoSelect: true,
								listeners: {
									change: function(field, newValue, oldValue, options) {
										var cmbMunicipio = field.ownerCt.getComponent('cmbMunicipio');
										if(!newValue)
											cmbMunicipio.clearValue();

										var aStore = Ext.StoreMgr.get('catalogo.municipios');
										aStore.clearFilter();
										aStore.filter({exactMatch: true, property:'id_entidadf',value:newValue});
										aStore.load();
									},
									//scope: this,//ve directo a los fieldset y no a los component
								},
						},
             
						{
								xtype: 'combobox',
								emptyText: 'Select',
								//forceSelection: true,
								queryMode: 'local',

								store: 'catalogo.municipios',
								displayField: 'municipio',
								valueField: 'municipio',
								name: me.addressFieldPrefix + 'municipio',
								fieldLabel: 'Municipio',
								maxLength: 45,
								itemId: 'cmbMunicipio',
								autoSelect: false,//no obliga a una opción
						},
	
						/*//quería utilizar un puntero de municipio pero no pude.
						{
								xtype: 'combobox',
								emptyText: 'Select',
								forceSelection: true,
								queryMode: 'local',
								queryCaching: false,
	
								store: 'catalogo.municipios',
								displayField: 'municipio',
								valueField: 'id',
								name: me.addressFieldPrefix + 'id_municipio',
								fieldLabel: 'Municipio',
								itemId: 'cmbMunicipio',
								listeners: {
									change: function(field, newValue, oldValue, options) {
										console.log('cmbMunicipio newValue:' +  newValue);
										console.log('cmbMunicipio oldValue:' +  newValue);
										console.log(field);
									}
//									beforeshow: function( field, eOpts ){
//										console.log(field);
//									},
//									activate: function( field, eOpts ){
//										console.log(field);
//									},
//									beforequery: function(qe){
//										delete qe.combo.lastQuery;
//									}
								},
						},*/

					]
				},
			],
        });

        me.callParent(arguments);
    },
    setAllowBlank: function(allowBlank){
        this.down('#calle').allowBlank = allowBlank;
        this.down('#numero').allowBlank = allowBlank;
        this.down('#colonia').allowBlank = allowBlank;
        this.down('#id_entidadf').allowBlank = allowBlank;
        this.down('#cmbMunicipio').allowBlank = allowBlank;
        this.up('form').getForm().clearInvalid();        
    }

});