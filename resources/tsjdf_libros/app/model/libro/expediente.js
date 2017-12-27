Ext.define('tsjdf.model.libro.expediente', {
    extend: 'Ext.data.Model',
	
	requires: [
		'tsjdf.model.libro.partescontenciosas',
	],

    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'numero',
            type: 'int',
        },
        {
            name: 'ano',
            type: 'int',
			defaultValue: 2015,
		},
		{
			name: 'bis',
			useNull: true,
			type: 'int' 
		},
        {
            name: 'nrecurso',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_tipoarchivo',
            type: 'int',
			useNull: true
        },
		{
			name: 'txt_tipojuicio',
			useNull: true,
			type: 'string',
		},
        {
            name: 'name',
            type: 'string',
			persist: false
        },
		{
			name: 'id_tipojuicio',
			useNull: true,
			type: 'int',
			//defaultValue: 53,
		},
        {
            "name": "delito",
            "useNull": true,
            "type": "string"
        },
        {
            "name": "pena",
            "useNull": true,
            "type": "string"
        },
    ],
	
	hasMany: [
		{
			model: 'tsjdf.model.libro.partescontenciosas',
			foreignKey: 'id_record',
			name: 'partescontenciosas',
		}
	],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=libro&clave=expediente',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=libro&clave=expediente',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=libro&clave=expediente',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=libro&clave=expediente'
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
            root: 'data'
        }
    }
});