Ext.define('Ext.tx.grid.column.Versions', {
	extend:'Ext.grid.column.Action',
	alias: 'widget.versionscolumn',
	
	maxWidth: 25,
	hideable : false,
	menuDisabled: true,
	resizable: false,
	

	theForm: Ext.create('Ext.tx.form.WindowRequest',{
		baseParams: {
			option: 'com_jtca',
		},
	}),

	handler: function(view, rowIndex, colIndex, item, event, record, row) {
		this.theForm.onSubmit({task: this.clave+'.showHistory',item_id: record.data.id});
	},

				header: '<img src="resources/images/fatcow-hosting-icons-2000/16x16/box_front.png" alt="Versiones" />',
				icon: 'resources/images/fatcow-hosting-icons-2000/16x16/box_down.png',
				width:50,


});