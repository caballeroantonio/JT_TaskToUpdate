Ext.define('tsjdf.model.libro.partescontenciosas', {
    extend: 'Ext.data.Model',
	
    idProperty: 'id',
    fields: [
		{
			name: 'id',
			type: 'int',
		},
		{
			name: 'id_field',
			type: 'int',
			defaultValue: 2156,
		},
		{
			name: 'id_record',
			type: 'int'
		},
		{
			name: 'id_ijuridico',
			type: 'int',
			useNull: true,
		},
		{
			name: 'txt_ijuridico',
			useNull: true,
			type: 'string',
		},
		{
			name: 'isMoral',
			useNull: true,
			type: 'int',
			defaultValue: 0
		},
		{
			name: 'paterno',
			type: 'string',
			useNull: true
		},
		{
			name: 'materno',
			type: 'string',
			useNull: true
		},
		{
			name: 'nombre',
			type: 'string',
			useNull: true
		},
		{
			name: 'curp',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'rfc',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'calle',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'numero',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'colonia',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'cp',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		/*
		//no pude encadenar el store, en el formulario el valor del campo se va a null al tener un store vacio, y no me fue posible pre-cargar el store filtrado por la entidad
		{
			name: 'id_municipio',
			useNull: true,
 
			type: 'int',
		 
		},	*/
 
		{
			name: 'municipio',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'id_entidadf',
			useNull: true,
 
			type: 'int',
		 
		},
		{
			name: 'ijuridico',
			type: 'string',
			persist: false
		},
		{
			name: 'fullname',
			type: 'string',
			persist: false
		},
		{
			name: 'address',
			type: 'string',
			persist: false
		},
    ],

    proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=partescontenciosas',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=partescontenciosas',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=partescontenciosas',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=partescontenciosas'
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
    },
    
    /**
     * usando validations no se agregaban nuevos registros que no fueran 
     * valid, aun cuando en la interfaz parecía que si.
     * */
    hasAValidAddress: function() {
        var data = this.getData();
        return !!data.calle && 
                !!data.numero && 
                !!data.colonia && 
                !!data.id_entidadf && 
                !!data.municipio;
    }
    
    /*validations: [
        {type: 'presence', field: 'calle'},
        {type: 'presence', field: 'numero'},
        {type: 'presence', field: 'colonia'},
        {type: 'presence', field: 'id_entidadf'},
        {type: 'presence', field: 'municipio'},
    ]*/
});