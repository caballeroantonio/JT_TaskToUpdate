Ext.define('tsjdf.model.libro.adol_jjadg01', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'sfield31',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield29',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield10',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield11',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield12',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield28',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield13',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield14',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield15',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield16',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield17',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield30',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield18',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield19',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield20',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield21',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield22',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield23',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield24',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield25',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield26',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield27',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=adol_jjadg01',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=adol_jjadg01',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=adol_jjadg01',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=adol_jjadg01'
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
});Ext.define('tsjdf.model.libro.adol_jjadg05', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        }, 
		{
			name: 'sfield1',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield1_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield1_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield1_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield1_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield8',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield2',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield3',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield4',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield5',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield14',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield10',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield11',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield12',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield13',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield7',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=adol_jjadg05',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=adol_jjadg05',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=adol_jjadg05',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=adol_jjadg05'
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
});Ext.define('tsjdf.model.libro.averiguacion', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'averiguacion',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=averiguacion',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=averiguacion',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=averiguacion',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=averiguacion'
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
});Ext.define('tsjdf.model.libro.decl_jpdng01', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield1',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield2',
			useNull: true,
 
			type: 'int' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=decl_jpdng01',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=decl_jpdng01',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=decl_jpdng01',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=decl_jpdng01'
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
});Ext.define('tsjdf.model.libro.dep_joc03', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield5',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield6',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield7',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield8',
			useNull: true,
 
			type: 'float' 
		 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield10',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield10_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield10_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield10_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield10_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield11',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield12',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield13',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield14',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield15',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield16',
			useNull: true,
 
			type: 'int'}, {name: 'sfield16_file', persist: false, type: 'string'}, {name: 'sfield16h', useNull: true, type: 'int'}, {name: 'sfield16h_file', persist: false, type: 'string'
		 
		},	
 
		{
			name: 'sfield17',
			useNull: true,
 
			type: 'int'},{name: 'sfield17_name', persist: false, type: 'string'},{name: 'sfield17_file', persist: false, type: 'string'
		 
		},	
 
		{
			name: 'sfield18',
			useNull: true,
 
			type: 'int'},{name: 'sfield18_name', persist: false, type: 'string'},{name: 'sfield18_file', persist: false, type: 'string'
		 
		},
 
		{
			name: 'sfield19',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=dep_joc03',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=dep_joc03',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=dep_joc03',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=dep_joc03'
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
});Ext.define('tsjdf.model.libro.dili_jpdng09', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield2',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield2_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield2_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield2_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield2_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield3',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield4',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield7',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield8',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'string' 
		 
		},	
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=dili_jpdng09',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=dili_jpdng09',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=dili_jpdng09',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=dili_jpdng09'
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
});Ext.define('tsjdf.model.libro.dil_jccm07', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },

		{
			name: 'sfield8',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield10',
			useNull: true,
 
			type: 'int' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=dil_jccm07',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=dil_jccm07',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=dil_jccm07',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=dil_jccm07'
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
});Ext.define('tsjdf.model.libro.dil_jccm09', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield5',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield8',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield8_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield8_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield8_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield8_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield9',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'sfield10',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield11',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=dil_jccm09',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=dil_jccm09',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=dil_jccm09',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=dil_jccm09'
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
});Ext.define('tsjdf.model.libro.partescontenciosas', {
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
});Ext.define('tsjdf.model.libro.expediente', {
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
});Ext.define('tsjdf.model.libro.firm_jjadg16', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield5',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield6',
			useNull: true,
 
			type: 'int'}, {name: 'sfield6_file', persist: false, type: 'string'}, {name: 'sfield6h', useNull: true, type: 'int'}, {name: 'sfield6h_file', persist: false, type: 'string'
		 
		},
 
		{
			name: 'sfield7',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=firm_jjadg16',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=firm_jjadg16',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=firm_jjadg16',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=firm_jjadg16'
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
});Ext.define('tsjdf.model.libro.firm_jpdng17', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield6',
			useNull: true,
 
			type: 'date', dateFormat: 'Y-m-d H:i:s'
		 
		},	
 
		{
			name: 'sfield7',
			useNull: true,
 
			type: 'int'}, {name: 'sfield7_file', persist: false, type: 'string'}, {name: 'sfield7h', useNull: true, type: 'int'}, {name: 'sfield7h_file', persist: false, type: 'string'
		 
		},
 
		{
			name: 'sfield8',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=firm_jpdng17',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=firm_jpdng17',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=firm_jpdng17',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=firm_jpdng17'
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
});Ext.define('tsjdf.model.libro.incul_jpdng01', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield3',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield3_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield3_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield3_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield3_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield4',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sfield5',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=incul_jpdng01',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=incul_jpdng01',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=incul_jpdng01',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=incul_jpdng01'
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
});Ext.define('tsjdf.model.libro.ofen_jpdng01', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
        },
		{
			name: 'sfield16',
			useNull: true,
 
			type: 'string',
			persist: false
		},{
			name: 'sfield16_isMoral',
			useNull: true,
			type: 'int' 
		},{
			name: 'sfield16_paterno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield16_materno',
			useNull: true,
			type: 'string' 
		},{
			name: 'sfield16_nombre',
			useNull: true,
			type: 'string' 
	 
		},	
 
		{
			name: 'sfield17',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=ofen_jpdng01',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=ofen_jpdng01',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=ofen_jpdng01',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=ofen_jpdng01'
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
});Ext.define('tsjdf.model.libro.personalias', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'paterno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'materno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'nombre',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'alias',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=personalias',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=personalias',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=personalias',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=personalias'
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
});Ext.define('tsjdf.model.libro.personaliasedad', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'paterno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'materno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'nombre',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'edad',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'alias',
			useNull: true,
 
			type: 'string' 
		 
		},
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=personaliasedad',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=personaliasedad',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=personaliasedad',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=personaliasedad'
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
});Ext.define('tsjdf.model.libro.persondelito', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'paterno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'materno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'nombre',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'delito',
			useNull: true,
 
			type: 'string' 
		 
		},	
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=persondelito',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=persondelito',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=persondelito',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=persondelito'
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
});Ext.define('tsjdf.model.libro.personedadsexo', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
		},
		{
			name: 'paterno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'materno',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'nombre',
			useNull: true,
 
			type: 'string' 
		 
		},	
 
		{
			name: 'edad',
			useNull: true,
 
			type: 'int' 
		 
		},	
 
		{
			name: 'sexo',
			useNull: true,
 
			type: 'int' 
		 
		},	
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=personedadsexo',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=personedadsexo',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=personedadsexo',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=personedadsexo'
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
});Ext.define('tsjdf.model.libro.persons', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'id_field',
            type: 'int',
			useNull: true
        },
        {
            name: 'id_record',
            type: 'int',
			useNull: true
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
    ],

    proxy: {
        type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=persons',
			create: 'index.php?option=com_tsjdf_libros2&task=v4.create&store=sublibro&clave=persons',
			update: 'index.php?option=com_tsjdf_libros2&task=v4.update&store=sublibro&clave=persons',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v4.destroy&store=sublibro&clave=persons'
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
});/**
	utilizo un modelo con alias
*/
Ext.define('tsjdf.model.libro.personswaddress', {
    extend: 'Ext.data.Model',
	
    idProperty: 'p__id',
    fields: [
		{
			name: 'p__id',
			type: 'int',
		},
		{
			name: 'p__id_field',
			type: 'int'
		},
		{
			name: 'p__id_record',
			type: 'int'
		},
		{
			name: 'p__isMoral',
			useNull: true,
			type: 'int',
			defaultValue: 0
		},
		{
			name: 'p__paterno',
			type: 'string',
			useNull: true
		},
		{
			name: 'p__materno',
			type: 'string',
			useNull: true
		},
		{
			name: 'p__nombre',
			type: 'string',
			useNull: true
		},
		{
			name: 'p__fullname',
			type: 'string',
			persist: false
		},
		/*
		//primaryKey se aplica en el v5controller.php
		{
			name: 'a__id',
			type: 'int',
		},
		*/
		{
			name: 'a__id_field',
			type: 'int'
		},
		/*
		//foreignKey se aplica en el v5controller.php
		{
			name: 'a__id_record',
			type: 'int',
			useNull: true
		},*/
		{
			name: 'a__curp',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__rfc',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__calle',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__numero',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__colonia',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__cp',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		/*
		//no pude encadenar el store, en el formulario el valor del campo se va a null al tener un store vacio, y no me fue posible pre-cargar el store filtrado por la entidad
		{
			name: 'a__id_municipio',
			useNull: true,
 
			type: 'int',
		 
		},	*/
 
		{
			name: 'a__municipio',
			useNull: true,
 
			type: 'string',
		 
		},	
 
		{
			name: 'a__id_entidadf',
			useNull: true,
 
			type: 'int',
		 
		},
		{
			name: 'a__address',
			type: 'string',
			persist: false
		},
    ],

    proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?option=com_tsjdf_libros2&task=v4.read&store=sublibro&clave=personswaddress',
			create: 'index.php?option=com_tsjdf_libros2&task=v5.create&store=sublibro&clave=personswaddress',
			update: 'index.php?option=com_tsjdf_libros2&task=v5.update&store=sublibro&clave=personswaddress',
			destroy: 'index.php?option=com_tsjdf_libros2&task=v5.destroy&store=sublibro&clave=personswaddress'
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
        return !!data.a__calle && 
                !!data.a__numero && 
                !!data.a__colonia && 
                !!data.a__id_entidadf && 
                !!data.a__municipio;
    }
    
    /*validations: [
        {type: 'presence', field: 'a__calle'},
        {type: 'presence', field: 'a__numero'},
        {type: 'presence', field: 'a__colonia'},
        {type: 'presence', field: 'a__id_entidadf'},
        {type: 'presence', field: 'a__municipio'},
    ]*/
});/*
 * File: app/store/catalogo/acuerdo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.acuerdo', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.acuerdo',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=acuerdo',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/admision.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.admision', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.admision',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=admision',
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
                    name: 'admision',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/amparo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.amparo', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.amparo',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=amparo',
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
                    name: 'amparo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/amparo2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.amparo2', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.amparo2',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=amparo2',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/apelante.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.apelante', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.apelante',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=apelante',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/asunto.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.asunto', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.asunto',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=asunto',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/autoridad.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.autoridad', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.autoridad',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=autoridad',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/baja.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.baja', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.baja',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=baja',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/caracter.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.caracter', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.caracter',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=caracter',
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
                    name: 'caracter',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/clasificacion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.clasificacion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.clasificacion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=clasificacion',
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
                    name: 'clasificacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/country.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.country', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.country',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=country',
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
                    name: 'country',
                    type: 'string'
                },
                {
                    name: 'alfa2',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/cuantia.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.cuantia', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.cuantia',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=cuantia',
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
                    name: 'cuantia',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/currency.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.currency', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.currency',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=currency',
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
                    name: 'currency',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/delegaciones.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.delegaciones', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.delegaciones',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=delegaciones',
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
                    name: 'delegacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/devueltos.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.devueltos', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.devueltos',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=devueltos',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/ejecucion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.ejecucion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.ejecucion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=ejecucion',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/ejecutoria.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.ejecutoria', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.ejecutoria',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=ejecutoria',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/entidadesf.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.entidadesf', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            storeId: 'catalogo.entidadesf',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=entidadesf',
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
                    name: 'entidad',
                    type: 'string'
                },
                {
                    name: 'entidadfn',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/enviados.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.enviados', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.enviados',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=enviados',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/especialidades.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.especialidades', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.especialidades',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=especialidades',
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
                    name: 'especialidad',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/exhortos.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.exhortos', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.exhortos',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=exhortos',
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
                    name: 'exhorto',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general1.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general1', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general1',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=1',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general10.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general10', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general10',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=10',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general11.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general11', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general11',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=11',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general12.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general12', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general12',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=12',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general13.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general13', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general13',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=13',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general14.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general14', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general14',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=14',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general15.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general15', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general15',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=15',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general16.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general16', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general16',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=16',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general17.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general17', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general17',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=17',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general18.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general18', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general18',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=18',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general19.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general19', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general19',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=19',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general2', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general2',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=2',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general20.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general20', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general20',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=20',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general21.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general21', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general21',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=21',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general22.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general22', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general22',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=22',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general23.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general23', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general23',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=23',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general24.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general24', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general24',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=24',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general25.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general25', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general25',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=25',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general26.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general26', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general26',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=26',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general27.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general27', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general27',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=27',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general28.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general28', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general28',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=ijuridico',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general3.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general3', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general3',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=3',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general4.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general4', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general4',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=4',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general5.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general5', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general5',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=5',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general6.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general6', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general6',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=6',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general7.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general7', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general7',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=7',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general8.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general8', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general8',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=8',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/general9.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.general9', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.general9',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=9',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/informe.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.informe', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.informe',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=informe',
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
                    name: 'informe',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/lanzamientos.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.lanzamientos', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.lanzamientos',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=lanzamientos',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/libertades.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.libertades', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.libertades',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=libertades',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/libros.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.libros', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.libros',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=libros',
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
                    name: 'id_tipoorgano',
                    type: 'int',
					useNull: true,
                },
                {
                    name: 'id_materia',
                    type: 'int',
					useNull: true,
                },
                {
                    name: 'nombre',
                    type: 'string'
                },
                {
                    name: 'clave',
                    type: 'string'
                },
                {
                    name: 'tabla',
                    type: 'string'
                },
                /*{
                    name: 'view',
                    type: 'string'
                },
                {
                    name: 'url',
                    type: 'string'
                },

                {
                    name: 'ordering',
                    type: 'int'
                },*/
                {
                    name: 'published',
                    type: 'boolean'
                },
                {
                    name: 'distribution',
                    type: 'int'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/materia.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.materia', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.materia',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=materia',
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
                    name: 'materia',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/motivo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.motivo', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.motivo',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=motivo',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/municipios.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.municipios', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            //remoteFilter: true,
			autoLoad: true,//debe ser false para que se active con el combo
            autoSync: true,
            storeId: 'catalogo.municipios',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=municipios',
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
                    name: 'id_entidadf',
                    type: 'int'
                },
                {
                    name: 'municipio',
                    type: 'string'
                },
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/notificacion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.notificacion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.notificacion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=notificacion',
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
                    name: 'notificacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});Ext.define('tsjdf.store.catalogo.organos', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'catalogo.organos',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=organos',
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
                    name: 'organo',
                    type: 'string'
                },{
                    name: 'numero',
                    type: 'int',
					useNull: true,
                },{
                    name: 'id_tipoorgano',
                    type: 'int'
                },{
                    name: 'id_materia',
                    type: 'int'
                }
            ]
        }, cfg)]);
    }
});Ext.define('tsjdf.store.catalogo.organosextintos', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'catalogo.organosextintos',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=organosextintos',
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
                    name: 'organo',
                    type: 'string'
                },{
                    name: 'numero',
                    type: 'int',
					useNull: true,
                },{
                    name: 'id_tipoorgano',
                    type: 'int'
                },{
                    name: 'id_materia',
                    type: 'int'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/otro.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.otro', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.otro',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=13',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/procedencia.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.procedencia', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.procedencia',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=procedencia',
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
                    name: 'procedencia',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/procedimiento.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.procedimiento', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.procedimiento',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=procedimiento',
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
                    name: 'procedimiento',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/reclusorios.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.reclusorios', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.reclusorios',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=reclusorios',
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
                    name: 'reclusorio',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/reclusorios2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.reclusorios2', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.reclusorios2',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=reclusorios2',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/reclusorios3.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.reclusorios3', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.reclusorios3',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=reclusorios3',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/recurso.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.recurso', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.recurso',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=recurso',
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
                    name: 'recurso',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion2', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion2',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion2',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion3.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion3', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion3',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion3',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion4.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion4', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion4',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion4',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion5.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion5', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion5',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion5',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion6.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion6', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion6',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion6',
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
                    name: 'resolucion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion7.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion7', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion7',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion7',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/resolucion8.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.resolucion8', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.resolucion8',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=resolucion8',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/roles.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.roles', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.roles',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo2&clave=25',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/secretarias.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.secretarias', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.secretarias',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=secretarias',
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
                    name: 'secretaria',
                    type: 'string'
                },
                {
                    name: 'id_organo',
                    type: 'int'
                },
                {
                    name: 'description',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/sexo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.sexo', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'catalogo.sexo',
            data: [
                {
                    id: 0,
                    text: 'Masculino'
                },
                {
                    id: 1,
                    text: 'Femenino'
                }
            ],
            pageSize: -1,
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/SiNo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.SiNo', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'catalogo.SiNo',
            data: [
                {
                    id: 0,
                    text: 'No'
                },
                {
                    id: 1,
                    text: 'Si'
                }
            ],
            pageSize: -1,
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/situacion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.situacion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.situacion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=situacion',
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
                    name: 'situacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/situacion2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.situacion2', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.situacion2',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=situacion2',
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
                    name: 'situacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/situacion3.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.situacion3', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.situacion3',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=situacion3',
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
                    name: 'situacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/situacion4.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.situacion4', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.situacion4',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=situacion4',
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
                    name: 'situacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/situacion5.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.situacion5', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.situacion5',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=situacion5',
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
                    name: 'situacion',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/talvez.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.talvez', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.talvez',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=talvez',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipoapelacion.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipoapelacion', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipoapelacion',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipoapelacion',
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
                    name: 'tipo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipoaudiencia.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipoaudiencia', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipoaudiencia',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipoaudiencia',
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
                    name: 'tipo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipoauxiliar.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipoauxiliar', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipoauxiliar',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipoauxiliar',
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
                    name: 'tipo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipodiligencia.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipodiligencia', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipodiligencia',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipodiligencia',
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
                    name: 'tipo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipojuicio.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipojuicio', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipojuicio',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipojuicio',
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
                    name: 'tipojuicio',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/tipoorgano.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.tipoorgano', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.tipoorgano',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=tipoorgano',
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
                    name: 'tipo',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/*
 * File: app/store/catalogo/titular.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tsjdf.store.catalogo.titular', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'catalogo.titular',
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
                url: 'index.php?option=com_tsjdf_libros2&task=v4.read&tmpl=component&store=catalogo&clave=titular',
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
                    name: 'text',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});/**
 * Base class from Ext.ux.TabReorderer.
 */
Ext.define('Ext.ux.BoxReorderer', {
    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} itemSelector
     * A {@link Ext.DomQuery DomQuery} selector which identifies the encapsulating elements of child
     * Components which participate in reordering.
     */
    itemSelector: '.x-box-item',

    /**
     * @cfg {Mixed} animate
     * If truthy, child reordering is animated so that moved boxes slide smoothly into position.
     * If this option is numeric, it is used as the animation duration in milliseconds.
     */
    animate: 100,

    constructor: function() {
        this.addEvents(
            /**
             * @event StartDrag
             * Fires when dragging of a child Component begins.
             * @param {Ext.ux.BoxReorderer} this
             * @param {Ext.container.Container} container The owning Container
             * @param {Ext.Component} dragCmp The Component being dragged
             * @param {Number} idx The start index of the Component being dragged.
             */
             'StartDrag',
            /**
             * @event Drag
             * Fires during dragging of a child Component.
             * @param {Ext.ux.BoxReorderer} this
             * @param {Ext.container.Container} container The owning Container
             * @param {Ext.Component} dragCmp The Component being dragged
             * @param {Number} startIdx The index position from which the Component was initially dragged.
             * @param {Number} idx The current closest index to which the Component would drop.
             */
             'Drag',
            /**
             * @event ChangeIndex
             * Fires when dragging of a child Component causes its drop index to change.
             * @param {Ext.ux.BoxReorderer} this
             * @param {Ext.container.Container} container The owning Container
             * @param {Ext.Component} dragCmp The Component being dragged
             * @param {Number} startIdx The index position from which the Component was initially dragged.
             * @param {Number} idx The current closest index to which the Component would drop.
             */
             'ChangeIndex',
            /**
             * @event Drop
             * Fires when a child Component is dropped at a new index position.
             * @param {Ext.ux.BoxReorderer} this
             * @param {Ext.container.Container} container The owning Container
             * @param {Ext.Component} dragCmp The Component being dropped
             * @param {Number} startIdx The index position from which the Component was initially dragged.
             * @param {Number} idx The index at which the Component is being dropped.
             */
             'Drop'
        );
        this.mixins.observable.constructor.apply(this, arguments);
    },

    init: function(container) {
        var me = this;
 
        me.container = container;
 
        // Set our animatePolicy to animate the start position (ie x for HBox, y for VBox)
        me.animatePolicy = {};
        me.animatePolicy[container.getLayout().names.x] = true;
        
        

        // Initialize the DD on first layout, when the innerCt has been created.
        me.container.on({
            scope: me,
            boxready: me.afterFirstLayout,
            beforedestroy: me.onContainerDestroy
        });
    },

    /**
     * @private Clear up on Container destroy
     */
    onContainerDestroy: function() {
        var dd = this.dd;
        if (dd) {
            dd.unreg();
            this.dd = null;
        }
    },

    afterFirstLayout: function() {
        var me = this,
            layout = me.container.getLayout(),
            names = layout.names,
            dd;
            
        // Create a DD instance. Poke the handlers in.
        // TODO: Ext5's DD classes should apply config to themselves.
        // TODO: Ext5's DD classes should not use init internally because it collides with use as a plugin
        // TODO: Ext5's DD classes should be Observable.
        // TODO: When all the above are trus, this plugin should extend the DD class.
        dd = me.dd = Ext.create('Ext.dd.DD', layout.innerCt, me.container.id + '-reorderer');
        Ext.apply(dd, {
            animate: me.animate,
            reorderer: me,
            container: me.container,
            getDragCmp: this.getDragCmp,
            clickValidator: Ext.Function.createInterceptor(dd.clickValidator, me.clickValidator, me, false),
            onMouseDown: me.onMouseDown,
            startDrag: me.startDrag,
            onDrag: me.onDrag,
            endDrag: me.endDrag,
            getNewIndex: me.getNewIndex,
            doSwap: me.doSwap,
            findReorderable: me.findReorderable
        });

        // Decide which dimension we are measuring, and which measurement metric defines
        // the *start* of the box depending upon orientation.
        dd.dim = names.width;
        dd.startAttr = names.beforeX;
        dd.endAttr = names.afterX;
    },

    getDragCmp: function(e) {
        return this.container.getChildByElement(e.getTarget(this.itemSelector, 10));
    },

    // check if the clicked component is reorderable
    clickValidator: function(e) {
        var cmp = this.getDragCmp(e);

        // If cmp is null, this expression MUST be coerced to boolean so that createInterceptor is able to test it against false
        return !!(cmp && cmp.reorderable !== false);
    },

    onMouseDown: function(e) {
        var me = this,
            container = me.container,
            containerBox,
            cmpEl,
            cmpBox;

        // Ascertain which child Component is being mousedowned
        me.dragCmp = me.getDragCmp(e);
        if (me.dragCmp) {
            cmpEl = me.dragCmp.getEl();
            me.startIndex = me.curIndex = container.items.indexOf(me.dragCmp);

            // Start position of dragged Component
            cmpBox = cmpEl.getBox();

            // Last tracked start position
            me.lastPos = cmpBox[this.startAttr];

            // Calculate constraints depending upon orientation
            // Calculate offset from mouse to dragEl position
            containerBox = container.el.getBox();
            if (me.dim === 'width') {
                me.minX = containerBox.left;
                me.maxX = containerBox.right - cmpBox.width;
                me.minY = me.maxY = cmpBox.top;
                me.deltaX = e.getPageX() - cmpBox.left;
            } else {
                me.minY = containerBox.top;
                me.maxY = containerBox.bottom - cmpBox.height;
                me.minX = me.maxX = cmpBox.left;
                me.deltaY = e.getPageY() - cmpBox.top;
            }
            me.constrainY = me.constrainX = true;
        }
    },

    startDrag: function() {
        var me = this,
            dragCmp = me.dragCmp;
            
        if (dragCmp) {
            // For the entire duration of dragging the *Element*, defeat any positioning and animation of the dragged *Component*
            dragCmp.setPosition = Ext.emptyFn;
            dragCmp.animate = false;

            // Animate the BoxLayout just for the duration of the drag operation.
            if (me.animate) {
                me.container.getLayout().animatePolicy = me.reorderer.animatePolicy;
            }
            // We drag the Component element
            me.dragElId = dragCmp.getEl().id;
            me.reorderer.fireEvent('StartDrag', me, me.container, dragCmp, me.curIndex);
            // Suspend events, and set the disabled flag so that the mousedown and mouseup events
            // that are going to take place do not cause any other UI interaction.
            dragCmp.suspendEvents();
            dragCmp.disabled = true;
            dragCmp.el.setStyle('zIndex', 100);
        } else {
            me.dragElId = null;
        }
    },

    /**
     * @private
     * Find next or previous reorderable component index.
     * @param {Number} newIndex The initial drop index.
     * @return {Number} The index of the reorderable component.
     */
    findReorderable: function(newIndex) {
        var me = this,
            items = me.container.items,
            newItem;

        if (items.getAt(newIndex).reorderable === false) {
            newItem = items.getAt(newIndex);
            if (newIndex > me.startIndex) {
                 while(newItem && newItem.reorderable === false) {
                    newIndex++;
                    newItem = items.getAt(newIndex);
                }
            } else {
                while(newItem && newItem.reorderable === false) {
                    newIndex--;
                    newItem = items.getAt(newIndex);
                }
            }
        }

        newIndex = Math.min(Math.max(newIndex, 0), items.getCount() - 1);

        if (items.getAt(newIndex).reorderable === false) {
            return -1;
        }
        return newIndex;
    },

    /**
     * @private
     * Swap 2 components.
     * @param {Number} newIndex The initial drop index.
     */
    doSwap: function(newIndex) {
        var me = this,
            items = me.container.items,
            container = me.container,
            wasRoot = me.container._isLayoutRoot,
            orig, dest, tmpIndex, temp;

        newIndex = me.findReorderable(newIndex);

        if (newIndex === -1) {
            return;
        }

        me.reorderer.fireEvent('ChangeIndex', me, container, me.dragCmp, me.startIndex, newIndex);
        orig = items.getAt(me.curIndex);
        dest = items.getAt(newIndex);
        items.remove(orig);
        tmpIndex = Math.min(Math.max(newIndex, 0), items.getCount() - 1);
        items.insert(tmpIndex, orig);
        items.remove(dest);
        items.insert(me.curIndex, dest);

        // Make the Box Container the topmost layout participant during the layout.
        container._isLayoutRoot = true;
        container.updateLayout();
        container._isLayoutRoot = wasRoot;
        me.curIndex = newIndex;
    },

    onDrag: function(e) {
        var me = this,
            newIndex;

        newIndex = me.getNewIndex(e.getPoint());
        if ((newIndex !== undefined)) {
            me.reorderer.fireEvent('Drag', me, me.container, me.dragCmp, me.startIndex, me.curIndex);
            me.doSwap(newIndex);
        }

    },

    endDrag: function(e) {
        if (e) {
            e.stopEvent();
        }
        var me = this,
            layout = me.container.getLayout(),
            temp;

        if (me.dragCmp) {
            delete me.dragElId;

            // Reinstate the Component's positioning method after mouseup, and allow the layout system to animate it.
            delete me.dragCmp.setPosition;
            me.dragCmp.animate = true;
            
            // Ensure the lastBox is correct for the animation system to restore to when it creates the "from" animation frame
            me.dragCmp.lastBox[layout.names.x] = me.dragCmp.getPosition(true)[layout.names.widthIndex];

            // Make the Box Container the topmost layout participant during the layout.
            me.container._isLayoutRoot = true;
            me.container.updateLayout();
            me.container._isLayoutRoot = undefined;
            
            // Attempt to hook into the afteranimate event of the drag Component to call the cleanup
            temp = Ext.fx.Manager.getFxQueue(me.dragCmp.el.id)[0];
            if (temp) {
                temp.on({
                    afteranimate: me.reorderer.afterBoxReflow,
                    scope: me
                });
            } 
            // If not animated, clean up after the mouseup has happened so that we don't click the thing being dragged
            else {
                Ext.Function.defer(me.reorderer.afterBoxReflow, 1, me);
            }

            if (me.animate) {
                delete layout.animatePolicy;
            }
            me.reorderer.fireEvent('drop', me, me.container, me.dragCmp, me.startIndex, me.curIndex);
        }
    },

    /**
     * @private
     * Called after the boxes have been reflowed after the drop.
     * Re-enabled the dragged Component.
     */
    afterBoxReflow: function() {
        var me = this;
        me.dragCmp.el.setStyle('zIndex', '');
        me.dragCmp.disabled = false;
        me.dragCmp.resumeEvents();
    },

    /**
     * @private
     * Calculate drop index based upon the dragEl's position.
     */
    getNewIndex: function(pointerPos) {
        var me = this,
            dragEl = me.getDragEl(),
            dragBox = Ext.fly(dragEl).getBox(),
            targetEl,
            targetBox,
            targetMidpoint,
            i = 0,
            it = me.container.items.items,
            ln = it.length,
            lastPos = me.lastPos;

        me.lastPos = dragBox[me.startAttr];

        for (; i < ln; i++) {
            targetEl = it[i].getEl();

            // Only look for a drop point if this found item is an item according to our selector
            if (targetEl.is(me.reorderer.itemSelector)) {
                targetBox = targetEl.getBox();
                targetMidpoint = targetBox[me.startAttr] + (targetBox[me.dim] >> 1);
                if (i < me.curIndex) {
                    if ((dragBox[me.startAttr] < lastPos) && (dragBox[me.startAttr] < (targetMidpoint - 5))) {
                        return i;
                    }
                } else if (i > me.curIndex) {
                    if ((dragBox[me.startAttr] > lastPos) && (dragBox[me.endAttr] > (targetMidpoint + 5))) {
                        return i;
                    }
                }
            }
        }
    }
});
/**
 * This plugin can enable a cell to cell drag and drop operation within the same grid view.
 *
 * Note that the plugin must be added to the grid view, not to the grid panel. For example, using {@link Ext.panel.Table viewConfig}:
 *
 *      viewConfig: {
 *          plugins: {
 *              ptype: 'celldragdrop',
 *
 *              // Remove text from source cell and replace with value of emptyText.
 *              applyEmptyText: true,
 *
 *              //emptyText: Ext.String.htmlEncode('<<foo>>'),
 *
 *              // Will only allow drops of the same type.
 *              enforceType: true
 *          }
 *      }
 */
Ext.define('Ext.ux.CellDragDrop', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.celldragdrop',

    uses: ['Ext.view.DragZone'],

    /**
     * @cfg {Boolean} enforceType
     * Set to `true` to only allow drops of the same type.
     *
     * Defaults to `false`.
     */
    enforceType: false,

    /**
     * @cfg {Boolean} applyEmptyText
     * If `true`, then use the value of {@link #emptyText} to replace the drag record's value after a node drop.
     * Note that, if dropped on a cell of a different type, it will convert the default text according to its own conversion rules.
     *
     * Defaults to `false`.
     */
    applyEmptyText: false,

    /**
     * @cfg {Boolean} emptyText
     * If {@link #applyEmptyText} is `true`, then this value as the drag record's value after a node drop.
     *
     * Defaults to an empty string.
     */
    emptyText: '',

    /**
     * @cfg {Boolean} dropBackgroundColor
     * The default background color for when a drop is allowed.
     *
     * Defaults to green.
     */
    dropBackgroundColor: 'green',

    /**
     * @cfg {Boolean} noDropBackgroundColor
     * The default background color for when a drop is not allowed.
     *
     * Defaults to red.
     */
    noDropBackgroundColor: 'red',

    //<locale>
    /**
     * @cfg {String} dragText
     * The text to show while dragging.
     *
     * Two placeholders can be used in the text:
     *
     * - `{0}` The number of selected items.
     * - `{1}` 's' when more than 1 items (only useful for English).
     */
    dragText: '{0} selected row{1}',
    //</locale>

    /**
     * @cfg {String} ddGroup
     * A named drag drop group to which this object belongs. If a group is specified, then both the DragZones and
     * DropZone used by this plugin will only interact with other drag drop objects in the same group.
     */
    ddGroup: "GridDD",

    /**
     * @cfg {Boolean} enableDrop
     * Set to `false` to disallow the View from accepting drop gestures.
     */
    enableDrop: true,

    /**
     * @cfg {Boolean} enableDrag
     * Set to `false` to disallow dragging items from the View.
     */
    enableDrag: true,

    /**
     * @cfg {Object/Boolean} containerScroll
     * True to register this container with the Scrollmanager for auto scrolling during drag operations.
     * A {@link Ext.dd.ScrollManager} configuration may also be passed.
     */
    containerScroll: false,

    init: function (view) {
        var me = this;

        view.on('render', me.onViewRender, me, {
            single: true
        });
    },

    destroy: function () {
        var me = this;

        Ext.destroy(me.dragZone, me.dropZone);
    },

    enable: function () {
        var me = this;

        if (me.dragZone) {
            me.dragZone.unlock();
        }
        if (me.dropZone) {
            me.dropZone.unlock();
        }
        me.callParent();
    },

    disable: function () {
        var me = this;

        if (me.dragZone) {
            me.dragZone.lock();
        }
        if (me.dropZone) {
            me.dropZone.lock();
        }
        me.callParent();
    },

    onViewRender: function (view) {
        var me = this,
            scrollEl;

        if (me.enableDrag) {
            if (me.containerScroll) {
                scrollEl = view.getEl();
            }

            me.dragZone = new Ext.view.DragZone({
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText,
                containerScroll: me.containerScroll,
                scrollEl: scrollEl,
                getDragData: function (e) {
                    var view = this.view,
                        item = e.getTarget(view.getItemSelector()),
                        record = view.getRecord(item),
                        clickedEl = e.getTarget(view.getCellSelector()),
                        dragEl;

                    if (item) {
                        dragEl = document.createElement('div');
                        dragEl.className = 'x-form-text';
                        dragEl.appendChild(document.createTextNode(clickedEl.textContent || clickedEl.innerText));

                        return {
                            event: new Ext.EventObjectImpl(e),
                            ddel: dragEl,
                            item: e.target,
                            columnName: view.getGridColumns()[clickedEl.cellIndex].dataIndex,
                            record: record
                        };
                    }
                },

                onInitDrag: function (x, y) {
                    var self = this,
                        data = self.dragData,
                        view = self.view,
                        selectionModel = view.getSelectionModel(),
                        record = data.record,
                        el = data.ddel;

                    // Update the selection to match what would have been selected if the user had
                    // done a full click on the target node rather than starting a drag from it.
                    if (!selectionModel.isSelected(record)) {
                        selectionModel.select(record, true);
                    }

                    self.ddel.update(el.textContent || el.innerText);
                    self.proxy.update(self.ddel.dom);
                    self.onStartDrag(x, y);
                    return true;
                }
            });
        }

        if (me.enableDrop) {
            me.dropZone = new Ext.dd.DropZone(view.el, {
                view: view,
                ddGroup: me.dropGroup || me.ddGroup,
                containerScroll: true,

                getTargetFromEvent: function (e) {
                    var self = this,
                        v = self.view,
                        cell = e.getTarget(v.cellSelector),
                        row, columnIndex;

                    // Ascertain whether the mousemove is within a grid cell.
                    if (cell) {
                        row = v.findItemByChild(cell);
                        columnIndex = cell.cellIndex;

                        if (row && Ext.isDefined(columnIndex)) {
                            return {
                                node: cell,
                                record: v.getRecord(row),
                                columnName: self.view.up('grid').columns[columnIndex].dataIndex
                            };
                        }
                    }
                },

                // On Node enter, see if it is valid for us to drop the field on that type of column.
                onNodeEnter: function (target, dd, e, dragData) {
                    var self = this,
                        destType = target.record.fields.get(target.columnName).type.type.toUpperCase(),
                        sourceType = dragData.record.fields.get(dragData.columnName).type.type.toUpperCase();

                    delete self.dropOK;

                    // Return if no target node or if over the same cell as the source of the drag.
                    if (!target || target.node === dragData.item.parentNode) {
                        return;
                    }

                    // Check whether the data type of the column being dropped on accepts the
                    // dragged field type. If so, set dropOK flag, and highlight the target node.
                    if (me.enforceType && destType !== sourceType) {

                        self.dropOK = false;

                        if (me.noDropCls) {
                            Ext.fly(target.node).addCls(me.noDropCls);
                        } else {
                            Ext.fly(target.node).applyStyles({
                                backgroundColor: me.noDropBackgroundColor
                            });
                        }

                        return;
                    }

                    self.dropOK = true;

                    if (me.dropCls) {
                        Ext.fly(target.node).addCls(me.dropCls);
                    } else {
                        Ext.fly(target.node).applyStyles({
                            backgroundColor: me.dropBackgroundColor
                        });
                    }
                },

                // Return the class name to add to the drag proxy. This provides a visual indication
                // of drop allowed or not allowed.
                onNodeOver: function (target, dd, e, dragData) {
                    return this.dropOK ? this.dropAllowed : this.dropNotAllowed;
                },

                // Highlight the target node.
                onNodeOut: function (target, dd, e, dragData) {
                    var cls = this.dropOK ? me.dropCls : me.noDropCls;

                    if (cls) {
                        Ext.fly(target.node).removeCls(cls);
                    } else {
                        Ext.fly(target.node).applyStyles({
                            backgroundColor: ''
                        });
                    }
                },

                // Process the drop event if we have previously ascertained that a drop is OK.
                onNodeDrop: function (target, dd, e, dragData) {
                    if (this.dropOK) {
                        target.record.set(target.columnName, dragData.record.get(dragData.columnName));
                        if (me.applyEmptyText) {
                            dragData.record.set(dragData.columnName, me.emptyText);
                        }
                        return true;
                    }
                },

                onCellDrop: Ext.emptyFn
            });
        }
    }
});
/**
 * @class Ext.ux.DataTip
 * @extends Ext.ToolTip.
 * This plugin implements automatic tooltip generation for an arbitrary number of child nodes *within* a Component.
 *
 * This plugin is applied to a high level Component, which contains repeating elements, and depending on the host Component type,
 * it automatically selects a {@link Ext.ToolTip#delegate delegate} so that it appears when the mouse enters a sub-element.
 *
 * When applied to a GridPanel, this ToolTip appears when over a row, and the Record's data is applied
 * using this object's {@link #tpl} template.
 *
 * When applied to a DataView, this ToolTip appears when over a view node, and the Record's data is applied
 * using this object's {@link #tpl} template.
 *
 * When applied to a TreePanel, this ToolTip appears when over a tree node, and the Node's {@link Ext.data.Model} record data is applied
 * using this object's {@link #tpl} template.
 *
 * When applied to a FormPanel, this ToolTip appears when over a Field, and the Field's `tooltip` property is used is applied
 * using this object's {@link #tpl} template, or if it is a string, used as HTML content. If there is no `tooltip` property,
 * the field itself is used as the template's data object.
 *
 * If more complex logic is needed to determine content, then the {@link #beforeshow} event may be used.
 * This class also publishes a **`beforeshowtip`** event through its host Component. The *host Component* fires the
 * **`beforeshowtip`** event.
 */
Ext.define('Ext.ux.DataTip', function(DataTip) {

//  Target the body (if the host is a Panel), or, if there is no body, the main Element.
    function onHostRender() {
        var e = this.isXType('panel') ? this.body : this.el;
        if (this.dataTip.renderToTarget) {
            this.dataTip.render(e);
        }
        this.dataTip.setTarget(e);
    }

    function updateTip(tip, data) {
        if (tip.rendered) {
            if (tip.host.fireEvent('beforeshowtip', tip.eventHost, tip, data) === false) {
                return false;
            }
            tip.update(data);
        } else {
            if (Ext.isString(data)) {
                tip.html = data;
            } else {
                tip.data = data;
            }
        }
    }

    function beforeViewTipShow(tip) {
        var rec = this.view.getRecord(tip.triggerElement),
            data;

        if (rec) {
            data = tip.initialConfig.data ? Ext.apply(tip.initialConfig.data, rec.data) : rec.data;
            return updateTip(tip, data);
        } else {
            return false;
        }
    }

    function beforeFormTipShow(tip) {
        var field = Ext.getCmp(tip.triggerElement.id);
        if (field && (field.tooltip || tip.tpl)) {
            return updateTip(tip, field.tooltip || field);
        } else {
            return false;
        }
    }

    return {
        extend: 'Ext.tip.ToolTip',

        mixins: {
            plugin: 'Ext.AbstractPlugin'
        },

        alias: 'plugin.datatip',

        lockableScope: 'both',

        constructor: function(config) {
            var me = this;
            me.callParent([config]);
            me.mixins.plugin.constructor.call(me, config);
        },

        init: function(host) {
            var me = this;

            me.mixins.plugin.init.call(me, host);
            host.dataTip = me;
            me.host = host;

            if (host.isXType('tablepanel')) {
                me.view = host.getView();
                if (host.ownerLockable) {
                    me.host = host.ownerLockable;
                }
                me.delegate = me.delegate || me.view.getDataRowSelector();
                me.on('beforeshow', beforeViewTipShow);
            } else if (host.isXType('dataview')) {
                me.view = me.host;
                me.delegate = me.delegate || host.itemSelector;
                me.on('beforeshow', beforeViewTipShow);
            } else if (host.isXType('form')) {
                me.delegate = '.' + Ext.form.Labelable.prototype.formItemCls;
                me.on('beforeshow', beforeFormTipShow);
            } else if (host.isXType('combobox')) {
                me.view = host.getPicker();
                me.delegate = me.delegate || me.view.getItemSelector();
                me.on('beforeshow', beforeViewTipShow);
            }
            if (host.rendered) {
                onHostRender.call(host);
            } else {
                host.onRender = Ext.Function.createSequence(host.onRender, onHostRender);
            }
        }
    };
});/**
 * @author Ed Spencer (http://sencha.com)
 * Transition plugin for DataViews
 */
Ext.ux.DataViewTransition = Ext.extend(Object, {

    /**
     * @property defaults
     * @type Object
     * Default configuration options for all DataViewTransition instances
     */
    defaults: {
        duration  : 750,
        idProperty: 'id'
    },
    
    /**
     * Creates the plugin instance, applies defaults
     * @constructor
     * @param {Object} config Optional config object
     */
    constructor: function(config) {
        Ext.apply(this, config || {}, this.defaults);
    },

    /**
     * Initializes the transition plugin. Overrides the dataview's default refresh function
     * @param {Ext.view.View} dataview The dataview
     */
    init: function(dataview) {
        /**
         * @property dataview
         * @type Ext.view.View
         * Reference to the DataView this instance is bound to
         */
        this.dataview = dataview;
        
        var idProperty = this.idProperty;
        dataview.blockRefresh = true;
        dataview.updateIndexes = Ext.Function.createSequence(dataview.updateIndexes, function() {
            this.getTargetEl().select(this.itemSelector).each(function(element, composite, index) {
                element.id = element.dom.id = Ext.util.Format.format("{0}-{1}", dataview.id, dataview.store.getAt(index).get(idProperty));
            }, this);
        }, dataview);
        
        /**
         * @property dataviewID
         * @type String
         * The string ID of the DataView component. This is used internally when animating child objects
         */
        this.dataviewID = dataview.id;
        
        /**
         * @property cachedStoreData
         * @type Object
         * A cache of existing store data, keyed by id. This is used to determine
         * whether any items were added or removed from the store on data change
         */
        this.cachedStoreData = {};
        
        //var store = dataview.store;
        
        //catch the store data with the snapshot immediately
        this.cacheStoreData(dataview.store.snapshot);
        
        dataview.store.on('datachanged', function(store) {
            var parentEl = dataview.getTargetEl(),
                calcItem = store.getAt(0),
                added    = this.getAdded(store),
                removed  = this.getRemoved(store),
                previous = this.getRemaining(store),
                existing = Ext.apply({}, previous, added);
            
            //hide old items
            Ext.each(removed, function(item) {
                Ext.fly(this.dataviewID + '-' + item.get(this.idProperty)).animate({
                    remove  : false,
                    duration: duration,
                    opacity : 0,
                    useDisplay: true
                });
            }, this);
            
            //store is empty
            if (calcItem == undefined) {
                this.cacheStoreData(store);
                return;
            }
            
            var el = Ext.get(this.dataviewID + "-" + calcItem.get(this.idProperty));
            
            //calculate the number of rows and columns we have
            var itemCount   = store.getCount(),
                itemWidth   = el.getMargin('lr') + el.getWidth(),
                itemHeight  = el.getMargin('bt') + el.getHeight(),
                dvWidth     = parentEl.getWidth(),
                columns     = Math.floor(dvWidth / itemWidth),
                rows        = Math.ceil(itemCount / columns),
                currentRows = Math.ceil(this.getExistingCount() / columns);
            
            //make sure the correct styles are applied to the parent element
            parentEl.applyStyles({
                display : 'block',
                position: 'relative'
            });
            
            //stores the current top and left values for each element (discovered below)
            var oldPositions = {},
                newPositions = {},
                elCache      = {};
            
            //find current positions of each element and save a reference in the elCache
            Ext.iterate(previous, function(id, item) {
                var id = item.get(this.idProperty),
                    el = elCache[id] = Ext.get(this.dataviewID + '-' + id);
                
                oldPositions[id] = {
                    top : el.getY()  - parentEl.getY()  - el.getMargin('t') - parentEl.getPadding('t'),
                    left: el.getX() - parentEl.getX() - el.getMargin('l') - parentEl.getPadding('l')
                };
            }, this);
            
            //set absolute positioning on all DataView items. We need to set position, left and 
            //top at the same time to avoid any flickering
            Ext.iterate(previous, function(id, item) {
                var oldPos = oldPositions[id],
                    el     = elCache[id];
                    
                if (el.getStyle('position') != 'absolute') {
                    elCache[id].applyStyles({
                        position: 'absolute',
                        left    : oldPos.left + "px",
                        top     : oldPos.top + "px",

                        //we set the width here to make ListViews work correctly. This is not needed for DataViews
                        width   : el.getWidth(!Ext.isIE || Ext.isStrict),
                        height  : el.getHeight(!Ext.isIE || Ext.isStrict)
                    });
                }
            });
            
            //get new positions
            var index = 0;
            Ext.iterate(store.data.items, function(item) {
                var id = item.get(idProperty),
                    el = elCache[id];
                
                var column = index % columns,
                    row    = Math.floor(index / columns),
                    top    = row    * itemHeight,
                    left   = column * itemWidth;
                
                newPositions[id] = {
                    top : top,
                    left: left
                };
                
                index ++;
            }, this);
            
            //do the movements
            var startTime  = new Date(),
                duration   = this.duration,
                dataviewID = this.dataviewID;
            
            var doAnimate = function() {
                var elapsed  = new Date() - startTime,
                    fraction = elapsed / duration;
                
                if (fraction >= 1) {
                    for (var id in newPositions) {
                        Ext.fly(dataviewID + '-' + id).applyStyles({
                            top : newPositions[id].top + "px",
                            left: newPositions[id].left + "px"
                        });
                    }
                    
                    Ext.TaskManager.stop(task);
                } else {
                    //move each item
                    for (var id in newPositions) {
                        if (!previous[id]) continue;
                        
                        var oldPos  = oldPositions[id],
                            newPos  = newPositions[id],
                            oldTop  = oldPos.top,
                            newTop  = newPos.top,
                            oldLeft = oldPos.left,
                            newLeft = newPos.left,
                            diffTop = fraction * Math.abs(oldTop  - newTop),
                            diffLeft= fraction * Math.abs(oldLeft - newLeft),
                            midTop  = oldTop  > newTop  ? oldTop  - diffTop  : oldTop  + diffTop,
                            midLeft = oldLeft > newLeft ? oldLeft - diffLeft : oldLeft + diffLeft;
                        
                        Ext.fly(dataviewID + '-' + id).applyStyles({
                            top : midTop + "px",
                            left: midLeft + "px"
                        });
                    }
                }
            };
            
            var task = {
                run     : doAnimate,
                interval: 20,
                scope   : this
            };
            
            Ext.TaskManager.start(task);
            
            //<debug>
            var count = 0;
            for (var k in added) {
                count++;
            }
            if (Ext.global.console && Ext.global.console.log) {
                Ext.global.console.log('added:', count);
            }
            //</debug>
            
            //show new items
            Ext.iterate(added, function(id, item) {
                Ext.fly(this.dataviewID + '-' + item.get(this.idProperty)).applyStyles({
                    top    : newPositions[item.get(this.idProperty)].top + "px",
                    left   : newPositions[item.get(this.idProperty)].left + "px"
                });
                
                Ext.fly(this.dataviewID + '-' + item.get(this.idProperty)).animate({
                    remove  : false,
                    duration: duration,
                    opacity : 1
                });
            }, this);
            
            this.cacheStoreData(store);
        }, this);
    },
    
    /**
     * Caches the records from a store locally for comparison later
     * @param {Ext.data.Store} store The store to cache data from
     */
    cacheStoreData: function(store) {
        this.cachedStoreData = {};
        
        store.each(function(record) {
             this.cachedStoreData[record.get(this.idProperty)] = record;
        }, this);
    },
    
    /**
     * Returns all records that were already in the DataView
     * @return {Object} All existing records
     */
    getExisting: function() {
        return this.cachedStoreData;
    },
    
    /**
     * Returns the total number of items that are currently visible in the DataView
     * @return {Number} The number of existing items
     */
    getExistingCount: function() {
        var count = 0,
            items = this.getExisting();
        
        for (var k in items) count++;
        
        return count;
    },
    
    /**
     * Returns all records in the given store that were not already present
     * @param {Ext.data.Store} store The updated store instance
     * @return {Object} Object of records not already present in the dataview in format {id: record}
     */
    getAdded: function(store) {
        var added = {};
        
        store.each(function(record) {
            if (this.cachedStoreData[record.get(this.idProperty)] == undefined) {
                added[record.get(this.idProperty)] = record;
            }
        }, this);
        
        return added;
    },
    
    /**
     * Returns all records that are present in the DataView but not the new store
     * @param {Ext.data.Store} store The updated store instance
     * @return {Array} Array of records that used to be present
     */
    getRemoved: function(store) {
        var removed = [];
        
        for (var id in this.cachedStoreData) {
            if (store.findExact(this.idProperty, Number(id)) == -1) {
                removed.push(this.cachedStoreData[id]);
            }
        }
        
        return removed;
    },
    
    /**
     * Returns all records that are already present and are still present in the new store
     * @param {Ext.data.Store} store The updated store instance
     * @return {Object} Object of records that are still present from last time in format {id: record}
     */
    getRemaining: function(store) {
        var remaining = {};

        store.each(function(record) {
            if (this.cachedStoreData[record.get(this.idProperty)] != undefined) {
                remaining[record.get(this.idProperty)] = record;
            }
        }, this);

        return remaining;
    }
});
/**
 * <p>A plugin for Field Components which creates clones of the Field for as
 * long as the user keeps filling them. Leaving the final one blank ends the repeating series.</p>
 * <p>Usage:</p>
 * <pre><code>
    {
        xtype: 'combo',
        plugins: [ Ext.ux.FieldReplicator ],
        triggerAction: 'all',
        fieldLabel: 'Select recipient',
        store: recipientStore
    }
 * </code></pre>
 */
Ext.define('Ext.ux.FieldReplicator', {
    singleton: true,

    init: function(field) {
        // Assign the field an id grouping it with fields cloned from it. If it already
        // has an id that means it is itself a clone.
        if (!field.replicatorId) {
            field.replicatorId = Ext.id();
        }

        field.on('blur', this.onBlur, this);
    },

    onBlur: function(field) {
        var ownerCt = field.ownerCt,
            replicatorId = field.replicatorId,
            isEmpty = Ext.isEmpty(field.getRawValue()),
            siblings = ownerCt.query('[replicatorId=' + replicatorId + ']'),
            isLastInGroup = siblings[siblings.length - 1] === field,
            clone, idx;

        // If a field before the final one was blanked out, remove it
        if (isEmpty && !isLastInGroup) {
            Ext.Function.defer(field.destroy, 10, field); //delay to allow tab key to move focus first
        }
        // If the field is the last in the list and has a value, add a cloned field after it
        else if(!isEmpty && isLastInGroup) {
            if (field.onReplicate) {
                field.onReplicate();
            }
            clone = field.cloneConfig({replicatorId: replicatorId});
            idx = ownerCt.items.indexOf(field);
            ownerCt.add(idx + 1, clone);
        }
    }

});/**
 * @author Shea Frederick
 */
Ext.define('Ext.ux.GMapPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.gmappanel',
    
    requires: ['Ext.window.MessageBox'],
    
    initComponent : function(){
        Ext.applyIf(this,{
            plain: true,
            gmapType: 'map',
            border: false
        });
        
        this.callParent();        
    },
    
    afterFirstLayout : function(){
        var center = this.center;
        this.callParent();       
        
        if (center) {
            if (center.geoCodeAddr) {
                this.lookupCode(center.geoCodeAddr, center.marker);
            } else {
                this.createMap(center);
            }
        } else {
            Ext.Error.raise('center is required');
        }
              
    },
    
    createMap: function(center, marker) {
        var options = Ext.apply({}, this.mapOptions);
        
        options = Ext.applyIf(options, {
            zoom: 14,
            center: center,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
        this.gmap = new google.maps.Map(this.body.dom, options);
        if (marker) {
            this.addMarker(Ext.applyIf(marker, {
                position: center
            }));
        }
        
        Ext.each(this.markers, this.addMarker, this);
        this.fireEvent('mapready', this, this.gmap);
    },
    
    addMarker: function(marker) {
        marker = Ext.apply({
            map: this.gmap
        }, marker);
        
        if (!marker.position) {
            marker.position = new google.maps.LatLng(marker.lat, marker.lng);
        }
        var o =  new google.maps.Marker(marker);
        Ext.Object.each(marker.listeners, function(name, fn){
            google.maps.event.addListener(o, name, fn);    
        });
        return o;
    },
    
    lookupCode : function(addr, marker) {
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            address: addr
        }, Ext.Function.bind(this.onLookupComplete, this, [marker], true));
    },
    
    onLookupComplete: function(data, response, marker){
        if (response != 'OK') {
            Ext.MessageBox.alert('Error', 'An error occured: "' + response + '"');
            return;
        }
        this.createMap(data[0].geometry.location, marker);
    },
    
    afterComponentLayout : function(w, h){
        this.callParent(arguments);
        this.redraw();
    },
    
    redraw: function(){
        var map = this.gmap;
        if (map) {
            google.maps.event.trigger(map, 'resize');
        }
    }
 
});
/**
* Allows GroupTab to render a table structure.
*/
Ext.define('Ext.ux.GroupTabRenderer', {
    alias: 'plugin.grouptabrenderer',
    extend: 'Ext.AbstractPlugin',

    tableTpl: new Ext.XTemplate(
        '<div id="{view.id}-body" class="' + Ext.baseCSSPrefix + '{view.id}-table ' + Ext.baseCSSPrefix + 'grid-table-resizer" style="{tableStyle}">',
            '{%',
                'values.view.renderRows(values.rows, values.viewStartIndex, out);',
            '%}',
        '</div>',
        {
            priority: 5
        }
    ),

    rowTpl: new Ext.XTemplate(
        '{%',
            'Ext.Array.remove(values.itemClasses, "', Ext.baseCSSPrefix + 'grid-row");',
            'var dataRowCls = values.recordIndex === -1 ? "" : " ' + Ext.baseCSSPrefix + 'grid-data-row";',
        '%}',
        '<div {[values.rowId ? ("id=\\"" + values.rowId + "\\"") : ""]} ',
            'data-boundView="{view.id}" ',
            'data-recordId="{record.internalId}" ',
            'data-recordIndex="{recordIndex}" ',
            'class="' + Ext.baseCSSPrefix + 'grouptab-row {[values.itemClasses.join(" ")]} {[values.rowClasses.join(" ")]}{[dataRowCls]}" ',
            '{rowAttr:attributes}>',
            '<tpl for="columns">' +
                '{%',
                    'parent.view.renderCell(values, parent.record, parent.recordIndex, xindex - 1, out, parent)',
                 '%}',
            '</tpl>',
        '</div>',
        {
            priority: 5
        }
    ),

    cellTpl: new Ext.XTemplate(
        '{%values.tdCls = values.tdCls.replace(" ' + Ext.baseCSSPrefix + 'grid-cell "," ");%}',
        '<div class="' + Ext.baseCSSPrefix + 'grouptab-cell {tdCls}" {tdAttr}>',
            '<div {unselectableAttr} class="' + Ext.baseCSSPrefix + 'grid-cell-inner" style="text-align: {align}; {style};">{value}</div>',
            '<div class="x-grouptabs-corner x-grouptabs-corner-top-left"></div>',
            '<div class="x-grouptabs-corner x-grouptabs-corner-bottom-left"></div>',
        '</div>',
        {
            priority: 5
        }
    ),

    selectors: {
        // Outer table
        bodySelector: 'div.' + Ext.baseCSSPrefix + 'grid-table-resizer',

        // Element which contains rows
        nodeContainerSelector: 'div.' + Ext.baseCSSPrefix + 'grid-table-resizer',

        // row
        itemSelector: 'div.' + Ext.baseCSSPrefix + 'grouptab-row',

        // row which contains cells as opposed to wrapping rows
        dataRowSelector: 'div.' + Ext.baseCSSPrefix + 'grouptab-row',

        // cell
        cellSelector: 'div.' + Ext.baseCSSPrefix + 'grouptab-cell', 

        getCellSelector: function(header) {
            var result = 'div.' + Ext.baseCSSPrefix + 'grid-cell';
            if (header) {
                result += '-' + header.getItemId();
            }
            return result;
        }

    },

    init: function(grid) {
        var view = grid.getView(), 
            me = this;
        view.addTableTpl(me.tableTpl);
        view.addRowTpl(me.rowTpl);
        view.addCellTpl(me.cellTpl);
        Ext.apply(view, me.selectors);
    }
});



/**
 * @author Nicolas Ferrero
 * A TabPanel with grouping support.
 */
Ext.define('Ext.ux.GroupTabPanel', {
    extend: 'Ext.Container',

    alias: 'widget.grouptabpanel',

    requires:[
        'Ext.tree.Panel',
        'Ext.ux.GroupTabRenderer'
    ],

    baseCls : Ext.baseCSSPrefix + 'grouptabpanel',

    initComponent: function(config) {
        var me = this;

        Ext.apply(me, config);

        // Processes items to create the TreeStore and also set up
        // "this.cards" containing the actual card items.
        me.store = me.createTreeStore();

        me.layout = {
            type: 'hbox',
            align: 'stretch'
        };
        me.defaults = {
            border: false
        };

        me.items = [{
            xtype: 'treepanel',
            cls: 'x-tree-panel x-grouptabbar',
            width: 150,
            rootVisible: false,
            store: me.store,
            hideHeaders: true,
            animate: false,
            processEvent: Ext.emptyFn,
            border: false,
            plugins: [{
                ptype: 'grouptabrenderer'
            }],
            viewConfig: {
                overItemCls: '',
                getRowClass: me.getRowClass
            },
            columns: [{
                xtype: 'treecolumn',
                sortable: false,
                dataIndex: 'text',
                flex: 1,
                renderer: function (value, cell, node, idx1, idx2, store, tree) {
                    var cls = '';

                    if (node.parentNode && node.parentNode.parentNode === null) {
                        cls += ' x-grouptab-first';
                        if (node.previousSibling) {
                            cls += ' x-grouptab-prev';
                        }
                        if (!node.get('expanded') || node.firstChild == null) {
                            cls += ' x-grouptab-last';
                        }
                    } else if (node.nextSibling === null) {
                        cls += ' x-grouptab-last';
                    } else {
                        cls += ' x-grouptab-center';
                    }
                    if (node.data.activeTab) {
                        cls += ' x-active-tab';
                    }
                    cell.tdCls= 'x-grouptab'+ cls;

                    return value;
                }
             }]
        }, {
            xtype: 'container',
            flex: 1,
            layout: 'card',
            activeItem: me.mainItem,
            baseCls: Ext.baseCSSPrefix + 'grouptabcontainer',
            items: me.cards
        }];

        me.addEvents(
            /**
             * @event beforetabchange
             * Fires before a tab change (activated by {@link #setActiveTab}). Return false in any listener to cancel
             * the tabchange
             * @param {Ext.ux.GroupTabPanel} grouptabPanel The GroupTabPanel
             * @param {Ext.Component} newCard The card that is about to be activated
             * @param {Ext.Component} oldCard The card that is currently active
             */
            'beforetabchange',

            /**
             * @event tabchange
             * Fires when a new tab has been activated (activated by {@link #setActiveTab}).
             * @param {Ext.ux.GroupTabPanel} grouptabPanel The GroupTabPanel
             * @param {Ext.Component} newCard The newly activated item
             * @param {Ext.Component} oldCard The previously active item
             */
            'tabchange',

            /**
             * @event beforegroupchange
             * Fires before a group change (activated by {@link #setActiveGroup}). Return false in any listener to cancel
             * the groupchange
             * @param {Ext.ux.GroupTabPanel} grouptabPanel The GroupTabPanel
             * @param {Ext.Component} newGroup The root group card that is about to be activated
             * @param {Ext.Component} oldGroup The root group card that is currently active
             */
            'beforegroupchange',

            /**
             * @event groupchange
             * Fires when a new group has been activated (activated by {@link #setActiveGroup}).
             * @param {Ext.ux.GroupTabPanel} grouptabPanel The GroupTabPanel
             * @param {Ext.Component} newGroup The newly activated root group item
             * @param {Ext.Component} oldGroup The previously active root group item
             */
            'groupchange'
        );

        me.callParent(arguments);
        me.setActiveTab(me.activeTab);
        me.setActiveGroup(me.activeGroup);
        me.mon(me.down('treepanel').getSelectionModel(), 'select', me.onNodeSelect, me);
    },

    getRowClass: function(node, rowIndex, rowParams, store) {
        var cls = '';
        if (node.data.activeGroup) {
           cls += ' x-active-group';
        }
        return cls;
    },

    /**
     * @private
     * Node selection listener.
     */
    onNodeSelect: function (selModel, node) {
        var me = this,
            currentNode = me.store.getRootNode(),
            parent;

        if (node.parentNode && node.parentNode.parentNode === null) {
            parent = node;
        } else {
            parent = node.parentNode;
        }

        if (me.setActiveGroup(parent.get('id')) === false || me.setActiveTab(node.get('id')) === false) {
            return false;
        }

        while (currentNode) {
            currentNode.set('activeTab', false);
            currentNode.set('activeGroup', false);
            currentNode = currentNode.firstChild || currentNode.nextSibling || currentNode.parentNode.nextSibling;
        }

        parent.set('activeGroup', true);
        parent.eachChild(function(child) {
            child.set('activeGroup', true);
        });
        node.set('activeTab', true);
        selModel.view.refresh();
    },

    /**
     * Makes the given component active (makes it the visible card in the GroupTabPanel's CardLayout)
     * @param {Ext.Component} cmp The component to make active
     */
    setActiveTab: function(cmp) {
        var me = this,
            newTab = cmp,
            oldTab;

        if(Ext.isString(cmp)) {
            newTab = Ext.getCmp(newTab);
        }

        if (newTab === me.activeTab) {
            return false;
        }

        oldTab = me.activeTab;
        if (me.fireEvent('beforetabchange', me, newTab, oldTab) !== false) {
             me.activeTab = newTab;
             if (me.rendered) {
                 me.down('container[baseCls=' + Ext.baseCSSPrefix + 'grouptabcontainer' + ']').getLayout().setActiveItem(newTab);
             }
             me.fireEvent('tabchange', me, newTab, oldTab);
         }
         return true;
    },

    /**
     * Makes the given group active
     * @param {Ext.Component} cmp The root component to make active.
     */
    setActiveGroup: function(cmp) {
        var me = this,
            newGroup = cmp,
            oldGroup;

        if(Ext.isString(cmp)) {
            newGroup = Ext.getCmp(newGroup);
        }

        if (newGroup === me.activeGroup) {
            return true;
        }

        oldGroup = me.activeGroup;
        if (me.fireEvent('beforegroupchange', me, newGroup, oldGroup) !== false) {
             me.activeGroup = newGroup;
             me.fireEvent('groupchange', me, newGroup, oldGroup);
         } else {
             return false;
         }
         return true;
    },

    /**
     * @private
     * Creates the TreeStore used by the GroupTabBar.
     */
    createTreeStore: function() {
        var me = this,
            groups = me.prepareItems(me.items),
            data = {
                text: '.',
                children: []
            },
            cards = me.cards = [];
        me.activeGroup = me.activeGroup || 0;
        
        Ext.each(groups, function(groupItem, idx) {
            var leafItems = groupItem.items.items,
                rootItem = (leafItems[groupItem.mainItem] || leafItems[0]),
                groupRoot = {
                    children: []
                };

            // Create the root node of the group
            groupRoot.id = rootItem.id;
            groupRoot.text = rootItem.title;
            groupRoot.iconCls = rootItem.iconCls;

            groupRoot.expanded = true;
            groupRoot.activeGroup = (me.activeGroup === idx);
            groupRoot.activeTab = groupRoot.activeGroup ? true : false;
            if (groupRoot.activeTab) {
                me.activeTab = groupRoot.id;
            }

            if (groupRoot.activeGroup) {
                me.mainItem = groupItem.mainItem || 0;
                me.activeGroup = groupRoot.id;
            }

            Ext.each(leafItems, function(leafItem) {
                // First node has been done
                if (leafItem.id !== groupRoot.id) {
                    var child = {
                        id: leafItem.id,
                        leaf: true,
                        text: leafItem.title,
                        iconCls: leafItem.iconCls,
                        activeGroup: groupRoot.activeGroup,
                        activeTab: false
                    };
                    groupRoot.children.push(child);
                }

                // Ensure the items do not get headers
                delete leafItem.title;
                delete leafItem.iconCls;
                cards.push(leafItem);
            });

            data.children.push(groupRoot);
      });

       return Ext.create('Ext.data.TreeStore', {
            fields: ['id', 'text', 'activeGroup', 'activeTab'],
            root: {
                expanded: true
            },
            proxy: {
                type: 'memory',
                data: data
            }
        });
    },

    /**
     * Returns the item that is currently active inside this GroupTabPanel.
     * @return {Ext.Component/Number} The currently active item
     */
    getActiveTab: function() {
        return this.activeTab;
    },

    /**
     * Returns the root group item that is currently active inside this GroupTabPanel.
     * @return {Ext.Component/Number} The currently active root group item
     */
    getActiveGroup: function() {
        return this.activeGroup;
    }
});
/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

/**
 * Barebones iframe implementation. For serious iframe work, see the
 * ManagedIFrame extension
 * (http://www.sencha.com/forum/showthread.php?71961).
 */
Ext.define('Ext.ux.IFrame', {
    extend: 'Ext.Component',

    alias: 'widget.uxiframe',

    loadMask: 'Loading...',

    src: 'about:blank',

    renderTpl: [
        '<iframe src="{src}" name="{frameName}" width="100%" height="100%" frameborder="0"></iframe>'
    ],

    initComponent: function () {
        this.callParent();

        this.frameName = this.frameName || this.id + '-frame';

        this.addEvents(
            'beforeload',
            'load'
        );

        Ext.apply(this.renderSelectors, {
            iframeEl: 'iframe'
        });
    },

    initEvents : function() {
        var me = this;
        me.callParent();
        me.iframeEl.on('load', me.onLoad, me);
    },

    initRenderData: function() {
        return Ext.apply(this.callParent(), {
            src: this.src,
            frameName: this.frameName
        });
    },

    getBody: function() {
        var doc = this.getDoc();
        return doc.body || doc.documentElement;
    },

    getDoc: function() {
        try {
            return this.getWin().document;
        } catch (ex) {
            return null;
        }
    },

    getWin: function() {
        var me = this,
            name = me.frameName,
            win = Ext.isIE
                ? me.iframeEl.dom.contentWindow
                : window.frames[name];
        return win;
    },

    getFrame: function() {
        var me = this;
        return me.iframeEl.dom;
    },

    beforeDestroy: function () {
        this.cleanupListeners(true);
        this.callParent();
    },
    
    cleanupListeners: function(destroying){
        var doc, prop;

        if (this.rendered) {
            try {
                doc = this.getDoc();
                if (doc) {
                    Ext.EventManager.removeAll(doc);
                    if (destroying) {
                        for (prop in doc) {
                            if (doc.hasOwnProperty && doc.hasOwnProperty(prop)) {
                                delete doc[prop];
                            }
                        }
                    }
                }
            } catch(e) { }
        }
    },

    onLoad: function() {
        var me = this,
            doc = me.getDoc(),
            fn = me.onRelayedEvent;

        if (doc) {
            try {
                Ext.EventManager.removeAll(doc);

                // These events need to be relayed from the inner document (where they stop
                // bubbling) up to the outer document. This has to be done at the DOM level so
                // the event reaches listeners on elements like the document body. The effected
                // mechanisms that depend on this bubbling behavior are listed to the right
                // of the event.
                Ext.EventManager.on(doc, {
                    mousedown: fn, // menu dismisal (MenuManager) and Window onMouseDown (toFront)
                    mousemove: fn, // window resize drag detection
                    mouseup: fn,   // window resize termination
                    click: fn,     // not sure, but just to be safe
                    dblclick: fn,  // not sure again
                    scope: me
                });
            } catch(e) {
                // cannot do this xss
            }

            // We need to be sure we remove all our events from the iframe on unload or we're going to LEAK!
            Ext.EventManager.on(this.getWin(), 'beforeunload', me.cleanupListeners, me);

            this.el.unmask();
            this.fireEvent('load', this);

        } else if(me.src && me.src != '') {

            this.el.unmask();
            this.fireEvent('error', this);
        }


    },

    onRelayedEvent: function (event) {
        // relay event from the iframe's document to the document that owns the iframe...

        var iframeEl = this.iframeEl,

            // Get the left-based iframe position
            iframeXY = Ext.Element.getTrueXY(iframeEl),
            originalEventXY = event.getXY(),

            // Get the left-based XY position.
            // This is because the consumer of the injected event (Ext.EventManager) will
            // perform its own RTL normalization.
            eventXY = Ext.EventManager.getPageXY(event.browserEvent);

        // the event from the inner document has XY relative to that document's origin,
        // so adjust it to use the origin of the iframe in the outer document:
        event.xy = [iframeXY[0] + eventXY[0], iframeXY[1] + eventXY[1]];

        event.injectEvent(iframeEl); // blame the iframe for the event...

        event.xy = originalEventXY; // restore the original XY (just for safety)
    },

    load: function (src) {
        var me = this,
            text = me.loadMask,
            frame = me.getFrame();

        if (me.fireEvent('beforeload', me, src) !== false) {
            if (text && me.el) {
                me.el.mask(text);
            }

            frame.src = me.src = (src || me.src);
        }
    }
});
/**
 * The Preview enables you to show a configurable preview of a record.
 *
 * This plugin assumes that it has control over the features used for this
 * particular grid section and may conflict with other plugins.
 */
Ext.define('Ext.ux.PreviewPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.preview',
    requires: ['Ext.grid.feature.RowBody', 'Ext.grid.feature.RowWrap'],
    
    // private, css class to use to hide the body
    hideBodyCls: 'x-grid-row-body-hidden',
    
    /**
     * @cfg {String} bodyField
     * Field to display in the preview. Must be a field within the Model definition
     * that the store is using.
     */
    bodyField: '',
    
    /**
     * @cfg {Boolean} previewExpanded
     */
    previewExpanded: true,
    
    setCmp: function(grid) {
        this.callParent(arguments);
        
        var bodyField   = this.bodyField,
            hideBodyCls = this.hideBodyCls,
            features    = [{
                ftype: 'rowbody',
                getAdditionalData: function(data, idx, record, orig, view) {
                    var getAdditionalData = Ext.grid.feature.RowBody.prototype.getAdditionalData,
                        additionalData = {
                            rowBody: data[bodyField],
                            rowBodyCls: grid.previewExpanded ? '' : hideBodyCls
                        };
                        
                    if (getAdditionalData) {
                        Ext.apply(additionalData, getAdditionalData.apply(this, arguments));
                    }
                    return additionalData;
                }
            }, {
                ftype: 'rowwrap'
            }];
        
        grid.previewExpanded = this.previewExpanded;
        if (!grid.features) {
            grid.features = [];
        }
        grid.features = features.concat(grid.features);
    },
    
    /**
     * Toggle between the preview being expanded/hidden
     * @param {Boolean} expanded Pass true to expand the record and false to not show the preview.
     */
    toggleExpanded: function(expanded) {
        var view = this.getCmp();
        this.previewExpanded = view.previewExpanded = expanded;
        view.refresh();
    }
});/**
 * Plugin for displaying a progressbar inside of a paging toolbar
 * instead of plain text.
 */
Ext.define('Ext.ux.ProgressBarPager', {

    requires: ['Ext.ProgressBar'],
    /**
     * @cfg {Number} width
     * <p>The default progress bar width.  Default is 225.</p>
    */
    width   : 225,
    /**
     * @cfg {String} defaultText
    * <p>The text to display while the store is loading.  Default is 'Loading...'</p>
     */
    defaultText    : 'Loading...',
    /**
     * @cfg {Object} defaultAnimCfg
     * <p>A {@link Ext.fx.Anim Ext.fx.Anim} configuration object.</p>
     */
    defaultAnimCfg : {
		duration: 1000,
		easing: 'bounceOut'	
	},	

    /**
     * Creates new ProgressBarPager.
     * @param {Object} config Configuration options
     */
    constructor : function(config) {
        if (config) {
            Ext.apply(this, config);
        }
    },
    //public
    init : function (parent) {
        var displayItem;
        if (parent.displayInfo) {
            this.parent = parent;

            displayItem = parent.child("#displayItem");
            if (displayItem) {
                parent.remove(displayItem, true);
            }

            this.progressBar = Ext.create('Ext.ProgressBar', {
                text    : this.defaultText,
                width   : this.width,
                animate : this.defaultAnimCfg,
                style: {
                    cursor: 'pointer'
                },
                listeners: {
                    el: {
                        scope: this,
                        click: this.handleProgressBarClick
                    }
                }
            });

            parent.displayItem = this.progressBar;

            parent.add(parent.displayItem);
            Ext.apply(parent, this.parentOverrides);
        }
    },
    // private
    // This method handles the click for the progress bar
    handleProgressBarClick : function(e){
        var parent = this.parent,
            displayItem = parent.displayItem,
            box = this.progressBar.getBox(),
            xy = e.getXY(),
            position = xy[0]- box.x,
            pages = Math.ceil(parent.store.getTotalCount() / parent.pageSize),
            newPage = Math.max(Math.ceil(position / (displayItem.width / pages)), 1);

        parent.store.loadPage(newPage);
    },

    // private, overriddes
    parentOverrides  : {
        // private
        // This method updates the information via the progress bar.
        updateInfo : function(){
            if(this.displayItem){
                var count = this.store.getCount(),
                    pageData = this.getPageData(),
                    message = count === 0 ?
                    this.emptyMsg :
                    Ext.String.format(
                        this.displayMsg,
                        pageData.fromRecord, pageData.toRecord, this.store.getTotalCount()
                    ),
                    percentage = pageData.pageCount > 0 ? (pageData.currentPage / pageData.pageCount) : 0;

                this.displayItem.updateProgress(percentage, message, this.animate || this.defaultAnimConfig);
            }
        }
    }
});

/**
 * @deprecated
 * Ext.ux.RowExpander has been promoted to the core framework. Use
 * {@link Ext.grid.plugin.RowExpander} instead.  Ext.ux.RowExpander is now just an empty
 * stub that extends Ext.grid.plugin.RowExpander for backward compatibility reasons.
 */
Ext.define('Ext.ux.RowExpander', {
    extend: 'Ext.grid.plugin.RowExpander'
});/**
 * Plugin for PagingToolbar which replaces the textfield input with a slider
 */
Ext.define('Ext.ux.SlidingPager', {
    requires: [
        'Ext.slider.Single',
        'Ext.slider.Tip'
    ],

    /**
     * Creates new SlidingPager.
     * @param {Object} config Configuration options
     */
    constructor : function(config) {
        if (config) {
            Ext.apply(this, config);
        }
    },

    init : function(pbar){
        var idx = pbar.items.indexOf(pbar.child("#inputItem")),
            slider;

        Ext.each(pbar.items.getRange(idx - 2, idx + 2), function(c){
            c.hide();
        });

        slider = Ext.create('Ext.slider.Single', {
            width: 114,
            minValue: 1,
            maxValue: 1,
            hideLabel: true,
            tipText: function(thumb) {
                return Ext.String.format('Page <b>{0}</b> of <b>{1}</b>', thumb.value, thumb.slider.maxValue);
            },
            listeners: {
                changecomplete: function(s, v){
                    pbar.store.loadPage(v);
                }
            }
        });

        pbar.insert(idx + 1, slider);

        pbar.on({
            change: function(pb, data){
                slider.setMaxValue(data.pageCount);
                slider.setValue(data.currentPage);
            }
        });
    }
});
/**
 * UX used to provide a spotlight around a specified component/element.
 */
Ext.define('Ext.ux.Spotlight', {
    /**
     * @private
     * The baseCls for the spotlight elements
     */
    baseCls: 'x-spotlight',

    /**
     * @cfg animate {Boolean} True to animate the spotlight change
     * (defaults to true)
     */
    animate: true,

    /**
     * @cfg duration {Integer} The duration of the animation, in milliseconds
     * (defaults to 250)
     */
    duration: 250,

    /**
     * @cfg easing {String} The type of easing for the spotlight animatation
     * (defaults to null)
     */
    easing: null,

    /**
     * @private
     * True if the spotlight is active on the element
     */
    active: false,
    
    constructor: function(config){
        Ext.apply(this, config);
    },

    /**
     * Create all the elements for the spotlight
     */
    createElements: function() {
        var me = this,
            baseCls = me.baseCls,
            body = Ext.getBody();

        me.right = body.createChild({
            cls: baseCls
        });
        me.left = body.createChild({
            cls: baseCls
        });
        me.top = body.createChild({
            cls: baseCls
        });
        me.bottom = body.createChild({
            cls: baseCls
        });

        me.all = Ext.create('Ext.CompositeElement', [me.right, me.left, me.top, me.bottom]);
    },

    /**
     * Show the spotlight
     */
    show: function(el, callback, scope) {
        var me = this;
        
        //get the target element
        me.el = Ext.get(el);

        //create the elements if they don't already exist
        if (!me.right) {
            me.createElements();
        }

        if (!me.active) {
            //if the spotlight is not active, show it
            me.all.setDisplayed('');
            me.active = true;
            Ext.EventManager.onWindowResize(me.syncSize, me);
            me.applyBounds(me.animate, false);
        } else {
            //if the spotlight is currently active, just move it
            me.applyBounds(false, false);
        }
    },

    /**
     * Hide the spotlight
     */
    hide: function(callback, scope) {
        var me = this;
        
        Ext.EventManager.removeResizeListener(me.syncSize, me);

        me.applyBounds(me.animate, true);
    },

    /**
     * Resizes the spotlight with the window size.
     */
    syncSize: function() {
        this.applyBounds(false, false);
    },

    /**
     * Resizes the spotlight depending on the arguments
     * @param {Boolean} animate True to animate the changing of the bounds
     * @param {Boolean} reverse True to reverse the animation
     */
    applyBounds: function(animate, reverse) {
        var me = this,
            box = me.el.getBox(),
            //get the current view width and height
            viewWidth = Ext.Element.getViewWidth(true),
            viewHeight = Ext.Element.getViewHeight(true),
            i = 0,
            config = false,
            from, to, clone;
            
        //where the element should start (if animation)
        from = {
            right: {
                x: box.right,
                y: viewHeight,
                width: (viewWidth - box.right),
                height: 0
            },
            left: {
                x: 0,
                y: 0,
                width: box.x,
                height: 0
            },
            top: {
                x: viewWidth,
                y: 0,
                width: 0,
                height: box.y
            },
            bottom: {
                x: 0,
                y: (box.y + box.height),
                width: 0,
                height: (viewHeight - (box.y + box.height)) + 'px'
            }
        };

        //where the element needs to finish
        to = {
            right: {
                x: box.right,
                y: box.y,
                width: (viewWidth - box.right) + 'px',
                height: (viewHeight - box.y) + 'px'
            },
            left: {
                x: 0,
                y: 0,
                width: box.x + 'px',
                height: (box.y + box.height) + 'px'
            },
            top: {
                x: box.x,
                y: 0,
                width: (viewWidth - box.x) + 'px',
                height: box.y + 'px'
            },
            bottom: {
                x: 0,
                y: (box.y + box.height),
                width: (box.x + box.width) + 'px',
                height: (viewHeight - (box.y + box.height)) + 'px'
            }
        };

        //reverse the objects
        if (reverse) {
            clone = Ext.clone(from);
            from = to;
            to = clone;
        }

        if (animate) {
            Ext.Array.forEach(['right', 'left', 'top', 'bottom'], function(side) {
                me[side].setBox(from[side]);
                me[side].animate({
                    duration: me.duration,
                    easing: me.easing,
                    to: to[side]
                });
            },
            this);
        } else {
            Ext.Array.forEach(['right', 'left', 'top', 'bottom'], function(side) {
                me[side].setBox(Ext.apply(from[side], to[side]));
                me[side].repaint();
            },
            this);
        }
    },

    /**
     * Removes all the elements for the spotlight
     */
    destroy: function() {
        var me = this;
        
        Ext.destroy(me.right, me.left, me.top, me.bottom);
        delete me.el;
        delete me.all;
    }
});
/**
 * Plugin for adding a close context menu to tabs. Note that the menu respects
 * the closable configuration on the tab. As such, commands like remove others
 * and remove all will not remove items that are not closable.
 */
Ext.define('Ext.ux.TabCloseMenu', {
    alias: 'plugin.tabclosemenu',

    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} closeTabText
     * The text for closing the current tab.
     */
    closeTabText: 'Close Tab',

    /**
     * @cfg {Boolean} showCloseOthers
     * Indicates whether to show the 'Close Others' option.
     */
    showCloseOthers: true,

    /**
     * @cfg {String} closeOthersTabsText
     * The text for closing all tabs except the current one.
     */
    closeOthersTabsText: 'Close Other Tabs',

    /**
     * @cfg {Boolean} showCloseAll
     * Indicates whether to show the 'Close All' option.
     */
    showCloseAll: true,

    /**
     * @cfg {String} closeAllTabsText
     * The text for closing all tabs.
     */
    closeAllTabsText: 'Close All Tabs',

    /**
     * @cfg {Array} extraItemsHead
     * An array of additional context menu items to add to the front of the context menu.
     */
    extraItemsHead: null,

    /**
     * @cfg {Array} extraItemsTail
     * An array of additional context menu items to add to the end of the context menu.
     */
    extraItemsTail: null,

    //public
    constructor: function (config) {
        this.addEvents(
            'aftermenu',
            'beforemenu');

        this.mixins.observable.constructor.call(this, config);
    },

    init : function(tabpanel){
        this.tabPanel = tabpanel;
        this.tabBar = tabpanel.down("tabbar");

        this.mon(this.tabPanel, {
            scope: this,
            afterlayout: this.onAfterLayout,
            single: true
        });
    },

    onAfterLayout: function() {
        this.mon(this.tabBar.el, {
            scope: this,
            contextmenu: this.onContextMenu,
            delegate: '.x-tab'
        });
    },

    onBeforeDestroy : function(){
        Ext.destroy(this.menu);
        this.callParent(arguments);
    },

    // private
    onContextMenu : function(event, target){
        var me = this,
            menu = me.createMenu(),
            disableAll = true,
            disableOthers = true,
            tab = me.tabBar.getChildByElement(target),
            index = me.tabBar.items.indexOf(tab);

        me.item = me.tabPanel.getComponent(index);
        menu.child('*[text="' + me.closeTabText + '"]').setDisabled(!me.item.closable);

        if (me.showCloseAll || me.showCloseOthers) {
            me.tabPanel.items.each(function(item) {
                if (item.closable) {
                    disableAll = false;
                    if (item != me.item) {
                        disableOthers = false;
                        return false;
                    }
                }
                return true;
            });

            if (me.showCloseAll) {
                menu.child('*[text="' + me.closeAllTabsText + '"]').setDisabled(disableAll);
            }

            if (me.showCloseOthers) {
                menu.child('*[text="' + me.closeOthersTabsText + '"]').setDisabled(disableOthers);
            }
        }

        event.preventDefault();
        me.fireEvent('beforemenu', menu, me.item, me);

        menu.showAt(event.getXY());
    },

    createMenu : function() {
        var me = this;

        if (!me.menu) {
            var items = [{
                text: me.closeTabText,
                scope: me,
                handler: me.onClose
            }];

            if (me.showCloseAll || me.showCloseOthers) {
                items.push('-');
            }

            if (me.showCloseOthers) {
                items.push({
                    text: me.closeOthersTabsText,
                    scope: me,
                    handler: me.onCloseOthers
                });
            }

            if (me.showCloseAll) {
                items.push({
                    text: me.closeAllTabsText,
                    scope: me,
                    handler: me.onCloseAll
                });
            }

            if (me.extraItemsHead) {
                items = me.extraItemsHead.concat(items);
            }

            if (me.extraItemsTail) {
                items = items.concat(me.extraItemsTail);
            }

            me.menu = Ext.create('Ext.menu.Menu', {
                items: items,
                listeners: {
                    hide: me.onHideMenu,
                    scope: me
                }
            });
        }

        return me.menu;
    },

    onHideMenu: function () {
        var me = this;

        me.item = null;
        me.fireEvent('aftermenu', me.menu, me);
    },

    onClose : function(){
        this.tabPanel.remove(this.item);
    },

    onCloseOthers : function(){
        this.doClose(true);
    },

    onCloseAll : function(){
        this.doClose(false);
    },

    doClose : function(excludeActive){
        var items = [];

        this.tabPanel.items.each(function(item){
            if(item.closable){
                if(!excludeActive || item != this.item){
                    items.push(item);
                }
            }
        }, this);

        Ext.each(items, function(item){
            this.tabPanel.remove(item);
        }, this);
    }
});
/**
 * This plugin allow you to reorder tabs of a TabPanel.
 */
Ext.define('Ext.ux.TabReorderer', {

    extend: 'Ext.ux.BoxReorderer',

    itemSelector: '.x-tab',

    init: function(tabPanel) {
        var me = this;
        
        me.callParent([tabPanel.getTabBar()]);

        // Ensure reorderable property is copied into dynamically added tabs
        tabPanel.onAdd = Ext.Function.createSequence(tabPanel.onAdd, me.onAdd);
    },

    afterFirstLayout: function() {
        var tabs,
            len,
            i = 0,
            tab;

        this.callParent(arguments);

        // Copy reorderable property from card into tab
        for (tabs = this.container.items.items, len = tabs.length; i < len; i++) {
            tab = tabs[i];
            if (tab.card) {
                tab.reorderable = tab.card.reorderable;
            }
        }
    },

    onAdd: function(card, index) {
        card.tab.reorderable = card.reorderable;
    },

    afterBoxReflow: function() {
        var me = this;

        // Cannot use callParent, this is not called in the scope of this plugin, but that of its Ext.dd.DD object
        Ext.ux.BoxReorderer.prototype.afterBoxReflow.apply(me, arguments);

        // Move the associated card to match the tab order
        if (me.dragCmp) {
            me.container.tabPanel.setActiveTab(me.dragCmp.card);
            me.container.tabPanel.move(me.startIndex, me.curIndex);
        }
    }
});Ext.ns('Ext.ux');
/**
 * Plugin for adding a tab menu to a TabBar is the Tabs overflow.
 */
Ext.define('Ext.ux.TabScrollerMenu', {
    alias: 'plugin.tabscrollermenu',

    requires: ['Ext.menu.Menu'],

    /**
     * @cfg {Number} pageSize How many items to allow per submenu.
     */
    pageSize: 10,
    /**
     * @cfg {Number} maxText How long should the title of each {@link Ext.menu.Item} be.
     */
    maxText: 15,
    /**
     * @cfg {String} menuPrefixText Text to prefix the submenus.
     */
    menuPrefixText: 'Items',

    /**
     * Creates new TabScrollerMenu.
     * @param {Object} config Configuration options
     */
    constructor: function(config) {
        Ext.apply(this, config);
    },
    
    //private
    init: function(tabPanel) {
        var me = this;

        me.tabPanel = tabPanel;

        tabPanel.on({
            render: function() {
                me.tabBar = tabPanel.tabBar;
                me.layout = me.tabBar.layout;
                me.layout.overflowHandler.handleOverflow = Ext.Function.bind(me.showButton, me);
                me.layout.overflowHandler.clearOverflow = Ext.Function.createSequence(me.layout.overflowHandler.clearOverflow, me.hideButton, me);
            },
            destroy: me.destroy,
            scope: me,
            single: true
        });
    },

    showButton: function() {
        var me = this,
            result = Ext.getClass(me.layout.overflowHandler).prototype.handleOverflow.apply(me.layout.overflowHandler, arguments),
            button = me.menuButton;

        if (me.tabPanel.items.getCount() > 1) {
            if (!button) {
                button = me.menuButton = me.tabBar.body.createChild({
                    cls: Ext.baseCSSPrefix + 'tab-tabmenu-right'
                }, me.tabBar.body.child('.' + Ext.baseCSSPrefix + 'box-scroller-right'));
                button.addClsOnOver(Ext.baseCSSPrefix + 'tab-tabmenu-over');
                button.on('click', me.showTabsMenu, me);
            }
            button.setVisibilityMode(Ext.dom.Element.DISPLAY);
            button.show();
            result.reservedSpace += button.getWidth();
        } else {
            me.hideButton();
        }
        return result;
    },

    hideButton: function() {
        var me = this;
        if (me.menuButton) {
            me.menuButton.hide();
        }
    },

    /**
     * Returns an the current page size (this.pageSize);
     * @return {Number} this.pageSize The current page size.
     */
    getPageSize: function() {
        return this.pageSize;
    },
    /**
     * Sets the number of menu items per submenu "page size".
     * @param {Number} pageSize The page size
     */
    setPageSize: function(pageSize) {
        this.pageSize = pageSize;
    },
    /**
     * Returns the current maxText length;
     * @return {Number} this.maxText The current max text length.
     */
    getMaxText: function() {
        return this.maxText;
    },
    /**
     * Sets the maximum text size for each menu item.
     * @param {Number} t The max text per each menu item.
     */
    setMaxText: function(t) {
        this.maxText = t;
    },
    /**
     * Returns the current menu prefix text String.;
     * @return {String} this.menuPrefixText The current menu prefix text.
     */
    getMenuPrefixText: function() {
        return this.menuPrefixText;
    },
    /**
     * Sets the menu prefix text String.
     * @param {String} t The menu prefix text.
     */
    setMenuPrefixText: function(t) {
        this.menuPrefixText = t;
    },

    showTabsMenu: function(e) {
        var me = this;

        if (me.tabsMenu) {
            me.tabsMenu.removeAll();
        } else {
            me.tabsMenu = new Ext.menu.Menu();
        }

        me.generateTabMenuItems();

        var target = Ext.get(e.getTarget()),
            xy = target.getXY();

        //Y param + 24 pixels
        xy[1] += 24;

        me.tabsMenu.showAt(xy);
    },

    // private
    generateTabMenuItems: function() {
        var me = this,
            tabPanel = me.tabPanel,
            curActive = tabPanel.getActiveTab(),
            allItems = tabPanel.items.getRange(),
            pageSize = me.getPageSize(),
            tabsMenu = me.tabsMenu,
            totalItems, numSubMenus, remainder,
            i, curPage, menuItems, x, item, start, index;
            
        tabsMenu.suspendLayouts();
        allItems = Ext.Array.filter(allItems, function(item){
            if (item.id == curActive.id) {
                return false;
            }
            return item.hidden ? !!item.hiddenByLayout : true;
        });
        totalItems = allItems.length;
        numSubMenus = Math.floor(totalItems / pageSize);
        remainder = totalItems % pageSize;

        if (totalItems > pageSize) {

            // Loop through all of the items and create submenus in chunks of 10
            for (i = 0; i < numSubMenus; i++) {
                curPage = (i + 1) * pageSize;
                menuItems = [];

                for (x = 0; x < pageSize; x++) {
                    index = x + curPage - pageSize;
                    item = allItems[index];
                    menuItems.push(me.autoGenMenuItem(item));
                }

                tabsMenu.add({
                    text: me.getMenuPrefixText() + ' ' + (curPage - pageSize + 1) + ' - ' + curPage,
                    menu: menuItems
                });
            }
            // remaining items
            if (remainder > 0) {
                start = numSubMenus * pageSize;
                menuItems = [];
                for (i = start; i < totalItems; i++) {
                    item = allItems[i];
                    menuItems.push(me.autoGenMenuItem(item));
                }

                me.tabsMenu.add({
                    text: me.menuPrefixText + ' ' + (start + 1) + ' - ' + (start + menuItems.length),
                    menu: menuItems
                });

            }
        } else {
            for (i = 0; i < totalItems; ++i) {
                tabsMenu.add(me.autoGenMenuItem(allItems[i]));
            }
        }
        tabsMenu.resumeLayouts(true);
    },

    // private
    autoGenMenuItem: function(item) {
        var maxText = this.getMaxText(),
            text = Ext.util.Format.ellipsis(item.title, maxText);

        return {
            text: text,
            handler: this.showTabFromMenu,
            scope: this,
            disabled: item.disabled,
            tabToShow: item,
            iconCls: item.iconCls
        };
    },

    // private
    showTabFromMenu: function(menuItem) {
        this.tabPanel.setActiveTab(menuItem.tabToShow);
    },
    
    destroy: function(){
        Ext.destroy(this.tabsMenu, this.menuButton);       
    }
});
/**
 * Plugin which allows items to be dropped onto a toolbar and be turned into new Toolbar items.
 * To use the plugin, you just need to provide a createItem implementation that takes the drop
 * data as an argument and returns an object that can be placed onto the toolbar. Example:
 * <pre>
 * Ext.create('Ext.ux.ToolbarDroppable', {
 *   createItem: function(data) {
 *     return Ext.create('Ext.Button', {text: data.text});
 *   }
 * });
 * </pre>
 * The afterLayout function can also be overridden, and is called after a new item has been
 * created and inserted into the Toolbar. Use this for any logic that needs to be run after
 * the item has been created.
 */
 Ext.define('Ext.ux.ToolbarDroppable', {

    /**
     * Creates new ToolbarDroppable.
     * @param {Object} config Config options.
     */
    constructor: function(config) {
      Ext.apply(this, config);
    },

    /**
     * Initializes the plugin and saves a reference to the toolbar
     * @param {Ext.toolbar.Toolbar} toolbar The toolbar instance
     */
    init: function(toolbar) {
      /**
       * @property toolbar
       * @type Ext.toolbar.Toolbar
       * The toolbar instance that this plugin is tied to
       */
      this.toolbar = toolbar;

      this.toolbar.on({
          scope : this,
          render: this.createDropTarget
      });
    },

    /**
     * Creates a drop target on the toolbar
     */
    createDropTarget: function() {
        /**
         * @property dropTarget
         * @type Ext.dd.DropTarget
         * The drop target attached to the toolbar instance
         */
        this.dropTarget = Ext.create('Ext.dd.DropTarget', this.toolbar.getEl(), {
            notifyOver: Ext.Function.bind(this.notifyOver, this),
            notifyDrop: Ext.Function.bind(this.notifyDrop, this)
        });
    },

    /**
     * Adds the given DD Group to the drop target
     * @param {String} ddGroup The DD Group
     */
    addDDGroup: function(ddGroup) {
        this.dropTarget.addToGroup(ddGroup);
    },

    /**
     * Calculates the location on the toolbar to create the new sorter button based on the XY of the
     * drag event
     * @param {Ext.EventObject} e The event object
     * @return {Number} The index at which to insert the new button
     */    
    calculateEntryIndex: function(e) {
        var entryIndex = 0,
            toolbar = this.toolbar,
            items = toolbar.items.items,
            count = items.length,
            xHover = e.getXY()[0],
            index = 0,
            el, xTotal, width, midpoint;
 
        for (; index < count; index++) {
            el = items[index].getEl();
            xTotal = el.getXY()[0];
            width = el.getWidth();
            midpoint = xTotal + width / 2;
 
            if (xHover < midpoint) {
                entryIndex = index; 
                break;
            } else {
                entryIndex = index + 1;
            }
       }
       return entryIndex;
    },

    /**
     * Returns true if the drop is allowed on the drop target. This function can be overridden
     * and defaults to simply return true
     * @param {Object} data Arbitrary data from the drag source
     * @return {Boolean} True if the drop is allowed
     */
    canDrop: function(data) {
        return true;
    },

    /**
     * Custom notifyOver method which will be used in the plugin's internal DropTarget
     * @return {String} The CSS class to add
     */
    notifyOver: function(dragSource, event, data) {
        return this.canDrop.apply(this, arguments) ? this.dropTarget.dropAllowed : this.dropTarget.dropNotAllowed;
    },

    /**
     * Called when the drop has been made. Creates the new toolbar item, places it at the correct location
     * and calls the afterLayout callback.
     */
    notifyDrop: function(dragSource, event, data) {
        var canAdd = this.canDrop(dragSource, event, data),
            tbar   = this.toolbar;

        if (canAdd) {
            var entryIndex = this.calculateEntryIndex(event);

            tbar.insert(entryIndex, this.createItem(data));
            tbar.doLayout();

            this.afterLayout();
        }

        return canAdd;
    },

    /**
     * Creates the new toolbar item based on drop data. This method must be implemented by the plugin instance
     * @param {Object} data Arbitrary data from the drop
     * @return {Mixed} An item that can be added to a toolbar
     */
    createItem: function(data) {
        //<debug>
        Ext.Error.raise("The createItem method must be implemented in the ToolbarDroppable plugin");
        //</debug>
    },

    /**
     * Called after a new button has been created and added to the toolbar. Add any required cleanup logic here
     */
    afterLayout: Ext.emptyFn
});
/**
 * A Picker field that contains a tree panel on its popup, enabling selection of tree nodes.
 */
Ext.define('Ext.ux.TreePicker', {
    extend: 'Ext.form.field.Picker',
    xtype: 'treepicker',
    
    uses: [
        'Ext.tree.Panel'
    ],

    triggerCls: Ext.baseCSSPrefix + 'form-arrow-trigger',

    config: {
        /**
         * @cfg {Ext.data.TreeStore} store
         * A tree store that the tree picker will be bound to
         */
        store: null,

        /**
         * @cfg {String} displayField
         * The field inside the model that will be used as the node's text.
         * Defaults to the default value of {@link Ext.tree.Panel}'s `displayField` configuration.
         */
        displayField: null,

        /**
         * @cfg {Array} columns
         * An optional array of columns for multi-column trees
         */
        columns: null,

        /**
         * @cfg {Boolean} selectOnTab
         * Whether the Tab key should select the currently highlighted item. Defaults to `true`.
         */
        selectOnTab: true,

        /**
         * @cfg {Number} maxPickerHeight
         * The maximum height of the tree dropdown. Defaults to 300.
         */
        maxPickerHeight: 300,

        /**
         * @cfg {Number} minPickerHeight
         * The minimum height of the tree dropdown. Defaults to 100.
         */
        minPickerHeight: 100
    },
   
    editable: false,

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        me.addEvents(
            /**
             * @event select
             * Fires when a tree node is selected
             * @param {Ext.ux.TreePicker} picker        This tree picker
             * @param {Ext.data.Model} record           The selected record
             */
            'select'
        );

        me.mon(me.store, {
            scope: me,
            load: me.onLoad,
            update: me.onUpdate
        });
    },

    /**
     * Creates and returns the tree panel to be used as this field's picker.
     */
    createPicker: function() {
        var me = this,
            picker = new Ext.tree.Panel({
                shrinkWrapDock: 2,
                store: me.store,
                floating: true,
                displayField: me.displayField,
                columns: me.columns,
                minHeight: me.minPickerHeight,
                maxHeight: me.maxPickerHeight,
                manageHeight: false,
                shadow: false,
                listeners: {
                    scope: me,
                    itemclick: me.onItemClick
                },
                viewConfig: {
                    listeners: {
                        scope: me,
                        render: me.onViewRender
                    }
                }
            }),
            view = picker.getView();

        if (Ext.isIE9 && Ext.isStrict) {
            // In IE9 strict mode, the tree view grows by the height of the horizontal scroll bar when the items are highlighted or unhighlighted.
            // Also when items are collapsed or expanded the height of the view is off. Forcing a repaint fixes the problem.
            view.on({
                scope: me,
                highlightitem: me.repaintPickerView,
                unhighlightitem: me.repaintPickerView,
                afteritemexpand: me.repaintPickerView,
                afteritemcollapse: me.repaintPickerView
            });
        }
        return picker;
    },
    
    onViewRender: function(view){
        view.getEl().on('keypress', this.onPickerKeypress, this);
    },

    /**
     * repaints the tree view
     */
    repaintPickerView: function() {
        var style = this.picker.getView().getEl().dom.style;

        // can't use Element.repaint because it contains a setTimeout, which results in a flicker effect
        style.display = style.display;
    },

    /**
     * Aligns the picker to the input element
     */
    alignPicker: function() {
        var me = this,
            picker;

        if (me.isExpanded) {
            picker = me.getPicker();
            if (me.matchFieldWidth) {
                // Auto the height (it will be constrained by max height)
                picker.setWidth(me.bodyEl.getWidth());
            }
            if (picker.isFloating()) {
                me.doAlign();
            }
        }
    },

    /**
     * Handles a click even on a tree node
     * @private
     * @param {Ext.tree.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} node
     * @param {Number} rowIndex
     * @param {Ext.EventObject} e
     */
    onItemClick: function(view, record, node, rowIndex, e) {
        this.selectItem(record);
    },

    /**
     * Handles a keypress event on the picker element
     * @private
     * @param {Ext.EventObject} e
     * @param {HTMLElement} el
     */
    onPickerKeypress: function(e, el) {
        var key = e.getKey();

        if(key === e.ENTER || (key === e.TAB && this.selectOnTab)) {
            this.selectItem(this.picker.getSelectionModel().getSelection()[0]);
        }
    },

    /**
     * Changes the selection to a given record and closes the picker
     * @private
     * @param {Ext.data.Model} record
     */
    selectItem: function(record) {
        var me = this;
        me.setValue(record.getId());
        me.picker.hide();
        me.inputEl.focus();
        me.fireEvent('select', me, record)

    },

    /**
     * Runs when the picker is expanded.  Selects the appropriate tree node based on the value of the input element,
     * and focuses the picker so that keyboard navigation will work.
     * @private
     */
    onExpand: function() {
        var me = this,
            picker = me.picker,
            store = picker.store,
            value = me.value,
            node;

        
        if (value) {
            node = store.getNodeById(value);
        }
        
        if (!node) {
            node = store.getRootNode();
        }
        
        picker.selectPath(node.getPath());

        Ext.defer(function() {
            picker.getView().focus();
        }, 1);
    },

    /**
     * Sets the specified value into the field
     * @param {Mixed} value
     * @return {Ext.ux.TreePicker} this
     */
    setValue: function(value) {
        var me = this,
            record;

        me.value = value;

        if (me.store.loading) {
            // Called while the Store is loading. Ensure it is processed by the onLoad method.
            return me;
        }
            
        // try to find a record in the store that matches the value
        record = value ? me.store.getNodeById(value) : me.store.getRootNode();
        if (value === undefined) {
            record = me.store.getRootNode();
            me.value = record.getId();
        } else {
            record = me.store.getNodeById(value);
        }

        // set the raw value to the record's display field if a record was found
        me.setRawValue(record ? record.get(me.displayField) : '');

        return me;
    },
    
    getSubmitValue: function(){
        return this.value;    
    },

    /**
     * Returns the current data value of the field (the idProperty of the record)
     * @return {Number}
     */
    getValue: function() {
        return this.value;
    },

    /**
     * Handles the store's load event.
     * @private
     */
    onLoad: function() {
        var value = this.value;

        if (value) {
            this.setValue(value);
        }
    },
    
    onUpdate: function(store, rec, type, modifiedFieldNames){
        var display = this.displayField;
        
        if (type === 'edit' && modifiedFieldNames && Ext.Array.contains(modifiedFieldNames, display) && this.value === rec.getId()) {
            this.setRawValue(rec.get(display));
        }
    }

});

/**
 * @author Don Griffin
 *
 * This is a base class for more advanced "simlets" (simulated servers). A simlet is asked
 * to provide a response given a {@link Ext.ux.ajax.SimXhr} instance.
 */
Ext.define('Ext.ux.ajax.Simlet', function () {
    var urlRegex = /([^?#]*)(#.*)?$/,
        dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/,
        intRegex = /^[+-]?\d+$/,
        floatRegex = /^[+-]?\d+\.\d+$/;

    function parseParamValue (value) {
        var m;

        if (Ext.isDefined(value)) {
            value = decodeURIComponent(value);

            if (intRegex.test(value)) {
                value = parseInt(value, 10);
            } else if (floatRegex.test(value)) {
                value = parseFloat(value);
            } else if (!!(m = dateRegex.test(value))) {
                value = new Date(Date.UTC(+m[1], +m[2]-1, +m[3], +m[4], +m[5], +m[6]));
            }
        }

        return value;
    }

    return {
        alias: 'simlet.basic',

        isSimlet: true,

        responseProps: ['responseText', 'responseXML', 'status', 'statusText'],

        /**
         * @cfg {Number} responseText
         */

        /**
         * @cfg {Number} responseXML
         */

        /**
         * @cfg {Object} responseHeaders
         */

        /**
         * @cfg {Number} status
         */
        status: 200,

        /**
         * @cfg {String} statusText
         */
        statusText: 'OK',

        constructor: function (config) {
            Ext.apply(this, config);
        },

        doGet: function (ctx) {
            var me = this,
                ret = {};

            Ext.each(me.responseProps, function (prop) {
                if (prop in me) {
                    ret[prop] = me[prop];
                }
            });

            return ret;
        },

        doRedirect: function (ctx) {
            return false;
        },

        /**
         * Performs the action requested by the given XHR and returns an object to be applied
         * on to the XHR (containing `status`, `responseText`, etc.). For the most part,
         * this is delegated to `doMethod` methods on this class, such as `doGet`.
         *
         * @param {Ext.ux.ajax.SimXhr} xhr The simulated XMLHttpRequest instance.
         * @returns {Object} The response properties to add to the XMLHttpRequest.
         */
        exec: function (xhr) {
            var me = this,
                ret = {},
                method = 'do' + Ext.String.capitalize(xhr.method.toLowerCase()), // doGet
                fn = me[method];

            if (fn) {
                ret = fn.call(me, me.getCtx(xhr.method, xhr.url, xhr));
            } else {
                ret = { status: 405, statusText: 'Method Not Allowed' };
            }

            return ret;
        },

        getCtx: function (method, url, xhr) {
            return {
                method: method,
                params: this.parseQueryString(url),
                url: url,
                xhr: xhr
            };
        },

        openRequest: function (method, url, options, async) {
            var ctx = this.getCtx(method, url),
                redirect = this.doRedirect(ctx),
                xhr;

            if (redirect) {
                xhr = redirect;
            } else {
                xhr = new Ext.ux.ajax.SimXhr({
                    mgr: this.manager,
                    simlet: this,
                    options: options
                });
                xhr.open(method, url, async);
            }

            return xhr;
        },

        parseQueryString : function (str) {
            var m = urlRegex.exec(str),
                ret = {},
                key,
                value,
                i, n;

            if (m && m[1]) {
                var pair, parts = m[1].split('&');

                for (i = 0, n = parts.length; i < n; ++i) {
                    if ((pair = parts[i].split('='))[0]) {
                        key = decodeURIComponent(pair.shift());
                        value = parseParamValue((pair.length > 1) ? pair.join('=') : pair[0]);

                        if (!(key in ret)) {
                            ret[key] = value;
                        } else if (Ext.isArray(ret[key])) {
                            ret[key].push(value);
                        } else {
                            ret[key] = [ret[key], value];
                        }
                    }
                }
            }

            return ret;
        },

        redirect: function (method, url, params) {
            switch (arguments.length) {
                case 2:
                    if (typeof url == 'string') {
                        break;
                    }
                    params = url;
                    // fall...
                case 1:
                    url = method;
                    method = 'GET';
                    break;
            }

            if (params) {
                url = Ext.urlAppend(url, Ext.Object.toQueryString(params));
            }
            return this.manager.openRequest(method, url);
        }
    };
}());
/**
 * This base class is used to handle data preparation (e.g., sorting, filtering and
 * group summary).
 */
Ext.define('Ext.ux.ajax.DataSimlet', function () {

    function makeSortFn (def, cmp) {
        var order = def.direction,
            sign = (order && order.toUpperCase() == 'DESC') ? -1 : 1;

        return function (leftRec, rightRec) {
            var lhs = leftRec[def.property],
                rhs = rightRec[def.property],
                c = (lhs < rhs) ? -1 : ((rhs < lhs) ? 1 : 0);

            if (c || !cmp) {
                return c * sign;
            }

            return cmp(leftRec, rightRec);
        }
    }

    function makeSortFns (defs, cmp) {
        for (var sortFn = cmp, i = defs && defs.length; i; ) {
            sortFn = makeSortFn(defs[--i], sortFn);
        }
        return sortFn;
    }

    return {
        extend: 'Ext.ux.ajax.Simlet',

        getData: function (ctx) {
            var me = this,
                data = me.data,
                params = ctx.params,
                order = (params.group||'')+'-'+(params.sort||'')+'-'+(params.dir||''),
                fields,
                sortFn;

            if (!order) {
                return data;
            }

            ctx.groupSpec = params.group && Ext.decode(params.group);
            if (order == me.currentOrder) {
                return me.sortedData;
            }

            fields = params.sort;
            if (params.dir) {
                fields = [{ direction: params.dir, property: fields }];
            } else {
                fields = Ext.decode(params.sort);
            }

            sortFn = makeSortFns((ctx.sortSpec = fields));
            sortFn = makeSortFns(ctx.groupSpec, sortFn);

            data = data.slice(0); // preserve 'physical' order of raw data...
            if (sortFn) {
                Ext.Array.sort(data, sortFn);
            }

            me.sortedData = data;
            me.currentOrder = order;

            return data;
        },

        getPage: function (ctx, data) {
            var ret = data,
                length = data.length,
                start = ctx.params.start || 0,
                end = ctx.params.limit ? Math.min(length, start + ctx.params.limit) : length;

            if (start || end < length) {
                ret = ret.slice(start, end);
            }

            return ret;
        },

        getGroupSummary: function (groupField, rows, ctx) {
            return rows[0];
        },

        getSummary: function (ctx, data, page) {
            var me = this,
                groupField = ctx.groupSpec[0].property,
                accum,
                todo = {},
                summary = [],
                fieldValue,
                lastFieldValue;

            Ext.each(page, function (rec) {
                fieldValue = rec[groupField];
                todo[fieldValue] = true;
            });

            function flush () {
                if (accum) {
                    summary.push(me.getGroupSummary(groupField, accum, ctx));
                    accum = null;
                }
            }

            // data is ordered primarily by the groupField, so one pass can pick up all
            // the summaries one at a time.
            Ext.each(data, function (rec) {
                fieldValue = rec[groupField];

                if (lastFieldValue !== fieldValue) {
                    flush();
                    lastFieldValue = fieldValue;
                }

                if (!todo[fieldValue]) {
                    // if we have even 1 summary, we have summarized all that we need
                    // (again because data and page are ordered by groupField)
                    return !summary.length;
                }

                if (accum) {
                    accum.push(rec);
                } else {
                    accum = [rec];
                }

                return true;
            });

            flush(); // make sure that last pesky summary goes...

            return summary;
        }
    };
}());
/**
 * JSON Simlet.
 */
Ext.define('Ext.ux.ajax.JsonSimlet', {
    extend: 'Ext.ux.ajax.DataSimlet',
    alias: 'simlet.json',

    doGet: function (ctx) {
        var me = this,
            data = me.getData(ctx),
            page = me.getPage(ctx, data),
            reader = ctx.xhr.options.proxy.reader,
            ret = me.callParent(arguments), // pick up status/statusText
            response = {};

        if (reader.root) {
            response[reader.root] = page;
            response[reader.totalProperty] = data.length;
        } else {
            response = page;
        }

        if (ctx.groupSpec) {
            response.summaryData = me.getSummary(ctx, data, page);
        }

        ret.responseText = Ext.encode(response);
        return ret;
    }
});
/**
 * @author Don Griffin
 *
 * Simulates an XMLHttpRequest object's methods and properties but is backed by a
 * {@link Ext.ux.ajax.Simlet} instance that provides the data.
 */
Ext.define('Ext.ux.ajax.SimXhr', {
    readyState: 0,

    mgr: null,
    simlet: null,

    constructor: function (config) {
        var me = this;

        Ext.apply(me, config);
        me.requestHeaders = {};
    },

    abort: function () {
        var me = this;

        if (me.timer) {
            clearTimeout(me.timer);
            me.timer = null;
        }
        me.aborted = true;
    },

    getAllResponseHeaders: function () {
        var headers = [];
        Ext.Object.each(this.responseHeaders, function (name, value) {
            headers.push(name + ': ' + value);
        });
        return headers.join('\x0d\x0a');
    },

    getResponseHeader: function (header) {
        var headers = this.responseHeaders;
        return (headers && headers[header]) || null;
    },

    open: function (method, url, async, user, password) {
        var me = this;
        me.method = method;
        me.url = url;
        me.async = async !== false;
        me.user = user;
        me.password = password;

        me.setReadyState(1);
    },

    overrideMimeType: function (mimeType) {
        this.mimeType = mimeType;
    },

    schedule: function () {
        var me = this;
        me.timer = setTimeout(function () {
            me.onTick();
        }, me.mgr.delay);
    },

    send: function (body) {
        var me = this;

        me.body = body;

        if (me.async) {
            me.schedule();
        } else {
            me.onComplete();
        }
    },

    setReadyState: function (state) {
        var me = this;
        if (me.readyState != state) {
            me.readyState = state;
            me.onreadystatechange();
        }
    },

    setRequestHeader: function (header, value) {
        this.requestHeaders[header] = value;
    },

    // handlers

    onreadystatechange: Ext.emptyFn,

    onComplete: function () {
        var me = this,
            callback;

        me.readyState = 4;
        Ext.apply(me, me.simlet.exec(me));

        callback = me.jsonpCallback;
        if (callback) {
            var text = callback + '(' + me.responseText + ')';
            eval(text);
        }
    },

    onTick: function () {
        var me = this;

        me.timer = null;
        me.onComplete();
        me.onreadystatechange && me.onreadystatechange();
    }
});
/**
 * @author Don Griffin
 *
 * This singleton manages simulated Ajax responses. This allows application logic to be
 * written unaware that its Ajax calls are being handled by simulations ("simlets"). This
 * is currently done by hooking {@link Ext.data.Connection} methods, so all users of that
 * class (and {@link Ext.Ajax} since it is a derived class) qualify for simulation.
 *
 * The requires hooks are inserted when either the {@link #init} method is called or the
 * first {@link Ext.ux.ajax.Simlet} is registered. For example:
 *
 *      Ext.onReady(function () {
 *          initAjaxSim();
 *
 *          // normal stuff
 *      });
 *
 *      function initAjaxSim () {
 *          Ext.ux.ajax.SimManager.init({
 *              delay: 300
 *          }).register({
 *              '/app/data/url': {
 *                  stype: 'json',  // use JsonSimlet (stype is like xtype for components)
 *                  data: [
 *                      { foo: 42, bar: 'abc' },
 *                      ...
 *                  ]
 *              }
 *          });
 *      }
 *
 * As many URL's as desired can be registered and associated with a {@link Ext.ux.ajax.Simlet}. To make
 * non-simulated Ajax requests once this singleton is initialized, add a `nosim:true` option
 * to the Ajax options:
 *
 *      Ext.Ajax.request({
 *          url: 'page.php',
 *          nosim: true, // ignored by normal Ajax request
 *          params: {
 *              id: 1
 *          },
 *          success: function(response){
 *              var text = response.responseText;
 *              // process server response here
 *          }
 *      });
 */
Ext.define('Ext.ux.ajax.SimManager', {
    singleton: true,

    requires: [
        'Ext.data.Connection',
        'Ext.ux.ajax.SimXhr',
        'Ext.ux.ajax.Simlet',
        'Ext.ux.ajax.JsonSimlet'
    ],

    /**
     * @cfg {Ext.ux.ajax.Simlet} defaultSimlet
     * The {@link Ext.ux.ajax.Simlet} instance to use for non-matching URL's. By default, this will
     * return 404. Set this to null to use real Ajax calls for non-matching URL's.
     */

    /**
     * @cfg {String} defaultType
     * The default `stype` to apply to generic {@link Ext.ux.ajax.Simlet} configuration objects. The
     * default is 'basic'.
     */
    defaultType: 'basic',

    /**
     * @cfg {Number} delay
     * The number of milliseconds to delay before delivering a response to an async request.
     */
    delay: 150,

    /**
     * @property {Boolean} ready
     * True once this singleton has initialized and applied its Ajax hooks.
     * @private
     */
    ready: false,

    constructor: function () {
        this.simlets = {};
    },

    getSimlet: function (url) {
        // Strip down to base URL (no query parameters or hash):
        var me = this,
            index = url.indexOf('?');

        if (index < 0) {
            index = url.indexOf('#');
        }
        if (index > 0) {
            url = url.substring(0, index);
        }

        return me.simlets[url] || me.defaultSimlet;
    },

    getXhr: function (method, url, options, async) {
        var simlet = this.getSimlet(url);

        if (simlet) {
            return simlet.openRequest(method, url, options, async);
        }

        return null;
    },

    /**
     * Initializes this singleton and applies configuration options.
     * @param {Object} config An optional object with configuration properties to apply.
     * @return {Ext.ux.ajax.SimManager} this
     * @markdown
     */
    init: function (config) {
        var me = this;

        Ext.apply(me, config);

        if (!me.ready) {
            me.ready = true;

            if (!('defaultSimlet' in me)) {
                me.defaultSimlet = new Ext.ux.ajax.Simlet({
                    status: 404,
                    statusText: 'Not Found'
                });
            }

            me._openRequest = Ext.data.Connection.prototype.openRequest;

            Ext.data.Connection.override({
                openRequest: function (options, requestOptions, async) {
                    var xhr = !options.nosim &&
                              me.getXhr(requestOptions.method, requestOptions.url, options, async);
                    if (!xhr) {
                        xhr = this.callParent(arguments);
                    }
                    return xhr;
                }
            });

            if (Ext.data.JsonP) {
                Ext.data.JsonP.self.override({
                    createScript: function (url, params, options) {
                        var fullUrl = Ext.urlAppend(url, Ext.Object.toQueryString(params)),
                            script = !options.nosim &&
                                     me.getXhr('GET', fullUrl, options, true);

                        if (!script) {
                            script = this.callParent(arguments);
                        }

                        return script;
                    },

                    loadScript: function (request) {
                        var script = request.script;
                        if (script.simlet) {
                            script.jsonpCallback = request.params[request.callbackKey];
                            script.send(null);
                        } else {
                            this.callParent(arguments);
                        }
                    }
                });
            }
        }

        return me;
    },

    openRequest: function (method, url, async) {
        var opt = {
            method: method,
            url: url
        };
        return this._openRequest.call(Ext.data.Connection.prototype, {}, opt, async);
    },

    /**
     * Registeres one or more {@link Ext.ux.ajax.Simlet} instances.
     * @param {Array/Object} simlet Either a {@link Ext.ux.ajax.Simlet} instance or config, an Array
     * of such elements or an Object keyed by URL with values that are {@link Ext.ux.ajax.Simlet}
     * instances or configs.
     * @markdown
     */
    register: function (simlet) {
        var me = this;

        me.init();

        function reg (one) {
            var simlet = one;
            if (!simlet.isSimlet) {
                simlet = Ext.create('simlet.' + (simlet.stype || me.defaultType), one);
            }
            me.simlets[one.url] = simlet;
            simlet.manager = me;
        }

        if (Ext.isArray(simlet)) {
            Ext.each(simlet, reg);
        } else if (simlet.isSimlet || simlet.url) {
            reg(simlet);
        } else {
            Ext.Object.each(simlet, function (url, s) {
                s.url = url;
                reg(s);
            });
        }

        return me;
    }
});
/**
 * This class simulates XML-based requests.
 */
Ext.define('Ext.ux.ajax.XmlSimlet', {
    extend: 'Ext.ux.ajax.DataSimlet',
    alias: 'simlet.xml',

    /**
     * This template is used to populate the XML response. The configuration of the Reader
     * is available so that its `root` and `record` properties can be used as well as the
     * `fields` of the associated `model`. But beyond that, the way these pieces are put
     * together in the document requires the flexibility of a template.
     */
    xmlTpl: [
        '<{root}>\n',
            '<tpl for="data">',
        '    <{parent.record}>\n',
                '<tpl for="parent.fields">',
        '        <{name}>{[parent[values.name]]}</{name}>\n',
                '</tpl>',
        '    </{parent.record}>\n',
            '</tpl>',
        '</{root}>'
    ],

    doGet: function (ctx) {
        var me = this,
            data = me.getData(ctx),
            page = me.getPage(ctx, data),
            reader = ctx.xhr.options.proxy.reader,
            ret = me.callParent(arguments), // pick up status/statusText
            response = {
                data: page,
                reader: reader,
                fields: reader.model.getFields(),
                root: reader.root,
                record: reader.record
            };

        if (ctx.groupSpec) {
            response.summaryData = me.getSummary(ctx, data, page);
        }

        var tpl = Ext.XTemplate.getTpl(me, 'xmlTpl'),
            xml = tpl.apply(response),
            doc;

        if (typeof DOMParser != 'undefined') {
            doc = (new DOMParser()).parseFromString(xml, "text/xml");
        } else {
            // IE doesn't have DOMParser, but fortunately, there is an ActiveX for XML
            doc = new ActiveXObject("Microsoft.XMLDOM");
            doc.async = false;
            doc.loadXML(xml);
        }

        ret.responseText = xml;
        ret.responseXML = doc;
        return ret;
    }
});
/**
 * Paging Memory Proxy, allows to use paging grid with in memory dataset
 */
Ext.define('Ext.ux.data.PagingMemoryProxy', {
    extend: 'Ext.data.proxy.Memory',
    alias: 'proxy.pagingmemory',
    alternateClassName: 'Ext.data.PagingMemoryProxy',

    read : function(operation, callback, scope){
        var reader = this.getReader(),
            result = reader.read(this.data),
            sorters, filters, sorterFn, records;

        scope = scope || this;
        // filtering
        filters = operation.filters;
        if (filters.length > 0) {
            //at this point we have an array of  Ext.util.Filter objects to filter with,
            //so here we construct a function that combines these filters by ANDing them together
            records = [];

            Ext.each(result.records, function(record) {
                var isMatch = true,
                    length = filters.length,
                    i;

                for (i = 0; i < length; i++) {
                    var filter = filters[i],
                        fn     = filter.filterFn,
                        scope  = filter.scope;

                    isMatch = isMatch && fn.call(scope, record);
                }
                if (isMatch) {
                    records.push(record);
                }
            }, this);

            result.records = records;
            result.totalRecords = result.total = records.length;
        }
        
        // sorting
        sorters = operation.sorters;
        if (sorters.length > 0) {
            //construct an amalgamated sorter function which combines all of the Sorters passed
            sorterFn = function(r1, r2) {
                var result = sorters[0].sort(r1, r2),
                    length = sorters.length,
                    i;
                
                    //if we have more than one sorter, OR any additional sorter functions together
                    for (i = 1; i < length; i++) {
                        result = result || sorters[i].sort.call(this, r1, r2);
                    }                
               
                return result;
            };
    
            result.records.sort(sorterFn);
        }
        
        // paging (use undefined cause start can also be 0 (thus false))
        if (operation.start !== undefined && operation.limit !== undefined) {
            result.records = result.records.slice(operation.start, operation.start + operation.limit);
            result.count = result.records.length;
        }

        Ext.apply(operation, {
            resultSet: result
        });
        
        operation.setCompleted();
        operation.setSuccessful();

        Ext.Function.defer(function () {
            Ext.callback(callback, scope, [operation]);
        }, 10);
    }
});
/**
 * @author Ed Spencer (http://sencha.com)
 * Transition plugin for DataViews
 */
Ext.define('Ext.ux.DataView.Animated', {

    /**
     * @property defaults
     * @type Object
     * Default configuration options for all DataViewTransition instances
     */
    defaults: {
        duration  : 750,
        idProperty: 'id'
    },
    
    /**
     * Creates the plugin instance, applies defaults
     * @constructor
     * @param {Object} config Optional config object
     */
    constructor: function(config) {
        Ext.apply(this, config || {}, this.defaults);
    },

    /**
     * Initializes the transition plugin. Overrides the dataview's default refresh function
     * @param {Ext.view.View} dataview The dataview
     */
    init: function(dataview) {
        /**
         * @property dataview
         * @type Ext.view.View
         * Reference to the DataView this instance is bound to
         */
        this.dataview = dataview;
        
        var store = dataview.store;
        
        dataview.blockRefresh = true;
        dataview.updateIndexes = Ext.Function.createSequence(dataview.updateIndexes, function() {
            this.getTargetEl().select(this.itemSelector).each(function(element, composite, index) {
                element.id = element.dom.id = Ext.util.Format.format("{0}-{1}", dataview.id, store.getAt(index).internalId);
            }, this);
        }, dataview);
        
        /**
         * @property dataviewID
         * @type String
         * The string ID of the DataView component. This is used internally when animating child objects
         */
        this.dataviewID = dataview.id;
        
        /**
         * @property cachedStoreData
         * @type Object
         * A cache of existing store data, keyed by id. This is used to determine
         * whether any items were added or removed from the store on data change
         */
        this.cachedStoreData = {};
        
        //catch the store data with the snapshot immediately
        this.cacheStoreData(store.data || store.snapshot);

        dataview.on('resize', function() {
            var store = dataview.store;
            if (store.getCount() > 0) {
                // reDraw.call(this, store);
            }
        }, this);
        
        dataview.store.on('datachanged', reDraw, this);
        
        function reDraw(store) {
            var parentEl = dataview.getTargetEl(),
                calcItem = store.getAt(0),
                added    = this.getAdded(store),
                removed  = this.getRemoved(store),
                previous = this.getRemaining(store);

            // Not yet rendered
            if (!parentEl) {
                return;
            }

            //make sure the correct styles are applied to the parent element
            if (Ext.isIEQuirks) {
                parentEl.applyStyles({
                    zoom: 1,
                    display : 'block',
                    position: 'relative'
                });
            }
            
            //hide old items
            Ext.each(removed, function(item) {
                var id = this.dataviewID + '-' + item.internalId;
                Ext.fly(id).animate({
                    remove  : false,
                    duration: duration,
                    opacity : 0,
                    useDisplay: true,
                    callback: function() {
                        Ext.fly(id).setDisplayed(false);
                    }
                });
            }, this);
            
            //store is empty
            if (calcItem == undefined) {
                this.cacheStoreData(store);
                return;
            }
            
            this.cacheStoreData(store);
            
            var el = Ext.get(this.dataviewID + "-" + calcItem.internalId);
            
            //if there is nothing rendered, force a refresh and return. This happens when loading asynchronously (was not
            //covered correctly in previous versions, which only accepted local data)
            if (!el) {
                dataview.refresh();
                return true;
            }
            
            //calculate the number of rows and columns we have
            var itemWidth   = el.getMargin('lr') + el.getWidth(),
                itemHeight  = el.getMargin('bt') + el.getHeight(),
                dvWidth     = parentEl.dom.clientWidth,
                columns     = Math.floor(dvWidth / itemWidth),
                rtl = this.dataview.getHierarchyState().rtl,
                styleSide = rtl ? 'right' : 'left',
                newStyle;
            
            //stores the current top and left values for each element (discovered below)
            var oldPositions = {},
                newPositions = {},
                elCache      = {};
            
            //find current positions of each element and save a reference in the elCache
            Ext.iterate(previous, function(id, item) {
                var id = item.internalId,
                    el = elCache[id] = Ext.get(this.dataviewID + '-' + id);

                oldPositions[id] = {
                    top : el.getY()  - parentEl.getY()  - el.getMargin('t') - parentEl.getPadding('t')
                };
                oldPositions[id][styleSide] = this.getItemX(el);
            }, this);
            
            //set absolute positioning on all DataView items. We need to set position, left and 
            //top at the same time to avoid any flickering
            Ext.iterate(previous, function(id, item) {
                var oldPos = oldPositions[id],
                    el     = elCache[id];

                if (el.getStyle('position') != 'absolute') {
                    newStyle = {
                        position: 'absolute',
                        top     : oldPos.top + "px"
                    };
                    newStyle[styleSide] = oldPos[styleSide] + "px";
                    elCache[id].applyStyles(newStyle);
                }
            });
            
            //get new positions
            var index = 0;
            Ext.iterate(store.data.items, function(item) {
                var id = item.internalId,
                    column = index % columns,
                    row    = Math.floor(index / columns),
                    top    = row    * itemHeight,
                    left   = column * itemWidth;

                newPositions[id] = {
                    top : top
                };
                newPositions[id][styleSide] = left;
                
                index ++;
            }, this);
            
            //do the movements
            var startTime  = new Date(),
                duration   = this.duration,
                dataviewID = this.dataviewID;
            
            var doAnimate = function() {
                var elapsed  = new Date() - startTime,
                    fraction = elapsed / duration,
                    id;

                if (fraction >= 1) {
                    for (id in newPositions) {
                        newStyle = {
                            top : newPositions[id].top + "px"
                        };
                        newStyle[styleSide] = newPositions[id][styleSide] + "px";
                        
                        Ext.fly(dataviewID + '-' + id).applyStyles(newStyle);
                    }

                    Ext.TaskManager.stop(task);
                } else {
                    //move each item
                    for (id in newPositions) {
                        if (!previous[id]) {
                            continue;
                        }
                        
                        var oldPos  = oldPositions[id],
                            newPos  = newPositions[id],
                            oldTop  = oldPos.top,
                            newTop  = newPos.top,
                            oldLeft = oldPos[styleSide],
                            newLeft = newPos[styleSide],
                            diffTop = fraction * Math.abs(oldTop  - newTop),
                            diffLeft= fraction * Math.abs(oldLeft - newLeft),
                            midTop  = oldTop  > newTop  ? oldTop  - diffTop  : oldTop  + diffTop,
                            midLeft = oldLeft > newLeft ? oldLeft - diffLeft : oldLeft + diffLeft;

                        newStyle = {
                            top : midTop + "px"
                        };
                        newStyle[styleSide] = midLeft + "px";
                        Ext.fly(dataviewID + '-' + id).applyStyles(newStyle).setDisplayed(true);
                    }
                }
            };
            
            var task = {
                run     : doAnimate,
                interval: 20,
                scope   : this
            };
            
            Ext.TaskManager.start(task);
            
            //show new items
            Ext.iterate(added, function(id, item) {
                newStyle = {
                    top    : newPositions[item.internalId].top + "px"
                };
                newStyle[styleSide] = newPositions[item.internalId][styleSide] + "px";
                Ext.fly(this.dataviewID + '-' + item.internalId).applyStyles(newStyle).setDisplayed(true);
                
                Ext.fly(this.dataviewID + '-' + item.internalId).animate({
                    remove  : false,
                    duration: duration,
                    opacity : 1
                });
            }, this);
            
            this.cacheStoreData(store);
        }
    },
    
    getItemX: function(el) {
        var rtl = this.dataview.getHierarchyState().rtl,
            parentEl = el.up('');

        if (rtl) {
            return parentEl.getViewRegion().right - el.getRegion().right + el.getMargin('r');
        } else {
            return el.getX() - parentEl.getX() - el.getMargin('l') - parentEl.getPadding('l');
        }
    },
    
    /**
     * Caches the records from a store locally for comparison later
     * @param {Ext.data.Store} store The store to cache data from
     */
    cacheStoreData: function(store) {
        this.cachedStoreData = {};
        
        store.each(function(record) {
             this.cachedStoreData[record.internalId] = record;
        }, this);
    },
    
    /**
     * Returns all records that were already in the DataView
     * @return {Object} All existing records
     */
    getExisting: function() {
        return this.cachedStoreData;
    },
    
    /**
     * Returns the total number of items that are currently visible in the DataView
     * @return {Number} The number of existing items
     */
    getExistingCount: function() {
        var count = 0,
            items = this.getExisting();
        
        for (var k in items) {
            count++;
        }
        
        return count;
    },
    
    /**
     * Returns all records in the given store that were not already present
     * @param {Ext.data.Store} store The updated store instance
     * @return {Object} Object of records not already present in the dataview in format {id: record}
     */
    getAdded: function(store) {
        var added = {};
        
        store.each(function(record) {
            if (this.cachedStoreData[record.internalId] == undefined) {
                added[record.internalId] = record;
            }
        }, this);
        
        return added;
    },
    
    /**
     * Returns all records that are present in the DataView but not the new store
     * @param {Ext.data.Store} store The updated store instance
     * @return {Array} Array of records that used to be present
     */
    getRemoved: function(store) {
        var removed = [],
            id;
        
        for (id in this.cachedStoreData) {
            if (store.findBy(function(record) {return record.internalId == id;}) == -1) {
                removed.push(this.cachedStoreData[id]);
            }
        }
        
        return removed;
    },
    
    /**
     * Returns all records that are already present and are still present in the new store
     * @param {Ext.data.Store} store The updated store instance
     * @return {Object} Object of records that are still present from last time in format {id: record}
     */
    getRemaining: function(store) {
        var remaining = {};

        store.each(function(record) {
            if (this.cachedStoreData[record.internalId] != undefined) {
                remaining[record.internalId] = record;
            }
        }, this);
        
        return remaining;
    }
});
/**
 * @author Ed Spencer
 *
<pre><code>
Ext.create('Ext.view.View', {
    mixins: {
        draggable: 'Ext.ux.DataView.Draggable'
    },

    initComponent: function() {
        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'someGroup'
            }
        });

        this.callParent(arguments);
    }
});
</code></pre>
 *
 */
Ext.define('Ext.ux.DataView.Draggable', {
    requires: 'Ext.dd.DragZone',

    /**
     * @cfg {String} ghostCls The CSS class added to the outermost element of the created ghost proxy
     * (defaults to 'x-dataview-draggable-ghost')
     */
    ghostCls: 'x-dataview-draggable-ghost',

    /**
     * @cfg {Ext.XTemplate/Array} ghostTpl The template used in the ghost DataView
     */
    ghostTpl: [
        '<tpl for=".">',
            '{title}',
        '</tpl>'
    ],

    /**
     * @cfg {Object} ddConfig Config object that is applied to the internally created DragZone
     */

    /**
     * @cfg {String} ghostConfig Config object that is used to configure the internally created DataView
     */

    init: function(dataview, config) {
        /**
         * @property dataview
         * @type Ext.view.View
         * The Ext.view.View instance that this DragZone is attached to
         */
        this.dataview = dataview;

        dataview.on('render', this.onRender, this);

        Ext.apply(this, {
            itemSelector: dataview.itemSelector,
            ghostConfig : {}
        }, config || {});

        Ext.applyIf(this.ghostConfig, {
            itemSelector: 'img',
            cls: this.ghostCls,
            tpl: this.ghostTpl
        });
    },

    /**
     * @private
     * Called when the attached DataView is rendered. Sets up the internal DragZone
     */
    onRender: function() {
        var config = Ext.apply({}, this.ddConfig || {}, {
            dvDraggable: this,
            dataview   : this.dataview,
            getDragData: this.getDragData,
            getTreeNode: this.getTreeNode,
            afterRepair: this.afterRepair,
            getRepairXY: this.getRepairXY
        });

        /**
         * @property dragZone
         * @type Ext.dd.DragZone
         * The attached DragZone instane
         */
        this.dragZone = Ext.create('Ext.dd.DragZone', this.dataview.getEl(), config);
    },

    getDragData: function(e) {
        var draggable = this.dvDraggable,
            dataview  = this.dataview,
            selModel  = dataview.getSelectionModel(),
            target    = e.getTarget(draggable.itemSelector),
            selected, dragData;

        if (target) {
            if (!dataview.isSelected(target)) {
                selModel.select(dataview.getRecord(target));
            }

            selected = dataview.getSelectedNodes();
            dragData = {
                copy: true,
                nodes: selected,
                records: selModel.getSelection(),
                item: true
            };

            if (selected.length == 1) {
                dragData.single = true;
                dragData.ddel = target;
            } else {
                dragData.multi = true;
                dragData.ddel = draggable.prepareGhost(selModel.getSelection()).dom;
            }

            return dragData;
        }

        return false;
    },

    getTreeNode: function() {
        // console.log('test');
    },

    afterRepair: function() {
        this.dragging = false;

        var nodes  = this.dragData.nodes,
            length = nodes.length,
            i;

        //FIXME: Ext.fly does not work here for some reason, only frames the last node
        for (i = 0; i < length; i++) {
            Ext.get(nodes[i]).frame('#8db2e3', 1);
        }
    },

    /**
     * @private
     * Returns the x and y co-ordinates that the dragged item should be animated back to if it was dropped on an
     * invalid drop target. If we're dragging more than one item we don't animate back and just allow afterRepair
     * to frame each dropped item.
     */
    getRepairXY: function(e) {
        if (this.dragData.multi) {
            return false;
        } else {
            var repairEl = Ext.get(this.dragData.ddel),
                repairXY = repairEl.getXY();

            //take the item's margins and padding into account to make the repair animation line up perfectly
            repairXY[0] += repairEl.getPadding('t') + repairEl.getMargin('t');
            repairXY[1] += repairEl.getPadding('l') + repairEl.getMargin('l');

            return repairXY;
        }
    },

    /**
     * Updates the internal ghost DataView by ensuring it is rendered and contains the correct records
     * @param {Array} records The set of records that is currently selected in the parent DataView
     * @return {Ext.view.View} The Ghost DataView
     */
    prepareGhost: function(records) {
        var ghost = this.createGhost(records),
            store = ghost.store;

        store.removeAll();
        store.add(records);

        return ghost.getEl();
    },

    /**
     * @private
     * Creates the 'ghost' DataView that follows the mouse cursor during the drag operation. This div is usually a
     * lighter-weight representation of just the nodes that are selected in the parent DataView.
     */
    createGhost: function(records) {
        if (!this.ghost) {
            var ghostConfig = Ext.apply({}, this.ghostConfig, {
                store: Ext.create('Ext.data.Store', {
                    model: records[0].modelName
                })
            });

            this.ghost = Ext.create('Ext.view.View', ghostConfig);

            this.ghost.render(document.createElement('div'));
        }

        return this.ghost;
    }
});
/**
 * @author Ed Spencer
 */
Ext.define('Ext.ux.DataView.DragSelector', {
    requires: ['Ext.dd.DragTracker', 'Ext.util.Region'],

    /**
     * Initializes the plugin by setting up the drag tracker
     */
    init: function(dataview) {
        /**
         * @property dataview
         * @type Ext.view.View
         * The DataView bound to this instance
         */
        this.dataview = dataview;
        dataview.mon(dataview, {
            beforecontainerclick: this.cancelClick,
            scope: this,
            render: {
                fn: this.onRender,
                scope: this,
                single: true
            }
        });
    },

    /**
     * @private
     * Called when the attached DataView is rendered. This sets up the DragTracker instance that will be used
     * to created a dragged selection area
     */
    onRender: function() {
        /**
         * @property tracker
         * @type Ext.dd.DragTracker
         * The DragTracker attached to this instance. Note that the 4 on* functions are called in the scope of the 
         * DragTracker ('this' refers to the DragTracker inside those functions), so we pass a reference to the 
         * DragSelector so that we can call this class's functions.
         */
        this.tracker = Ext.create('Ext.dd.DragTracker', {
            dataview: this.dataview,
            el: this.dataview.el,
            dragSelector: this,
            onBeforeStart: this.onBeforeStart,
            onStart: this.onStart,
            onDrag : this.onDrag,
            onEnd  : this.onEnd
        });

        /**
         * @property dragRegion
         * @type Ext.util.Region
         * Represents the region currently dragged out by the user. This is used to figure out which dataview nodes are
         * in the selected area and to set the size of the Proxy element used to highlight the current drag area
         */
        this.dragRegion = Ext.create('Ext.util.Region');
    },

    /**
     * @private
     * Listener attached to the DragTracker's onBeforeStart event. Returns false if the drag didn't start within the
     * DataView's el
     */
    onBeforeStart: function(e) {
        return e.target == this.dataview.getEl().dom;
    },

    /**
     * @private
     * Listener attached to the DragTracker's onStart event. Cancel's the DataView's containerclick event from firing
     * and sets the start co-ordinates of the Proxy element. Clears any existing DataView selection
     * @param {Ext.EventObject} e The click event
     */
    onStart: function(e) {
        var dragSelector = this.dragSelector,
            dataview     = this.dataview;

        // Flag which controls whether the cancelClick method vetoes the processing of the DataView's containerclick event.
        // On IE (where else), this needs to remain set for a millisecond after mouseup because even though the mouse has
        // moved, the mouseup will still trigger a click event.
        this.dragging = true;

        //here we reset and show the selection proxy element and cache the regions each item in the dataview take up
        dragSelector.fillRegions();
        dragSelector.getProxy().show();
        dataview.getSelectionModel().deselectAll();
    },

    /**
     * @private
     * Reusable handler that's used to cancel the container click event when dragging on the dataview. See onStart for
     * details
     */
    cancelClick: function() {
        return !this.tracker.dragging;
    },

    /**
     * @private
     * Listener attached to the DragTracker's onDrag event. Figures out how large the drag selection area should be and
     * updates the proxy element's size to match. Then iterates over all of the rendered items and marks them selected
     * if the drag region touches them
     * @param {Ext.EventObject} e The drag event
     */
    onDrag: function(e) {
        var dragSelector = this.dragSelector,
            selModel     = dragSelector.dataview.getSelectionModel(),
            dragRegion   = dragSelector.dragRegion,
            bodyRegion   = dragSelector.bodyRegion,
            proxy        = dragSelector.getProxy(),
            regions      = dragSelector.regions,
            length       = regions.length,

            startXY   = this.startXY,
            currentXY = this.getXY(),
            minX      = Math.min(startXY[0], currentXY[0]),
            minY      = Math.min(startXY[1], currentXY[1]),
            width     = Math.abs(startXY[0] - currentXY[0]),
            height    = Math.abs(startXY[1] - currentXY[1]),
            region, selected, i;

        Ext.apply(dragRegion, {
            top: minY,
            left: minX,
            right: minX + width,
            bottom: minY + height
        });

        dragRegion.constrainTo(bodyRegion);
        proxy.setRegion(dragRegion);

        for (i = 0; i < length; i++) {
            region = regions[i];
            selected = dragRegion.intersect(region);

            if (selected) {
                selModel.select(i, true);
            } else {
                selModel.deselect(i);
            }
        }
    },

    /**
     * @private
     * Listener attached to the DragTracker's onEnd event. This is a delayed function which executes 1
     * millisecond after it has been called. This is because the dragging flag must remain active to cancel
     * the containerclick event which the mouseup event will trigger.
     * @param {Ext.EventObject} e The event object
     */
    onEnd: Ext.Function.createDelayed(function(e) {
        var dataview = this.dataview,
            selModel = dataview.getSelectionModel(),
            dragSelector = this.dragSelector;

        this.dragging = false;
        dragSelector.getProxy().hide();
    }, 1),

    /**
     * @private
     * Creates a Proxy element that will be used to highlight the drag selection region
     * @return {Ext.Element} The Proxy element
     */
    getProxy: function() {
        if (!this.proxy) {
            this.proxy = this.dataview.getEl().createChild({
                tag: 'div',
                cls: 'x-view-selector'
            });
        }
        return this.proxy;
    },

    /**
     * @private
     * Gets the region taken up by each rendered node in the DataView. We use these regions to figure out which nodes
     * to select based on the selector region the user has dragged out
     */
    fillRegions: function() {
        var dataview = this.dataview,
            regions  = this.regions = [];

        dataview.all.each(function(node) {
            regions.push(node.getRegion());
        });
        this.bodyRegion = dataview.getEl().getRegion();
    }
});/**
 *
 */
Ext.define('Ext.ux.DataView.LabelEditor', {

    extend: 'Ext.Editor',

    alignment: 'tl-tl',

    completeOnEnter: true,

    cancelOnEsc: true,

    shim: false,

    autoSize: {
        width: 'boundEl',
        height: 'field'
    },

    labelSelector: 'x-editable',

    requires: [
        'Ext.form.field.Text'
    ],

    constructor: function(config) {
        config.field = config.field || Ext.create('Ext.form.field.Text', {
            allowOnlyWhitespace: false,
            selectOnFocus:true
        });
        this.callParent([config]);
    },

    init: function(view) {
        this.view = view;
        this.mon(view, 'render', this.bindEvents, this);
        this.on('complete', this.onSave, this);
    },

    // initialize events
    bindEvents: function() {
        this.mon(this.view.getEl(), {
            click: {
                fn: this.onClick,
                scope: this
            }
        });
    },

    // on mousedown show editor
    onClick: function(e, target) {
        var me = this,
            item, record;

        if (Ext.fly(target).hasCls(me.labelSelector) && !me.editing && !e.ctrlKey && !e.shiftKey) {
            e.stopEvent();
            item = me.view.findItemByChild(target);
            record = me.view.store.getAt(me.view.indexOf(item));
            me.startEdit(target, record.data[me.dataIndex]);
            me.activeRecord = record;
        } else if (me.editing) {
            me.field.blur();
            e.preventDefault();
        }
    },

    // update record
    onSave: function(ed, value) {
        this.activeRecord.set(this.dataIndex, value);
    }
});

// A DropZone which cooperates with DragZones whose dragData contains
// a "field" property representing a form Field. Fields may be dropped onto
// grid data cells containing a matching data type.
Ext.define('Ext.ux.dd.CellFieldDropZone', {
    extend: 'Ext.dd.DropZone',

    constructor: function(cfg){
        cfg = cfg || {};
        if (cfg.onCellDrop) {
            this.onCellDrop = cfg.onCellDrop;
        }
        if (cfg.ddGroup) {
            this.ddGroup = cfg.ddGroup;
        }
    },

//  Call the DropZone constructor using the View's scrolling element
//  only after the grid has been rendered.
    init: function(grid) {
        var me = this;

        if (grid.rendered) {
            me.grid = grid;
            grid.getView().on({
                render: function(v) {
                    me.view = v;
                    Ext.ux.dd.CellFieldDropZone.superclass.constructor.call(me, me.view.el);
                },
                single: true
            });
        } else {
            grid.on('render', me.init, me, {single: true});
        }
    },

//  Scroll the main configured Element when we drag close to the edge
    containerScroll: true,

    getTargetFromEvent: function(e) {
        var me = this,
            v = me.view;

//      Ascertain whether the mousemove is within a grid cell
        var cell = e.getTarget(v.getCellSelector());
        if (cell) {

//          We *are* within a grid cell, so ask the View exactly which one,
//          Extract data from the Model to create a target object for
//          processing in subsequent onNodeXXXX methods. Note that the target does
//          not have to be a DOM element. It can be whatever the noNodeXXX methods are
//          programmed to expect.
            var row = v.findItemByChild(cell),
                columnIndex = cell.cellIndex;

            if (row && Ext.isDefined(columnIndex)) {
                return {
                    node: cell,
                    record: v.getRecord(row),
                    fieldName: me.grid.columns[columnIndex].dataIndex
                };
            }
        }
    },

//  On Node enter, see if it is valid for us to drop the field on that type of column.
    onNodeEnter: function(target, dd, e, dragData) {
        delete this.dropOK;
        if (!target) {
            return;
        }

//      Check that a field is being dragged.
        var f = dragData.field;
        if (!f) {
            return;
        }

//      Check whether the data type of the column being dropped on accepts the
//      dragged field type. If so, set dropOK flag, and highlight the target node.
        var type = target.record.fields.get(target.fieldName).type,
            types = Ext.data.Types;
        switch(type){
            case types.FLOAT:
            case types.INT:
                if (!f.isXType('numberfield')) {
                    return;
                }
                break;
            case types.DATE:
                if (!f.isXType('datefield')) {
                    return;
                }
                break;
            case types.BOOL:
                if (!f.isXType('checkbox')) {
                    return;
                }
        }
        this.dropOK = true;
        Ext.fly(target.node).addCls('x-drop-target-active');
    },

//  Return the class name to add to the drag proxy. This provides a visual indication
//  of drop allowed or not allowed.
    onNodeOver: function(target, dd, e, dragData) {
        return this.dropOK ? this.dropAllowed : this.dropNotAllowed;
    },

//  highlight the target node.
    onNodeOut: function(target, dd, e, dragData) {
        Ext.fly(target.node).removeCls('x-drop-target-active');
    },

//  Process the drop event if we have previously ascertained that a drop is OK.
    onNodeDrop: function(target, dd, e, dragData) {
        if (this.dropOK) {
            var value = dragData.field.getValue();
            target.record.set(target.fieldName, value);
            this.onCellDrop(target.fieldName, value);
            return true;
        }
    },
    
    onCellDrop: Ext.emptyFn
});Ext.define('Ext.ux.dd.PanelFieldDragZone', {

    extend: 'Ext.dd.DragZone',

    constructor: function(cfg){
        cfg = cfg || {};
        if (cfg.ddGroup) {
            this.ddGroup = cfg.ddGroup;
        }
    },

//  Call the DRagZone's constructor. The Panel must have been rendered.
    init: function(panel) {
        // Panel is an HtmlElement
        if (panel.nodeType) {
            // Called via dragzone::init
            Ext.ux.dd.PanelFieldDragZone.superclass.init.apply(this, arguments);
        }
        // Panel is a Component - need the el
        else {
            // Called via plugin::init
            if (panel.rendered) {
                Ext.ux.dd.PanelFieldDragZone.superclass.constructor.call(this, panel.getEl());
            } else {
                panel.on('afterrender', this.init, this, {single: true});
            }
        }
    },

    scroll: false,

//  On mousedown, we ascertain whether it is on one of our draggable Fields.
//  If so, we collect data about the draggable object, and return a drag data
//  object which contains our own data, plus a "ddel" property which is a DOM
//  node which provides a "view" of the dragged data.
    getDragData: function(e) {
        var targetLabel = e.getTarget('label', null, true),
            oldMark,
            field,
            dragEl;

        if (targetLabel) {

            // Get the data we are dragging: the Field
            // create a ddel for the drag proxy to display
            field = Ext.getCmp(targetLabel.up('.' + Ext.form.Labelable.prototype.formItemCls).id);
            // Temporary prevent marking the field as invalid, since it causes changes
            // to the underlying dom element which can cause problems in IE
            oldMark = field.preventMark;
            field.preventMark = true;
            if (field.isValid()) {
                field.preventMark = oldMark;
                dragEl = document.createElement('div');
                dragEl.className = 'x-form-text';
                dragEl.appendChild(document.createTextNode(field.getRawValue()));
                Ext.fly(dragEl).setWidth(field.getEl().getWidth());
                return {
                    field: field,
                    ddel: dragEl
                };
            } else {
                e.stopEvent();
            }
            field.preventMark = oldMark;
        }
    },

//  The coordinates to slide the drag proxy back to on failed drop.
    getRepairXY: function() {
        return this.dragData.field.getEl().getXY();
    }
});/**
 * This is the base class for {@link Ext.ux.event.Recorder} and {@link Ext.ux.event.Player}.
 */
Ext.define('Ext.ux.event.Driver', {
    active: null,
    mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor: function (config) {
        var me = this;

        me.mixins.observable.constructor.apply(this, arguments);

        me.addEvents(
            /**
             * @event start
             * Fires when this object is started.
             * @param {Ext.ux.event.Driver} this
             */
            'start',

            /**
             * @event stop
             * Fires when this object is stopped.
             * @param {Ext.ux.event.Driver} this
             */
            'stop'
        );
    },

    getTime: function () {
        return new Date().getTime();
    },

    /**
     * Returns the number of milliseconds since start was called.
     */
    getTimestamp: function () {
        var d = this.getTime();
        return d - this.startTime;
    },

    onStart: function () {},

    onStop: function () {},

    /**
     * Starts this object. If this object is already started, nothing happens.
     */
    start: function () {
        var me = this;

        if (!me.active) {
            me.active = new Date();
            me.startTime = me.getTime();
            me.onStart();
            me.fireEvent('start', me);
        }
    },

    /**
     * Stops this object. If this object is not started, nothing happens.
     */
    stop: function () {
        var me = this;

        if (me.active) {
            me.active = null;
            me.onStop();
            me.fireEvent('stop', me);
        }
    }
});
/**
 * Event maker.
 */
Ext.define('Ext.ux.event.Maker', {

    eventQueue: [],
    
    startAfter: 500,
    
    timerIncrement: 500,
    
    currentTiming: 0,
    
    
    constructor: function(config) {
        var me = this;
        
        me.currentTiming = me.startAfter;
        
        if(!Ext.isArray(config)) {
            config = [config];
        }
        
        Ext.Array.each(config, function(item) {
            item.el = item.el || 'el';
            Ext.Array.each(Ext.ComponentQuery.query(item.cmpQuery), function(cmp) {
                var event = {}, x, y, el;
             
                if (!item.domQuery) {
                    el = cmp[item.el];
                } else {
                    el = cmp.el.down(item.domQuery);
                }

                event.target = '#' + el.dom.id;
                
                event.type = item.type;
                
                event.button = config.button || 0;
                
                x = el.getX() + (el.getWidth() / 2);
                y = el.getY() + (el.getHeight() / 2);
                
                event.xy = [x,y];
                
                event.ts = me.currentTiming;
                
                me.currentTiming += me.timerIncrement;
                    
                me.eventQueue.push(event);
            });
 
            if (item.screenshot) {
                me.eventQueue[me.eventQueue.length - 1].screenshot = true;
            }
        });
        return me.eventQueue;
    }
});/**
 * This class manages the playback of an array of "event descriptors". For details on the
 * contents of an "event descriptor", see {@link Ext.ux.event.Recorder}. The events recorded by the
 * {@link Ext.ux.event.Recorder} class are designed to serve as input for this class.
 * 
 * The simplest use of this class is to instantiate it with an {@link #eventQueue} and call
 * {@link #method-start}. Like so:
 *
 *      var player = Ext.create('Ext.ux.event.Player', {
 *          eventQueue: [ ... ],
 *          speed: 2,  // play at 2x speed
 *          listeners: {
 *              stop: function () {
 *                  player = null; // all done
 *              }
 *          }
 *      });
 *
 *      player.start();
 *
 * A more complex use would be to incorporate keyframe generation after playing certain
 * events.
 *
 *      var player = Ext.create('Ext.ux.event.Player', {
 *          eventQueue: [ ... ],
 *          keyFrameEvents: {
 *              click: true
 *          },
 *          listeners: {
 *              stop: function () {
 *                  // play has completed... probably time for another keyframe...
 *                  player = null;
 *              },
 *              keyframe: onKeyFrame
 *          }
 *      });
 *
 *      player.start();
 *
 * If a keyframe can be handled immediately (synchronously), the listener would be:
 *
 *      function onKeyFrame () {
 *          handleKeyFrame();
 *      }
 *
 *  If the keyframe event is always handled asynchronously, then the event listener is only
 *  a bit more:
 *
 *      function onKeyFrame (p, eventDescriptor) {
 *          eventDescriptor.defer(); // pause event playback...
 *
 *          handleKeyFrame(function () {
 *              eventDescriptor.finish(); // ...resume event playback
 *          });
 *      }
 *
 * Finally, if the keyframe could be either handled synchronously or asynchronously (perhaps
 * differently by browser), a slightly more complex listener is required.
 *
 *      function onKeyFrame (p, eventDescriptor) {
 *          var async;
 *
 *          handleKeyFrame(function () {
 *              // either this callback is being called immediately by handleKeyFrame (in
 *              // which case async is undefined) or it is being called later (in which case
 *              // async will be true).
 *
 *              if (async) {
 *                  eventDescriptor.finish();
 *              } else {
 *                  async = false;
 *              }
 *          });
 *
 *          // either the callback was called (and async is now false) or it was not
 *          // called (and async remains undefined).
 *
 *          if (async !== false) {
 *              eventDescriptor.defer();
 *              async = true; // let the callback know that we have gone async
 *          }
 *      }
 */
Ext.define('Ext.ux.event.Player', {
    extend: 'Ext.ux.event.Driver',

    /**
     * @cfg {Array} eventQueue The event queue to playback. This must be provided before
     * the {@link #method-start} method is called.
     */

    /**
     * @cfg {Object} keyFrameEvents An object that describes the events that should generate
     * keyframe events. For example, `{ click: true }` would generate keyframe events after
     * each `click` event.
     */
    keyFrameEvents: {
        click: true
    },

    /**
     * @cfg {Boolean} pauseForAnimations True to pause event playback during animations, false
     * to ignore animations. Default is true.
     */
    pauseForAnimations: true,

    /**
     * @cfg {Number} speed The playback speed multiplier. Default is 1.0 (to playback at the
     * recorded speed). A value of 2 would playback at 2x speed.
     */
    speed: 1.0,

    stallTime: 0,

    tagPathRegEx: /(\w+)(?:\[(\d+)\])?/,
    
    constructor: function (config) {
        var me = this;
        
        me.callParent(arguments);

        me.addEvents(
            /**
             * @event beforeplay
             * Fires before an event is played.
             * @param {Ext.ux.event.Player} this
             * @param {Object} eventDescriptor The event descriptor about to be played.
             */
            'beforeplay',

            /**
             * @event keyframe
             * Fires when this player reaches a keyframe. Typically, this is after events
             * like `click` are injected and any resulting animations have been completed.
             * @param {Ext.ux.event.Player} this
             * @param {Object} eventDescriptor The keyframe event descriptor.
             */
            'keyframe'
        );

        me.eventObject = new Ext.EventObjectImpl();

        me.timerFn = function () {
            me.onTick();
        };
        me.attachTo = me.attachTo || window;
    },

    /**
     * Returns the element given is XPath-like description.
     * @param {String} xpath The XPath-like description of the element.
     * @return {HTMLElement}
     */
    getElementFromXPath: function (xpath) {
        var me = this,
            parts = xpath.split('/'),
            regex = me.tagPathRegEx,
            i, n, m, count, tag, child,
            el = me.attachTo.document;

        el = (parts[0] == '~') ? el.body
                    : el.getElementById(parts[0].substring(1)); // remove '#'

        for (i = 1, n = parts.length; el && i < n; ++i) {
            m = regex.exec(parts[i]);
            count = m[2] ? parseInt(m[2], 10) : 1;
            tag = m[1].toUpperCase();

            for (child = el.firstChild; child; child = child.nextSibling) {
                if (child.tagName == tag) {
                    if (count == 1) {
                        break;
                    }
                    --count;
                }
            }

            el = child;
        }

        return el;
    },

    getTimeIndex: function () {
        var t = this.getTimestamp() - this.stallTime;
        return t * this.speed;
    },

    makeToken: function (eventDescriptor, signal) {
        var me = this,
            t0;

        eventDescriptor[signal] = true;

        eventDescriptor.defer = function () {
            eventDescriptor[signal] = false;
            t0 = me.getTime();
        };

        eventDescriptor.finish = function () {
            eventDescriptor[signal] = true;
            me.stallTime += me.getTime() - t0;

            me.schedule();
        };
    },

    /**
     * This method is called after an event has been played to prepare for the next event.
     * @param {Object} eventDescriptor The descriptor of the event just played.
     */
    nextEvent: function (eventDescriptor) {
        var me = this,
            index = ++me.queueIndex;

        // keyframe events are inserted after a keyFrameEvent is played.
        if (me.keyFrameEvents[eventDescriptor.type]) {
            Ext.Array.insert(me.eventQueue, index, [
                { keyframe: true, ts: eventDescriptor.ts }
            ]);
        }
    },

    /**
     * This method returns the event descriptor at the front of the queue. This does not
     * dequeue the event. Repeated calls return the same object (until {@link #nextEvent}
     * is called).
     */
    peekEvent: function () {
        var me = this,
            queue = me.eventQueue,
            index = me.queueIndex,
            eventDescriptor = queue[index],
            type = eventDescriptor && eventDescriptor.type,
            tmp;

        if (type == 'mduclick') {
            tmp = [
                Ext.applyIf({ type: 'mousedown' }, eventDescriptor),
                Ext.applyIf({ type: 'mouseup' }, eventDescriptor),
                Ext.applyIf({ type: 'click' }, eventDescriptor)
            ];

            me.replaceEvent(index, tmp);
        }

        return queue[index] || null;
    },

    replaceEvent: function (index, events) {
        for (var t, i = 0, n = events.length; i < n; ++i) {
            if (i) {
                t = events[i-1];
                delete t.afterplay;
                delete t.screenshot;

                delete events[i].beforeplay;
            }
        }

        Ext.Array.replace(this.eventQueue, index, 1, events);
    },

    /**
     * This method dequeues and injects events until it has arrived at the time index. If
     * no events are ready (based on the time index), this method does nothing.
     * @return {Boolean} True if there is more to do; false if not (at least for now).
     */
    processEvents: function () {
        var me = this,
            animations = me.pauseForAnimations && me.attachTo.Ext.fx.Manager.items,
            eventDescriptor;

        while ((eventDescriptor = me.peekEvent()) !== null) {
            if (animations && animations.getCount()) {
                return true;
            }
            
            if (eventDescriptor.keyframe) {
                if (!me.processKeyFrame(eventDescriptor)) {
                    return false;
                }
                me.nextEvent(eventDescriptor);
            } else if (eventDescriptor.ts <= me.getTimeIndex() &&
                       me.fireEvent('beforeplay', me, eventDescriptor) !== false &&
                       me.playEvent(eventDescriptor)) {
                if(window.__x && eventDescriptor.screenshot) {
                     __x.poll.sendSyncRequest({cmd: 'screenshot'});
                }       
                me.nextEvent(eventDescriptor);
            } else {
                return true;
            }
        }

        me.stop();
        return false;
    },

    /**
     * This method is called when a keyframe is reached. This will fire the keyframe event.
     * If the keyframe has been handled, true is returned. Otherwise, false is returned.
     * @param {Object} eventDescriptor The event descriptor of the keyframe.
     * @return {Boolean} True if the keyframe was handled, false if not.
     */
    processKeyFrame: function (eventDescriptor) {
        var me = this;

        // only fire keyframe event (and setup the eventDescriptor) once...
        if (!eventDescriptor.defer) {
            me.makeToken(eventDescriptor, 'done');
            me.fireEvent('keyframe', me, eventDescriptor);
        }

        return eventDescriptor.done;
    },

    /**
     * Called to inject the given event on the specified target.
     * @param {HTMLElement} target The target of the event.
     * @param {Ext.EventObject} event The event to inject.
     */
    injectEvent: function (target, event) {
        event.injectEvent(target);
    },

    playEvent: function (eventDescriptor) {
        var me = this,
            target = me.getElementFromXPath(eventDescriptor.target),
            event;

        if (!target) {
            // not present (yet)... wait for element present...
            // TODO - need a timeout here
            return false;
        }

        if (!me.playEventHook(eventDescriptor, 'beforeplay')) {
            return false;
        }

        if (!eventDescriptor.injected) {
            eventDescriptor.injected = true;
            event = me.translateEvent(eventDescriptor, target);
            me.injectEvent(target, event);
        }

        return me.playEventHook(eventDescriptor, 'afterplay');
    },

    playEventHook: function (eventDescriptor, hookName) {
        var me = this,
            doneName = hookName + '.done',
            firedName = hookName + '.fired',
            hook = eventDescriptor[hookName];

        if (hook && !eventDescriptor[doneName]) {
            if (!eventDescriptor[firedName]) {
                eventDescriptor[firedName] = true;
                me.makeToken(eventDescriptor, doneName);

                me.eventScope[hook](eventDescriptor);
            }
            return false;
        }

        return true;
    },

    schedule: function () {
        var me = this;
        if (!me.timer) {
            me.timer = setTimeout(me.timerFn, 10);
        }
    },

    translateEvent: function (eventDescriptor, target) {
        var me = this,
            event = me.eventObject,
            modKeys = eventDescriptor.modKeys || '',
            xy;

        if ('x' in eventDescriptor) {
            event.xy = xy = Ext.fly(target).getXY();
            xy[0] += eventDescriptor.x;
            xy[1] += eventDescriptor.y;
        }

        if ('wheel' in eventDescriptor) {
            // see getWheelDelta
        }

        event.type = eventDescriptor.type;
        event.button = eventDescriptor.button;
        event.altKey = modKeys.indexOf('A') > 0;
        event.ctrlKey = modKeys.indexOf('C') > 0;
        event.metaKey = modKeys.indexOf('M') > 0;
        event.shiftKey = modKeys.indexOf('S') > 0;
    
        return event;
    },

    //---------------------------------
    // Driver overrides

    onStart: function () {
        var me = this;

        me.queueIndex = 0;
        me.schedule();
    },

    onStop: function () {
        var me = this;

        if (me.timer) {
            clearTimeout(me.timer);
            me.timer = null;
        }
        if (window.__x) {
            __x.poll.sendSyncRequest({cmd: 'finish'});
        }
    },

    //---------------------------------

    onTick: function () {
        var me = this;

        me.timer = null;

        if (me.processEvents()) {
            me.schedule();
        }
    }
});
/**
 * @extends Ext.ux.event.Driver
 * Event recorder.
 */
Ext.define('Ext.ux.event.Recorder', function () {
    function samePt (pt1, pt2) {
        return pt1.x == pt2.x && pt1.y == pt2.y;
    }

    return {
        extend: 'Ext.ux.event.Driver',

        eventsToRecord: function () {
            var key = { kind: 'keyboard', modKeys: true, key: true, bubbles: true },
                mouse = { kind: 'mouse', button: true, modKeys: true, xy: true, bubbles: true };

            return {
                keydown: key,
                keypress: key,
                keyup: key,

                mousemove: mouse,
                mouseover: mouse,
                mouseout: mouse,
                click: mouse,
                //mousewheel: Ext.apply({ wheel: true }, mouse),
                mousedown: mouse,
                mouseup: mouse,

                scroll: { kind: 'misc', bubbles: false }
            };
        }(),

        ignoreIdRegEx: /ext-gen(?:\d+)/,

        constructor: function (config) {
            var me = this,
                events = config && config.eventsToRecord;

            if (events) {
                me.eventsToRecord = Ext.apply(Ext.apply({}, me.eventsToRecord), // duplicate
                                        events); // and merge
                delete config.eventsToRecord; // don't smash
            }

            me.callParent(arguments);

            me.addEvents(
                /**
                 * @event add
                 * Fires when an event is added to the recording.
                 * @param {Ext.ux.event.Recorder} this
                 * @param {Object} eventDescriptor The event descriptor.
                 */
                'add',

                /**
                 * @event coalesce
                 * Fires when an event is coalesced. This edits the tail of the recorded
                 * event list.
                 * @param {Ext.ux.event.Recorder} this
                 * @param {Object} eventDescriptor The event descriptor that was coalesced.
                 */
                'coalesce'
            );

            me.clear();
            me.modKeys = [];
            me.attachTo = me.attachTo || window;
        },

        clear: function () {
            this.eventsRecorded = [];
        },

        coalesce: function (rec) {
            var me = this,
                events = me.eventsRecorded,
                length = events.length,
                tail = length && events[length-1],
                tailPrev;

            if (!tail) {
                return false;
            }

            if (rec.type == 'mousemove') {
                if (tail.type == 'mousemove' && rec.ts - tail.ts < 200) {
                    rec.ts = tail.ts;
                    events[length-1] = rec;
                    return true;
                }
            } else if (rec.type == 'click') {
                if (length >= 2 && tail.type == 'mouseup' &&
                        (tailPrev = events[length-2]).type == 'mousedown') {
                    if (rec.button == tail.button && rec.button == tailPrev.button &&
                            rec.target == tail.target && rec.target == tailPrev.target &&
                            samePt(rec, tail) && samePt(rec, tailPrev) ) {
                        events.pop(); // remove mouseup
                        tailPrev.type = 'mduclick';
                        return true;
                    }
                }
            }

            return false;
        },

        getElementXPath: function (el) {
            var me = this,
                good = false,
                xpath = [],
                count,
                sibling,
                t,
                tag;

            for (t = el; t; t = t.parentNode) {
                if (t == me.attachTo.document.body) {
                    xpath.unshift('~');
                    good = true;
                    break;
                }
                if (t.id && !me.ignoreIdRegEx.test(t.id)) {
                    xpath.unshift('#' + t.id);
                    good = true;
                    break;
                }

                for (count = 1, sibling = t; !!(sibling = sibling.previousSibling); ) {
                    if (sibling.tagName == t.tagName) {
                        ++count;
                    }
                }

                tag = t.tagName.toLowerCase();
                if (count < 2) {
                    xpath.unshift(tag);
                } else {
                    xpath.unshift(tag + '[' + count + ']');
                }
            }

            return good ? xpath.join('/') : null;
        },

        getRecordedEvents: function () {
            return this.eventsRecorded;
        },

        // DOMNodeInserted
        onDomInsert: function (event, target) {
            this.watchTree(target);
        },

        //DOMNodeRemoved
        onDomRemove: function (event, target) {
            this.unwatchTree(target);
        },

        onEvent: function (e) {
            var me = this,
                info = me.eventsToRecord[e.type],
                root,
                modKeys, elXY,
                rec = {
                    type: e.type,
                    ts: me.getTimestamp(),
                    target: me.getElementXPath(e.target)
                },
                xy;

            if (!rec.target) {
                return;
            }
            root = e.target.ownerDocument;
            root = root.defaultView || root.parentWindow; // Standards || IE
            if (root !== me.attachTo) {
                return;
            }

            if (info.xy) {
                xy = e.getXY();
                if (rec.target) {
                    elXY = Ext.fly(e.getTarget()).getXY();
                    xy[0] -= elXY[0];
                    xy[1] -= elXY[1];
                }
                rec.x = xy[0];
                rec.y = xy[1];
            }

            if (info.button) {
                rec.button = e.button;
            }

            if (info.wheel) {
                rec.wheel = e.getWheelDelta();
            }

            if (info.modKeys) {
                me.modKeys[0] = e.altKey ? 'A' : '';
                me.modKeys[1] = e.ctrlKey ? 'C' : '';
                me.modKeys[2] = e.metaKey ? 'M' : '';
                me.modKeys[3] = e.shiftKey ? 'S' : '';

                modKeys = me.modKeys.join('');
                if (modKeys) {
                    rec.modKeys = modKeys;
                }
            }

            if (info.key) {
                rec.charCode = e.getCharCode();
                rec.keyCode = e.getKey();
            }

            if (me.coalesce(rec)) {
                me.fireEvent('coalesce', me, rec);
            } else {
                me.eventsRecorded.push(rec);
                me.fireEvent('add', me, rec);
            }
        },

        onStart: function () {
            var me = this,
                on = {
                    DOMNodeInserted: me.onDomInsert,
                    DOMNodeRemoved: me.onDomRemove,
                    scope: me
                },
                nonBubbleEvents = (me.nonBubbleEvents = {}),
                ddm = me.attachTo.Ext.dd.DragDropManager,
                evproto = me.attachTo.Ext.EventObjectImpl.prototype;

            me.watchingNodes = {};

            Ext.Object.each(me.eventsToRecord, function (name, value) {
                if (value) {
                    if (value.bubbles) {
                        on[name] = me.onEvent;
                    } else {
                        nonBubbleEvents[name] = value;
                    }
                }
            });

            me.ddmStopEvent = ddm.stopEvent;
            ddm.stopEvent = Ext.Function.createSequence(ddm.stopEvent, function (e) {
                me.onEvent(e);
            });
            me.evStopEvent = evproto.stopEvent;
            evproto.stopEvent = Ext.Function.createSequence(evproto.stopEvent, function () {
                me.onEvent(this);
            });

            var body = me.attachTo.Ext.getBody();
            body.on(on);
            me.watchTree(body.dom);
        },

        onStop: function () {
            var me = this,
                body = me.attachTo.Ext.getBody();

            Ext.Object.each(me.eventsToRecord, function (name, value) {
                if (value) {
                    body.un(name, me.onEvent, me);
                }
            });

            me.attachTo.Ext.dd.DragDropManager.stopEvent = me.ddmStopEvent;
            me.attachTo.Ext.EventObjectImpl.prototype.stopEvent = me.evStopEvent;

            me.unwatchTree(body.dom);
        },

        watchTree: function (root) {
            if (root.nodeType != 1) {
                return; // only ELEMENT_NODE's please...
            }

            var me = this,
                id = (root.tagName == 'BODY') ? '$' : root.id,
                watchingNodes = me.watchingNodes;

            if (id && !watchingNodes[id]) {
                var on = {
                    scope: me
                };

                Ext.Object.each(me.nonBubbleEvents, function (name, value) {
                    if (value) {
                        on[name] = me.onEvent;
                    }
                });
                me.attachTo.Ext.fly(root).on(on);
                watchingNodes[id] = true;
                console.log('watch '+root.tagName+'#'+id);
            }

            Ext.each(root.childNodes, me.watchTree, me);
        },

        unwatchTree: function (root) {
            if (root.nodeType != 1) {
                return; // only ELEMENT_NODE's please...
            }

            var me = this,
                id = (root.tagName == 'BODY') ? '$' : root.id,
                watchingNodes = me.watchingNodes;

            if (id && !watchingNodes[id]) {
                Ext.Object.each(me.nonBubbleEvents, function (name, value) {
                    me.attachTo.Ext.fly(root).un(name, me.onEvent, me);
                });
                delete watchingNodes[id];
                console.log('unwatch '+root.tagName+'#'+id);
            }

            Ext.each(root.childNodes, me.unwatchTree, me);
        }
    };
}());
/**
 * Recorder manager.
 * Used as a bookmarklet:
 *
 *    javascript:void(window.open("../ux/event/RecorderManager.html","recmgr"))
 */
Ext.define('Ext.ux.event.RecorderManager', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.eventrecordermanager',

    uses: [
        'Ext.ux.event.Recorder',
        'Ext.ux.event.Player'
    ],

    layout: 'fit',
    buttonAlign: 'left',

    eventsToIgnore: {
        mousemove: 1,
        mouseover: 1,
        mouseout: 1
    },

    bodyBorder: false,
    playSpeed: 1,

    initComponent: function () {
        var me = this;

        me.recorder = new Ext.ux.event.Recorder({
            attachTo: me.attachTo,
            listeners: {
                add: me.updateEvents,
                coalesce: me.updateEvents,
                buffer: 200,
                scope: me
            }
        });
        me.recorder.eventsToRecord = Ext.apply({}, me.recorder.eventsToRecord);

        function speed (text, value) {
            return {
                text: text,
                speed: value,
                group: 'speed',
                checked: value == me.playSpeed,
                handler: me.onPlaySpeed,
                scope: me
            };
        }

        me.tbar = [
            {
                text: 'Record',
                xtype: 'splitbutton',
                whenIdle: true,
                handler: me.onRecord,
                scope: me,
                menu: me.makeRecordButtonMenu()
            },
            {
                text: 'Play',
                xtype: 'splitbutton',
                whenIdle: true,
                handler: me.onPlay,
                scope: me,
                menu: [
                    speed('Recorded Speed (1x)', 1),
                    speed('Double Speed (2x)', 2),
                    speed('Quad Speed (4x)', 4),
                    '-',
                    speed('Full Speed', 1000)
                ]
            },
            {
                text: 'Clear',
                whenIdle: true,
                handler: me.onClear,
                scope: me
            },
            '->',
            {
                text: 'Stop',
                whenActive: true,
                disabled: true,
                handler: me.onStop,
                scope: me
            }
        ];

        var events = me.attachTo.testEvents;
        me.items = [
            {
                xtype: 'textarea',
                itemId: 'eventView',
                fieldStyle: 'font-family: monospace',
                selectOnFocus: true,
                emptyText: 'Events go here!',
                value: events ? me.stringifyEvents(events) : '',
                scrollToBottom: function () {
                    var inputEl = this.inputEl.dom;
                    inputEl.scrollTop = inputEl.scrollHeight;
                }
            }
        ];
        me.fbar = [
            {
                xtype: 'tbtext',
                text: 'Attached To: ' + me.attachTo.location.href
            }
        ];

        me.callParent();
    },

    makeRecordButtonMenu: function () {
        var ret = [],
            subs = {},
            eventsToRec = this.recorder.eventsToRecord,
            ignoredEvents = this.eventsToIgnore;

        Ext.Object.each(eventsToRec, function (name, value) {
            var sub = subs[value.kind];
            if (!sub) {
                subs[value.kind] = sub = [];
                ret.push({
                    text: value.kind,
                    menu: sub
                });
            }

            sub.push({
                text: name,
                checked: true,
                handler: function (menuItem) {
                    if (menuItem.checked) {
                        eventsToRec[name] = value;
                    } else {
                        delete eventsToRec[name];
                    }
                }
            });

            if (ignoredEvents[name]) {
                sub[sub.length - 1].checked = false;
                Ext.Function.defer(function () {
                    delete eventsToRec[name];
                }, 1);
            }
        });

        function less (lhs, rhs) {
            return (lhs.text < rhs.text) ? -1
                        : ((rhs.text < lhs.text) ? 1 : 0);
        }

        ret.sort(less);
        Ext.Array.each(ret, function (sub) {
            sub.menu.sort(less);
        });

        return ret;
    },

    getEventView: function () {
        return this.down('#eventView');
    },

    onClear: function () {
        var view = this.getEventView();
        view.setValue('');
    },

    onPlay: function () {
        var me = this,
            view = me.getEventView(),
            events = view.getValue();

        if (events) {
            events = Ext.decode(events);
            if (events.length) {
                me.player = Ext.create('Ext.ux.event.Player', {
                    attachTo: window.opener,
                    eventQueue: events,
                    listeners: {
                        stop: me.onPlayStop,
                        scope: me
                    }
                });

                me.player.start();
                me.syncBtnUI();
            }
        }
    },

    onPlayStop: function () {
        this.player = null;
        this.syncBtnUI();
    },

    onPlaySpeed: function (menuitem) {
        this.playSpeed = menuitem.speed;
    },

    onRecord: function () {
        this.recorder.start();
        this.syncBtnUI();
    },

    onStop: function () {
        var me = this;

        if (me.player) {
            me.player.stop();
            me.player = null;
        } else {
            me.recorder.stop();
        }
        me.syncBtnUI();
        me.updateEvents();
    },

    syncBtnUI: function () {
        var me = this,
            idle = !me.player && !me.recorder.active;

        Ext.each(me.query('[whenIdle]'), function (btn) {
            btn.setDisabled(!idle);
        });
        Ext.each(me.query('[whenActive]'), function (btn) {
            btn.setDisabled(idle);
        });

        var view = me.getEventView();
        view.setReadOnly(!idle);
    },

    stringifyEvents: function (events) {
        var line,
            lines = [];

        Ext.each(events, function (ev) {
            line = [];

            Ext.Object.each(ev, function (name, value) {
                if (line.length) {
                    line.push(', ');
                } else {
                    line.push('  { ');
                }
                line.push(name, ': ');
                line.push(Ext.encode(value));
            });

            line.push(' }');
            lines.push(line.join(''));
        });

        return '[\n' + lines.join(',\n') + '\n]';
    },

    updateEvents: function () {
        var me = this,
            text = me.stringifyEvents(me.recorder.getRecordedEvents()),
            view = me.getEventView();

        view.setValue(text);
        view.scrollToBottom();
    }
});
/**
 * A control that allows selection of multiple items in a list.
 */
Ext.define('Ext.ux.form.MultiSelect', {
    
    extend: 'Ext.form.FieldContainer',
    
    mixins: {
        bindable: 'Ext.util.Bindable',
        field: 'Ext.form.field.Field'    
    },
    
    alternateClassName: 'Ext.ux.Multiselect',
    alias: ['widget.multiselectfield', 'widget.multiselect'],
    
    requires: ['Ext.panel.Panel', 'Ext.view.BoundList', 'Ext.layout.container.Fit'],
    
    uses: ['Ext.view.DragZone', 'Ext.view.DropZone'],
    
    layout: 'anchor',
    
    /**
     * @cfg {String} [dragGroup=""] The ddgroup name for the MultiSelect DragZone.
     */

    /**
     * @cfg {String} [dropGroup=""] The ddgroup name for the MultiSelect DropZone.
     */
    
    /**
     * @cfg {String} [title=""] A title for the underlying panel.
     */
    
    /**
     * @cfg {Boolean} [ddReorder=false] Whether the items in the MultiSelect list are drag/drop reorderable.
     */
    ddReorder: false,

    /**
     * @cfg {Object/Array} tbar An optional toolbar to be inserted at the top of the control's selection list.
     * This can be a {@link Ext.toolbar.Toolbar} object, a toolbar config, or an array of buttons/button configs
     * to be added to the toolbar. See {@link Ext.panel.Panel#tbar}.
     */

    /**
     * @cfg {String} [appendOnly=false] `true` if the list should only allow append drops when drag/drop is enabled.
     * This is useful for lists which are sorted.
     */
    appendOnly: false,

    /**
     * @cfg {String} [displayField="text"] Name of the desired display field in the dataset.
     */
    displayField: 'text',

    /**
     * @cfg {String} [valueField="text"] Name of the desired value field in the dataset.
     */

    /**
     * @cfg {Boolean} [allowBlank=true] `false` to require at least one item in the list to be selected, `true` to allow no
     * selection.
     */
    allowBlank: true,

    /**
     * @cfg {Number} [minSelections=0] Minimum number of selections allowed.
     */
    minSelections: 0,

    /**
     * @cfg {Number} [maxSelections=Number.MAX_VALUE] Maximum number of selections allowed.
     */
    maxSelections: Number.MAX_VALUE,

    /**
     * @cfg {String} [blankText="This field is required"] Default text displayed when the control contains no items.
     */
    blankText: 'This field is required',

    /**
     * @cfg {String} [minSelectionsText="Minimum {0}item(s) required"] 
     * Validation message displayed when {@link #minSelections} is not met. 
     * The {0} token will be replaced by the value of {@link #minSelections}.
     */
    minSelectionsText: 'Minimum {0} item(s) required',
    
    /**
     * @cfg {String} [maxSelectionsText="Maximum {0}item(s) allowed"] 
     * Validation message displayed when {@link #maxSelections} is not met
     * The {0} token will be replaced by the value of {@link #maxSelections}.
     */
    maxSelectionsText: 'Maximum {0} item(s) required',

    /**
     * @cfg {String} [delimiter=","] The string used to delimit the selected values when {@link #getSubmitValue submitting}
     * the field as part of a form. If you wish to have the selected values submitted as separate
     * parameters rather than a single delimited parameter, set this to `null`.
     */
    delimiter: ',',
    
    /**
     * @cfg String [dragText="{0} Item{1}"] The text to show while dragging items.
     * {0} will be replaced by the number of items. {1} will be replaced by the plural
     * form if there is more than 1 item.
     */
    dragText: '{0} Item{1}',

    /**
     * @cfg {Ext.data.Store/Array} store The data source to which this MultiSelect is bound (defaults to `undefined`).
     * Acceptable values for this property are:
     * <div class="mdetail-params"><ul>
     * <li><b>any {@link Ext.data.Store Store} subclass</b></li>
     * <li><b>an Array</b> : Arrays will be converted to a {@link Ext.data.ArrayStore} internally.
     * <div class="mdetail-params"><ul>
     * <li><b>1-dimensional array</b> : (e.g., <tt>['Foo','Bar']</tt>)<div class="sub-desc">
     * A 1-dimensional array will automatically be expanded (each array item will be the combo
     * {@link #valueField value} and {@link #displayField text})</div></li>
     * <li><b>2-dimensional array</b> : (e.g., <tt>[['f','Foo'],['b','Bar']]</tt>)<div class="sub-desc">
     * For a multi-dimensional array, the value in index 0 of each item will be assumed to be the combo
     * {@link #valueField value}, while the value at index 1 is assumed to be the combo {@link #displayField text}.
     * </div></li></ul></div></li></ul></div>
     */
    
    ignoreSelectChange: 0,

    /**
     * @cfg {Object} listConfig
     * An optional set of configuration properties that will be passed to the {@link Ext.view.BoundList}'s constructor.
     * Any configuration that is valid for BoundList can be included.
     */

    initComponent: function(){
        var me = this;

        me.bindStore(me.store, true);
        if (me.store.autoCreated) {
            me.valueField = me.displayField = 'field1';
            if (!me.store.expanded) {
                me.displayField = 'field2';
            }
        }

        if (!Ext.isDefined(me.valueField)) {
            me.valueField = me.displayField;
        }
        me.items = me.setupItems();
        
        
        me.callParent();
        me.initField();
        me.addEvents('drop');    
    },
    
    setupItems: function() {
        var me = this;

        me.boundList = Ext.create('Ext.view.BoundList', Ext.apply({
            anchor: 'none 100%',
            deferInitialRefresh: false,
            border: 1,
            multiSelect: true,
            store: me.store,
            displayField: me.displayField,
            disabled: me.disabled
        }, me.listConfig));
        me.boundList.getSelectionModel().on('selectionchange', me.onSelectChange, me);
        
        // Only need to wrap the BoundList in a Panel if we have a title.
        if (!me.title) {
            return me.boundList;
        }

        // Wrap to add a title
        me.boundList.border = false;
        return {
            border: true,
            anchor: 'none 100%',
            layout: 'anchor',
            title: me.title,
            tbar: me.tbar,
            items: me.boundList
        };
    },

    onSelectChange: function(selModel, selections){
        if (!this.ignoreSelectChange) {
            this.setValue(selections);
        }    
    },
    
    getSelected: function(){
        return this.boundList.getSelectionModel().getSelection();
    },
    
    // compare array values
    isEqual: function(v1, v2) {
        var fromArray = Ext.Array.from,
            i = 0, 
            len;

        v1 = fromArray(v1);
        v2 = fromArray(v2);
        len = v1.length;

        if (len !== v2.length) {
            return false;
        }

        for(; i < len; i++) {
            if (v2[i] !== v1[i]) {
                return false;
            }
        }

        return true;
    },
    
    afterRender: function(){
        var me = this,
            records;
        
        me.callParent();
        if (me.selectOnRender) {
            records = me.getRecordsForValue(me.value);
            if (records.length) {
                ++me.ignoreSelectChange;
                me.boundList.getSelectionModel().select(records);
                --me.ignoreSelectChange;
            }
            delete me.toSelect;
        }    
        
        if (me.ddReorder && !me.dragGroup && !me.dropGroup){
            me.dragGroup = me.dropGroup = 'MultiselectDD-' + Ext.id();
        }

        if (me.draggable || me.dragGroup){
            me.dragZone = Ext.create('Ext.view.DragZone', {
                view: me.boundList,
                ddGroup: me.dragGroup,
                dragText: me.dragText
            });
        }
        if (me.droppable || me.dropGroup){
            me.dropZone = Ext.create('Ext.view.DropZone', {
                view: me.boundList,
                ddGroup: me.dropGroup,
                handleNodeDrop: function(data, dropRecord, position) {
                    var view = this.view,
                        store = view.getStore(),
                        records = data.records,
                        index;

                    // remove the Models from the source Store
                    data.view.store.remove(records);

                    index = store.indexOf(dropRecord);
                    if (position === 'after') {
                        index++;
                    }
                    store.insert(index, records);
                    view.getSelectionModel().select(records);
                    me.fireEvent('drop', me, records);
                }
            });
        }
    },
    
    isValid : function() {
        var me = this,
            disabled = me.disabled,
            validate = me.forceValidation || !disabled;
            
        
        return validate ? me.validateValue(me.value) : disabled;
    },
    
    validateValue: function(value) {
        var me = this,
            errors = me.getErrors(value),
            isValid = Ext.isEmpty(errors);
            
        if (!me.preventMark) {
            if (isValid) {
                me.clearInvalid();
            } else {
                me.markInvalid(errors);
            }
        }

        return isValid;
    },
    
    markInvalid : function(errors) {
        // Save the message and fire the 'invalid' event
        var me = this,
            oldMsg = me.getActiveError();
        me.setActiveErrors(Ext.Array.from(errors));
        if (oldMsg !== me.getActiveError()) {
            me.updateLayout();
        }
    },

    /**
     * Clear any invalid styles/messages for this field.
     *
     * __Note:__ this method does not cause the Field's {@link #validate} or {@link #isValid} methods to return `true`
     * if the value does not _pass_ validation. So simply clearing a field's errors will not necessarily allow
     * submission of forms submitted with the {@link Ext.form.action.Submit#clientValidation} option set.
     */
    clearInvalid : function() {
        // Clear the message and fire the 'valid' event
        var me = this,
            hadError = me.hasActiveError();
        me.unsetActiveError();
        if (hadError) {
            me.updateLayout();
        }
    },
    
    getSubmitData: function() {
        var me = this,
            data = null,
            val;
        if (!me.disabled && me.submitValue && !me.isFileUpload()) {
            val = me.getSubmitValue();
            if (val !== null) {
                data = {};
                data[me.getName()] = val;
            }
        }
        return data;
    },

    /**
     * Returns the value that would be included in a standard form submit for this field.
     *
     * @return {String} The value to be submitted, or `null`.
     */
    getSubmitValue: function() {
        var me = this,
            delimiter = me.delimiter,
            val = me.getValue();
        
        return Ext.isString(delimiter) ? val.join(delimiter) : val;
    },
    
    getValue: function(){
        return this.value || [];
    },
    
    getRecordsForValue: function(value){
        var me = this,
            records = [],
            all = me.store.getRange(),
            valueField = me.valueField,
            i = 0,
            allLen = all.length,
            rec,
            j,
            valueLen;
            
        for (valueLen = value.length; i < valueLen; ++i) {
            for (j = 0; j < allLen; ++j) {
                rec = all[j];   
                if (rec.get(valueField) == value[i]) {
                    records.push(rec);
                }
            }    
        }
            
        return records;
    },
    
    setupValue: function(value){
        var delimiter = this.delimiter,
            valueField = this.valueField,
            i = 0,
            out,
            len,
            item;
            
        if (Ext.isDefined(value)) {
            if (delimiter && Ext.isString(value)) {
                value = value.split(delimiter);
            } else if (!Ext.isArray(value)) {
                value = [value];
            }
        
            for (len = value.length; i < len; ++i) {
                item = value[i];
                if (item && item.isModel) {
                    value[i] = item.get(valueField);
                }
            }
            out = Ext.Array.unique(value);
        } else {
            out = [];
        }
        return out;
    },
    
    setValue: function(value){
        var me = this,
            selModel = me.boundList.getSelectionModel(),
            store = me.store;

        // Store not loaded yet - we cannot set the value
        if (!store.getCount()) {
            store.on({
                load: Ext.Function.bind(me.setValue, me, [value]),
                single: true
            });
            return;
        }

        value = me.setupValue(value);
        me.mixins.field.setValue.call(me, value);
        
        if (me.rendered) {
            ++me.ignoreSelectChange;
            selModel.deselectAll();
            selModel.select(me.getRecordsForValue(value));
            --me.ignoreSelectChange;
        } else {
            me.selectOnRender = true;
        }
    },
    
    clearValue: function(){
        this.setValue([]);    
    },
    
    onEnable: function(){
        var list = this.boundList;
        this.callParent();
        if (list) {
            list.enable();
        }
    },
    
    onDisable: function(){
        var list = this.boundList;
        this.callParent();
        if (list) {
            list.disable();
        }
    },
    
    getErrors : function(value) {
        var me = this,
            format = Ext.String.format,
            errors = [],
            numSelected;

        value = Ext.Array.from(value || me.getValue());
        numSelected = value.length;

        if (!me.allowBlank && numSelected < 1) {
            errors.push(me.blankText);
        }
        if (numSelected < me.minSelections) {
            errors.push(format(me.minSelectionsText, me.minSelections));
        }
        if (numSelected > me.maxSelections) {
            errors.push(format(me.maxSelectionsText, me.maxSelections));
        }
        return errors;
    },
    
    onDestroy: function(){
        var me = this;
        
        me.bindStore(null);
        Ext.destroy(me.dragZone, me.dropZone);
        me.callParent();
    },
    
    onBindStore: function(store){
        var boundList = this.boundList;
        
        if (boundList) {
            boundList.bindStore(store);
        }
    }
    
});
/*
 * Note that this control will most likely remain as an example, and not as a core Ext form
 * control.  However, the API will be changing in a future release and so should not yet be
 * treated as a final, stable API at this time.
 */

/**
 * A control that allows selection of between two Ext.ux.form.MultiSelect controls.
 */
Ext.define('Ext.ux.form.ItemSelector', {
    extend: 'Ext.ux.form.MultiSelect',
    alias: ['widget.itemselectorfield', 'widget.itemselector'],
    alternateClassName: ['Ext.ux.ItemSelector'],
    requires: [
        'Ext.button.Button',
        'Ext.ux.form.MultiSelect'
    ],

    /**
     * @cfg {Boolean} [hideNavIcons=false] True to hide the navigation icons
     */
    hideNavIcons:false,

    /**
     * @cfg {Array} buttons Defines the set of buttons that should be displayed in between the ItemSelector
     * fields. Defaults to <tt>['top', 'up', 'add', 'remove', 'down', 'bottom']</tt>. These names are used
     * to build the button CSS class names, and to look up the button text labels in {@link #buttonsText}.
     * This can be overridden with a custom Array to change which buttons are displayed or their order.
     */
    buttons: ['top', 'up', 'add', 'remove', 'down', 'bottom'],

    /**
     * @cfg {Object} buttonsText The tooltips for the {@link #buttons}.
     * Labels for buttons.
     */
    buttonsText: {
        top: "Move to Top",
        up: "Move Up",
        add: "Add to Selected",
        remove: "Remove from Selected",
        down: "Move Down",
        bottom: "Move to Bottom"
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        me.ddGroup = me.id + '-dd';
        me.callParent();

        // bindStore must be called after the fromField has been created because
        // it copies records from our configured Store into the fromField's Store
        me.bindStore(me.store);
    },

    createList: function(title){
        var me = this;

        return Ext.create('Ext.ux.form.MultiSelect', {
            // We don't want the multiselects themselves to act like fields,
            // so override these methods to prevent them from including
            // any of their values
            submitValue: false,
            getSubmitData: function(){
                return null;
            },
            getModelData: function(){
                return null;    
            },
            flex: 1,
            dragGroup: me.ddGroup,
            dropGroup: me.ddGroup,
            title: title,
            store: {
                model: me.store.model,
                data: []
            },
            displayField: me.displayField,
            valueField: me.valueField,
            disabled: me.disabled,
            listeners: {
                boundList: {
                    scope: me,
                    itemdblclick: me.onItemDblClick,
                    drop: me.syncValue
                }
            }
        });
    },

    setupItems: function() {
        var me = this;

        me.fromField = me.createList(me.fromTitle);
        me.toField = me.createList(me.toTitle);

        return [
            me.fromField,
            {
                xtype: 'container',
                margins: '0 4',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: me.createButtons()
            },
            me.toField
        ];
    },

    createButtons: function() {
        var me = this,
            buttons = [];

        if (!me.hideNavIcons) {
            Ext.Array.forEach(me.buttons, function(name) {
                buttons.push({
                    xtype: 'button',
                    tooltip: me.buttonsText[name],
                    handler: me['on' + Ext.String.capitalize(name) + 'BtnClick'],
                    cls: Ext.baseCSSPrefix + 'form-itemselector-btn',
                    iconCls: Ext.baseCSSPrefix + 'form-itemselector-' + name,
                    navBtn: true,
                    scope: me,
                    margin: '4 0 0 0'
                });
            });
        }
        return buttons;
    },

    /**
     * Get the selected records from the specified list.
     * 
     * Records will be returned *in store order*, not in order of selection.
     * @param {Ext.view.BoundList} list The list to read selections from.
     * @return {Ext.data.Model[]} The selected records in store order.
     * 
     */
    getSelections: function(list) {
        var store = list.getStore();

        return Ext.Array.sort(list.getSelectionModel().getSelection(), function(a, b) {
            a = store.indexOf(a);
            b = store.indexOf(b);

            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        });
    },

    onTopBtnClick : function() {
        var list = this.toField.boundList,
            store = list.getStore(),
            selected = this.getSelections(list);

        store.suspendEvents();
        store.remove(selected, true);
        store.insert(0, selected);
        store.resumeEvents();
        list.refresh();
        this.syncValue(); 
        list.getSelectionModel().select(selected);
    },

    onBottomBtnClick : function() {
        var list = this.toField.boundList,
            store = list.getStore(),
            selected = this.getSelections(list);

        store.suspendEvents();
        store.remove(selected, true);
        store.add(selected);
        store.resumeEvents();
        list.refresh();
        this.syncValue();
        list.getSelectionModel().select(selected);
    },

    onUpBtnClick : function() {
        var list = this.toField.boundList,
            store = list.getStore(),
            selected = this.getSelections(list),
            rec,
            i = 0,
            len = selected.length,
            index = 0;

        // Move each selection up by one place if possible
        store.suspendEvents();
        for (; i < len; ++i, index++) {
            rec = selected[i];
            index = Math.max(index, store.indexOf(rec) - 1);
            store.remove(rec, true);
            store.insert(index, rec);
        }
        store.resumeEvents();
        list.refresh();
        this.syncValue();
        list.getSelectionModel().select(selected);
    },

    onDownBtnClick : function() {
        var list = this.toField.boundList,
            store = list.getStore(),
            selected = this.getSelections(list),
            rec,
            i = selected.length - 1,
            index = store.getCount() - 1;

        // Move each selection down by one place if possible
        store.suspendEvents();
        for (; i > -1; --i, index--) {
            rec = selected[i];
            index = Math.min(index, store.indexOf(rec) + 1);
            store.remove(rec, true);
            store.insert(index, rec);
        }
        store.resumeEvents();
        list.refresh();
        this.syncValue();
        list.getSelectionModel().select(selected);
    },

    onAddBtnClick : function() {
        var me = this,
            selected = me.getSelections(me.fromField.boundList);

        me.moveRec(true, selected);
        me.toField.boundList.getSelectionModel().select(selected);
    },

    onRemoveBtnClick : function() {
        var me = this,
            selected = me.getSelections(me.toField.boundList);

        me.moveRec(false, selected);
        me.fromField.boundList.getSelectionModel().select(selected);
    },

    moveRec: function(add, recs) {
        var me = this,
            fromField = me.fromField,
            toField   = me.toField,
            fromStore = add ? fromField.store : toField.store,
            toStore   = add ? toField.store   : fromField.store;

        fromStore.suspendEvents();
        toStore.suspendEvents();
        fromStore.remove(recs);
        toStore.add(recs);
        fromStore.resumeEvents();
        toStore.resumeEvents();

        fromField.boundList.refresh();
        toField.boundList.refresh();

        me.syncValue();
    },

    // Synchronizes the submit value with the current state of the toStore
    syncValue: function() {
        var me = this; 
        me.mixins.field.setValue.call(me, me.setupValue(me.toField.store.getRange()));
    },

    onItemDblClick: function(view, rec) {
        this.moveRec(view === this.fromField.boundList, rec);
    },

    setValue: function(value) {
        var me = this,
            fromField = me.fromField,
            toField = me.toField,
            fromStore = fromField.store,
            toStore = toField.store,
            selected;

        // Wait for from store to be loaded
        if (!me.fromStorePopulated) {
            me.fromField.store.on({
                load: Ext.Function.bind(me.setValue, me, [value]),
                single: true
            });
            return;
        }

        value = me.setupValue(value);
        me.mixins.field.setValue.call(me, value);

        selected = me.getRecordsForValue(value);

        // Clear both left and right Stores.
        // Both stores must not fire events during this process.
        fromStore.suspendEvents();
        toStore.suspendEvents();
        fromStore.removeAll();
        toStore.removeAll();

        // Reset fromStore
        me.populateFromStore(me.store);

        // Copy selection across to toStore
        Ext.Array.forEach(selected, function(rec){
            // In the from store, move it over
            if (fromStore.indexOf(rec) > -1) {
                fromStore.remove(rec);
            }
            toStore.add(rec);
        });

        // Stores may now fire events
        fromStore.resumeEvents();
        toStore.resumeEvents();

        // Refresh both sides and then update the app layout
        Ext.suspendLayouts();
        fromField.boundList.refresh();
        toField.boundList.refresh();
        Ext.resumeLayouts(true);        
    },

    onBindStore: function(store, initial) {
        var me = this;

        if (me.fromField) {
            me.fromField.store.removeAll()
            me.toField.store.removeAll();

            // Add everything to the from field as soon as the Store is loaded
            if (store.getCount()) {
                me.populateFromStore(store);
            } else {
                me.store.on('load', me.populateFromStore, me);
            }
        }
    },

    populateFromStore: function(store) {
        var fromStore = this.fromField.store;

        // Flag set when the fromStore has been loaded
        this.fromStorePopulated = true;

        fromStore.add(store.getRange());

        // setValue waits for the from Store to be loaded
        fromStore.fireEvent('load', fromStore);
    },

    onEnable: function(){
        var me = this;

        me.callParent();
        me.fromField.enable();
        me.toField.enable();

        Ext.Array.forEach(me.query('[navBtn]'), function(btn){
            btn.enable();
        });
    },

    onDisable: function(){
        var me = this;

        me.callParent();
        me.fromField.disable();
        me.toField.disable();

        Ext.Array.forEach(me.query('[navBtn]'), function(btn){
            btn.disable();
        });
    },

    onDestroy: function(){
        this.bindStore(null);
        this.callParent();
    }
});
Ext.define('Ext.ux.form.SearchField', {
    extend: 'Ext.form.field.Trigger',

    alias: 'widget.searchfield',

    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',

    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',

    hasSearch : false,
    paramName : 'query',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
        me.on('specialkey', function(f, e){
            if (e.getKey() == e.ENTER) {
                me.onTrigger2Click();
            }
        });

        // We're going to use filtering
        me.store.remoteFilter = true;

        // Set up the proxy to encode the filter in the simplest way as a name/value pair

        // If the Store has not been *configured* with a filterParam property, then use our filter parameter name
        if (!me.store.proxy.hasOwnProperty('filterParam')) {
            me.store.proxy.filterParam = me.paramName;
        }
        me.store.proxy.encodeFilters = function(filters) {
            return filters[0].value;
        }
    },

    afterRender: function(){
        this.callParent();
        this.triggerCell.item(0).setDisplayed(false);
    },

    onTrigger1Click : function(){
        var me = this;

        if (me.hasSearch) {
            me.setValue('');
            me.store.clearFilter();
            me.hasSearch = false;
            me.triggerCell.item(0).setDisplayed(false);
            me.updateLayout();
        }
    },

    onTrigger2Click : function(){
        var me = this,
            value = me.getValue();

        if (value.length > 0) {
            // Param name is ignored here since we use custom encoding in the proxy.
            // id is used by the Store to replace any previous filter
            me.store.filter({
                id: me.paramName,
                property: me.paramName,
                value: value
            });
            me.hasSearch = true;
            me.triggerCell.item(0).setDisplayed(true);
            me.updateLayout();
        }
    }
});/**
 * FiltersFeature is a grid {@link Ext.grid.feature.Feature feature} that allows for a slightly more
 * robust representation of filtering than what is provided by the default store.
 *
 * Filtering is adjusted by the user using the grid's column header menu (this menu can be
 * disabled through configuration). Through this menu users can configure, enable, and
 * disable filters for each column.
 *
 * #Features#
 *
 * ##Filtering implementations:##
 *
 * Default filtering for Strings, Numeric Ranges, Date Ranges, Lists (which can be backed by a
 * {@link Ext.data.Store}), and Boolean. Additional custom filter types and menus are easily
 * created by extending {@link Ext.ux.grid.filter.Filter}.
 *
 * ##Graphical Indicators:##
 *
 * Columns that are filtered have {@link #filterCls a configurable css class} applied to the column headers.
 *
 * ##Automatic Reconfiguration:##
 *
 * Filters automatically reconfigure when the grid 'reconfigure' event fires.
 *
 * ##Stateful:##
 *
 * Filter information will be persisted across page loads by specifying a `stateId`
 * in the Grid configuration.
 *
 * The filter collection binds to the {@link Ext.grid.Panel#beforestaterestore beforestaterestore}
 * and {@link Ext.grid.Panel#beforestatesave beforestatesave} events in order to be stateful.
 *
 * ##GridPanel Changes:##
 *
 * - A `filters` property is added to the GridPanel using this feature.
 * - A `filterupdate` event is added to the GridPanel and is fired upon onStateChange completion.
 *
 * ##Server side code examples:##
 *
 * - [PHP](http://www.vinylfox.com/extjs/grid-filter-php-backend-code.php) - (Thanks VinylFox)
 * - [Ruby on Rails](http://extjs.com/forum/showthread.php?p=77326#post77326) - (Thanks Zyclops)
 * - [Ruby on Rails](http://extjs.com/forum/showthread.php?p=176596#post176596) - (Thanks Rotomaul)
 *
 * #Example usage:#
 *
 *     var store = Ext.create('Ext.data.Store', {
 *         pageSize: 15
 *         ...
 *     });
 *
 *     var filtersCfg = {
 *         ftype: 'filters',
 *         autoReload: false, //don't reload automatically
 *         local: true, //only filter locally
 *         // filters may be configured through the plugin,
 *         // or in the column definition within the headers configuration
 *         filters: [{
 *             type: 'numeric',
 *             dataIndex: 'id'
 *         }, {
 *             type: 'string',
 *             dataIndex: 'name'
 *         }, {
 *             type: 'numeric',
 *             dataIndex: 'price'
 *         }, {
 *             type: 'date',
 *             dataIndex: 'dateAdded'
 *         }, {
 *             type: 'list',
 *             dataIndex: 'size',
 *             options: ['extra small', 'small', 'medium', 'large', 'extra large'],
 *             phpMode: true
 *         }, {
 *             type: 'boolean',
 *             dataIndex: 'visible'
 *         }]
 *     };
 *
 *     var grid = Ext.create('Ext.grid.Panel', {
 *          store: store,
 *          columns: ...,
 *          features: [filtersCfg],
 *          height: 400,
 *          width: 700,
 *          bbar: Ext.create('Ext.PagingToolbar', {
 *              store: store
 *          })
 *     });
 *
 *     // a filters property is added to the GridPanel
 *     grid.filters
 */
Ext.define('Ext.ux.grid.FiltersFeature', {
    extend: 'Ext.grid.feature.Feature',
    alias: 'feature.filters',
    uses: [
        'Ext.ux.grid.menu.ListMenu',
        'Ext.ux.grid.menu.RangeMenu',
        'Ext.ux.grid.filter.BooleanFilter',
        'Ext.ux.grid.filter.DateFilter',
        'Ext.ux.grid.filter.DateTimeFilter',
        'Ext.ux.grid.filter.ListFilter',
        'Ext.ux.grid.filter.NumericFilter',
        'Ext.ux.grid.filter.StringFilter'
    ],

    /**
     * @cfg {Boolean} autoReload
     * Defaults to true, reloading the datasource when a filter change happens.
     * Set this to false to prevent the datastore from being reloaded if there
     * are changes to the filters.  See <code>{@link #updateBuffer}</code>.
     */
    autoReload : true,
    /**
     * @cfg {Boolean} encode
     * Specify true for {@link #buildQuery} to use Ext.util.JSON.encode to
     * encode the filter query parameter sent with a remote request.
     * Defaults to false.
     */
    /**
     * @cfg {Array} filters
     * An Array of filters config objects. Refer to each filter type class for
     * configuration details specific to each filter type. Filters for Strings,
     * Numeric Ranges, Date Ranges, Lists, and Boolean are the standard filters
     * available.
     */
    /**
     * @cfg {String} filterCls
     * The css class to be applied to column headers with active filters.
     * Defaults to <tt>'ux-filterd-column'</tt>.
     */
    filterCls : 'ux-filtered-column',
    /**
     * @cfg {Boolean} local
     * <tt>true</tt> to use Ext.data.Store filter functions (local filtering)
     * instead of the default (<tt>false</tt>) server side filtering.
     */
    local : false,
    /**
     * @cfg {String} menuFilterText
     * defaults to <tt>'Filters'</tt>.
     */
    menuFilterText : 'Filters',
    /**
     * @cfg {String} paramPrefix
     * The url parameter prefix for the filters.
     * Defaults to <tt>'filter'</tt>.
     */
    paramPrefix : 'filter',
    /**
     * @cfg {Boolean} showMenu
     * Defaults to true, including a filter submenu in the default header menu.
     */
    showMenu : true,
    /**
     * @cfg {String} stateId
     * Name of the value to be used to store state information.
     */
    stateId : undefined,
    /**
     * @cfg {Number} updateBuffer
     * Number of milliseconds to defer store updates since the last filter change.
     */
    updateBuffer : 500,

    // doesn't handle grid body events
    hasFeatureEvent: false,


    /** @private */
    constructor : function (config) {
        var me = this;

        me.callParent(arguments);

        me.deferredUpdate = Ext.create('Ext.util.DelayedTask', me.reload, me);

        // Init filters
        me.filters = me.createFiltersCollection();
        me.filterConfigs = config.filters;
    },

    init: function(grid) {
        var me = this,
            view = me.view,
            headerCt = view.headerCt;

        me.bindStore(view.getStore(), true);

        // Listen for header menu being created
        headerCt.on('menucreate', me.onMenuCreate, me);

        view.on('refresh', me.onRefresh, me);
        grid.on({
            scope: me,
            beforestaterestore: me.applyState,
            beforestatesave: me.saveState,
            beforedestroy: me.destroy
        });

        // Add event and filters shortcut on grid panel
        grid.filters = me;
        grid.addEvents('filterupdate');
    },

    createFiltersCollection: function () {
        return Ext.create('Ext.util.MixedCollection', false, function (o) {
            return o ? o.dataIndex : null;
        });
    },

    /**
     * @private Create the Filter objects for the current configuration, destroying any existing ones first.
     */
    createFilters: function() {
        var me = this,
            hadFilters = me.filters.getCount(),
            grid = me.getGridPanel(),
            filters = me.createFiltersCollection(),
            model = grid.store.model,
            fields = model.prototype.fields,
            field,
            filter,
            state;

        if (hadFilters) {
            state = {};
            me.saveState(null, state);
        }

        function add (dataIndex, config, filterable) {
            if (dataIndex && (filterable || config)) {
                field = fields.get(dataIndex);
                filter = {
                    dataIndex: dataIndex,
                    type: (field && field.type && field.type.type) || 'auto'
                };

                if (Ext.isObject(config)) {
                    Ext.apply(filter, config);
                }

                filters.replace(filter);
            }
        }

        // We start with filters from our config
        Ext.Array.each(me.filterConfigs, function (filterConfig) {
            add(filterConfig.dataIndex, filterConfig);
        });

        // Then we merge on filters from the columns in the grid. The columns' filters take precedence.
        Ext.Array.each(grid.columnManager.getColumns(), function (column) {
            if (column.filterable === false) {
                filters.removeAtKey(column.dataIndex);
            } else {
                add(column.dataIndex, column.filter, column.filterable);
            }
        });
        

        me.removeAll();
        if (filters.items) {
            me.initializeFilters(filters.items);
        }

        if (hadFilters) {
            me.applyState(null, state);
        }
    },

    /**
     * @private
     */
    initializeFilters: function(filters) {
        var me = this,
            filtersLength = filters.length,
            i, filter, FilterClass;

        for (i = 0; i < filtersLength; i++) {
            filter = filters[i];
            if (filter) {
                FilterClass = me.getFilterClass(filter.type);
                filter = filter.menu ? filter : new FilterClass(Ext.apply({
                    grid: me.grid
                }, filter));
                me.filters.add(filter);
                Ext.util.Observable.capture(filter, this.onStateChange, this);
            }
        }
    },

    /**
     * @private Handle creation of the grid's header menu. Initializes the filters and listens
     * for the menu being shown.
     */
    onMenuCreate: function(headerCt, menu) {
        var me = this;
        me.createFilters();
        menu.on('beforeshow', me.onMenuBeforeShow, me);
    },

    /**
     * @private Handle showing of the grid's header menu. Sets up the filter item and menu
     * appropriate for the target column.
     */
    onMenuBeforeShow: function(menu) {
        var me = this,
            menuItem, filter;

        if (me.showMenu) {
            menuItem = me.menuItem;
            if (!menuItem || menuItem.isDestroyed) {
                me.createMenuItem(menu);
                menuItem = me.menuItem;
            }

            filter = me.getMenuFilter();

            if (filter) {
                menuItem.setMenu(filter.menu, false);
                menuItem.setChecked(filter.active);
                // disable the menu if filter.disabled explicitly set to true
                menuItem.setDisabled(filter.disabled === true);
            }
            menuItem.setVisible(!!filter);
            this.sep.setVisible(!!filter);
        }
    },


    createMenuItem: function(menu) {
        var me = this;
        me.sep  = menu.add('-');
        me.menuItem = menu.add({
            checked: false,
            itemId: 'filters',
            text: me.menuFilterText,
            listeners: {
                scope: me,
                checkchange: me.onCheckChange,
                beforecheckchange: me.onBeforeCheck
            }
        });
    },

    getGridPanel: function() {
        return this.view.up('gridpanel');
    },

    /**
     * @private
     * Handler for the grid's beforestaterestore event (fires before the state of the
     * grid is restored).
     * @param {Object} grid The grid object
     * @param {Object} state The hash of state values returned from the StateProvider.
     */
    applyState : function (grid, state) {
        var me = this,
            key, filter;
        me.applyingState = true;
        me.clearFilters();
        if (state.filters) {
            for (key in state.filters) {
                if (state.filters.hasOwnProperty(key)) {
                    filter = me.filters.get(key);
                    if (filter) {
                        filter.setValue(state.filters[key]);
                        filter.setActive(true);
                    }
                }
            }
        }
        me.deferredUpdate.cancel();
        if (me.local) {
            me.reload();
        }
        delete me.applyingState;
        delete state.filters;
    },

    /**
     * Saves the state of all active filters
     * @param {Object} grid
     * @param {Object} state
     * @return {Boolean}
     */
    saveState : function (grid, state) {
        var filters = {};
        this.filters.each(function (filter) {
            if (filter.active) {
                filters[filter.dataIndex] = filter.getValue();
            }
        });
        return (state.filters = filters);
    },

    /**
     * @private
     * Handler called by the grid 'beforedestroy' event
     */
    destroy : function () {
        var me = this;
        Ext.destroyMembers(me, 'menuItem', 'sep');
        me.removeAll();
        me.clearListeners();
    },

    /**
     * Remove all filters, permanently destroying them.
     */
    removeAll : function () {
        if(this.filters){
            Ext.destroy.apply(Ext, this.filters.items);
            // remove all items from the collection
            this.filters.clear();
        }
    },


    /**
     * Changes the data store bound to this view and refreshes it.
     * @param {Ext.data.Store} store The store to bind to this view
     */
    bindStore : function(store) {
        var me = this;

        // Unbind from the old Store
        if (me.store && me.storeListeners) {
            me.store.un(me.storeListeners);
        }

        // Set up correct listeners
        if (store) {
            me.storeListeners = {
                scope: me
            };
            if (me.local) {
                me.storeListeners.load = me.onLoad;
            } else {
                me.storeListeners['before' + (store.buffered ? 'prefetch' : 'load')] = me.onBeforeLoad;
            }
            store.on(me.storeListeners);
        } else {
            delete me.storeListeners;
        }
        me.store = store;
    },

    /**
     * @private
     * Get the filter menu from the filters MixedCollection based on the clicked header
     */
    getMenuFilter : function () {
        var header = this.view.headerCt.getMenu().activeHeader;
        return header ? this.filters.get(header.dataIndex) : null;
    },

    /** @private */
    onCheckChange : function (item, value) {
        this.getMenuFilter().setActive(value);
    },

    /** @private */
    onBeforeCheck : function (check, value) {
        return !value || this.getMenuFilter().isActivatable();
    },

    /**
     * @private
     * Handler for all events on filters.
     * @param {String} event Event name
     * @param {Object} filter Standard signature of the event before the event is fired
     */
    onStateChange : function (event, filter) {
        if (event !== 'serialize') {
            var me = this,
                grid = me.getGridPanel();

            if (filter == me.getMenuFilter()) {
                me.menuItem.setChecked(filter.active, false);
            }

            if ((me.autoReload || me.local) && !me.applyingState) {
                me.deferredUpdate.delay(me.updateBuffer);
            }
            me.updateColumnHeadings();

            if (!me.applyingState) {
                grid.saveState();
            }
            grid.fireEvent('filterupdate', me, filter);
        }
    },

    /**
     * @private
     * Handler for store's beforeload event when configured for remote filtering
     * @param {Object} store
     * @param {Object} options
     */
    onBeforeLoad : function (store, options) {
        options.params = options.params || {};
        this.cleanParams(options.params);
        var params = this.buildQuery(this.getFilterData());
        Ext.apply(options.params, params);
    },

    /**
     * @private
     * Handler for store's load event when configured for local filtering
     * @param {Object} store
     */
    onLoad : function (store) {
        store.filterBy(this.getRecordFilter());
    },

    /**
     * @private
     * Handler called when the grid's view is refreshed
     */
    onRefresh : function () {
        this.updateColumnHeadings();
    },

    /**
     * Update the styles for the header row based on the active filters
     */
    updateColumnHeadings : function () {
        var me = this,
            headerCt = me.view.headerCt;
        if (headerCt) {
            headerCt.items.each(function(header) {
                var filter = me.getFilter(header.dataIndex);
                header[filter && filter.active ? 'addCls' : 'removeCls'](me.filterCls);
            });
        }
    },

    /** @private */
    reload : function () {
        var me = this,
            store = me.view.getStore();

        if (me.local) {
            store.clearFilter(true);
            store.filterBy(me.getRecordFilter());
            store.sort();
        } else {
            me.deferredUpdate.cancel();
            if (store.buffered) {
                store.data.clear();
            }
            store.loadPage(1);
        }
    },

    /**
     * Method factory that generates a record validator for the filters active at the time
     * of invokation.
     * @private
     */
    getRecordFilter : function () {
        var f = [], len, i,
            lockingPartner = this.lockingPartner;

        this.filters.each(function (filter) {
            if (filter.active) {
                f.push(filter);
            }
        });

        // Be sure to check the active filters on a locking partner as well.
        if (lockingPartner) {
            lockingPartner.filters.each(function (filter) {
                if (filter.active) {
                    f.push(filter);
                }
            });
        }

        len = f.length;
        return function (record) {
            for (i = 0; i < len; i++) {
                if (!f[i].validateRecord(record)) {
                    return false;
                }
            }
            return true;
        };
    },

    /**
     * Adds a filter to the collection and observes it for state change.
     * @param {Object/Ext.ux.grid.filter.Filter} config A filter configuration or a filter object.
     * @return {Ext.ux.grid.filter.Filter} The existing or newly created filter object.
     */
    addFilter : function (config) {
        var me = this,
            columns = me.getGridPanel().columnManager.getColumns(),
            i, columnsLength, column, filtersLength, filter;

        
        for (i = 0, columnsLength = columns.length; i < columnsLength; i++) {
            column = columns[i];
            if (column.dataIndex === config.dataIndex) {
                column.filter = config;
            }
        }
        
        if (me.view.headerCt.menu) {
            me.createFilters();
        } else {
            // Call getMenu() to ensure the menu is created, and so, also are the filters. We cannot call
            // createFilters() withouth having a menu because it will cause in a recursion to applyState()
            // that ends up to clear all the filter values. This is likely to happen when we reorder a column
            // and then add a new filter before the menu is recreated.
            me.view.headerCt.getMenu();
        }
        
        for (i = 0, filtersLength = me.filters.items.length; i < filtersLength; i++) {
            filter = me.filters.items[i];
            if (filter.dataIndex === config.dataIndex) {
                return filter;
            }
        }
    },

    /**
     * Adds filters to the collection.
     * @param {Array} filters An Array of filter configuration objects.
     */
    addFilters : function (filters) {
        if (filters) {
            var me = this,
                i, filtersLength;
            for (i = 0, filtersLength = filters.length; i < filtersLength; i++) {
                me.addFilter(filters[i]);
            }
        }
    },

    /**
     * Returns a filter for the given dataIndex, if one exists.
     * @param {String} dataIndex The dataIndex of the desired filter object.
     * @return {Ext.ux.grid.filter.Filter}
     */
    getFilter : function (dataIndex) {
        return this.filters.get(dataIndex);
    },

    /**
     * Turns all filters off. This does not clear the configuration information
     * (see {@link #removeAll}).
     */
    clearFilters : function () {
        this.filters.each(function (filter) {
            filter.setActive(false);
        });
    },

    getFilterItems: function () {
        var me = this;

        // If there's a locked grid then we must get the filter items for each grid.
        if (me.lockingPartner) {
            return me.filters.items.concat(me.lockingPartner.filters.items);
        }

        return me.filters.items;
    },

    /**
     * Returns an Array of the currently active filters.
     * @return {Array} filters Array of the currently active filters.
     */
    getFilterData : function () {
        var items = this.getFilterItems(),
            filters = [],
            n, nlen, item, d, i, len;

        for (n = 0, nlen = items.length; n < nlen; n++) {
            item = items[n];
            if (item.active) {
                d = [].concat(item.serialize());
                for (i = 0, len = d.length; i < len; i++) {
                    filters.push({
                        field: item.dataIndex,
                        data: d[i]
                    });
                }
            }
        }
        return filters;
    },

    /**
     * Function to take the active filters data and build it into a query.
     * The format of the query depends on the {@link #encode} configuration:
     *
     *   - `false` (Default) :
     *     Flatten into query string of the form (assuming <code>{@link #paramPrefix}='filters'</code>:
     *
     *         filters[0][field]="someDataIndex"&
     *         filters[0][data][comparison]="someValue1"&
     *         filters[0][data][type]="someValue2"&
     *         filters[0][data][value]="someValue3"&
     *
     *
     *   - `true` :
     *     JSON encode the filter data
     *
     *         {filters:[{"field":"someDataIndex","comparison":"someValue1","type":"someValue2","value":"someValue3"}]}
     *
     * Override this method to customize the format of the filter query for remote requests.
     *
     * @param {Array} filters A collection of objects representing active filters and their configuration.
     * Each element will take the form of {field: dataIndex, data: filterConf}. dataIndex is not assured
     * to be unique as any one filter may be a composite of more basic filters for the same dataIndex.
     *
     * @return {Object} Query keys and values
     */
    buildQuery : function (filters) {
        var p = {}, i, f, root, dataPrefix, key, tmp,
            len = filters.length;

        if (!this.encode){
            for (i = 0; i < len; i++) {
                f = filters[i];
                root = [this.paramPrefix, '[', i, ']'].join('');
                p[root + '[field]'] = f.field;

                dataPrefix = root + '[data]';
                for (key in f.data) {
                    p[[dataPrefix, '[', key, ']'].join('')] = f.data[key];
                }
            }
        } else {
            tmp = [];
            for (i = 0; i < len; i++) {
                f = filters[i];
                tmp.push(Ext.apply(
                    {},
                    {field: f.field},
                    f.data
                ));
            }
            // only build if there is active filter
            if (tmp.length > 0){
                p[this.paramPrefix] = Ext.JSON.encode(tmp);
            }
        }
        return p;
    },

    /**
     * Removes filter related query parameters from the provided object.
     * @param {Object} p Query parameters that may contain filter related fields.
     */
    cleanParams : function (p) {
        // if encoding just delete the property
        if (this.encode) {
            delete p[this.paramPrefix];
        // otherwise scrub the object of filter data
        } else {
            var regex, key;
            regex = new RegExp('^' + this.paramPrefix + '\[[0-9]+\]');
            for (key in p) {
                if (regex.test(key)) {
                    delete p[key];
                }
            }
        }
    },

    /**
     * Function for locating filter classes, overwrite this with your favorite
     * loader to provide dynamic filter loading.
     * @param {String} type The type of filter to load ('Filter' is automatically
     * appended to the passed type; eg, 'string' becomes 'StringFilter').
     * @return {Function} The Ext.ux.grid.filter.Class
     */
    getFilterClass : function (type) {
        // map the supported Ext.data.Field type values into a supported filter
        switch(type) {
            case 'auto':
              type = 'string';
              break;
            case 'int':
            case 'float':
              type = 'numeric';
              break;
            case 'bool':
              type = 'boolean';
              break;
        }
        return Ext.ClassManager.getByAlias('gridfilter.' + type);
    }
});
/**
 * A Grid which creates itself from an existing HTML table element.
 */
Ext.define('Ext.ux.grid.TransformGrid', {
    extend: 'Ext.grid.Panel',

    /**
     * Creates the grid from HTML table element.
     * @param {String/HTMLElement/Ext.Element} table The table element from which this grid will be created -
     * The table MUST have some type of size defined for the grid to fill. The container will be
     * automatically set to position relative if it isn't already.
     * @param {Object} [config] A config object that sets properties on this grid and has two additional (optional)
     * properties: fields and columns which allow for customizing data fields and columns for this grid.
     */
    constructor: function(table, config) {
        config = Ext.apply({}, config);
        table = this.table = Ext.get(table);

        var configFields = config.fields || [],
            configColumns = config.columns || [],
            fields = [],
            cols = [],
            headers = table.query("thead th"),
            i = 0,
            len = headers.length,
            data = table.dom,
            width,
            height,
            store,
            col,
            text,
            name;

        for (; i < len; ++i) {
            col = headers[i];

            text = col.innerHTML;
            name = 'tcol-' + i;

            fields.push(Ext.applyIf(configFields[i] || {}, {
                name: name,
                mapping: 'td:nth(' + (i + 1) + ')/@innerHTML'
            }));

            cols.push(Ext.applyIf(configColumns[i] || {}, {
                text: text,
                dataIndex: name,
                width: col.offsetWidth,
                tooltip: col.title,
                sortable: true
            }));
        }

        if (config.width) {
            width = config.width;
        } else {
            width = table.getWidth() + 1;
        }

        if (config.height) {
            height = config.height;
        }

        Ext.applyIf(config, {
            store: {
                data: data,
                fields: fields,
                proxy: {
                    type: 'memory',
                    reader: {
                        record: 'tbody tr',
                        type: 'xml'
                    }
                }
            },
            columns: cols,
            width: width,
            height: height
        });
        this.callParent([config]);
        
        if (config.remove !== false) {
            // Don't use table.remove() as that destroys the row/cell data in the table in
            // IE6-7 so it cannot be read by the data reader.
            data.parentNode.removeChild(data);
        }
    },

    onDestroy: function() {
        this.callParent();
        this.table.remove();
        delete this.table;
    }
});/**
 * Abstract base class for filter implementations.
 */
Ext.define('Ext.ux.grid.filter.Filter', {
    extend: 'Ext.util.Observable',

    /**
     * @cfg {Boolean} active
     * Indicates the initial status of the filter (defaults to false).
     */
    active : false,
    /**
     * True if this filter is active.  Use setActive() to alter after configuration.
     * @type Boolean
     * @property active
     */
    /**
     * @cfg {String} dataIndex
     * The {@link Ext.data.Store} dataIndex of the field this filter represents.
     * The dataIndex does not actually have to exist in the store.
     */
    dataIndex : null,
    /**
     * The filter configuration menu that will be installed into the filter submenu of a column menu.
     * @type Ext.menu.Menu
     * @property
     */
    menu : null,
    /**
     * @cfg {Number} updateBuffer
     * Number of milliseconds to wait after user interaction to fire an update. Only supported
     * by filters: 'list', 'numeric', and 'string'. Defaults to 500.
     */
    updateBuffer : 500,

    constructor : function (config) {
        Ext.apply(this, config);

        this.addEvents(
            /**
             * @event activate
             * Fires when an inactive filter becomes active
             * @param {Ext.ux.grid.filter.Filter} this
             */
            'activate',
            /**
             * @event deactivate
             * Fires when an active filter becomes inactive
             * @param {Ext.ux.grid.filter.Filter} this
             */
            'deactivate',
            /**
             * @event serialize
             * Fires after the serialization process. Use this to attach additional parameters to serialization
             * data before it is encoded and sent to the server.
             * @param {Array/Object} data A map or collection of maps representing the current filter configuration.
             * @param {Ext.ux.grid.filter.Filter} filter The filter being serialized.
             */
            'serialize',
            /**
             * @event update
             * Fires when a filter configuration has changed
             * @param {Ext.ux.grid.filter.Filter} this The filter object.
             */
            'update'
        );
        Ext.ux.grid.filter.Filter.superclass.constructor.call(this);

        this.menu = this.createMenu(config);
        this.init(config);
        if(config && config.value){
            this.setValue(config.value);
            this.setActive(config.active !== false, true);
            delete config.value;
        }
    },

    /**
     * Destroys this filter by purging any event listeners, and removing any menus.
     */
    destroy : function(){
        if (this.menu){
            this.menu.destroy();
        }
        this.clearListeners();
    },

    /**
     * Template method to be implemented by all subclasses that is to
     * initialize the filter and install required menu items.
     * Defaults to Ext.emptyFn.
     */
    init : Ext.emptyFn,

    /**
     * @private @override
     * Creates the Menu for this filter.
     * @param {Object} config Filter configuration
     * @return {Ext.menu.Menu}
     */
    createMenu: function(config) {
        config.plain = true;
        return Ext.create('Ext.menu.Menu', config);
    },

    /**
     * Template method to be implemented by all subclasses that is to
     * get and return the value of the filter.
     * Defaults to Ext.emptyFn.
     * @return {Object} The 'serialized' form of this filter
     * @template
     */
    getValue : Ext.emptyFn,

    /**
     * Template method to be implemented by all subclasses that is to
     * set the value of the filter and fire the 'update' event.
     * Defaults to Ext.emptyFn.
     * @param {Object} data The value to set the filter
     * @template
     */
    setValue : Ext.emptyFn,

    /**
     * Template method to be implemented by all subclasses that is to
     * return <tt>true</tt> if the filter has enough configuration information to be activated.
     * Defaults to <tt>return true</tt>.
     * @return {Boolean}
     */
    isActivatable : function(){
        return true;
    },

    /**
     * Template method to be implemented by all subclasses that is to
     * get and return serialized filter data for transmission to the server.
     * Defaults to Ext.emptyFn.
     */
    getSerialArgs : Ext.emptyFn,

    /**
     * Template method to be implemented by all subclasses that is to
     * validates the provided Ext.data.Record against the filters configuration.
     * Defaults to <tt>return true</tt>.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function(){
        return true;
    },

    /**
     * Returns the serialized filter data for transmission to the server
     * and fires the 'serialize' event.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    serialize : function(){
        var args = this.getSerialArgs();
        this.fireEvent('serialize', args, this);
        return args;
    },

    /** @private */
    fireUpdate : function(){
        if (this.active) {
            this.fireEvent('update', this);
        }
        this.setActive(this.isActivatable());
    },

    /**
     * Sets the status of the filter and fires the appropriate events.
     * @param {Boolean} active        The new filter state.
     * @param {Boolean} suppressEvent True to prevent events from being fired.
     */
    setActive : function(active, suppressEvent){
        if(this.active != active){
            this.active = active;
            if (suppressEvent !== true) {
                this.fireEvent(active ? 'activate' : 'deactivate', this);
            }
        }
    }
});
/**
 * Boolean filters use unique radio group IDs (so you can have more than one!)
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
var filters = Ext.create('Ext.ux.grid.GridFilters', {
    ...
    filters: [{
        // required configs
        type: 'boolean',
        dataIndex: 'visible'

        // optional configs
        defaultValue: null, // leave unselected (false selected by default)
        yesText: 'Yes',     // default
        noText: 'No'        // default
    }]
});
 * </code></pre>
 */
Ext.define('Ext.ux.grid.filter.BooleanFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.boolean',

	/**
	 * @cfg {Boolean} defaultValue
	 * Set this to null if you do not want either option to be checked by default. Defaults to false.
	 */
	defaultValue : false,
	/**
	 * @cfg {String} yesText
	 * Defaults to 'Yes'.
	 */
	yesText : 'Yes',
	/**
	 * @cfg {String} noText
	 * Defaults to 'No'.
	 */
	noText : 'No',

    /**
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init : function (config) {
        var gId = Ext.id();
		this.options = [
			Ext.create('Ext.menu.CheckItem', {text: this.yesText, group: gId, checked: this.defaultValue === true}),
			Ext.create('Ext.menu.CheckItem', {text: this.noText, group: gId, checked: this.defaultValue === false})];

		this.menu.add(this.options[0], this.options[1]);

		for(var i=0; i<this.options.length; i++){
			this.options[i].on('click', this.fireUpdate, this);
			this.options[i].on('checkchange', this.fireUpdate, this);
		}
	},

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
		return this.options[0].checked;
	},

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */
	setValue : function (value) {
		this.options[value ? 0 : 1].setChecked(true);
	},

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
		var args = {type: 'boolean', value: this.getValue()};
		return args;
	},

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
		return record.get(this.dataIndex) == this.getValue();
	}
});
/**
 * Filter by a configurable Ext.picker.DatePicker menu
 *
 * Example Usage:
 *
 *     var filters = Ext.create('Ext.ux.grid.GridFilters', {
 *         ...
 *         filters: [{
 *             // required configs
 *             type: 'date',
 *             dataIndex: 'dateAdded',
 *      
 *             // optional configs
 *             dateFormat: 'm/d/Y',  // default
 *             beforeText: 'Before', // default
 *             afterText: 'After',   // default
 *             onText: 'On',         // default
 *             pickerOpts: {
 *                 // any DatePicker configs
 *             },
 *      
 *             active: true // default is false
 *         }]
 *     });
 */
Ext.define('Ext.ux.grid.filter.DateFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.date',
    uses: ['Ext.picker.Date', 'Ext.menu.Menu'],

    /**
     * @cfg {String} afterText
     * Defaults to 'After'.
     */
    afterText : 'After',
    /**
     * @cfg {String} beforeText
     * Defaults to 'Before'.
     */
    beforeText : 'Before',
    /**
     * @cfg {Object} compareMap
     * Map for assigning the comparison values used in serialization.
     */
    compareMap : {
        before: 'lt',
        after:  'gt',
        on:     'eq'
    },
    /**
     * @cfg {String} dateFormat
     * The date format to return when using getValue.
     * Defaults to 'm/d/Y'.
     */
    dateFormat : 'm/d/Y',

    /**
     * @cfg {Date} maxDate
     * Allowable date as passed to the Ext.DatePicker
     * Defaults to undefined.
     */
    /**
     * @cfg {Date} minDate
     * Allowable date as passed to the Ext.DatePicker
     * Defaults to undefined.
     */
    /**
     * @cfg {Array} menuItems
     * The items to be shown in this menu
     * Defaults to:<pre>
     * menuItems : ['before', 'after', '-', 'on'],
     * </pre>
     */
    menuItems : ['before', 'after', '-', 'on'],

    /**
     * @cfg {Object} menuItemCfgs
     * Default configuration options for each menu item
     */
    menuItemCfgs : {
        selectOnFocus: true,
        width: 125
    },

    /**
     * @cfg {String} onText
     * Defaults to 'On'.
     */
    onText : 'On',

    /**
     * @cfg {Object} pickerOpts
     * Configuration options for the date picker associated with each field.
     */
    pickerOpts : {},

    /**
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init : function (config) {
        var me = this,
            pickerCfg, i, len, item, cfg;

        pickerCfg = Ext.apply(me.pickerOpts, {
            xtype: 'datepicker',
            minDate: me.minDate,
            maxDate: me.maxDate,
            format:  me.dateFormat,
            listeners: {
                scope: me,
                select: me.onMenuSelect
            }
        });

        me.fields = {};
        for (i = 0, len = me.menuItems.length; i < len; i++) {
            item = me.menuItems[i];
            if (item !== '-') {
                cfg = {
                    itemId: 'range-' + item,
                    text: me[item + 'Text'],
                    menu: Ext.create('Ext.menu.Menu', {
                        plain: true,
                        items: [
                            Ext.apply(pickerCfg, {
                                itemId: item,
                                listeners: {
                                    select: me.onPickerSelect,
                                    scope: me
                                }
                            })
                        ]
                    }),
                    listeners: {
                        scope: me,
                        checkchange: me.onCheckChange
                    }
                };
                item = me.fields[item] = Ext.create('Ext.menu.CheckItem', cfg);
            }
            //me.add(item);
            me.menu.add(item);
        }
        me.values = {};
    },

    onCheckChange : function (item, checked) {
        var me = this,
            picker = item.menu.items.first(),
            itemId = picker.itemId,
            values = me.values;

        if (checked) {
            values[itemId] = picker.getValue();
        } else {
            delete values[itemId]
        }
        me.setActive(me.isActivatable());
        me.fireEvent('update', me);
    },

    /**
     * @private
     * Handler method called when there is a keyup event on an input
     * item of this menu.
     */
    onInputKeyUp : function (field, e) {
        var k = e.getKey();
        if (k == e.RETURN && field.isValid()) {
            e.stopEvent();
            this.menu.hide();
        }
    },

    /**
     * Handler for when the DatePicker for a field fires the 'select' event
     * @param {Ext.picker.Date} picker
     * @param {Object} date
     */
    onMenuSelect : function (picker, date) {
        var fields = this.fields,
            field = this.fields[picker.itemId];

        field.setChecked(true);

        if (field == fields.on) {
            fields.before.setChecked(false, true);
            fields.after.setChecked(false, true);
        } else {
            fields.on.setChecked(false, true);
            if (field == fields.after && this.getFieldValue('before') < date) {
                fields.before.setChecked(false, true);
            } else if (field == fields.before && this.getFieldValue('after') > date) {
                fields.after.setChecked(false, true);
            }
        }
        this.fireEvent('update', this);

        picker.up('menu').hide();
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        var key, result = {};
        for (key in this.fields) {
            if (this.fields[key].checked) {
                result[key] = this.getFieldValue(key);
            }
        }
        return result;
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     * @param {Boolean} preserve true to preserve the checked status
     * of the other fields.  Defaults to false, unchecking the
     * other fields
     */
    setValue : function (value, preserve) {
        var key;
        for (key in this.fields) {
            if(value[key]){
                this.getPicker(key).setValue(value[key]);
                this.fields[key].setChecked(true);
            } else if (!preserve) {
                this.fields[key].setChecked(false);
            }
        }
        this.fireEvent('update', this);
    },

    /**
     * Template method that is to return <tt>true</tt> if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        var key;
        for (key in this.fields) {
            if (this.fields[key].checked) {
                return true;
            }
        }
        return false;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        var args = [];
        for (var key in this.fields) {
            if(this.fields[key].checked){
                args.push({
                    type: 'date',
                    comparison: this.compareMap[key],
                    value: Ext.Date.format(this.getFieldValue(key), this.dateFormat)
                });
            }
        }
        return args;
    },

    /**
     * Get and return the date menu picker value
     * @param {String} item The field identifier ('before', 'after', 'on')
     * @return {Date} Gets the current selected value of the date field
     */
    getFieldValue : function(item){
        return this.values[item];
    },

    /**
     * Gets the menu picker associated with the passed field
     * @param {String} item The field identifier ('before', 'after', 'on')
     * @return {Object} The menu picker
     */
    getPicker : function(item){
        return this.fields[item].menu.items.first();
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var key,
            pickerValue,
            val = record.get(this.dataIndex),
            clearTime = Ext.Date.clearTime;

        if(!Ext.isDate(val)){
            return false;
        }
        val = clearTime(val, true).getTime();

        for (key in this.fields) {
            if (this.fields[key].checked) {
                pickerValue = clearTime(this.getFieldValue(key), true).getTime();
                if (key == 'before' && pickerValue <= val) {
                    return false;
                }
                if (key == 'after' && pickerValue >= val) {
                    return false;
                }
                if (key == 'on' && pickerValue != val) {
                    return false;
                }
            }
        }
        return true;
    },

    onPickerSelect: function(picker, date) {
        // keep track of the picker value separately because the menu gets destroyed
        // when columns order changes.  We return this value from getValue() instead
        // of picker.getValue()
//        this.values[picker.itemId] = date;
		this.onMenuSelect(picker,date);
        this.fireEvent('update', this);
    }
});
/**
 * Filter by a configurable Ext.picker.DatePicker menu
 *
 * This filter allows for the following configurations:
 *
 * - Any of the normal configs will be passed through to either component.
 * - There can be a docked config.
 * - The timepicker can be on the right or left (datepicker, too, of course).
 * - Choose which component will initiate the filtering, i.e., the event can be
 *   configured to be bound to either the datepicker or the timepicker, or if
 *   there is a docked config it be automatically have the handler bound to it.
 *
 * Although not shown here, this class accepts all configuration options
 * for {@link Ext.picker.Date} and {@link Ext.picker.Time}.
 *
 * In the case that a custom dockedItems config is passed in, the
 * class will handle binding the default listener to it so the
 * developer need not worry about having to do it.
 *
 * The default dockedItems position and the toolbar's
 * button text can be passed a config for convenience, i.e.,:
 *
 *     dock: {
 *        buttonText: 'Click to Filter',
 *        dock: 'left'
 *     }
 *
 * Or, pass in a full dockedItems config:
 *
 *     dock: {
 *        dockedItems: {
 *            xtype: 'toolbar',
 *            dock: 'bottom',
 *            ...
 *        }
 *     }
 *
 * Or, give a value of `true` to accept dock defaults:
 *
 *     dock: true
 *
 * But, it must be one or the other.
 *
 * Example Usage:
 *
 *     var filters = Ext.create('Ext.ux.grid.GridFilters', {
 *         ...
 *         filters: [{
 *             // required configs
 *             type: 'datetime',
 *             dataIndex: 'date',
 *
 *             // optional configs
 *             positionDatepickerFirst: false,
 *             //selectDateToFilter: false, // this is overridden b/c of the presence of the dock cfg object
 *
 *             date: {
 *                 format: 'm/d/Y',
 *             },
 *
 *             time: {
 *                 format: 'H:i:s A',
 *                 increment: 1
 *             },
 *
 *             dock: {
 *                 buttonText: 'Click to Filter',
 *                 dock: 'left'
 *
 *                 // allows for custom dockedItems cfg
 *                 //dockedItems: {}
 *             }
 *         }]
 *     });
 *
 * In the above example, note that the filter is being passed a {@link #date} config object,
 * a {@link #time} config object and a {@link #dock} config. These are all optional.
 *
 * As for positioning, the datepicker will be on the right, the timepicker on the left
 * and the docked items will be docked on the left. In addition, since there's a {@link #dock}
 * config, clicking the button in the dock will trigger the filtering.
 */
Ext.define('Ext.ux.grid.filter.DateTimeFilter', {
    extend: 'Ext.ux.grid.filter.DateFilter',
    alias: 'gridfilter.datetime',

    /**
     * @private
     */
    dateDefaults: {
        xtype: 'datepicker',
        format: 'm/d/Y'
    },

    /**
     * @private
     */
    timeDefaults: {
        xtype: 'timepicker',
        width: 100,
        height: 200,
        format: 'g:i A'
    },

    /**
     * @private
     */
    dockDefaults: {
        dock: 'top',
        buttonText: 'Filter'
    },

    /**
     * @cfg {Object} date
     * A {@link Ext.picker.Date} can be configured here.
     * Uses {@link #dateDefaults} by default.
     */

    /**
     * @cfg {Object} time
     * A {@link Ext.picker.Time} can be configured here.
     * Uses {@link #timeDefaults} by default.
     */

    /**
     * @cfg {Boolean/Object} dock
     * A {@link Ext.panel.AbstractPanel#cfg-dockedItems} can be configured here.
     * A `true` value will use the {@link #dockDefaults} default configuration.
     * If present, the button in the docked items will initiate the filtering.
     */

    /**
     * @cfg {Boolean} [selectDateToFilter=true]
     * By default, the datepicker has the default event listener bound to it.
     * Setting to `false` will bind it to the timepicker.
     *
     * The config will be ignored if there is a `dock` config.
     */
    selectDateToFilter: true,

    /**
     * @cfg {Boolean} [positionDatepickerFirst=true]
     * Positions the datepicker within its container.
     * A `true` value will place it on the left in the container.
     * Set to `false` if the timepicker should be placed on the left.
     * Defaults to `true`.
     */
    positionDatepickerFirst: true,

    reTime: /\s(am|pm)/i,
    reItemId: /\w*-(\w*)$/,

    /**
     * Replaces the selected value of the timepicker with the default 00:00:00.
     * @private
     * @param {Object} date
     * @param {Ext.picker.Time} timepicker
     * @return Date object
     */
    addTimeSelection: function (date, timepicker) {
        var me = this,
            selection = timepicker.getSelectionModel().getSelection(),
            time, len, fn, val,
            i = 0,
            arr = [],
            timeFns = ['setHours', 'setMinutes', 'setSeconds', 'setMilliseconds'];


        if (selection.length) {
            time = selection[0].get('disp');

            // Loop through all of the splits and add the time values.
            arr = time.replace(me.reTime, '').split(':');

            for (len = arr.length; i < len; i++) {
                fn = timeFns[i];
                val = arr[i];

                if (val) {
                    date[fn](parseInt(val, 10));
                }
            }
        }

        return date;
    },

    /**
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init: function (config) {
        var me = this,
            dateCfg = Ext.applyIf(me.date || {}, me.dateDefaults),
            timeCfg = Ext.applyIf(me.time || {}, me.timeDefaults),
            dockCfg = me.dock, // should not default to empty object
            defaultListeners = {
                click: {
                    scope: me,
                    click: me.onMenuSelect
                },
                select: {
                    scope: me,
                    select: me.onMenuSelect
                }
            },
            pickerCtnCfg, i, len, item, cfg,
            items = [dateCfg, timeCfg],

            // we need to know the datepicker's position in the items array
            // for when the itemId name is bound to it before adding to the menu
            datepickerPosition = 0;

        if (!me.positionDatepickerFirst) {
            items = items.reverse();
            datepickerPosition = 1;
        }

        pickerCtnCfg = Ext.apply(me.pickerOpts, {
            xtype: !dockCfg ? 'container' : 'panel',
            layout: 'hbox',
            items: items
        });

        // If there's no dock config then bind the default listener to the desired picker.
        if (!dockCfg) {
            if (me.selectDateToFilter) {
                dateCfg.listeners = defaultListeners.select;
            } else {
                timeCfg.listeners = defaultListeners.select;
            }
        } else if (dockCfg) {
            me.selectDateToFilter = null;

            if (dockCfg.dockedItems) {
                pickerCtnCfg.dockedItems = dockCfg.dockedItems;
                // TODO: allow config that will tell which item to bind the listener to
                // right now, it's using the first item
                pickerCtnCfg.dockedItems.items[dockCfg.bindToItem || 0].listeners = defaultListeners.click;
            } else {
                // dockCfg can be `true` if button text and dock position defaults are wanted
                if (Ext.isBoolean(dockCfg)) {
                    dockCfg = {};
                }
                dockCfg = Ext.applyIf(dockCfg, me.dockDefaults);
                pickerCtnCfg.dockedItems = {
                    xtype: 'toolbar',
                    dock: dockCfg.dock,
                    items: [
                        {
                            xtype: 'button',
                            text: dockCfg.buttonText,
                            flex: 1,
                            listeners: defaultListeners.click
                        }
                    ]   
                };
            }
        }

        me.fields = {};
        for (i = 0, len = me.menuItems.length; i < len; i++) {
            item = me.menuItems[i];
            if (item !== '-') {
                pickerCtnCfg.items[datepickerPosition].itemId = item;

                cfg = {
                    itemId: 'range-' + item,
                    text: me[item + 'Text'],
                    menu: Ext.create('Ext.menu.Menu', {
                        items: pickerCtnCfg
                    }),
                    listeners: {
                        scope: me,
                        checkchange: me.onCheckChange
                    }
                };
                item = me.fields[item] = Ext.create('Ext.menu.CheckItem', cfg);
            }
            me.menu.add(item);
        }
        me.values = {};
    },

    /**
     * @private
     */
    onCheckChange: function (item, checked) {
        var me = this,
            menu = item.menu,
            timepicker = menu.down('timepicker'),
            datepicker = menu.down('datepicker'),
            itemId = datepicker.itemId,
            values = me.values;

        if (checked) {
            values[itemId] = me.addTimeSelection(datepicker.value, timepicker);
        } else {
            delete values[itemId];
        }
        me.setActive(me.isActivatable());
        me.fireEvent('update', me);
    },

    /** 
     * Handler for when the DatePicker for a field fires the 'select' event
     * @param {Ext.picker.Date} picker
     * @param {Object} date
     */
    onMenuSelect: function (picker, date) {
        // NOTE: we need to redefine the picker.
        var me = this,
            menu = me.menu,
            checkItemId = menu.getFocusEl().itemId.replace(me.reItemId, '$1'),
            fields = me.fields,
            field;

        picker = menu.queryById(checkItemId);
        field = me.fields[picker.itemId];
        field.setChecked(true);

        if (field == fields.on) {
            fields.before.setChecked(false, true);
            fields.after.setChecked(false, true);
        } else {
            fields.on.setChecked(false, true);
            if (field == fields.after && me.getFieldValue('before') < date) {
                fields.before.setChecked(false, true);
            } else if (field == fields.before && me.getFieldValue('after') > date) {
                fields.after.setChecked(false, true);
            }   
        }   
        me.fireEvent('update', me);

        // The timepicker's getBubbleTarget() returns the boundlist's implementation,
        // so it doesn't look up ownerCt chain (it looks up this.pickerField).
        // This is a problem :)
        // This can be fixed by just walking up the ownerCt chain
        // (same thing, but confusing without comment).
        picker.ownerCt.ownerCt.hide();
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs: function () {
        var me = this,
            key,
            fields = me.fields,
            args = [];

        for (key in fields) {
            if (fields[key].checked) {
                args.push({
                    type: 'datetime',
                    comparison: me.compareMap[key],
                    value: Ext.Date.format(me.getFieldValue(key), (me.date.format || me.dateDefaults.format) + ' ' + (me.time.format || me.timeDefaults.format))
                });
            }
        }
        return args;
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     * @param {Boolean} preserve true to preserve the checked status
     * of the other fields.  Defaults to false, unchecking the
     * other fields
     */
    setValue: function (value, preserve) {
        var me = this,
            fields = me.fields,
            key,
            val,
            datepicker;

        for (key in fields) {
            val = value[key];
            if (val) {
                datepicker = me.menu.down('datepicker[itemId="' + key + '"]');
                // Note that calling the Ext.picker.Date:setValue() calls Ext.Date.clearTime(),
                // which we don't want, so just call update() instead and set the value on the component.
                datepicker.update(val);
                datepicker.value = val;

                fields[key].setChecked(true);
            } else if (!preserve) {
                fields[key].setChecked(false);
            }
        }
        me.fireEvent('update', me);
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord: function (record) {
        // remove calls to Ext.Date.clearTime
        var me = this,
            key,
            pickerValue,
            val = record.get(me.dataIndex);

        if(!Ext.isDate(val)){
            return false;
        }

        val = val.getTime();

        for (key in me.fields) {
            if (me.fields[key].checked) {
                pickerValue = me.getFieldValue(key).getTime();
                if (key == 'before' && pickerValue <= val) {
                    return false;
                }
                if (key == 'after' && pickerValue >= val) {
                    return false;
                }
                if (key == 'on' && pickerValue != val) {
                    return false;
                }
            }
        }
        return true;
    }
});
/**
 * List filters are able to be preloaded/backed by an Ext.data.Store to load
 * their options the first time they are shown. ListFilter utilizes the
 * {@link Ext.ux.grid.menu.ListMenu} component.
 *
 * List filters are also able to create their own list of values from  all unique values of
 * the specified {@link #dataIndex} field in the store at first time of filter invocation.
 *
 * Although not shown here, this class accepts all configuration options
 * for {@link Ext.ux.grid.menu.ListMenu}.
 *
 * Example Usage:
 *
 *     var filters = Ext.create('Ext.ux.grid.GridFilters', {
 *         ...
 *         filters: [{
 *             type: 'list',
 *             dataIndex: 'size',
 *             phpMode: true,
 *             // options will be used as data to implicitly creates an ArrayStore
 *             options: ['extra small', 'small', 'medium', 'large', 'extra large']
 *         }]
 *     });
 *
 */
Ext.define('Ext.ux.grid.filter.ListFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.list',

    /**
     * @cfg {Array} [options]
     * `data` to be used to implicitly create a data store
     * to back this list when the data source is **local**. If the
     * data for the list is remote, use the {@link #store}
     * config instead.
     *
     * If neither store nor {@link #options} is specified, then the choices list is automatically
     * populated from all unique values of the specified {@link #dataIndex} field in the store at first
     * time of filter invocation.
     *
     * Each item within the provided array may be in one of the
     * following formats:
     *
     *   - **Array** :
     *
     *         options: [
     *             [11, 'extra small'],
     *             [18, 'small'],
     *             [22, 'medium'],
     *             [35, 'large'],
     *             [44, 'extra large']
     *         ]
     *
     *   - **Object** :
     *
     *         labelField: 'name', // override default of 'text'
     *         options: [
     *             {id: 11, name:'extra small'},
     *             {id: 18, name:'small'},
     *             {id: 22, name:'medium'},
     *             {id: 35, name:'large'},
     *             {id: 44, name:'extra large'}
     *         ]
     * 
     *   - **String** :
     *
     *         options: ['extra small', 'small', 'medium', 'large', 'extra large']
     *
     */
    /**
     * @cfg {Boolean} phpMode
     * Adjust the format of this filter. Defaults to false.
     *
     * When GridFilters `@cfg encode = false` (default):
     *
     *     // phpMode == false (default):
     *     filter[0][data][type] list
     *     filter[0][data][value] value1
     *     filter[0][data][value] value2
     *     filter[0][field] prod
     *
     *     // phpMode == true:
     *     filter[0][data][type] list
     *     filter[0][data][value] value1, value2
     *     filter[0][field] prod
     *
     * When GridFilters `@cfg encode = true`:
     *
     *     // phpMode == false (default):
     *     filter : [{"type":"list","value":["small","medium"],"field":"size"}]
     *
     *     // phpMode == true:
     *     filter : [{"type":"list","value":"small,medium","field":"size"}]
     *
     */
    phpMode : false,
    /**
     * @cfg {Ext.data.Store} [store]
     * The {@link Ext.data.Store} this list should use as its data source
     * when the data source is **remote**. If the data for the list
     * is local, use the {@link #options} config instead.
     *
     * If neither store nor {@link #options} is specified, then the choices list is automatically
     * populated from all unique values of the specified {@link #dataIndex} field in the store at first
     * time of filter invocation.
     */

    /**
     * @private
     * Template method that is to initialize the filter.
     * @param {Object} config
     */
    init : function (config) {
        this.dt = Ext.create('Ext.util.DelayedTask', this.fireUpdate, this);
    },

    /**
     * @private @override
     * Creates the Menu for this filter.
     * @param {Object} config Filter configuration
     * @return {Ext.menu.Menu}
     */
    createMenu: function(config) {
        var menu = Ext.create('Ext.ux.grid.menu.ListMenu', config);
        menu.on('checkchange', this.onCheckChange, this);
        return menu;
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        return this.menu.getSelected();
    },
    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */
    setValue : function (value) {
        this.menu.setSelected(value);
        this.fireEvent('update', this);
    },

    /**
     * Template method that is to return true if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        return this.getValue().length > 0;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        return {type: 'list', value: this.phpMode ? this.getValue().join(',') : this.getValue()};
    },

    /** @private */
    onCheckChange : function(){
        this.dt.delay(this.updateBuffer);
    },


    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var valuesArray = this.getValue();
        return Ext.Array.indexOf(valuesArray, record.get(this.dataIndex)) > -1;
    }
});
/**
 * Filters using an Ext.ux.grid.menu.RangeMenu.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
var filters = Ext.create('Ext.ux.grid.GridFilters', {
    ...
    filters: [{
        type: 'numeric',
        dataIndex: 'price'
    }]
});
 * </code></pre>
 * <p>Any of the configuration options for {@link Ext.ux.grid.menu.RangeMenu} can also be specified as
 * configurations to NumericFilter, and will be copied over to the internal menu instance automatically.</p>
 */
Ext.define('Ext.ux.grid.filter.NumericFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.numeric',
    uses: ['Ext.form.field.Number'],

    /**
     * @private @override
     * Creates the Menu for this filter.
     * @param {Object} config Filter configuration
     * @return {Ext.menu.Menu}
     */
    createMenu: function(config) {
        var me = this,
            menu;
        menu = Ext.create('Ext.ux.grid.menu.RangeMenu', config);
        menu.on('update', me.fireUpdate, me);
        return menu;
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        return this.menu.getValue();
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */
    setValue : function (value) {
        this.menu.setValue(value);
    },

    /**
     * Template method that is to return <tt>true</tt> if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        var values = this.getValue(),
            key;
        for (key in values) {
            if (values[key] !== undefined) {
                return true;
            }
        }
        return false;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        var key,
            args = [],
            values = this.menu.getValue();
        for (key in values) {
            args.push({
                type: 'numeric',
                comparison: key,
                value: values[key]
            });
        }
        return args;
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var val = record.get(this.dataIndex),
            values = this.getValue(),
            isNumber = Ext.isNumber;
        if (isNumber(values.eq) && val != values.eq) {
            return false;
        }
        if (isNumber(values.lt) && val >= values.lt) {
            return false;
        }
        if (isNumber(values.gt) && val <= values.gt) {
            return false;
        }
        return true;
    }
});
/**
 * Filter by a configurable Ext.form.field.Text
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
var filters = Ext.create('Ext.ux.grid.GridFilters', {
    ...
    filters: [{
        // required configs
        type: 'string',
        dataIndex: 'name',

        // optional configs
        value: 'foo',
        active: true, // default is false
        iconCls: 'ux-gridfilter-text-icon' // default
        // any Ext.form.field.Text configs accepted
    }]
});
 * </code></pre>
 */
Ext.define('Ext.ux.grid.filter.StringFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.string',

    /**
     * @cfg {String} iconCls
     * The iconCls to be applied to the menu item.
     * Defaults to <tt>'ux-gridfilter-text-icon'</tt>.
     */
    iconCls : 'ux-gridfilter-text-icon',

    emptyText: 'Enter Filter Text...',
    selectOnFocus: true,
    width: 125,

    /**
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    init : function (config) {
        Ext.applyIf(config, {
            enableKeyEvents: true,
            labelCls: 'ux-rangemenu-icon ' + this.iconCls,
            hideEmptyLabel: false,
            labelSeparator: '',
            labelWidth: 29,
            listeners: {
                scope: this,
                keyup: this.onInputKeyUp,
                el: {
                    click: function(e) {
                        e.stopPropagation();
                    }
                }
            }
        });

        this.inputItem = Ext.create('Ext.form.field.Text', config);
        this.menu.add(this.inputItem);
        this.menu.showSeparator = false;
        this.updateTask = Ext.create('Ext.util.DelayedTask', this.fireUpdate, this);
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        return this.inputItem.getValue();
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */
    setValue : function (value) {
        this.inputItem.setValue(value);
        this.fireEvent('update', this);
    },

    /**
     * Template method that is to return <tt>true</tt> if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        return this.inputItem.getValue().length > 0;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        return {type: 'string', value: this.getValue()};
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var val = record.get(this.dataIndex);

        if(typeof val != 'string') {
            return (this.getValue().length === 0);
        }

        return val.toLowerCase().indexOf(this.getValue().toLowerCase()) > -1;
    },

    /**
     * @private
     * Handler method called when there is a keyup event on this.inputItem
     */
    onInputKeyUp : function (field, e) {
        var k = e.getKey();
        if (k == e.RETURN && field.isValid()) {
            e.stopEvent();
            this.menu.hide();
            return;
        }
        // restart the timer
        this.updateTask.delay(this.updateBuffer);
    }
});
/**
 * This is a supporting class for {@link Ext.ux.grid.filter.ListFilter}.
 * Although not listed as configuration options for this class, this class
 * also accepts all configuration options from {@link Ext.ux.grid.filter.ListFilter}.
 */
Ext.define('Ext.ux.grid.menu.ListMenu', {
    extend: 'Ext.menu.Menu',
    
    /**
     * @cfg {String} idField
     * Defaults to 'id'.
     */
    idField :  'id',

    /**
     * @cfg {String} labelField
     * Defaults to 'text'.
     */
    labelField :  'text',
    /**
     * @cfg {String} paramPrefix
     * Defaults to 'Loading...'.
     */
    loadingText : 'Loading...',
    /**
     * @cfg {Boolean} loadOnShow
     * Defaults to true.
     */
    loadOnShow : true,
    /**
     * @cfg {Boolean} single
     * Specify true to group all items in this list into a single-select
     * radio button group. Defaults to false.
     */
    single : false,

    plain: true,

    constructor : function (cfg) {
        var me = this,
            options,
            i,
            len,
            value;
            
        me.selected = [];
        me.addEvents(
            /**
             * @event checkchange
             * Fires when there is a change in checked items from this list
             * @param {Object} item Ext.menu.CheckItem
             * @param {Object} checked The checked value that was set
             */
            'checkchange'
        );

        me.callParent([cfg = cfg || {}]);

        if(!cfg.store && cfg.options) {
            options = [];
            for(i = 0, len = cfg.options.length; i < len; i++){
                value = cfg.options[i];
                switch(Ext.type(value)){
                    case 'array':  options.push(value); break;
                    case 'object': options.push([value[me.idField], value[me.labelField]]); break;
                    case 'string': options.push([value, value]); break;
                }
            }

            me.store = Ext.create('Ext.data.ArrayStore', {
                fields: [me.idField, me.labelField],
                data:   options,
                listeners: {
                    load: me.onLoad,
                    scope:  me
                }
            });
            me.loaded = true;
            me.autoStore = true;
        } else {
			if(Ext.isObject(cfg.store)){//:) tx
				me.add({
					text: me.loadingText,
					iconCls: 'loading-indicator'
				});
				me.store.on('load', me.onLoad, me);
			}else{//->:) tx
				me.loaded = true;
				me.autoStore = true;
				me.store =  Ext.StoreManager.get(cfg.store);
				me.onLoad(me.store, me.store.data.items);
				//me.show(); // no me gusta que al abrir el libro se abra el menu, no se como impacta si  lo quito
			}//<-:) tx
        }
    },

    destroy : function () {
        var me = this,
            store = me.store;
            
        if (store) {
            if (me.autoStore) {
                store.destroyStore();
            } else {
                store.un('unload', me.onLoad, me);
            }
        }
        me.callParent();
    },

    /**
     * Lists will initially show a 'loading' item while the data is retrieved from the store.
     * In some cases the loaded data will result in a list that goes off the screen to the
     * right (as placement calculations were done with the loading item). This adapter will
     * allow show to be called with no arguments to show with the previous arguments and
     * thus recalculate the width and potentially hang the menu from the left.
     */
    show : function () {
        var me = this;
        if (me.loadOnShow && !me.loaded && !me.store.loading) {
            me.store.load();
        }
        me.callParent();
    },

    /** @private */
    onLoad : function (store, records) {
        var me = this,
            gid, itemValue, i, len,
            listeners = {
                checkchange: me.checkChange,
                scope: me
            };

        Ext.suspendLayouts();
        me.removeAll(true);
        gid = me.single ? Ext.id() : null;
        for (i = 0, len = records.length; i < len; i++) {
            itemValue = records[i].get(me.idField);
            me.add(Ext.create('Ext.menu.CheckItem', {
                text: records[i].get(me.labelField),
                group: gid,
                checked: Ext.Array.contains(me.selected, itemValue),
                hideOnClick: false,
                value: itemValue,
                listeners: listeners
            }));
        }

        me.loaded = true;
        Ext.resumeLayouts(true);
        me.fireEvent('load', me, records);
    },

    /**
     * Get the selected items.
     * @return {Array} selected
     */
    getSelected : function () {
        return this.selected;
    },

    /** @private */
    setSelected : function (value) {
        value = this.selected = [].concat(value);

        if (this.loaded) {
            this.items.each(function(item){
                item.setChecked(false, true);
                for (var i = 0, len = value.length; i < len; i++) {
                    if (item.value == value[i]) {
                        item.setChecked(true, true);
                    }
                }
            });
        }
    },

    /**
     * Handler for the 'checkchange' event from an check item in this menu
     * @param {Object} item Ext.menu.CheckItem
     * @param {Object} checked The checked value that was set
     */
    checkChange : function (item, checked) {
        var value = [];
        this.items.each(function(item){
            if (item.checked) {
                value.push(item.value);
            }
        });
        this.selected = value;

        this.fireEvent('checkchange', item, checked);
    }
});
/**
 * Custom implementation of {@link Ext.menu.Menu} that has preconfigured items for entering numeric
 * range comparison values: less-than, greater-than, and equal-to. This is used internally
 * by {@link Ext.ux.grid.filter.NumericFilter} to create its menu.
 */
Ext.define('Ext.ux.grid.menu.RangeMenu', {
    extend: 'Ext.menu.Menu',

    /**
     * @cfg {String} fieldCls
     * The Class to use to construct each field item within this menu
     * Defaults to:<pre>
     * fieldCls : Ext.form.field.Number
     * </pre>
     */
    fieldCls : 'Ext.form.field.Number',

    /**
     * @cfg {Object} fieldCfg
     * The default configuration options for any field item unless superseded
     * by the <code>{@link #fields}</code> configuration.
     * Defaults to:<pre>
     * fieldCfg : {}
     * </pre>
     * Example usage:
     * <pre><code>
fieldCfg : {
    width: 150,
},
     * </code></pre>
     */

    /**
     * @cfg {Object} fields
     * The field items may be configured individually
     * Defaults to <tt>undefined</tt>.
     * Example usage:
     * <pre><code>
fields : {
    gt: { // override fieldCfg options
        width: 200,
        fieldCls: Ext.ux.form.CustomNumberField // to override default {@link #fieldCls}
    }
},
     * </code></pre>
     */

    /**
     * @cfg {Object} itemIconCls
     * The itemIconCls to be applied to each comparator field item.
     * Defaults to:<pre>
itemIconCls : {
    gt : 'ux-rangemenu-gt',
    lt : 'ux-rangemenu-lt',
    eq : 'ux-rangemenu-eq'
}
     * </pre>
     */
    itemIconCls : {
        gt : 'ux-rangemenu-gt',
        lt : 'ux-rangemenu-lt',
        eq : 'ux-rangemenu-eq'
    },

    /**
     * @cfg {Object} fieldLabels
     * Accessible label text for each comparator field item. Can be overridden by localization
     * files. Defaults to:<pre>
fieldLabels : {
     gt: 'Greater Than',
     lt: 'Less Than',
     eq: 'Equal To'
}</pre>
     */
    fieldLabels: {
        gt: 'Greater Than',
        lt: 'Less Than',
        eq: 'Equal To'
    },

    /**
     * @cfg {Object} menuItemCfgs
     * Default configuration options for each menu item
     * Defaults to:<pre>
menuItemCfgs : {
    emptyText: 'Enter Filter Text...',
    selectOnFocus: true,
    width: 125
}
     * </pre>
     */
    menuItemCfgs : {
        emptyText: 'Enter Number...',
        selectOnFocus: false,
        width: 155
    },

    /**
     * @cfg {Array} menuItems
     * The items to be shown in this menu.  Items are added to the menu
     * according to their position within this array. Defaults to:<pre>
     * menuItems : ['lt','gt','-','eq']
     * </pre>
     */
    menuItems : ['gt', 'lt', '-', 'eq'],

    plain: true,

    constructor : function (config) {
        var me = this,
            fields, fieldCfg, i, len, item, cfg, Cls;

        me.callParent(arguments);

        fields = me.fields = me.fields || {};
        fieldCfg = me.fieldCfg = me.fieldCfg || {};
        
        me.addEvents(
            /**
             * @event update
             * Fires when a filter configuration has changed
             * @param {Ext.ux.grid.filter.Filter} this The filter object.
             */
            'update'
        );
      
        me.updateTask = Ext.create('Ext.util.DelayedTask', me.fireUpdate, me);
    
        for (i = 0, len = me.menuItems.length; i < len; i++) {
            item = me.menuItems[i];
            if (item !== '-') {
                // defaults
                cfg = {
                    itemId: 'range-' + item,
                    enableKeyEvents: true,
                    hideEmptyLabel: false,
                    labelCls: 'ux-rangemenu-icon ' + me.itemIconCls[item],
                    labelSeparator: '',
                    labelWidth: 29,
                    listeners: {
                        scope: me,
                        change: me.onInputChange,
                        keyup: me.onInputKeyUp,
                        el: {
                            click: this.stopFn
                        }
                    },
                    activate: Ext.emptyFn,
                    deactivate: Ext.emptyFn
                };
                Ext.apply(
                    cfg,
                    // custom configs
                    Ext.applyIf(fields[item] || {}, fieldCfg[item]),
                    // configurable defaults
                    me.menuItemCfgs
                );
                Cls = cfg.fieldCls || me.fieldCls;
                item = fields[item] = Ext.create(Cls, cfg);
            }
            me.add(item);
        }
    },
    
    stopFn: function(e) {
        e.stopPropagation();
    },

    /**
     * @private
     * called by this.updateTask
     */
    fireUpdate : function () {
        this.fireEvent('update', this);
    },
    
    /**
     * Get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        var result = {},
            fields = this.fields, 
            key, field;
            
        for (key in fields) {
            if (fields.hasOwnProperty(key)) {
                field = fields[key];
                if (field.isValid() && field.getValue() !== null) {
                    result[key] = field.getValue();
                }
            }
        }
        return result;
    },
  
    /**
     * Set the value of this menu and fires the 'update' event.
     * @param {Object} data The data to assign to this menu
     */	
    setValue : function (data) {
        var me = this,
            fields = me.fields,
            key,
            field;

        for (key in fields) {
            if (fields.hasOwnProperty(key)) {
                // Prevent field's change event from tiggering a Store filter. The final upate event will do that
                field =fields[key];
                field.suspendEvents();
                field.setValue(key in data ? data[key] : '');
                field.resumeEvents();
            }
        }

        // Trigger the filering of the Store
        me.fireEvent('update', me);
    },

    /**  
     * @private
     * Handler method called when there is a keyup event on an input
     * item of this menu.
     */
    onInputKeyUp: function(field, e) {
        if (e.getKey() === e.RETURN && field.isValid()) {
            e.stopEvent();
            this.hide();
        }
    },

    /**
     * @private
     * Handler method called when the user changes the value of one of the input
     * items in this menu.
     */
    onInputChange: function(field) {
        var me = this,
            fields = me.fields,
            eq = fields.eq,
            gt = fields.gt,
            lt = fields.lt;

        if (field == eq) {
            if (gt) {
                gt.setValue(null);
            }
            if (lt) {
                lt.setValue(null);
            }
        }
        else {
            eq.setValue(null);
        }

        // restart the timer
        this.updateTask.delay(this.updateBuffer);
    }
});
/**
 * This layout manager is used to center contents within a container. As a subclass of
 * {@link Ext.layout.container.Fit fit layout}, CenterLayout expects to have one child
 * item; multiple items will be placed overlapping. The layout does not require any config
 * options. Items in the container can use percentage width or height rather than be fit
 * to the full size of the container.
 *
 * Example usage:
 *
 *      // The content panel is centered in the container
 *
 *      var p = Ext.create('Ext.Panel', {
 *          title: 'Center Layout',
 *          layout: 'ux.center',
 *          items: [{
 *              title: 'Centered Content',
 *              width: '75%',  // assign 75% of the container width to the item
 *              html: 'Some content'
 *          }]
 *      });
 *
 * If you leave the title blank and specify no border you can create a non-visual, structural
 * container just for centering the contents.
 *
 *      var p = Ext.create('Ext.Container', {
 *          layout: 'ux.center',
 *          items: [{
 *              title: 'Centered Content',
 *              width: 300,
 *              height: '90%', // assign 90% of the container height to the item
 *              html: 'Some content'
 *          }]
 *      });
 */
Ext.define('Ext.ux.layout.Center', {
    extend: 'Ext.layout.container.Fit',
    alias: 'layout.ux.center',

    percentRe: /^\d+(?:\.\d+)?\%$/,

    itemCls: 'ux-layout-center-item',

    initLayout: function () {
        this.callParent(arguments);

        this.owner.addCls('ux-layout-center');
    },

    getItemSizePolicy: function (item) {
        var policy = this.callParent(arguments);
        if (typeof item.width == 'number') {
            policy = this.sizePolicies[policy.setsHeight ? 2 : 0];
        }
        return policy;
    },

    getPos: function (itemContext, info, dimension) {
        var size = itemContext.props[dimension] + info.margins[dimension],
            pos = Math.round((info.targetSize[dimension] - size) / 2);

        return Math.max(pos, 0);
    },

    getSize: function (item, info, dimension) {
        var ratio = item[dimension];

        if (typeof ratio == 'string' && this.percentRe.test(ratio)) {
            ratio = parseFloat(ratio) / 100;
        } else {
            ratio = item[dimension + 'Ratio']; // backwards compat
        }

        return info.targetSize[dimension] * (ratio || 1) - info.margins[dimension];
    },

    positionItemX: function (itemContext, info) {
        var left = this.getPos(itemContext, info, 'width');

        itemContext.setProp('x', left);
    },

    positionItemY: function (itemContext, info) {
        var top = this.getPos(itemContext, info, 'height');

        itemContext.setProp('y', top);
    },

    setItemHeight: function (itemContext, info) {
        var height = this.getSize(itemContext.target, info, 'height');

        itemContext.setHeight(height);
    },

    setItemWidth: function (itemContext, info) {
        var width = this.getSize(itemContext.target, info, 'width');

        itemContext.setWidth(width);
    }
});
/**
 * Basic status bar component that can be used as the bottom toolbar of any {@link Ext.Panel}.  In addition to
 * supporting the standard {@link Ext.toolbar.Toolbar} interface for adding buttons, menus and other items, the StatusBar
 * provides a greedy status element that can be aligned to either side and has convenient methods for setting the
 * status text and icon.  You can also indicate that something is processing using the {@link #showBusy} method.
 *
 *     Ext.create('Ext.Panel', {
 *         title: 'StatusBar',
 *         // etc.
 *         bbar: Ext.create('Ext.ux.StatusBar', {
 *             id: 'my-status',
 *      
 *             // defaults to use when the status is cleared:
 *             defaultText: 'Default status text',
 *             defaultIconCls: 'default-icon',
 *      
 *             // values to set initially:
 *             text: 'Ready',
 *             iconCls: 'ready-icon',
 *      
 *             // any standard Toolbar items:
 *             items: [{
 *                 text: 'A Button'
 *             }, '-', 'Plain Text']
 *         })
 *     });
 *
 *     // Update the status bar later in code:
 *     var sb = Ext.getCmp('my-status');
 *     sb.setStatus({
 *         text: 'OK',
 *         iconCls: 'ok-icon',
 *         clear: true // auto-clear after a set interval
 *     });
 *
 *     // Set the status bar to show that something is processing:
 *     sb.showBusy();
 *
 *     // processing....
 *
 *     sb.clearStatus(); // once completeed
 *
 */
Ext.define('Ext.ux.statusbar.StatusBar', {
    extend: 'Ext.toolbar.Toolbar',
    alternateClassName: 'Ext.ux.StatusBar',
    alias: 'widget.statusbar',
    requires: ['Ext.toolbar.TextItem'],
    /**
     * @cfg {String} statusAlign
     * The alignment of the status element within the overall StatusBar layout.  When the StatusBar is rendered,
     * it creates an internal div containing the status text and icon.  Any additional Toolbar items added in the
     * StatusBar's {@link #cfg-items} config, or added via {@link #method-add} or any of the supported add* methods, will be
     * rendered, in added order, to the opposite side.  The status element is greedy, so it will automatically
     * expand to take up all sapce left over by any other items.  Example usage:
     *
     *     // Create a left-aligned status bar containing a button,
     *     // separator and text item that will be right-aligned (default):
     *     Ext.create('Ext.Panel', {
     *         title: 'StatusBar',
     *         // etc.
     *         bbar: Ext.create('Ext.ux.statusbar.StatusBar', {
     *             defaultText: 'Default status text',
     *             id: 'status-id',
     *             items: [{
     *                 text: 'A Button'
     *             }, '-', 'Plain Text']
     *         })
     *     });
     *
     *     // By adding the statusAlign config, this will create the
     *     // exact same toolbar, except the status and toolbar item
     *     // layout will be reversed from the previous example:
     *     Ext.create('Ext.Panel', {
     *         title: 'StatusBar',
     *         // etc.
     *         bbar: Ext.create('Ext.ux.statusbar.StatusBar', {
     *             defaultText: 'Default status text',
     *             id: 'status-id',
     *             statusAlign: 'right',
     *             items: [{
     *                 text: 'A Button'
     *             }, '-', 'Plain Text']
     *         })
     *     });
     */
    /**
     * @cfg {String} [defaultText='']
     * The default {@link #text} value.  This will be used anytime the status bar is cleared with the
     * `useDefaults:true` option.
     */
    /**
     * @cfg {String} [defaultIconCls='']
     * The default {@link #iconCls} value (see the iconCls docs for additional details about customizing the icon).
     * This will be used anytime the status bar is cleared with the `useDefaults:true` option.
     */
    /**
     * @cfg {String} text
     * A string that will be <b>initially</b> set as the status message.  This string
     * will be set as innerHTML (html tags are accepted) for the toolbar item.
     * If not specified, the value set for {@link #defaultText} will be used.
     */
    /**
     * @cfg {String} [iconCls='']
     * A CSS class that will be **initially** set as the status bar icon and is
     * expected to provide a background image.
     *
     * Example usage:
     *
     *     // Example CSS rule:
     *     .x-statusbar .x-status-custom {
     *         padding-left: 25px;
     *         background: transparent url(images/custom-icon.gif) no-repeat 3px 2px;
     *     }
     *
     *     // Setting a default icon:
     *     var sb = Ext.create('Ext.ux.statusbar.StatusBar', {
     *         defaultIconCls: 'x-status-custom'
     *     });
     *
     *     // Changing the icon:
     *     sb.setStatus({
     *         text: 'New status',
     *         iconCls: 'x-status-custom'
     *     });
     */

    /**
     * @cfg {String} cls
     * The base class applied to the containing element for this component on render.
     */
    cls : 'x-statusbar',
    /**
     * @cfg {String} busyIconCls
     * The default {@link #iconCls} applied when calling {@link #showBusy}.
     * It can be overridden at any time by passing the `iconCls` argument into {@link #showBusy}.
     */
    busyIconCls : 'x-status-busy',
    /**
     * @cfg {String} busyText
     * The default {@link #text} applied when calling {@link #showBusy}.
     * It can be overridden at any time by passing the `text` argument into {@link #showBusy}.
     */
    busyText : 'Loading...',
    /**
     * @cfg {Number} autoClear
     * The number of milliseconds to wait after setting the status via
     * {@link #setStatus} before automatically clearing the status text and icon.
     * Note that this only applies when passing the `clear` argument to {@link #setStatus}
     * since that is the only way to defer clearing the status.  This can
     * be overridden by specifying a different `wait` value in {@link #setStatus}.
     * Calls to {@link #clearStatus} always clear the status bar immediately and ignore this value.
     */
    autoClear : 5000,

    /**
     * @cfg {String} emptyText
     * The text string to use if no text has been set. If there are no other items in
     * the toolbar using an empty string (`''`) for this value would end up in the toolbar
     * height collapsing since the empty string will not maintain the toolbar height.
     * Use `''` if the toolbar should collapse in height vertically when no text is
     * specified and there are no other items in the toolbar.
     */
    emptyText : '&#160;',

    // private
    activeThreadId : 0,

    // private
    initComponent : function(){
        var right = this.statusAlign === 'right';

        this.callParent(arguments);
        this.currIconCls = this.iconCls || this.defaultIconCls;
        this.statusEl = Ext.create('Ext.toolbar.TextItem', {
            cls: 'x-status-text ' + (this.currIconCls || ''),
            text: this.text || this.defaultText || ''
        });

        if (right) {
            this.cls += ' x-status-right';
            this.add('->');
            this.add(this.statusEl);
        } else {
            this.insert(0, this.statusEl);
            this.insert(1, '->');
        }
    },

    /**
     * Sets the status {@link #text} and/or {@link #iconCls}. Also supports automatically clearing the
     * status that was set after a specified interval.
     *
     * Example usage:
     *
     *     // Simple call to update the text
     *     statusBar.setStatus('New status');
     *
     *     // Set the status and icon, auto-clearing with default options:
     *     statusBar.setStatus({
     *         text: 'New status',
     *         iconCls: 'x-status-custom',
     *         clear: true
     *     });
     *
     *     // Auto-clear with custom options:
     *     statusBar.setStatus({
     *         text: 'New status',
     *         iconCls: 'x-status-custom',
     *         clear: {
     *             wait: 8000,
     *             anim: false,
     *             useDefaults: false
     *         }
     *     });
     *
     * @param {Object/String} config A config object specifying what status to set, or a string assumed
     * to be the status text (and all other options are defaulted as explained below). A config
     * object containing any or all of the following properties can be passed:
     *
     * @param {String} config.text The status text to display.  If not specified, any current
     * status text will remain unchanged.
     *
     * @param {String} config.iconCls The CSS class used to customize the status icon (see
     * {@link #iconCls} for details). If not specified, any current iconCls will remain unchanged.
     *
     * @param {Boolean/Number/Object} config.clear Allows you to set an internal callback that will
     * automatically clear the status text and iconCls after a specified amount of time has passed. If clear is not
     * specified, the new status will not be auto-cleared and will stay until updated again or cleared using
     * {@link #clearStatus}. If `true` is passed, the status will be cleared using {@link #autoClear},
     * {@link #defaultText} and {@link #defaultIconCls} via a fade out animation. If a numeric value is passed,
     * it will be used as the callback interval (in milliseconds), overriding the {@link #autoClear} value.
     * All other options will be defaulted as with the boolean option.  To customize any other options,
     * you can pass an object in the format:
     * 
     * @param {Number} config.clear.wait The number of milliseconds to wait before clearing
     * (defaults to {@link #autoClear}).
     * @param {Boolean} config.clear.anim False to clear the status immediately once the callback
     * executes (defaults to true which fades the status out).
     * @param {Boolean} config.clear.useDefaults False to completely clear the status text and iconCls
     * (defaults to true which uses {@link #defaultText} and {@link #defaultIconCls}).
     *
     * @return {Ext.ux.statusbar.StatusBar} this
     */
    setStatus : function(o) {
        var me = this;

        o = o || {};
        Ext.suspendLayouts();
        if (Ext.isString(o)) {
            o = {text:o};
        }
        if (o.text !== undefined) {
            me.setText(o.text);
        }
        if (o.iconCls !== undefined) {
            me.setIcon(o.iconCls);
        }

        if (o.clear) {
            var c = o.clear,
                wait = me.autoClear,
                defaults = {useDefaults: true, anim: true};

            if (Ext.isObject(c)) {
                c = Ext.applyIf(c, defaults);
                if (c.wait) {
                    wait = c.wait;
                }
            } else if (Ext.isNumber(c)) {
                wait = c;
                c = defaults;
            } else if (Ext.isBoolean(c)) {
                c = defaults;
            }

            c.threadId = this.activeThreadId;
            Ext.defer(me.clearStatus, wait, me, [c]);
        }
        Ext.resumeLayouts(true);
        return me;
    },

    /**
     * Clears the status {@link #text} and {@link #iconCls}. Also supports clearing via an optional fade out animation.
     *
     * @param {Object} [config] A config object containing any or all of the following properties.  If this
     * object is not specified the status will be cleared using the defaults below:
     * @param {Boolean} config.anim True to clear the status by fading out the status element (defaults
     * to false which clears immediately).
     * @param {Boolean} config.useDefaults True to reset the text and icon using {@link #defaultText} and
     * {@link #defaultIconCls} (defaults to false which sets the text to '' and removes any existing icon class).
     *
     * @return {Ext.ux.statusbar.StatusBar} this
     */
    clearStatus : function(o) {
        o = o || {};

        var me = this,
            statusEl = me.statusEl;

        if (o.threadId && o.threadId !== me.activeThreadId) {
            // this means the current call was made internally, but a newer
            // thread has set a message since this call was deferred.  Since
            // we don't want to overwrite a newer message just ignore.
            return me;
        }

        var text = o.useDefaults ? me.defaultText : me.emptyText,
            iconCls = o.useDefaults ? (me.defaultIconCls ? me.defaultIconCls : '') : '';

        if (o.anim) {
            // animate the statusEl Ext.Element
            statusEl.el.puff({
                remove: false,
                useDisplay: true,
                callback: function() {
                    statusEl.el.show();
                    me.setStatus({
                        text: text,
                        iconCls: iconCls
                    });
                }
            });
        } else {
             me.setStatus({
                 text: text,
                 iconCls: iconCls
             });
        }
        return me;
    },

    /**
     * Convenience method for setting the status text directly.  For more flexible options see {@link #setStatus}.
     * @param {String} text (optional) The text to set (defaults to '')
     * @return {Ext.ux.statusbar.StatusBar} this
     */
    setText : function(text) {
        var me = this;
        me.activeThreadId++;
        me.text = text || '';
        if (me.rendered) {
            me.statusEl.setText(me.text);
        }
        return me;
    },

    /**
     * Returns the current status text.
     * @return {String} The status text
     */
    getText : function(){
        return this.text;
    },

    /**
     * Convenience method for setting the status icon directly.  For more flexible options see {@link #setStatus}.
     * See {@link #iconCls} for complete details about customizing the icon.
     * @param {String} iconCls (optional) The icon class to set (defaults to '', and any current icon class is removed)
     * @return {Ext.ux.statusbar.StatusBar} this
     */
    setIcon : function(cls) {
        var me = this;

        me.activeThreadId++;
        cls = cls || '';

        if (me.rendered) {
            if (me.currIconCls) {
                me.statusEl.removeCls(me.currIconCls);
                me.currIconCls = null;
            }
            if (cls.length > 0) {
                me.statusEl.addCls(cls);
                me.currIconCls = cls;
            }
        } else {
            me.currIconCls = cls;
        }
        return me;
    },

    /**
     * Convenience method for setting the status text and icon to special values that are pre-configured to indicate
     * a "busy" state, usually for loading or processing activities.
     *
     * @param {Object/String} config (optional) A config object in the same format supported by {@link #setStatus}, or a
     * string to use as the status text (in which case all other options for setStatus will be defaulted).  Use the
     * `text` and/or `iconCls` properties on the config to override the default {@link #busyText}
     * and {@link #busyIconCls} settings. If the config argument is not specified, {@link #busyText} and
     * {@link #busyIconCls} will be used in conjunction with all of the default options for {@link #setStatus}.
     * @return {Ext.ux.statusbar.StatusBar} this
     */
    showBusy : function(o){
        if (Ext.isString(o)) {
            o = { text: o };
        }
        o = Ext.applyIf(o || {}, {
            text: this.busyText,
            iconCls: this.busyIconCls
        });
        return this.setStatus(o);
    }
});
/**
 * A {@link Ext.ux.statusbar.StatusBar} plugin that provides automatic error
 * notification when the associated form contains validation errors.
 */
Ext.define('Ext.ux.statusbar.ValidationStatus', {
    extend: 'Ext.Component', 
    requires: ['Ext.util.MixedCollection'],
    /**
     * @cfg {String} errorIconCls
     * The {@link Ext.ux.statusbar.StatusBar#iconCls iconCls} value to be applied
     * to the status message when there is a validation error.
     */
    errorIconCls : 'x-status-error',
    /**
     * @cfg {String} errorListCls
     * The css class to be used for the error list when there are validation errors.
     */
    errorListCls : 'x-status-error-list',
    /**
     * @cfg {String} validIconCls
     * The {@link Ext.ux.statusbar.StatusBar#iconCls iconCls} value to be applied
     * to the status message when the form validates.
     */
    validIconCls : 'x-status-valid',
    
    /**
     * @cfg {String} showText
     * The {@link Ext.ux.statusbar.StatusBar#text text} value to be applied when
     * there is a form validation error.
     */
    showText : 'The form has errors (click for details...)',
    /**
     * @cfg {String} hideText
     * The {@link Ext.ux.statusbar.StatusBar#text text} value to display when
     * the error list is displayed.
     */
    hideText : 'Click again to hide the error list',
    /**
     * @cfg {String} submitText
     * The {@link Ext.ux.statusbar.StatusBar#text text} value to be applied when
     * the form is being submitted.
     */
    submitText : 'Saving...',
    
    // private
    init : function(sb) {
        var me = this;

        me.statusBar = sb;
        sb.on({
            single: true,
            scope: me,
            render: me.onStatusbarRender,
            beforedestroy: me.destroy
        });
        sb.on({
            click: {
                element: 'el',
                fn: me.onStatusClick,
                scope: me,
                buffer: 200
            }
        });
    },

    onStatusbarRender: function(sb) {
        var me = this,
            startMonitor = function() {
                me.monitor = true;
            };

        me.monitor = true;
        me.errors = Ext.create('Ext.util.MixedCollection');
        me.listAlign = (sb.statusAlign === 'right' ? 'br-tr?' : 'bl-tl?');

        if (me.form) {
            me.formPanel = Ext.getCmp(me.form);
            me.basicForm = me.formPanel.getForm();
            me.startMonitoring();
            me.basicForm.on('beforeaction', function(f, action) {
                if (action.type === 'submit') {
                    // Ignore monitoring while submitting otherwise the field validation
                    // events cause the status message to reset too early
                    me.monitor = false;
                }
            });
            me.basicForm.on('actioncomplete', startMonitor);
            me.basicForm.on('actionfailed', startMonitor);
        }
   },
    
    // private
    startMonitoring : function() {
        this.basicForm.getFields().each(function(f) {
            f.on('validitychange', this.onFieldValidation, this);
        }, this);
    },
    
    // private
    stopMonitoring : function() {
        this.basicForm.getFields().each(function(f) {
            f.un('validitychange', this.onFieldValidation, this);
        }, this);
    },
    
    // private
    onDestroy : function() {
        this.stopMonitoring();
        this.statusBar.statusEl.un('click', this.onStatusClick, this);
        this.callParent(arguments);
    },
    
    // private
    onFieldValidation : function(f, isValid) {
        var me = this,
            msg;

        if (!me.monitor) {
            return false;
        }
        msg = f.getErrors()[0];
        if (msg) {
            me.errors.add(f.id, {field:f, msg:msg});
        } else {
            me.errors.removeAtKey(f.id);
        }
        this.updateErrorList();
        if (me.errors.getCount() > 0) {
            if (me.statusBar.getText() !== me.showText) {
                me.statusBar.setStatus({
                    text: me.showText,
                    iconCls: me.errorIconCls
                });
            }
        } else {
            me.statusBar.clearStatus().setIcon(me.validIconCls);
        }
    },

    // private
    updateErrorList : function() {
        var me = this,
            msg,
            msgEl = me.getMsgEl();

        if (me.errors.getCount() > 0) {
            msg = ['<ul>'];
            this.errors.each(function(err) {
                msg.push('<li id="x-err-', err.field.id, '"><a href="#">', err.msg, '</a></li>');
            });
            msg.push('</ul>');
            msgEl.update(msg.join(''));
        } else {
            msgEl.update('');
        }
        // reset msgEl size
        msgEl.setSize('auto', 'auto');
    },
    
    // private
    getMsgEl : function() {
        var me = this,
            msgEl = me.msgEl,
            t;

        if (!msgEl) {
            msgEl = me.msgEl = Ext.DomHelper.append(Ext.getBody(), {
                cls: me.errorListCls
            }, true);
            msgEl.hide();
            msgEl.on('click', function(e) {
                t = e.getTarget('li', 10, true);
                if (t) {
                    Ext.getCmp(t.id.split('x-err-')[1]).focus();
                    me.hideErrors();
                }
            }, null, {stopEvent: true}); // prevent anchor click navigation
        }
        return msgEl;
    },
    
    // private
    showErrors : function() {
        var me = this;

        me.updateErrorList();
        me.getMsgEl().alignTo(me.statusBar.getEl(), me.listAlign).slideIn('b', {duration: 300, easing: 'easeOut'});
        me.statusBar.setText(me.hideText);
        me.formPanel.body.on('click', me.hideErrors, me, {single:true}); // hide if the user clicks directly into the form
    },

    // private
    hideErrors : function() {
        var el = this.getMsgEl();
        if (el.isVisible()) {
            el.slideOut('b', {duration: 300, easing: 'easeIn'});
            this.statusBar.setText(this.showText);
        }
        this.formPanel.body.un('click', this.hideErrors, this);
    },
    
    // private
    onStatusClick : function() {
        if (this.getMsgEl().isVisible()) {
            this.hideErrors();
        } else if (this.errors.getCount() > 0) {
            this.showErrors();
        }
    }
});Ext.example = function(){
    var msgCt;

    function createBox(t, s){
       return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
    }
    return {
        msg : function(title, format){
            if(!msgCt){
                msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
            }
            var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = Ext.DomHelper.append(msgCt, createBox(title, s), true);
            m.hide();
            m.slideIn('t').ghost("t", { delay: 1000, remove: true});
        },

        init : function(){
            if(!msgCt){
                // It's better to create the msg-div here in order to avoid re-layouts 
                // later that could interfere with the HtmlEditor and reset its iFrame.
                msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
            }
        }
    };
}();


Ext.onReady(Ext.example.init, Ext.example);Ext.define('Ext.tx.form.field.Averiguacion', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.averiguacionfield',

	maxLength: 45,
//	regex: /^\d+\x2F\d{4}.*$/,/*number/year*/
//	regexText: 'número/año (yyyy)'
});/*
	Combobox presenta un problema dados 2 registros con valores asignados que utilizan combobox.
	Después de editar uno de los registros usando key filtering, el valor en el combobox para el segundo registro se pierde.
*/
Ext.define('Ext.tx.form.field.ComboBox', {
    override: 'Ext.form.field.ComboBox',
	alias: ['widget.combobox', 'widget.combo'],
	
	emptyText: 'Elige una opción',
	
    beforeBlur: function() {
        this.doQueryTask.cancel();
        this.assertValue();
		
		//borra el filtro al perder el foco
		if(this.queryMode === 'local' && this.queryFilter){
			this.queryFilter.disabled = true;
			this.store.filter();
		}
    },
	
	
    trigger1Cls: 'x-form-clear-trigger',
    trigger2Cls: 'x-form-arrow-trigger',
    onTrigger1Click: function() {
        this.clearValue();
    }
});/*
    Primer carácter alfabético del primer apellido
    Primer vocal no inicial del primer apellido
    Primer carácter alfabético del segundo apellido
    Primer carácter alfabético del primer nombre, en caso de José o María se empleara el segundo nombre si lo hubiera
    Dos últimos dígitos del año de nacimiento
    Dos dígitos del mes de nacimiento
    Dos dígitos del día de nacimiento
    Carácter H o M para indecar el género Hombre o Mujer segun corresponda
    Dos caracteres alfabeticos correspondiente a la clave de la entidad federativa de nacimiento, ver Catálogo de entidades federativas de nacimiento
    Primer consonante no inicial del primer apellido
    Primer consonante no inicial del segundo apellido
    Primer consonante no inicial del nombre
    Dos dígitos para evitar duplicidades

*/
Ext.define('Ext.tx.form.field.CURP', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.curpfield',
	
	name: 'curp',
	fieldLabel: 'CURP',
//								maxLength: 18,
//								minLength: 18,
//								enforceMaxLength: true,
	//regex: /^[A-Z]{4}\d{6}[HM][A-Z]{5}\d{2}$/,
	regexText: '<strong>18 carácteres en mayúsculas:</strong><br/>Primer carácter alfabético del primer apellido<br/>Primer vocal no inicial del primer apellido<br/>Primer carácter alfabético del segundo apellido<br/>Primer carácter alfabético del primer nombre, en caso de José o María se empleara el segundo nombre si lo hubiera<br/>Dos últimos dígitos del año de nacimiento<br/>Dos dígitos del mes de nacimiento<br/>Dos dígitos del día de nacimiento<br/>Carácter H o M para indecar el género Hombre o Mujer segun corresponda<br/>Dos caracteres alfabeticos correspondiente a la clave de la entidad federativa de nacimiento, ver Catálogo de entidades federativas de nacimiento<br/>Primer consonante no inicial del primer apellido<br/>Primer consonante no inicial del segundo apellido<br/>Primer consonante no inicial del nombre<br/>Dos dígitos para evitar duplicidades<br/>',
	fieldStyle:{textTransform: 'uppercase'},
});Ext.define('Ext.tx.form.field.DateTime', {
    extend:'Ext.form.FieldContainer',
    mixins: {
        field: 'Ext.form.field.Field'
    },
    alias: 'widget.datetimefield',
    layout: 'hbox',
    width: 200,
    height: 22,
    combineErrors: true,
    msgTarget :'side',

    dateCfg:{},
    timeCfg:{},

    initComponent: function() {
        var me = this;
        me.buildField();
        me.callParent();
        this.dateField = this.down('datefield');
        this.timeField = this.down('timefield');
        me.initField();
    },

    //@private
    buildField: function(){
        this.items = [
            Ext.apply({
                xtype: 'datefield',
                format: 'd-m-Y',
                width: 100
            },this.dateCfg),
            Ext.apply({
                xtype: 'timefield',
//				minValue: '8:00 AM',
//				maxValue: '5:00 PM',
			increment: 60,
                format: 'g:i A',
                width: 90
            },this.timeCfg)
        ]
    },

    getValue: function() {
        var value,date = this.dateField.getSubmitValue(),time = this.timeField.getSubmitValue();
        if(date){
            if(time){
                var format = this.getFormat()
                value = Ext.Date.parse(date + ' ' + time,format)
            }else{
                value = this.dateField.getValue()
            }
        }
        return value
    },

    setValue: function(value){
        this.dateField.setValue(value)
        this.timeField.setValue(value)
    },

    getSubmitData: function(){
        var value = this.getValue()
        var format = this.getFormat()
        return value ? Ext.Date.format(value, format) : null;
    },

    getFormat: function(){
        return (this.dateField.submitFormat || this.dateField.format) + " " + (this.timeField.submitFormat || this.timeField.format)
    },
	
	setReadOnly: function(readOnly){
		this.dateField.setReadOnly(readOnly);
		this.timeField.setReadOnly(readOnly);
		this[readOnly ? 'addCls' : 'removeCls'](this.disabledCls);
	},
});
Ext.define('Ext.tx.form.field.RFC', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.rfcfield',
	
	name: 'rfc',
	fieldLabel: 'RFC',
//	maxLength: 13,
//	minLength: 13,
	enforceMaxLength: true,
	//regex: /[A-Z,Ñ,&amp;]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?/,
//	regexText: '<strong>18 carácteres en mayúsculas:</strong><br/>Primer carácter alfabético del primer apellido<br/>Primer vocal no inicial del primer apellido<br/>Primer carácter alfabético del segundo apellido<br/>Primer carácter alfabético del primer nombre, en caso de José o María se empleara el segundo nombre si lo hubiera<br/>Dos últimos dígitos del año de nacimiento<br/>Dos dígitos del mes de nacimiento<br/>Dos dígitos del día de nacimiento<br/>Carácter H o M para indecar el género Hombre o Mujer segun corresponda<br/>Dos caracteres alfabeticos correspondiente a la clave de la entidad federativa de nacimiento, ver Catálogo de entidades federativas de nacimiento<br/>Primer consonante no inicial del primer apellido<br/>Primer consonante no inicial del segundo apellido<br/>Primer consonante no inicial del nombre<br/>Dos dígitos para evitar duplicidades<br/>',
	fieldStyle:{textTransform: 'uppercase'},
});Ext.define('Ext.tx.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',
    rfc:  function(v) {
        return /^[A-Z,Ñ,&amp;]{3,4}\d{6}[0-9,A-Z]{3}$/i.test(v);
    },
    rfcText: 'El RFC debe tener el siguiente formato: AAAA991231BBB',
	
    rfcMoral:  function(v) {
        return /^[A-Z,Ñ,&amp;]{3}\d{6}[0-9,A-Z]{3}$/i.test(v);
    },
    rfcMoralText: 'El RFC debe tener el siguiente formato: AAA991231BBB',
	
    curp:  function(v) {
        return /^[a-zA-Z]{4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}[a-zA-Z]{5}[0-9A-Z]{2}$/i.test(v);
    },
    curpText: 'La CURP debe tener el siguiente formato: AAAA001122BBBBBBCC',
});/**
 * Filters using an Ext.ux.grid.menu.RangeMenu.
 * <p><b><u>Example Usage:</u></b></p>
 * <pre><code>
var filters = Ext.create('Ext.ux.grid.GridFilters', {
    ...
    filters: [{
        type: 'numeric',
        dataIndex: 'price'
    }]
});
 * </code></pre>
 * <p>Any of the configuration options for {@link Ext.ux.grid.menu.RangeMenu} can also be specified as
 * configurations to NumericFilter, and will be copied over to the internal menu instance automatically.</p>
 */
// tx copiado de Ext.ux.grid.filter.NumericFilter
Ext.define('Ext.tx.grid.filter.HasmanyFilter', {
    extend: 'Ext.ux.grid.filter.Filter',
    alias: 'gridfilter.hasmany',
    uses: ['Ext.form.field.Number'],

    /**
     * @private @override
     * Creates the Menu for this filter.
     * @param {Object} config Filter configuration
     * @return {Ext.menu.Menu}
     */
    createMenu: function(config) {
        var me = this,
            menu;
        menu = Ext.create('Ext.tx.grid.menu.HasmanyMenu', config);
        menu.on('update', me.fireUpdate, me);
        return menu;
    },

    /**
     * @private
     * Template method that is to get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        return this.menu.getValue();
    },

    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter
     */
    setValue : function (value) {
        this.menu.setValue(value);
    },

    /**
     * Template method that is to return <tt>true</tt> if the filter
     * has enough configuration information to be activated.
     * @return {Boolean}
     */
    isActivatable : function () {
        var values = this.getValue(),
            key;
        for (key in values) {
            if (values[key] !== undefined) {
                return true;
            }
        }
        return false;
    },

    /**
     * @private
     * Template method that is to get and return serialized filter data for
     * transmission to the server.
     * @return {Object/Array} An object or collection of objects containing
     * key value pairs representing the current configuration of the filter.
     */
    getSerialArgs : function () {
        var key,
            args = [],
            values = this.menu.getValue();
        for (key in values) {
            args.push({
                type: 'hasmany',
                field: key,
                value: values[key]
            });
        }
        return args;
    },

    /**
     * Template method that is to validate the provided Ext.data.Record
     * against the filters configuration.
     * @param {Ext.data.Record} record The record to validate
     * @return {Boolean} true if the record is valid within the bounds
     * of the filter, false otherwise.
     */
    validateRecord : function (record) {
        var val = record.get(this.dataIndex),
            values = this.getValue(),
            isNumber = Ext.isNumber;
        if (isNumber(values.eq) && val != values.eq) {
            return false;
        }
        if (isNumber(values.lt) && val >= values.lt) {
            return false;
        }
        if (isNumber(values.gt) && val <= values.gt) {
            return false;
        }
        return true;
    }
});
Ext.define('Ext.tx.grid.menu.HasmanyMenu', {
    extend: 'Ext.ux.grid.menu.RangeMenu',
    onInputChange: function(field) {
        // restart the timer
        this.updateTask.delay(this.updateBuffer);
    },
	fieldCls: 'Ext.form.field.Text',
    menuItemCfgs : {
//        emptyText: 'Enter Number...',
        selectOnFocus: false,
//        width: 201,
		labelWidth: 200,
    },
    /**
     * Get and return the value of the filter.
     * @return {String} The value of this filter
     */
    getValue : function () {
        var result = {},
            fields = this.fields, 
            key, field, vacio;
            
        for (key in fields) {
            if (fields.hasOwnProperty(key)) {
                field = fields[key];
				if(!field.isValid())
					continue;
				switch(field.xtype){
					case 'textfield':
						if(field.getValue() !== '')
							result[key] = field.getValue();
					break;
					case 'datefield':
						if(field.getValue() !== null)
							result[key] = Ext.Date.format(field.getValue(), field.format)
					break;
					default:
						if(field.getValue() !== null)
							result[key] = field.getValue();
					break;
				}
            }
        }
        return result;
    },
});/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
// feature idea to enable Ajax loading and then the content
// cache would actually make sense. Should we dictate that they use
// data or support raw html as well?

/**
 * Plugin (ptype = 'rowexpander') that adds the ability to have a Column in a grid which enables
 * a second row body which expands/contracts.  The expand/contract behavior is configurable to react
 * on clicking of the column, double click of the row, and/or hitting enter while a row is selected.
 */
Ext.define('Ext.tx.grid.plugin.RowExpander', {
    extend: 'Ext.AbstractPlugin',
    lockableScope: 'normal',

    requires: [
        'Ext.grid.feature.RowBody',
        'Ext.grid.feature.RowWrap'
    ],

    alias: 'plugin.rowexpander',

    rowBodyTpl: null,

    /**
     * @cfg {Boolean} expandOnEnter
     * <tt>true</tt> to toggle selected row(s) between expanded/collapsed when the enter
     * key is pressed (defaults to <tt>true</tt>).
     */
    expandOnEnter: true,

    /**
     * @cfg {Boolean} expandOnDblClick
     * <tt>true</tt> to toggle a row between expanded/collapsed when double clicked
     * (defaults to <tt>true</tt>).
     */
    expandOnDblClick: true,

    /**
     * @cfg {Boolean} selectRowOnExpand
     * <tt>true</tt> to select a row when clicking on the expander icon
     * (defaults to <tt>false</tt>).
     */
    selectRowOnExpand: false,

    rowBodyTrSelector: '.x-grid-rowbody-tr',
    rowBodyHiddenCls: 'x-grid-row-body-hidden',
    rowCollapsedCls: 'x-grid-row-collapsed',

    addCollapsedCls: {
        before: function(values, out) {
            var me = this.rowExpander;
            if (!me.recordsExpanded[values.record.internalId]) {
                values.itemClasses.push(me.rowCollapsedCls);
            }
        },
        priority: 500
    },

    /**
     * @event expandbody
     * **Fired through the grid's View**
     * @param {HTMLElement} rowNode The &lt;tr> element which owns the expanded row.
     * @param {Ext.data.Model} record The record providing the data.
     * @param {HTMLElement} expandRow The &lt;tr> element containing the expanded data.
     */
    /**
     * @event collapsebody
     * **Fired through the grid's View.**
     * @param {HTMLElement} rowNode The &lt;tr> element which owns the expanded row.
     * @param {Ext.data.Model} record The record providing the data.
     * @param {HTMLElement} expandRow The &lt;tr> element containing the expanded data.
     */

    setCmp: function(grid) {
        var me = this,
            rowBodyTpl,
            features;

        me.callParent(arguments);

        me.recordsExpanded = {};
        // <debug>
        if (!me.rowBodyTpl) {
            Ext.Error.raise("The 'rowBodyTpl' config is required and is not defined.");
        }
        // </debug>

        me.rowBodyTpl = Ext.XTemplate.getTpl(me, 'rowBodyTpl');
        rowBodyTpl = this.rowBodyTpl;
        features = [{
            ftype: 'rowbody',
            lockableScope: 'normal',
            recordsExpanded: me.recordsExpanded,
            rowBodyHiddenCls: me.rowBodyHiddenCls,
            rowCollapsedCls: me.rowCollapsedCls,
            setupRowData: me.getRowBodyFeatureData,
            setup: me.setup,
            getRowBodyContents: function(record) {
                return rowBodyTpl.applyTemplate(record.getData(true));
            }
        },{
            ftype: 'rowwrap',
            lockableScope: 'normal'
        }];
 
        if (grid.features) {
            grid.features = Ext.Array.push(features, grid.features);
        } else {
            grid.features = features;
        }
        // NOTE: features have to be added before init (before Table.initComponent)
    },

    init: function(grid) {
        var me = this,
            reconfigurable = grid,
            view, lockedView;

        me.callParent(arguments);
        me.grid = grid;
        view = me.view = grid.getView();
        // Columns have to be added in init (after columns has been used to create the headerCt).
        // Otherwise, shared column configs get corrupted, e.g., if put in the prototype.
        me.addExpander();
        
        // Bind to view for key and mouse events
        // Add row processor which adds collapsed class
        me.bindView(view);
        view.addRowTpl(me.addCollapsedCls).rowExpander = me;

        // If the owning grid is lockable, then disable row height syncing - we do it here.
        // Also ensure the collapsed class is applied to the locked side by adding a row processor.
        if (grid.ownerLockable) {
            // If our client grid is the normal side of a lockable grid, we listen to its lockable owner's beforereconfigure
            reconfigurable = grid.ownerLockable;
            reconfigurable.syncRowHeight = false;
            lockedView = reconfigurable.lockedGrid.getView();

            // Bind to locked view for key and mouse events
            // Add row processor which adds collapsed class
            me.bindView(lockedView);
            lockedView.addRowTpl(me.addCollapsedCls).rowExpander = me;

            // Refresh row heights of expended rows on the locked (non body containing) side upon lock & unlock.
            // The locked side's expanded rows will collapse back because there's no body there
            reconfigurable.mon(reconfigurable, 'columnschanged', me.refreshRowHeights, me);
            reconfigurable.mon(reconfigurable.store, 'datachanged', me.refreshRowHeights, me);
        }
        reconfigurable.on('beforereconfigure', me.beforeReconfigure, me);

        if (grid.ownerLockable && !grid.rowLines) {
            // grids without row lines can gain a border when focused.  When they do, the
            // stylesheet adjusts the padding of the cells so that the height of the row
            // does not change. It is necessary to refresh the row heights for lockable
            // grids on focus to keep the height of the expander cells in sync.
            view.on('rowfocus', me.refreshRowHeights, me);
        }
    },
    
    beforeReconfigure: function(grid, store, columns, oldStore, oldColumns) {
        var expander = this.getHeaderConfig();
        expander.locked = true;
        columns.unshift(expander);
    },

    /**
     * @private
     * Inject the expander column into the correct grid.
     * 
     * If we are expanding the normal side of a lockable grid, poke the column into the locked side
     */
    addExpander: function() {
        var me = this,
            expanderGrid = me.grid,
            expanderHeader = me.getHeaderConfig();

        // If this is the normal side of a lockable grid, find the other side.
        if (expanderGrid.ownerLockable) {
            expanderGrid = expanderGrid.ownerLockable.lockedGrid;
            expanderGrid.width += expanderHeader.width;
        }
        expanderGrid.headerCt.insert(0, expanderHeader);
    },

    getRowBodyFeatureData: function(record, idx, rowValues) {
        var me = this
        me.self.prototype.setupRowData.apply(me, arguments);

        rowValues.rowBody = me.getRowBodyContents(record);
        rowValues.rowBodyCls = me.recordsExpanded[record.internalId] ? '' : me.rowBodyHiddenCls;
    },
    
    setup: function(rows, rowValues){
        var me = this;
        me.self.prototype.setup.apply(me, arguments);
        // If we are lockable, the expander column is moved into the locked side, so we don't have to span it
        if (!me.grid.ownerLockable) {
            rowValues.rowBodyColspan -= 1;
        }    
    },

    bindView: function(view) {
        if (this.expandOnEnter) {
            view.on('itemkeydown', this.onKeyDown, this);
        }
        if (this.expandOnDblClick) {
            view.on('itemdblclick', this.onDblClick, this);
        }
    },

    onKeyDown: function(view, record, row, rowIdx, e) {
        if (e.getKey() == e.ENTER) {
            var ds   = view.store,
                sels = view.getSelectionModel().getSelection(),
                ln   = sels.length,
                i = 0;

            for (; i < ln; i++) {
                rowIdx = ds.indexOf(sels[i]);
                this.toggleRow(rowIdx, sels[i]);
            }
        }
    },

    onDblClick: function(view, record, row, rowIdx, e) {
        this.toggleRow(rowIdx, record);
    },

    toggleRow: function(rowIdx, record) {
        var me = this,
            view = me.view,
            rowNode = view.getNode(rowIdx),
            row = Ext.fly(rowNode, '_rowExpander'),
            nextBd = row.down(me.rowBodyTrSelector, true),
            isCollapsed = row.hasCls(me.rowCollapsedCls),
            addOrRemoveCls = isCollapsed ? 'removeCls' : 'addCls',
            ownerLock, rowHeight, fireView;

        // Suspend layouts because of possible TWO views having their height change
        Ext.suspendLayouts();
        row[addOrRemoveCls](me.rowCollapsedCls);
        Ext.fly(nextBd)[addOrRemoveCls](me.rowBodyHiddenCls);
        me.recordsExpanded[record.internalId] = isCollapsed;
        view.refreshSize();

        // Sync the height and class of the row on the locked side
        if (me.grid.ownerLockable) {
            ownerLock = me.grid.ownerLockable;
            fireView = ownerLock.getView();
            view = ownerLock.lockedGrid.view;
            rowHeight = row.getHeight();
            row = Ext.fly(view.getNode(rowIdx), '_rowExpander');
            row.setHeight(rowHeight);
            row[addOrRemoveCls](me.rowCollapsedCls);
            view.refreshSize();
        } else {
            fireView = view;
        }
        fireView.fireEvent(isCollapsed ? 'expandbody' : 'collapsebody', row.dom, record, nextBd);
        // Coalesce laying out due to view size changes
        Ext.resumeLayouts(true);
    },

    // refreshRowHeights often gets called in the middle of some complex processing.
    // For example, it's called on the store's datachanged event, but it must execute
    // *after* other objects interested in datachanged have done their job.
    // Or it's called on column lock/unlock, but that could be just the start of a cross-container
    // drag/drop of column headers which then moves the column into its final place.
    // So this throws execution forwards until the idle event.
    refreshRowHeights: function() {
        Ext.globalEvents.on({
            idle: this.doRefreshRowHeights,
            scope: this,
            single: true
        });
    },

    doRefreshRowHeights: function() {
        var me = this,
            recordsExpanded = me.recordsExpanded,
            key, record,
            lockedView = me.grid.ownerLockable.lockedGrid.view,
            normalView = me.grid.ownerLockable.normalGrid.view,
            normalRow,
            lockedRow,
            lockedHeight,
            normalHeight;

        for (key in recordsExpanded) {
            if (recordsExpanded.hasOwnProperty(key)) {
                record = this.view.store.data.get(key);
                lockedRow = lockedView.getNode(record, false);
                normalRow = normalView.getNode(record, false);
                lockedRow.style.height = normalRow.style.height = '';
                lockedHeight = lockedRow.offsetHeight;
                normalHeight = normalRow.offsetHeight;
                if (normalHeight > lockedHeight) {
                    lockedRow.style.height = normalHeight + 'px';
                } else if (lockedHeight > normalHeight) {
                    normalRow.style.height = lockedHeight + 'px';
                }
            }
        }
    },

    getHeaderConfig: function() {
        var me = this;

        return {
            width: 24,
            lockable: false,
            sortable: false,
            resizable: false,
            draggable: false,
            hideable: false,
            menuDisabled: true,
            tdCls: Ext.baseCSSPrefix + 'grid-cell-special',
            innerCls: Ext.baseCSSPrefix + 'grid-cell-inner-row-expander',
            renderer: function(value, metadata) {
                // Only has to span 2 rows if it is not in a lockable grid.
                if (!me.grid.ownerLockable) {
                    metadata.tdAttr += ' rowspan="2"';
                }
                return '<div class="' + Ext.baseCSSPrefix + 'grid-row-expander"></div>';
            },
            processEvent: function(type, view, cell, rowIndex, cellIndex, e, record) {
                if (type == "mousedown" && e.getTarget('.x-grid-row-expander')) {
                    me.toggleRow(rowIndex, record);
                    return me.selectRowOnExpand;
                }
            }
        };
    }
});
/*
	abre una nueva página con los parametros indicados
*/
Ext.define('Ext.tx.form.WindowRequest', {
    extend: 'Ext.form.Panel',

    alias: 'widget.windowrequest',
	renderTo: 'extjs-content',
	
	url: 'index.php',
	standardSubmit: true,
	method: "GET",//default POST
	//parámetros del link
    baseParams: {
		option: 'com_tsjdf_libros',
    },

    title: 'Window Request',
	hidden: true,
    width: 350,
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    defaultType: 'textfield',
	target: '_blank',

	//_blank Opens the linked document in a new window or tab.
	onSubmit: function(params){
		this.submit({params: params,target : this.target,});
	}
});
Ext.define('Ext.tx.form.field.MyPicker', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.mypicker',
	
	/*para que no se oculte*/
	collapseIf: Ext.emptyFn,
	initEvents: Ext.emptyFn,
	
	triggerCls : Ext.baseCSSPrefix + 'form-person-trigger',//icono de monito/s
	matchFieldWidth: false,
    editable: false,
    pickerOffset: [ 0, -20 ],
	// pickerAlign ??
	
    /*initComponent: function(a){
        var me = this;

        Ext.applyIf(me, {
					
        });
        me.callParent(arguments);
    },*/
	saveBtnText: Ext.grid.RowEditor.prototype.saveBtnText,
	
    onCancel: function(button, event) {
		/*condiciones iniciales*/
		this.picker.getForm().reset();
        this.fireEvent('blur');
        this.collapse();
    },
	onSubmit: function(button, event) {
		//this.setValue(this.picker.getValues());
		this.setValue(this.picker.getValues().email);
		this.onCancel();
	},
	
	/*createpicker deber�a entregar un objeto modal window*/
	
    /**
     * @cfg {Object} pickerConfig
     * A standard {@link Ext.form.Panel} config object.
     */
    createPicker: function(){
        return new Ext.form.Panel(Ext.apply({
            title: 'MyPicker',
            width: 400,
            bodypadding:5,
			style: 'background-color: white;',
//            ownerCt: this.ownerCt,
            floating: true,
            bodyPadding:8,
//			layout: 'anchor',
			defaults: {
				anchor: '100%',
				labelWidth: 50,
			},
            items: [
				{
					xtype: 'textfield',
					name: 'email',
					fieldLabel: 'Email Address',
					allowBlank: false,
					vtype: 'email'
				},
				{
					xtype: 'textfield',
					name: 'email2',
					fieldLabel: 'Email Address2',
//					allowBlank: false,
//					vtype: 'email'
				},
            ],
			buttons: [{
				text: Ext.grid.RowEditor.prototype.cancelBtnText,
				handler: this.onCancel,
				scope: this,
			}, {
				text: this.saveBtnText,
				formBind: true, //only enabled once the form is valid
				disabled: true,
				handler: this.onSubmit,
				scope: this,
			}],
        }, this.pickerConfig));          
    }	
});Ext.define('Ext.tx.form.field.MyPicker2', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.mypicker2',
	
	/*para que no se oculte*/
	collapseIf: Ext.emptyFn,
	initEvents: Ext.emptyFn,
	
	triggerCls : Ext.baseCSSPrefix + 'form-person-trigger',//icono de monito
	matchFieldWidth: false,
    editable: false,
    pickerOffset: [ 0, -20 ],
	// pickerAlign ??
	
	saveBtnText: Ext.grid.RowEditor.prototype.saveBtnText,
	
    onCancel: function(button, event) {
		/*condiciones iniciales*/
		this.picker.getComponent('expForm').getForm().reset();
        this.fireEvent('blur');
        this.collapse();
    },
	onSubmit: function(button, event) {
		this.setValue(this.picker.getComponent('expForm').getValues().email);
		this.onCancel();
	},
	
	onExpand: function(){
		this.picker.getComponent('expForm').getComponent('myMail').setValue(this.getValue());
	},

	//las referencias this.X alojadas en pickerConfig no las ve Ext.apply
	createPicker: function(){
		return Ext.create('Ext.window.Window', {
			title: 'MyPicker2',
			width: 400,
			modal: true,
			closable: false,
			draggable:false,
//            bodypadding:5,
//			style: 'background-color: white;',
////            ownerCt: this.ownerCt,
//            floating: true,
//            bodyPadding:8,
////			layout: 'anchor'
            items: [
                {
                    xtype: 'form',
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Label'
                        }
                    ]
                },
                {
                    xtype: 'form',
					itemId: 'expForm',
					title: 'My Form',
					defaults: {
						anchor: '100%',
						labelWidth: 50,
					},
					items: [
						{
							xtype: 'textfield',
							name: 'email',
							fieldLabel: 'Email Address',
							allowBlank: false,
							vtype: 'email',
							itemId: 'myMail'
						},
						{
							xtype: 'textfield',
							name: 'email2',
							fieldLabel: 'Email Address2',
		//					allowBlank: false,
		//					vtype: 'email'
						},
					],
					buttons: [{
						text: Ext.grid.RowEditor.prototype.cancelBtnText,
						handler: this.onCancel,
						scope: this,
					}, {
						text: this.saveBtnText,
						formBind: true, //only enabled once the form is valid
						disabled: true,
						handler: this.onSubmit,
						scope: this,
					}],
                }
            ],
		});         
    }	
});/*
1) instalar el xpi
2) allow and remember
https://support.mozilla.org/en-US/kb/how-to-enable-java-if-its-been-blocked


configuraciones recomendadas para firefox
security.ask_for_password = 0
plugins.load_appdir_plugins;true
*/
function onFingerPrintRequest(component){
	var element = component.getEl().dom;
	var evt = document.createEvent("UIEvents");//type
	evt.initEvent("FingerPrintRequest", true, false);//type, bubbles, cancelable
	element.dispatchEvent(evt);
}

/*
	archivos locales file:///F:/... no se puenden pintar
*/
function onFingerPrintResponse(event){
	Ext.getCmp(event.target.id).fireChange();//avisa al cmp para que se pinte el valor
//	console.log(event.target.getAttribute("file"));//ubicación local del archivo, lo quite porque el archivo local no puede ser notificado/ utilizado por seguridad
}
document.addEventListener("FingerPrintResponse",function(event) { onFingerPrintResponse(event); },false);

Ext.define('Ext.tx.form.field.FingerPrintPicker', {
    extend: 'Ext.tx.form.field.MyPicker',
    alias: 'widget.fingerprintpicker',
	
	triggerCls : Ext.baseCSSPrefix + 'form-fingerprint-trigger',
	saveBtnText: 'Adjuntar',
	inputType: "hidden",
	
//	afterBodyEl: new Ext.Template('<img class="fingerprint-preview" id="{id}-preview" src=""/>'),
	
	pickerConfig: {
		title: 'Captura tu huella digital',
		url: 'index.php?option=com_tsjdf_libros2&task=v4.uploadfile&id_type=2',
		items: [
			{
				xtype: 'filefield',
				name: 'fingerprint',
				fieldLabel: 'Huella',
				allowBlank: false,
				buttonConfig: {
					text: 'Captura una huella',
					iconCls: 'upload-icon',
					iconAlign: 'right',
					handler: function(button, event) {
						event.preventDefault();
						onFingerPrintRequest(button);
					},
				},
			},				
			{
				xtype: 'component',
				itemId: 'file-msg',
				hidden: true,
				style: {
					border: "2px solid #ccc",
					padding: "5px 10px",
					background: "#eee",
					margin: "5px",
					"font-weight": "bolder"
				}
			},
		],
	},

    onCancel: function(button, event) {
		this.picker.getComponent('file-msg').setVisible(false);
		this.picker.getForm().reset();
        this.fireEvent('blur');
        this.collapse();     
    },
	onSubmit: function(button, event) {
		this.picker.submit({
   			waitMsg: 'Adjuntando...',
			success: function(basicform, action) {
				this.setValue(action.result.data.fingerprint);
				//Ext.getElementById(this.id + '-preview').src = action.result.data.fingerprint_file;
				this.onCancel();
			},
			failure: function(basicform, action) {
				var cmp = this.picker.getComponent('file-msg');
				cmp.setVisible(true);
				cmp.update(action.result.message);
			},
			scope: this,
		});
	},
});function onWacomRequest(component){
	var element = component.getEl().dom;
	var evt = document.createEvent("UIEvents");//type
	evt.initEvent("WacomRequest", true, false);//type, bubbles, cancelable
	element.dispatchEvent(evt);
}

function onWacomResponse(event){
	Ext.getCmp(event.target.id).fireChange();//avisa al cmp para que se pinte el valor
//	console.log(event.target.getAttribute("file"));//ubicación local del archivo, lo quite porque el archivo local no puede/debe ser notificado/utilizado por seguridad
}
document.addEventListener("WacomResponse",function(event) { onWacomResponse(event); },false);

Ext.define('Ext.tx.form.field.WacomPicker', {
    extend: 'Ext.tx.form.field.MyPicker',
    alias: 'widget.wacompicker',
	
	triggerCls : Ext.baseCSSPrefix + 'form-wacom-trigger',
	saveBtnText: 'Adjuntar',
	inputType: "hidden",
	
//	afterBodyEl: new Ext.Template('<img class="wacom-preview" id="{id}-preview" src=""/>'),
//	listeners: {
		/*
		desde aqui no tengo acceso al path
		*/
//		change: function(component, newValue, oldValue, eOpts ){
//			window.myvar = eOpts;
//			console.log(eOpts);
//			if(newValue)
//				Ext.getElementById(this.id + '-preview').src = "newValue path"
//			else
//				Ext.getElementById(this.id + '-preview').src = "";
//		},
//	},
	pickerConfig: {
		listeners: {
			/*
			deseo que se abra el wacom al abrir el picker pero eso provoca que el layout no funcione bien
			activate: function(component, eOpts){
				component.getComponent('file-msg').setVisible(false);
				onWacomRequest(component.getComponent('wacom-field').button);
			}*/
		},
		
		title: 'Adjunta tu rúbrica',
		url: 'index.php?option=com_tsjdf_libros2&task=v4.uploadfile&id_type=1',
		items: [
			{
				xtype: 'filefield',
				name: 'wacom',
				fieldLabel: 'Rúbrica',
				itemId: 'wacom-field',
				allowBlank: false,
				buttonConfig: {
					text: 'Activar lector',
					iconCls: 'upload-icon',
					iconAlign: 'right',
					handler: function(button, event) {
						event.preventDefault();
						this.up('form').getComponent('file-msg').setVisible(false);
						onWacomRequest(button);
					},
				},
			},				
			{
				xtype: 'component',
				itemId: 'file-msg',
				hidden: true,
				style: {
					border: "2px solid #ccc",
					padding: "5px 10px",
					background: "#eee",
					margin: "5px",
					"font-weight": "bolder"
				}
			},
		],
	},
	

    onCancel: function(button, event) {
		this.picker.getComponent('file-msg').setVisible(false);
		this.picker.getForm().reset();
        this.fireEvent('blur');
        this.collapse();     
    },
	onSubmit: function(button, event) {
		this.picker.submit({
   			waitMsg: 'Adjuntando...',
			success: function(basicform, action) {
				this.setValue(action.result.data.wacom);
				//Ext.getElementById(this.id + '-preview').src = action.result.data.wacom_file;
				this.onCancel();
			},
			failure: function(basicform, action) {
				var cmp = this.picker.getComponent('file-msg');
				cmp.setVisible(true);
				cmp.update(action.result.message);
			},
			scope: this,
		});
	},
});/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
/**
 * Spanish/Latin American Translation by genius551v 04-08-2007
 * Revised by efege, 2007-04-15.
 * Revised by Rafaga2k 10-01-2007 (mm/dd/yyyy)
 * Revised by FeDe 12-13-2007 (mm/dd/yyyy)
 * Synchronized with 2.2 version of ext-lang-en.js (provided by Condor 8 aug 2008)
 *     by halkon_polako 14-aug-2008
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Ene: 0,
            Feb: 1,
            Mar: 2,
            Abr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Ago: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dic: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

        Ext.Date.getShortDayName = function(day) {
            if (day == 3) return "Mié";
            if (day == 6) return "Sáb";
            return Ext.Date.dayNames[day].substring(0, 3);
        };

        Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            currencySign: '\u20ac',
            // Spanish Euro
            dateFormat: 'd/m/Y'
        });
    }
});

Ext.define("Ext.locale.es.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.es.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} fila(s) seleccionada(s)"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.es.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Cargando..."
});

Ext.define("Ext.locale.es.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Hoy",
    minText: "Esta fecha es anterior a la fecha mínima",
    maxText: "Esta fecha es posterior a la fecha máxima",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Mes Siguiente (Control+Right)',
    prevText: 'Mes Anterior (Control+Left)',
    monthYearText: 'Seleccione un mes (Control+Up/Down para desplazar el año)',
    todayTip: "{0} (Barra espaciadora)",
    format: "d/m/Y",
    startDay: 1
});

Ext.define("Ext.locale.es.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;Aceptar&#160;",
    cancelText: "Cancelar"
});

Ext.define("Ext.locale.es.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Página",
    afterPageText: "de {0}",
    firstText: "Primera página",
    prevText: "Página anterior",
    nextText: "Página siguiente",
    lastText: "Última página",
    refreshText: "Actualizar",
    displayMsg: "Mostrando {0} - {1} de {2}",
    emptyMsg: 'Sin datos para mostrar'
});

Ext.define("Ext.locale.es.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "El valor en este campo es inválido"
});

Ext.define("Ext.locale.es.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "El tamaño mínimo para este campo es de {0}",
    maxLengthText: "El tamaño máximo para este campo es de {0}",
    blankText: "Este campo es obligatorio",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.es.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "El valor mínimo para este campo es de {0}",
    maxText: "El valor máximo para este campo es de {0}",
    nanText: "{0} no es un número válido"
});

Ext.define("Ext.locale.es.form.field.File", { 
    override: "Ext.form.field.File", 
    buttonText: "Examinar..." 
});

Ext.define("Ext.locale.es.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Deshabilitado",
    disabledDatesText: "Deshabilitado",
    minText: "La fecha para este campo debe ser posterior a {0}",
    maxText: "La fecha para este campo debe ser anterior a {0}",
    invalidText: "{0} no es una fecha válida - debe tener el formato {1}",
    format: "d/m/Y",
    altFormats: "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.es.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Cargando..."
    });
});

Ext.define("Ext.locale.es.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Este campo debe ser una dirección de correo electrónico con el formato "usuario@dominio.com"',
    urlText: 'Este campo debe ser una URL con el formato "http:/' + '/www.dominio.com"',
    alphaText: 'Este campo sólo debe contener letras y _',
    alphanumText: 'Este campo sólo debe contener letras, números y _'
});

Ext.define("Ext.locale.es.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: "Por favor proporcione la URL para el enlace:"
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Negritas (Ctrl+B)',
                text: 'Transforma el texto seleccionado en Negritas.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Itálica (Ctrl+I)',
                text: 'Transforma el texto seleccionado en Itálicas.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Subrayado (Ctrl+U)',
                text: 'Subraya el texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Aumentar la fuente',
                text: 'Aumenta el tamaño de la fuente',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Reducir la fuente',
                text: 'Reduce el tamaño de la fuente.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Color de fondo',
                text: 'Modifica el color de fondo del texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Color de la fuente',
                text: 'Modifica el color del texto seleccionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Alinear a la izquierda',
                text: 'Alinea el texto a la izquierda.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centrar',
                text: 'Centrar el texto.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Alinear a la derecha',
                text: 'Alinea el texto a la derecha.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Lista de viñetas',
                text: 'Inicia una lista con viñetas.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Lista numerada',
                text: 'Inicia una lista numerada.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Enlace',
                text: 'Inserta un enlace de hipertexto.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Código Fuente',
                text: 'Pasar al modo de edición de código fuente.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.es.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Ordenar en forma ascendente",
    sortDescText: "Ordenar en forma descendente",
    columnsText: "Columnas"
});

Ext.define("Ext.locale.es.grid.GroupingFeature", {
    override: "Ext.grid.GroupingFeature",
    emptyGroupText: '(Ninguno)',
    groupByText: 'Agrupar por este campo',
    showGroupsText: 'Mostrar en grupos'
});

Ext.define("Ext.locale.es.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nombre",
    valueText: "Valor",
    dateFormat: "j/m/Y"
});

Ext.define("Ext.locale.es.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "La hora en este campo debe ser igual o posterior a {0}",
    maxText: "La hora en este campo debe ser igual o anterior a {0}",
    invalidText: "{0} no es una hora válida",
    format: "g:i A",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});

Ext.define("Ext.locale.es.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "Debe seleccionar al menos un étem de este grupo"
});

Ext.define("Ext.locale.es.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "Debe seleccionar un étem de este grupo"
});

Ext.define("Ext.locale.es.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "Aceptar",
        cancel: "Cancelar",
        yes: "Sí",
        no: "No"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.es.Component", {	
    override: "Ext.Component"
});

Ext.define("Ext.locale.es.ux.grid.FiltersFeature", {
    override: "Ext.ux.grid.FiltersFeature",
    menuFilterText: "Filtros"
});

Ext.define("Ext.locale.es.ux.grid.filter.StringFilter", {
    override: "Ext.ux.grid.filter.StringFilter",
    emptyText: "Enter Filter Text..."
});

Ext.define("Ext.locale.es.grid.RowEditor", {
    override: "Ext.grid.RowEditor",
    cancelBtnText: "Cancelar",
    saveBtnText: "Actualizar",
});

Ext.define("Ext.locale.es.ux.grid.filter.DateFilter", {
    override: "Ext.ux.grid.filter.DateFilter",
	beforeText: 'Antes del',
	afterText: 'Despu&eacute;s del ',
	onText: 'El',
});

Ext.define("Ext.locale.es.ux.grid.filter.BooleanFilter", {
    override: "Ext.ux.grid.filter.BooleanFilter",
	yesText: 'S&iacute;',
	noText: 'No',
});

Ext.define("Ext.locale.es.form.field.Number", {
    override: "Ext.form.field.Number",
	negativeText: 'El valor no puede ser negativo'
});

Ext.define("Ext.locale.es.grid.column.Boolean", {
    override: "Ext.grid.column.Boolean",
	trueText: 'Si',
	falseText: 'No', 
});