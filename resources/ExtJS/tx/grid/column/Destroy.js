Ext.define('Ext.tx.grid.column.Destroy', {
	extend:'Ext.grid.column.Action',
	alias: 'widget.destroycolumn',
	
	maxWidth: 25,
	hidden : true,
	menuDisabled: true,
	resizable: false,
	
	tooltip: 'Borrar registro',
	menuText: 'Borrar registro',
	icon   : 'resources/images/open_icon_library-standard/icons/png/16x16/actions/layer-delete.png',
	header: '<img src="resources/images/open_icon_library-standard/icons/png/16x16/actions/table-row-delete-2.png" alt="Borrar registro" />',
	
	handler: function(grid, rowIndex, colIndex) {
		var store = grid.store, record = store.getAt(rowIndex);
		//not all grid has ordering property
		if(!confirm("Estas seguro de que quieres borrar el registro " + (record.data.ordering?record.data.ordering:'') + " (id="+  record.data[record.idProperty] +")?"))
			return;
		store.remove(record);
		//						if(store.getModifiedRecords().length > 0){
			myMask.show();
			store.sync({
				callback : function(batch, options){
					if(batch.hasException)
						store.rejectChanges();
					myMask.hide();
				}
			});
		//						}
	}
});