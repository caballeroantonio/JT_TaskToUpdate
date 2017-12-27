/**
* Combobox muestra un catálogo, cuando eligen la opción 'otro...' se debe habilitar un campo de texto.
*/
Ext.define('Ext.tx.form.Combo_Text_FieldSet', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.combotextfieldset',
    requires: [
		'Ext.tx.form.field.ComboBox',
	],

    title: 'Título',
	/**
	* genera los campos id_my_fieldname y txt_my_fieldname
	*/
	fieldname: 'my_fieldname',
	store: 'mystore',
	displayField: 'my_storefield',
	valueField: 'my_storeid',
	allowBlank: true,
	/**
	* id del store en el que se encuentra el valor 'otro'
	*/
	other_id: -1,
	
//	regimeSelector: true,
//	alwaysChange: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			defaults: {anchor: '100%'},
			layout: 'anchor',
            items: [
				{
					xtype: 'combobox',
					forceSelection: true,
					queryMode: 'local',
					
					store: this.store,
					displayField: this.displayField,
					valueField: this.valueField,
					allowBlank: this.allowBlank,
					name: 'id_' + this.fieldname,
					listeners: {
						change: function(field, newValue, oldValue, eOpts){
							var ownerCt = field.ownerCt;
							var txt_field = ownerCt.getComponent('txt_field').setVisible(ownerCt.other_id == newValue).focus(false, true);
							// asigna el valor del catálogo para evitar hacer un COALESCE en la db y aprovechar el campo
							if(txt_field.isHidden())
								txt_field.setValue(field.getRawValue());
						}
					}
				},
				{								
					xtype: 'textfield',
					name: 'txt_' + this.fieldname,
					fieldLabel: 'Otro',
					maxLength: 255,
					itemId: 'txt_field',
					hidden: true,
					emptyText: 'Especificar',
					allowBlank: this.allowBlank,
				},
            ]
        });

        me.callParent(arguments);
    }

});