/**
* @todo: en la línea 281 ocultar la ventana modal mientras se guarda el registro.
*/

/* 
RFC regex "[A-Z,Ñ,&amp;]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?"
*/

Ext.form.Field.prototype.msgTarget = 'side';
Ext.override(Ext.form.field.Base, {
	readOnlyCls: Ext.baseCSSPrefix + 'item-disabled',
});
Ext.override(Ext.data.proxy.Proxy, {
	listeners: {
		exception: function(proxy, response, operation){
			var msg;			
			response.responseJSON = Ext.decode(response.responseText,true);
			if(response.responseJSON)
				msg = response.responseJSON.message;
			else{
				var error = operation.getError();
				msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
			}
			Ext.MessageBox.show({
				title: 'Error',//REMOTE EXCEPTION
				msg: msg,
				icon: Ext.MessageBox.ERROR,
				buttons: Ext.Msg.OK
			});
			if(response.status != 200){
				var book = Ext.getCmp('book');
				if(book)
					book.recordForm.child('> #save').handler = book.onException;
			}
		}
	}
});
Ext.override(Ext.data.Store, {
	listeners: {
		write: function( store, operation, eOpts ){
			if(store.proxy.reader.jsonData.warning)
			Ext.MessageBox.show({
				title: 'Aviso',//REMOTE WARNING
				msg: store.proxy.reader.jsonData.message,
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.Msg.OK
			});
		}
	}
});

Ext.define('Ext.tx.grid.Book2', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.book',

    requires: [
		'Ext.tx.grid.SearchFeature',
		'Ext.tx.grid.column.DateTime',
		'Ext.tx.grid.column.Expediente',
		'Ext.tx.grid.column.Status',
		'Ext.tx.grid.column.Destroy',
		'Ext.tx.grid.column.Caratula',
		'Ext.tx.grid.column.DExpediente',
		'Ext.tx.form.PersonFieldSet',
		'Ext.tx.grid.plugin.RowExpander',
		'Ext.tx.form.field.FingerPrintPicker','Ext.tx.form.field.WacomPicker',
		/**
		Normalmente se invoca desde el view y además por la T230 se está sobre-escribiendo
		*/
//		'Ext.tx.form.field.ExpedientePicker',
		'Ext.tx.button.PrintBookButton',
    ],

	columns: [
		{
			text: 'dummy'
		}
	],
	lastClick: new Date(),
	isRoot: false,
//	show_pagingtoolbar: false,
	tbar: undefined,
	bbar: undefined,
	
	
	hide_addBtn: false,
	initialConditions: {},
        
	listeners: {
		itemdblclick: function(view, record, element, index, e, eOpts){
			this.setActiveRecord(record);
		},
		sortchange: function( ct, column, direction, eOpts ){
			this.setActiveRecord(null);
		},
	},
        
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
					
			needsSync: 0, //debería buscar que stores needsSync en this.associations, pero es más fácil si cuento 
			associations: {
				hasMany: [],
				belongsTo: [],
				activeRecord: []
			},

					
			width: '100%',
			tbar:[
                                    {
                                        xtype: 'button',
                                        iconCls: 'icon-add',
                                        text: 'Añadir nuevo registro',
                                        handler: this.onNew,
                                        scope: this,
                                        itemId: 'addBtn',
                                        hidden: this.hide_addBtn,
                                    }
				  ],
			bbar: {
                                xtype: 'pagingtoolbar',
//								hidden: !this.show_pagingtoolbar,
                                displayInfo: true,
                                store: this.store,
                                listeners: {
                                        beforechange: function( pagingtoolbar, page, eOpts){
                                                this.setActiveRecord(null);
                                        },
                                        scope: this
                                },
                                items:[
                                        {
                                                xtype: 'printbookbutton',
                                                scope: this,
                                        }
                                ]
                            },
        });

        me.callParent(arguments);

		this.recordWindow = Ext.create('Ext.window.Window',{
			closeAction: 'hide',
                        closable: false,
			modal: true,
			
			title: this.title,
			height: 450,
                        constrain: true,
			width: 600,
			layout: 'fit',
                        
			items:[
				{
					xtype: 'form',
					defaultType: 'textfield',
					fieldDefaults: {
						anchor: '100%',
					},
					autoScroll: true,
					
					items: this.formItems,
					dockedItems: [{
						xtype: 'toolbar',
						dock: 'bottom',
						items: ['->',
							this.getBtnCancel(),
							this.getBtnSave(),	
						]
					}]
				},
			]
		});
		
		this.recordForm = this.recordWindow.child('form');
		
		if(this.isRoot && this.recordForm.child('#id_secretaria'))
			this.cmbSecretaria = this.recordForm.child('#id_secretaria');
			
		if(this.isRoot && this.recordForm.child('#anoj'))
			this.cmbAnoj = this.recordForm.child('#anoj');

		var associations = this.store.model.prototype.associations;
		var association;
		for(var i=0;i< associations.length; i++){
			association = associations.get(i);
			this.associations[association.type].push({name: association.name});
		}
		
		//nomas para después guardar el needsSync
		this.associations['activeRecord'].push({name: 'activeRecord'});
		
		//no supe sacar dinámicamente las associations belongsTo del Expediente
		if(this.isRoot)
			this.associations.belongsTo[0].hasMany = [{name:"partescontenciosas"},];
    },
	activeRecord: null,
	setActiveRecord: function(record){
		var recordForm, subRecordGrid, subRecordStore;
		
		this.activeRecord = record;
		recordForm = this.recordForm;
		
		if(!record){
			this.recordWindow.close();
			return;
		}

		if(this.cmbSecretaria){
                    this.cmbSecretaria.setDisabled(!!this.cmbSecretaria.initialConfig.disabled | !record.phantom);
		}
		
		if(this.cmbAnoj){
                    this.cmbAnoj.setDisabled(!!this.cmbAnoj.initialConfig.disabled | !record.phantom);
		}
		
		recordForm.getForm().loadRecord(record);
		//recordForm.expand();//ponerlo abajo causa algun error que no encuentro en subrecord.setActiveRecord(null);
		this.recordWindow.show();
                
                if(!recordForm.contextMenu){
                    recordForm.contextMenu = Ext.create('Ext.menu.Menu', {
                        xtype: 'menu',
                        width: 100,
                        margin: '0 0 10 0',
                        items: [
                            {
                                text: 'pegar',
                                itemId: 'cmdPaste',
                                handler: function(cmp, event, eOpts ){
                                    try{                                       
                                        var fields = this.recordForm.query('field');
                                        for(var i=0; i<fields.length; i++){
                                            if(fields[i].readOnly || fields[i].isDisabled() || fields[i].isHidden() )
                                                delete this.view.clipbrd[fields[i].name];
                                        }
                                        this.recordForm.getForm().setValues(this.view.clipbrd);
                                    }catch(e){
                                        console.log(e);
                                        Ext.MessageBox.show({
                                            title: 'Error',
                                            msg: 'Ocurrió un error inesperado',
                                            icon: Ext.MessageBox.ERROR,
                                            buttons: Ext.Msg.OK
                                        });
                                    }
                                },
                                scope:this,//book
                            }
                        ]
                    }); 
                    
                    recordForm.getEl().on('contextmenu', function(event) {
                            event.preventDefault();
                            event.stopEvent();

                            recordForm.contextMenu.down('#cmdPaste').setDisabled(!this.view.clipbrd);
                            recordForm.contextMenu.showAt(event.getXY());
                        },
                        this
                    );
                }
                
                
		for(var i=0;i< this.associations.hasMany.length;i++){
			subRecordStore = record[this.associations.hasMany[i].name]();
			subRecordGrid = this.recordForm.child('#'+this.associations.hasMany[i].name);
			/*
			 * @bug, si recofiguro directamente con parámetros a veces no se cargan los stores
			 * por eso tuve que repetir.
			 */
			subRecordGrid.reconfigure();
			subRecordGrid.reconfigure(subRecordStore);
			subRecordGrid.setActiveRecord(null);
		}
		this.onSetActiveRecord(record);
	},
	onSetActiveRecord: Ext.emptyFn,
	onSave: function(){
		//previene duplicados
		var now = new Date();
		if( this.lastClick.getTime() + 1000 - now.getTime() >0)
			return;
		this.lastClick = now;
		
		var subrecordStore;
			
		//evita que se pierdan datos en subregistros
		/*
		for(var i=0;i<this.associations.hasMany.length;i++){
			var subRecordGrid = this.recordForm.child('#'+ this.associations.hasMany[i].name);
			if(!subRecordGrid.recordForm.collapsed){
				Ext.MessageBox.alert(this.title, 'El subregistro ' + subRecordGrid.title + " se encuentra abierto." );
				return;
			}
		}
		*/
		
		var form = this.recordForm.getForm();
		if(form.isValid()) {
			/*
			Si se repite el nombre de un campo padre y un campo hijo entonces hay un conflicto porque en form.getFieldValues() aparecen todos los campos incluidos los de formularios anidados. Como adentro del libro raiz hay sublibros anidados pues también hay formularios anidados.
			
			De tal manera que si el libro raiz existe un campo llamado paterno (para contrastar aqui paterno es un campo de fecha) y dos sublibros con un campo paterno cada uno en RootBook.form.getFieldValues().paterno =	[Date {Wed Mar 26 2014 00:00:00 GMT-0600}, "apellido hijo 1", "apellido hijo 2"]
			
			There can be several forms in a single document, but the FORM element can't be nested (http://www.w3.org/MarkUp/html3/forms.html)
			
			No voy tampoco a poder utilizar validaciones como allowBlank con nested forms. Necesito poner formularios independientes en Ext.window.Window
			*/
			form.updateRecord(this.activeRecord);
			if (this.activeRecord.phantom && !this.activeRecord.store){
				this.store.insert(this.isRoot?0:this.store.getCount(), this.activeRecord);
			}
			if(this.isRoot){
				this.needsSync = 0;
				this.associations.activeRecord[0].needsSync = this.activeRecord.dirty || this.activeRecord.phantom;
				for(var i=0;i<this.associations.hasMany.length;i++){
					subrecordStore = this.activeRecord[this.associations.hasMany[i].name]();
					this.needsSync += this.associations.hasMany[i].needsSync =  subrecordStore.getModifiedRecords().length > 0;
				}
				
				//this.associations.belongTo
				this.saveExpediente(this.activeRecord.getExpediente());

			}else
				this.setActiveRecord(null);
		}else
			Ext.MessageBox.alert(this.title, 'Por favor revisa los campos.');
	},
        
        saveExpediente: function(expedienteRecord){
            /*
			 solicitaron que el expediente pueda ser null,
			 si el expediente es cero, asumiremos que éste no fue 
			 fijado y por tanto es null y pasamos a almacenar activeRecord			
			*/
            if(expedienteRecord.data.numero < 1){
                    this.activeRecord.save({
                            //un hasMany
                            association: {location: 'activeRecord', index: 0},
                            callback : this.onRecordSaved,
                            scope: this
                    });
                return;
            }
            
            this.getEl().mask('Espere un momento...');
            this.recordWindow.close();

            expedienteRecord.phantom = expedienteRecord.getId()<1;
            this.associations.belongsTo[0].needsSync = expedienteRecord.dirty || expedienteRecord.phantom;
            for(var i=0;i<this.associations.belongsTo[0].hasMany.length;i++){
                    subrecordStore = expedienteRecord[this.associations.belongsTo[0].hasMany[i].name]();
                    this.needsSync += this.associations.belongsTo[0].hasMany[i].needsSync = subrecordStore.getModifiedRecords().length > 0;
            }

                    expedienteRecord.save({
                            association: {location: 'belongsTo', index: 0},
                            callback : this.onRecordSaved,
                            scope: this
                    });	
        },
        
	//se guarda expedienteRecord y activeRecord
	onRecordSaved: function(record, operation, success){
		if(!success){
			this.closeIt();
			return; 
		}
		record.commit();
		
		if(operation.association.location === 'belongsTo'){
			this.activeRecord.set('id_expediente',record.getId());
			this.activeRecord.save({
				association: {location: 'activeRecord', index: 0},
				callback : this.onRecordSaved,
				scope: this
			});
		}else{
			if(!this.needsSync)
				this.closeIt();
		}
		
		
		this.associations[operation.association.location][operation.association.index].needsSync = false;
		
                var k=-1;
		for(var i=0; i < record.associations.keys.length; i++){
			if(record.associations.get(i).type === 'belongsTo')
				continue;
                        k++;
			var foreignKey = record.associations.items[i].foreignKey;
			var subrecordStore = record[record.associations.keys[i]]();
			subrecords = subrecordStore.getModifiedRecords();
			for(var j=0; j<subrecords.length; j++){
				//if(operation.action == 'create')//se generaban registros bastardos cuando operation == 'update'
				subrecords[j].set(foreignKey,record.getId());
			}
			subrecordStore.sync({
				callback : this.onSavedHasManyStore,
				association: {location: operation.association.location, index: k},
				scope: this,
			});
		}
	},
	onSavedHasManyStore: function(batch, options){
		var i = options.association.index, needsSync = false;
		if(options.association.location === 'belongsTo'){
			this.associations.belongsTo[0].hasMany[i].needsSync = false;
//			console.log('he limpiado ' + this.associations.belongsTo[0].hasMany[i].name);
		}else{
			this.associations.hasMany[i].needsSync = false;
//			console.log('he limpiado ' + this.associations.hasMany[i].name);
		}
		this.needsSync--;
		if(!this.needsSync)
			this.closeIt();
	},
	onReset: function(){		
		//para que el reject funcione no debes modificar los datos desde record.data.field
		for(var i=0;i<this.associations.hasMany.length;i++){
			var subrecordStore = this.activeRecord[this.associations.hasMany[i].name]();
			subrecordStore.rejectChanges();
		}
		if(this.isRoot){
			var expediente = this.activeRecord.getExpediente();
			expediente.partescontenciosas().rejectChanges();
			expediente.reject();
		}
		this.setActiveRecord(null);
	},
	onNew: function(){
		var record = new this.store.model();
		record.set(this.initialConditions);
		this.setActiveRecord(record);
	},
	getBtnSave: function(){
		var button = {
							iconCls: 'icon-save',
							itemId: 'save',
							text: 'Guardar',
							scope: this,
							handler: this.onSave
						};
		if(!this.isRoot){
			button.iconCls = 'icon-ok';
			button.text = 'Aceptar';
		}
		return button;
	},
	getBtnCancel: function(){
		var button = {
							iconCls: 'icon-reset',
							text: Ext.grid.RowEditor.prototype.cancelBtnText,
							scope: this,
							handler: this.onReset
						};
		if(!this.isRoot)
			button.iconCls = 'icon-cancel';
		return button;
	},
	closeIt: function(){
		this.setActiveRecord(null);
		this.getEl().unmask();
		//this.recordWindow.unmask();
	}
});
