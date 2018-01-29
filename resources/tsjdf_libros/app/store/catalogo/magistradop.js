Ext.define('tsjdf.store.catalogo.magistradop', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'catalogo.magistradop',
            pageSize: -1,
            proxy: {
                type: 'ajax',
                listeners: {
                    exception: function(proxy, response, operation){
                		Ext.MessageBox.show({
                			title: 'REMOTE EXCEPTION',
                			msg: operation.getError(),
                			icon: Ext.MessageBox.ERROR,
                			buttons: Ext.Msg.OK
                		});
                	}
                },
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=magistradop',
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'txt',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});