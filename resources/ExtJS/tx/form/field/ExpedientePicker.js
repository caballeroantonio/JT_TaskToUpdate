
Ext.define('Ext.tx.form.ExpItems', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.exp_items',

    itemId: 'expItems',
    isSala: false,
    isSalaPenal: false,
    defaults: {
        anchor: '100%',
    },
    layout: 'anchor',
    anoChangeFn: Ext.emptyFn,
    scope: null,
    
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                    {
                            xtype: 'numberfield',
                            name: 'numero',
                            fieldLabel: 'Número',

                            allowDecimals: false,
                            minValue: 1,
                            maxValue: 100000,
                            allowBlank: false,
                            hideTrigger: true
                    },
                    {
                            xtype: 'numberfield',
                            name: 'ano',
                            fieldLabel: 'Año',

                            allowDecimals: false,
                            minValue: 0,
                            allowBlank: false,
                            hideTrigger: true,
                            regex: /^(19\d\d|20[0-5]\d)$/,//1900-2059
                            regexText: 'año (1900-2059)',

                            itemId: 'ano',
                            listeners: {
                                change: this.anoChangeFn,
                                scope: this.scope,
                            },
                    },
                    {
                            xtype: 'combobox',
                            emptyText: 'Elige un tipo de archivo',
                            forceSelection: true,
                            queryMode: 'local',

                            store: Ext.create('tsjdf.store.catalogo.' + (this.isSala?'general11':'general10')).load(),
                            //'catalogo.general10',
                            displayField: 'text',
                            valueField: 'id',
                            name: 'id_tipoarchivo',
                            fieldLabel: 'Tipo de archivo',
                            allowBlank: true,//OPC no contiene ese dato
                    },
                    {
                            xtype: 'combotextfieldset',
                            title: 'Tipo de juicio',
                            fieldname: 'tipojuicio',
                            store: 'catalogo.tipojuicio',
                            displayField: 'tipojuicio',
                            valueField: 'id',
                            allowBlank: false,
                            other_id: 53,
                    },
                    {
                            xtype: 'fieldcontainer',
                            disabled: !this.isSala,
                            hidden: !this.isSala,
                            defaults: {
                                    anchor: '100%',
                            },
                            layout: 'anchor',
                            items: [				
                                    {
                                            xtype: 'numberfield',
                                            name: 'bis',
                                            fieldLabel: 'Bis',
                                            allowDecimals: false,
                                            minValue: 0,
                                            hideTrigger: true,
                                    },
                                    {
                                            xtype: 'numberfield',
                                            name: 'nrecurso',
                                            fieldLabel: 'Número de recurso',

                                            allowDecimals: false,
                                            minValue: 0,
                                            hideTrigger: true
                                    },
                            ],
                    },
                    {
                            xtype: 'fieldcontainer',
                            disabled: !this.isSalaPenal,
                            hidden: !this.isSalaPenal,
                            defaults: {
                                    anchor: '100%',
                            },
                            layout: 'anchor',
                            items: [				
                                {
                                    'name': 'delito',
                                    'fieldLabel': 'Delito',
                                    'xtype': 'textfield',
                                    'maxLength': 255
                                },
                                {
                                    'name': 'pena',
                                    'fieldLabel': 'Pena total o medida privativa',
                                    'xtype': 'textfield',
                                    'maxLength': 255
                                }
                            ],
                    }
            ]
        });
        me.callParent(arguments);
    },
});


/**
* expedienteForm: Formulario del expediente: {numero de expediente, tipo de juicio, partescontenciosas, ...}
*/

Ext.define('Ext.tx.form.field.ExpedientePicker', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.expedientepicker',
	
    requires: [
		'Ext.tx.form.Combo_Text_FieldSet',
		'Ext.tx.form.PersonWAddressFieldSet',
		'Ext.tx.grid.Book2',
		'Ext.tx.grid.column.IJuridico',
	],
	/*para que no se oculte*/
	collapseIf: Ext.emptyFn,
	initEvents: Ext.emptyFn,
	
    //campo para dibujar el expediente
	fieldBodyCls: 'expedientefc',
	beforeSubTpl : '<div id="expedientefv"></div>',

	matchFieldWidth: false,
    editable: false,
    pickerOffset: [ 0, -20 ],
	// pickerAlign ??
	
    personswaddressValidity: true,//last validation
    allowBlankAddress: true,
	
    listeners: {
        /*
         * on fist change expedientefv does not exist
         * afterrender is called only once
         * no me gustó en Ext.tx.grid.Book2.recordWindow.listeners.show
         */
        change: function( cmp, newValue, oldValue, eOpts ){
            var expedientefv = Ext.get('expedientefv')
            if(expedientefv)
                expedientefv.el.setHTML(cmp.up('form').getRecord().getExpediente().data.name);
        },
        afterrender: function( cmp, eOpts ){
            Ext.get('expedientefv').el.setHTML(cmp.up('form').getRecord().getExpediente().data.name);
        },
    },
	
	/**
	* isSala = true deshabilita el campo bis
	*/
	isSala: false,
	isSalaPenal: false,
	
	regimeSelector: true,
	fieldLabel: 'Expediente',
	
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldLabel: Ext.tx.form.field.ExpedientePicker.prototype.fieldLabel,
        });
        me.callParent(arguments);
    },
	
	triggerCls : Ext.baseCSSPrefix + 'form-expediente-trigger',
	trigger2Cls: Ext.baseCSSPrefix + 'form-expediente-trigger',
	
    trigger1Cls: 'x-form-clear-trigger',
    onTrigger1Click: function(evnt) {
//		this.parentFormRecord = this.up('form').getRecord();
//		this.parentFormRecord.setExpediente(new tsjdf.model.libro.expediente());
		this.up('form').getRecord().setExpediente(new tsjdf.model.libro.expediente());
        this.setValue(0);
    },
	
	inputType: "hidden",
	regex: /[^0]/,//id == -1 tiene numero y año pero es phantom. id == 0 no tiene numero ni año y es phantom
	regexText: 'Selecciona o ingresa un asunto en el órgano judicial',
	parentFormRecord: null,
	expedienteRecord: null,
	
	onSubmit: function(button, event) {
        //campos de dirección obligatorios a partir del 2017
        if(!this.allowBlankAddress && this.expedienteForm.down('#ano').value > 2016){
            //validamos los stores anidados
            this.partescontenciosasGrid.store.each(this.validityFn,this);
            if(!this.personswaddressValidity)
                return;        
        }
		if(!this.expedienteForm.isValid())
			return;
                    
		/*
		//book2 utiliza ventanas modales por lo que esta validación ya no se ocupa.
		if(!this.partescontenciosasGrid.recordForm.collapsed){
			Ext.MessageBox.alert(this.picker.title, 'El subregistro ' + this.partescontenciosasGrid.title + " se encuentra abierto." );
			return;
		}
		*/
		
		this.expedienteForm.updateRecord();

		if(this.expedienteRecord.getId() == 0)
			this.expedienteRecord.setId(-1);
				
		this.parentFormRecord.setExpediente(this.expedienteRecord);
		this.setValue(this.expedienteRecord.getId());
		this.onCancel();
		if(this.expedienteRecord.data.name)
			Ext.get('expedientefv').el.setHTML(this.expedienteRecord.data.name);
		else
			Ext.get('expedientefv').el.setHTML(this.expedienteRecord.data.numero + "/" + this.expedienteRecord.data.ano);
	},
	
	onCancel: function(button, event) {
		/*reset a condiciones iniciales*/
		this.expedienteForm.getForm().reset();
		this.expCombo.clearValue();
		delete this.expCombo.lastQuery;//forza requery cuando se usa el mismo query (expediente)
			
		if(button){
			this.partescontenciosasGrid.store.rejectChanges();
		}
		
		this.partescontenciosasGrid.setActiveRecord(null);
		
		this.fireEvent('blur');
		this.collapse();
    },
	
	onGetExpediente: function(expedienteRecord, operation, success, btn){//operation, success //sólo existen en parentFormRecord (phantom = true).getExpediente
		/*Error #1: 
		Si el json no trae datos entonces marca el error no cachable "TypeError: g is undefined"; ej:
		{"data":[],"success":true}
		solución:
		{"data":[{}],"success":true} ó
		{"data":{},"success":true}
		*/
		this.expedienteRecord = expedienteRecord;
		//si el id = 0 es que no está guardado
		if(expedienteRecord.getId()<1)
			expedienteRecord.phantom = true;
			
//		console.log('parentFormRecord.phantom '+ this.parentFormRecord.phantom);
//		console.log('expedienteRecord.phantom '+ expedienteRecord.phantom);
//		console.log('parentFormRecord.data.id_expediente '+ this.parentFormRecord.data.id_expediente);
		/**
		rule: solicitaron que el usuario esté obligado a realizar una búsqueda primero.
		expEditor - Se pueden agregar las partes (partescontenciosas) con los botones "seleccionar expediente" y "no seleccionar expediente" y cuando el registro padre ya está guardado
		*/
		
		if(btn)
			this.picker.down('#expEditor').setDisabled(0);
		else if(!this.parentFormRecord.phantom && !expedienteRecord.phantom)
			this.picker.down('#expEditor').setDisabled(0);
		
		this.expedienteForm.down('#expItems').setDisabled(!expedienteRecord.phantom);
		this.expSearch.setDisabled(this.parentFormRecord.data.id_expediente);
		
		

		
		this.expedienteForm.loadRecord(expedienteRecord);
		/*
		 * @bug, si recofiguro directamente con parámetros a veces no se cargan los stores
		 * por eso tuve que repetir.
		 */
		this.partescontenciosasGrid.reconfigure();
		var partescontenciosas_store = expedienteRecord.partescontenciosas();
		this.partescontenciosasGrid.reconfigure(expedienteRecord.partescontenciosas());
		/*
		
|===========================|===========================|===============|===============|===============|===============================|===============================|
|Estado/disabled			|	#undoSelectExpediente	|	#expEditor	|	#expItems	|	#expSearch	|	parentFormRecord.phantom	|	expedienteRecord.phantom	|
|===========================|===========================|===============|===============|===============|===============================|===============================|
|registro de libro guardado	|	1						|	0			|	1			|1=par.rec		|				0				|				0				|
|===========================|===========================|===============|===============|===============|===============================|===============================|
|parent.id_exp null			|	?						|	1			|	?			|	0			|				0				|				1				|
|===========================|===========================|===============|===============|===============|===============================|===============================|
|registro encontrado de OPC	|	0						|	btn			|	1			|	0			|				1				|				0				|
|===========================|===========================|===============|===============|===============|===============================|===============================|
|registro nuevo				|	1						|	1			|	1			|	0			|				1				|				1				|
|===========================|===========================|===============|===============|===============|===============================|===============================|
|registro no elegido de opc	|	0						|	0			|	0			|	0			|				1				|				1				|
|		(handler)			|                           |               |               |               |                               |                               |
|===========================|===========================|===============|===============|===============|===============================|===============================|

		window.myvar = this;
		console.log('#undoSelectExpediente: ' + this.picker.down('#undoSelectExpediente').isDisabled());
		console.log('#expEditor: ' + this.picker.down('#expEditor').isDisabled());
		console.log('#expItems: ' + this.expedienteForm.down('#expItems').isDisabled());
		console.log('#expSearch: ' + this.expSearch.isDisabled());*/
	},
	
    onExpand: function() {
        this.personswaddressValidity = true;
		this.picker.down('#undoSelectExpediente').setDisabled(true);
		
		//estos son sólo porque cuando se abre un expediente phantom (id=0) éste de todos modos lo búsca en el próxy
		this.picker.down('#expEditor').setDisabled(true);
		this.expedienteForm.down('#expItems').setDisabled(true);
		this.parentFormRecord = this.up('form').getRecord();
		this.parentFormRecord.getExpediente({callback: this.onGetExpediente, scope: this});
		
		this.picker.alignTo(this.up(), "tl", [0, -50]);
    },

	createPicker: function(){
		this.expedienteForm = Ext.create('Ext.form.Panel', {
                            xtype: 'form',
                            title: this.fieldLabel,
                            items: [
                                {
                                    xtype: 'exp_items',
                                    isSala: this.isSala,
									isSalaPenal: this.isSalaPenal,
                                    scope: this,
                                    anoChangeFn: function(field, newValue, oldValue, options) {
                                        var allowBlank = this.allowBlankAddress || newValue < 2017;
                                        this.picker.down('#partescontenciosas').recordWindow.down('personwaddressfieldset').setAllowBlank(allowBlank);
                                    }
                                }
                            ],
			});
		
		this.expCombo = Ext.create('Ext.form.field.ComboBox', {
			xtype: 'combobox',
			emptyText: 'Escribe el número de ' + this.fieldLabel,
			forceSelection: true,
			//queryMode: 'local',
			
			displayField: 'name',
			valueField: 'id',
			name: 'id_expediente',
			fieldLabel: this.fieldLabel,
			
			store:  Ext.create('Ext.data.Store', {
				proxy: {
					type: 'ajax',
					model: 'tsjdf.model.libro.expediente',
					url: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=libro&clave=expediente',
					reader: {
						type: 'json',
						messageProperty: 'message',
						root: 'data',
					},
				},
				listeners: {
						read: function( store, operation, eOpts ){
							this.picker.down('#undoSelectExpediente').setDisabled(false);
						},
						scope: this,
				},
			}),
			allowBlank: false,
			triggerAction: 'last',//permite seleccionar los resultados sin que haga un requery
		}); 
		
		this.expSearch = Ext.create('Ext.form.Panel', {
				xtype: 'form',
				title: 'Buscar ' + this.fieldLabel,
				layout: 'anchor',
				defaults: {
					anchor: '100%',
				},
				items: [
					this.expCombo
				],
				buttons: [{
					text: 'Seleccionar ' + this.fieldLabel,
					formBind: true, //only enabled once the form is valid
					handler: function(button, event){
						//se elige un registro ya existente
						var recordFound = this.expCombo.findRecordByValue(this.expCombo.getValue());
						if(!recordFound)
							return;
							
						//si jalo un expediente del store debería ser un recordFound guardado, pero algunas veces no está marcado así por lo que sobreescribo phantom, debe ser por alguna conversión de datos???
						if(recordFound.phantom)
							console.log('Error: el expediente ' + recordFound.getId() +' dice phantom.');
						recordFound.phantom = false;
						this.onGetExpediente(recordFound, null, null, 1);

						//this.picker.down('#expEditor').setDisabled(false);
						//this.onGetExpediente(recordFound);
					},
					scope: this,
				},{
					text: 'No seleccionar ' + this.fieldLabel + ', ingresar nuevo asunto',
					itemId: 'undoSelectExpediente',
					handler: function(button, event){
						this.onGetExpediente(this.parentFormRecord.getExpediente(), null, null, 1);

						//this.picker.down('#expEditor').setDisabled(false);
						//this.onGetExpediente(this.parentFormRecord.getExpediente());
					},
					scope: this,
				}],
		});
		
		this.partescontenciosasGrid = Ext.create('Ext.tx.grid.Book2',
			{
				xtype: 'book',
				bbar: null,
				tbar: [
                                   {
                                        xtype: 'button',
                                        icon: 'media/com_tsjdf_libros2/images/ij/ij_109.png',
                                        text: 'Añadir nuevo actor',
                                        handler: function(btn, evnt){
                                            var grid = btn.up('grid');
                                            var record = new grid.store.model();
                                            record.set({id_ijuridico: 109, txt_ijuridico:'Actor'})
                                            grid.setActiveRecord(record);
                                        },
                                    },
                                   {
                                        xtype: 'button',
                                        icon: 'media/com_tsjdf_libros2/images/ij/ij_110.png',
                                        text: 'Añadir nuevo demandado',
                                        handler: function(btn, evnt){
                                            var grid = btn.up('grid');
                                            var record = new grid.store.model();
                                            record.set({id_ijuridico: 110, txt_ijuridico:'Demandado'})
                                            grid.setActiveRecord(record);
                                        },
                                    },
                                   {
                                        xtype: 'button',
                                        iconCls: 'icon-add',
                                        text: 'Añadir nuevo registro',
                                        handler: function(btn, evnt){
                                            var grid = btn.up('grid');
                                            var record = new grid.store.model();
//                                            record.set(grid.initialConditions);
                                            grid.setActiveRecord(record);
                                        },
                                    },
					   ],
				itemId: 'partescontenciosas',
				//initialConditions: {id_field: 2156},
				title: 'Partes contenciosas',
				height: 250,
//				sortableColumns: false,
//				enableColumnResize: false,
//				enableColumnHide: false,
				columns: [
        {
            xtype: "statuscolumn",
        },
        {
            xtype: "destroycolumn",
        },
        {
            xtype: "ijuridicocolumn",
        },
        {
            minWidth: 100,
            dataIndex: "txt_ijuridico",
            text: "Interés Jurídico",
        },
        {
            minWidth: 100,
            dataIndex: "fullname",
            text: "Nombre",    
			xtype: 'templatecolumn',
			tpl: '{paterno} {materno} {nombre}',
			flex:1,
        },
        {
            minWidth: 100,
            dataIndex: "address",
            text: "Dirección",    
			xtype: 'templatecolumn',
			tpl: 'Calle: {calle} # {numero} Colonia: {colonia} C.P.: {cp} {municipio}',			
			flex:1,
        },
                                ],
				formItems: [
                    {
                            xtype: 'combotextfieldset',
                            title: 'Interés Jurídico',
                            fieldname: 'ijuridico',
                            store: 'catalogo.general28',
                            displayField: 'text',
                            valueField: 'id',
                            allowBlank: false,
                            other_id: 116,
                    },
					{
						xtype: 'personwaddressfieldset',
						personFieldPrefix: '',
						addressFieldPrefix: '',
						alwaysChange: 0,
						regimeSelector: this.regimeSelector
					},
				],
    viewConfig: {
        listeners: {
		viewready: function(cmp, eOpts) {
                    cmp.store.load();
                    cmp.clipbrd = null;
                    cmp.contextMenu = Ext.create('Ext.menu.Menu', {
                        xtype: 'menu',
                        width: 100,
                        margin: '0 0 10 0',
                        items: [
                            {
                                text: 'copiar',
                                handler: function(cmp, event, eOpts ){
                                    var selected = this.getSelectionModel().getSelection()[0];
                                    if(!selected)
                                        return;
                                    this.clipbrd = {calle: selected.data.calle, numero: selected.data.numero, colonia: selected.data.colonia, cp: selected.data.cp, id_entidadf: selected.data.id_entidadf, municipio: selected.data.municipio, };
                                },
                                scope:this,
                            }
                        ]
                    });     
		},
                itemcontextmenu: function(cmp, record, item, index, event, eOpts) {
                    event.preventDefault();
                    event.stopEvent();
                    cmp.contextMenu.showAt(event.getXY());
                },
        },
    },
			}
		);
		
		return Ext.create('Ext.window.Window', {
			title: 'Busca, selecciona o ingresa un asunto en el órgano judicial',
			width: 800,
			modal: true,
			closable: false,
			draggable:true,
			resizable: false,
//            ownerCt: this.ownerCt,
			items: [
				this.expSearch,
				{
					itemId: 'expEditor',
					items: [
						this.expedienteForm,
						{
							xtype: 'container',
							width: 800,
							layout: 'hbox',
							itemId: 'partesContainer',
							items: [
								this.partescontenciosasGrid,
							]
						}
					]
				},
			],
			buttons: [{
				text: Ext.grid.RowEditor.prototype.cancelBtnText,
				iconCls: 'icon-reset',
				handler: this.onCancel,
				scope: this,
			}, {
				text: 'Aceptar',
				iconCls: 'icon-ok',					
//					formBind: true, //necesito los botones en window y por eso no puedo usar formBind
				handler: this.onSubmit,
				scope: this,
			}],
		});    
    },
    
        validityFn: function(record,item,count){
            this.personswaddressValidity = record.hasAValidAddress();
            if(!this.personswaddressValidity){
                Ext.MessageBox.show({
                        title: 'Aviso',//REMOTE WARNING                           
                        msg: 'No se puede dejar vacios los campos de dirección en los campos de Partes contenciosas.',
                        icon: Ext.MessageBox.WARNING,
                        buttons: Ext.Msg.OK
                });
            }
            return this.personswaddressValidity;
        },
});