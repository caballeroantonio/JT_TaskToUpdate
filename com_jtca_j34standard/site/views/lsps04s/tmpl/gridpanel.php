<?php
/**
 * @version 		$Id:$
 * @name			TSJ CDMX Libros TxCA
 * @author			caballeroantonio (caballeroantonio.com)
 * @package			com_jtca
 * @subpackage		com_jtca.site
 * @copyright		Copyright (c) 2017 - 2020. All Rights Reserved
 * @license			GNU General Public License version 3 or later; See http://www.gnu.org/copyleft/gpl.html 
 * 
 * The following Component Architect header section must remain in any distribution of this file
 *
 * @CAversion		Id: default.php 604 2016-01-14 13:05:26Z BrianWade $
 * @CAauthor		Component Architect (www.componentarchitect.com)
 * @CApackage		architectcomp
 * @CAsubpackage	architectcomp.site
 * @CAtemplate		joomla_3_4_standard (Release 1.0.1)
 * @CAcopyright		Copyright (c)2013 - 2016  Simply Open Source Ltd. (trading as Component Architect). All Rights Reserved
 * @Joomlacopyright Copyright (c)2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @CAlicense		GNU General Public License version 3 or later; See http://www.gnu.org/copyleft/gpl.html
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 */

defined('_JEXEC') or die;

JHtml::_('behavior.keepalive');

function getFields(){
    $fields = array();
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'Expediente',
        'FIELD_CODE_NAME' => 'id_expediente',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 33,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ID_EXPEDIENTE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL Expediente

                FIELD_NAME_LATEX=Expediente
                FIELD_CODE_NAME_LATEX=id\_expediente
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['id_expediente'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'Órgano',
        'FIELD_CODE_NAME' => 'id_organo',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 18,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ID_ORGANO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL Órgano

                FIELD_NAME_LATEX=\'Organo
                FIELD_CODE_NAME_LATEX=id\_organo
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['id_organo'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'Secretaría',
        'FIELD_CODE_NAME' => 'id_secretaria',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 18,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ID_SECRETARIA
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL Secretaría

                FIELD_NAME_LATEX=Secretar\'i{}a
                FIELD_CODE_NAME_LATEX=id\_secretaria
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['id_secretaria'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'Año j.',
        'FIELD_CODE_NAME' => 'anoj',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 1,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ANOJ
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` YEAR(4) DEFAULT NULL Año j.

                FIELD_NAME_LATEX=A\~no j.
                FIELD_CODE_NAME_LATEX=anoj
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['anoj'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'DESTINATARIO',
        'FIELD_CODE_NAME' => 'field2381',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 1,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2381
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL DESTINATARIO

                FIELD_NAME_LATEX=DESTINATARIO
                FIELD_CODE_NAME_LATEX=field2381
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2381'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DE ENTREGA',
        'FIELD_CODE_NAME' => 'field2382',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2382
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DE ENTREGA

                FIELD_NAME_LATEX=FECHA DE ENTREGA
                FIELD_CODE_NAME_LATEX=field2382
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2382'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE DEL ACTUARIO (isMoral)',
        'FIELD_CODE_NAME' => 'field2383_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2383_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' NOMBRE DEL ACTUARIO (isMoral)

                FIELD_NAME_LATEX=NOMBRE DEL ACTUARIO (isMoral)
                FIELD_CODE_NAME_LATEX=field2383\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2383_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE DEL ACTUARIO (paterno)',
        'FIELD_CODE_NAME' => 'field2383_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2383_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL NOMBRE DEL ACTUARIO (paterno)

                FIELD_NAME_LATEX=NOMBRE DEL ACTUARIO (paterno)
                FIELD_CODE_NAME_LATEX=field2383\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2383_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE DEL ACTUARIO (materno)',
        'FIELD_CODE_NAME' => 'field2383_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2383_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE DEL ACTUARIO (materno)

                FIELD_NAME_LATEX=NOMBRE DEL ACTUARIO (materno)
                FIELD_CODE_NAME_LATEX=field2383\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2383_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE DEL ACTUARIO (nombre)',
        'FIELD_CODE_NAME' => 'field2383_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2383_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE DEL ACTUARIO (nombre)

                FIELD_NAME_LATEX=NOMBRE DEL ACTUARIO (nombre)
                FIELD_CODE_NAME_LATEX=field2383\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2383_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DEL AUTO POR DELIGENCIAR',
        'FIELD_CODE_NAME' => 'field2384',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2384
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DEL AUTO POR DELIGENCIAR

                FIELD_NAME_LATEX=FECHA DEL AUTO POR DELIGENCIAR
                FIELD_CODE_NAME_LATEX=field2384
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2384'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DE DILIGENCIA',
        'FIELD_CODE_NAME' => 'field2385',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2385
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DE DILIGENCIA

                FIELD_NAME_LATEX=FECHA DE DILIGENCIA
                FIELD_CODE_NAME_LATEX=field2385
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2385'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DE DEVOLUCIÓN',
        'FIELD_CODE_NAME' => 'field2386',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2386
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DE DEVOLUCIÓN

                FIELD_NAME_LATEX=FECHA DE DEVOLUCI\'ON
                FIELD_CODE_NAME_LATEX=field2386
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2386'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (isMoral)',
        'FIELD_CODE_NAME' => 'field2387_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2387_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (isMoral)

                FIELD_NAME_LATEX=NOMBRE  DE QUIEN RECIBE LA DEVOLUCI\'ON (isMoral)
                FIELD_CODE_NAME_LATEX=field2387\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2387_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (paterno)',
        'FIELD_CODE_NAME' => 'field2387_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2387_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (paterno)

                FIELD_NAME_LATEX=NOMBRE  DE QUIEN RECIBE LA DEVOLUCI\'ON (paterno)
                FIELD_CODE_NAME_LATEX=field2387\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2387_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (materno)',
        'FIELD_CODE_NAME' => 'field2387_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2387_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (materno)

                FIELD_NAME_LATEX=NOMBRE  DE QUIEN RECIBE LA DEVOLUCI\'ON (materno)
                FIELD_CODE_NAME_LATEX=field2387\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2387_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (nombre)',
        'FIELD_CODE_NAME' => 'field2387_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2387_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE  DE QUIEN RECIBE LA DEVOLUCIÓN (nombre)

                FIELD_NAME_LATEX=NOMBRE  DE QUIEN RECIBE LA DEVOLUCI\'ON (nombre)
                FIELD_CODE_NAME_LATEX=field2387\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2387_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'OBSERVACIONES',
        'FIELD_CODE_NAME' => 'field2388',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 4,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD2388
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TEXT DEFAULT NULL OBSERVACIONES

                FIELD_NAME_LATEX=OBSERVACIONES
                FIELD_CODE_NAME_LATEX=field2388
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field2388'] = $field;
    return $fields;
}

function getColumns(){
    $fields = getFields();
    $columns = [];
    foreach ($fields as $key => $field) {
        switch ($field['FIELDTYPE_ID']) {
        default:
            $columns[] = $field;
            break;
        case 35:
        case 34:
            break;
        }
    }
    return $columns;
}
?>
<?php /*?>
<?php
if ($this->params->get('save_history') AND $this->params->get('lsps04_save_history'))
{
//	JHtml::_('behavior.modal', 'a.modal_jform_contenthistory');//creo que se carga con el botón versiones
	
	//hacer parametrizable data_id para que funcione versiones
	
	//$model	= JModelLegacy::getInstance('[%CompObject%]Form','[%ArchitectComp%]Model', array('ignore_request' => FALSE));
	$model	= JModelLegacy::getInstance('Lsps04Form','JtCaModel', array('ignore_request' => FALSE));
	$data = array();
	$data['id'] = 1;
	$this->form	= $model->getForm($data, false);
	//D:\www\htdocs\JPruebas\libraries\cms\form\field\contenthistory.php
	$itemId = $this->form->getValue('id');
	
	echo $this->form->getInput('contenthistory');
	
				echo JHtml::_(
					'bootstrap.renderModal', //atajo
					'collapseModal', //selector jQuery('#collapseModal')
					array(
						'title'  => 'titulo',
						'height' => 450,
						'url' => new JUri('index.php?option=com_jtca&view=lsps04form&layout=edit&layout=edit&tmpl=component&id=1&function=on_collapseModal')
					)
				);
}


?>
<ul>
	<li>@ToDo grid column versiones, necesito poder pasarle itemId al FORM o generar manualmente el código equivalente = {$itemId} y hace botón oculto</li>
    <li>@bug codificación a español, acentos y ñ en CA</li>
    <li>Personalidades relacionadas en el asunto</li>
    <li>Añadir registro - Ejemplo modal código FRAMEWORK
    <li>Se le da a los usuarios el botón borrar, PUBLISHED = FALSE quitando esa actividad al CAT</li>
</ul>

<?php */?>
	<script>
		/**
		* resuelve problemas de compatibilidad entre Mootools vs ExtJs
		*/
		MOOTOOLS_DOCUMENT_ID_VALUE = document.id;
    </script>
    <link rel="stylesheet" type="text/css" href="http://localhost/Sencha/ExtJS/ext-6.2.0/build/classic/theme-classic/resources/theme-classic-all.css"/>
    <script type="text/javascript" src="http://localhost/Sencha/ExtJS/ext-6.2.0/build/ext-all.js"></script>

<script language="javascript">
Ext.onReady(function(){
Ext.documentId = MOOTOOLS_DOCUMENT_ID_VALUE;
document.id = Ext.documentId;

	Ext.create('Ext.data.Store', {
		storeId:'simpsonsStore',
		fields:['name', 'address', 'personalidad', 'icon'],
		data:{'items':[
			{ 'name': 'Lisa',  "address":"Calle Palma",  "personalidad":"Actor", icon: 'user_green'  },
			{ 'name': 'Bart',  "address":"Calle Pino",  "personalidad":"Actor", icon: 'user_green'  },
			{ 'name': 'Homer', "address":"Calle Arce",  "personalidad":"Demandado", icon: 'user_red'  },
			{ 'name': 'Marge', "address":"Calle Sauce", "personalidad":"Victima", icon: 'user_orange'  },
		]},
		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				root: 'items'
			}
		}
	});
        
        var pathImg = 'http://localhost/resources/images/fatcow-hosting-icons-2000/16x16/';
	
	Ext.create('Ext.grid.Panel', {
		title: 'LIBRO DE ACTUARIO',
		store: Ext.data.StoreManager.lookup('simpsonsStore'),
		columns: [
                    
			//columna para mostrar versiones
			{
				xtype:'actioncolumn',
				maxWidth: 25,
				hideable : false,
				menuDisabled: true,
				resizable: false,
				header: '<img src="'+pathImg+'box_front.png" alt="<?= JText::_('JTOOLBAR_VERSIONS') ?>" />',
				iconCls: 'icon-archive',
				width:50,
				tooltip: '<?= JText::_('JTOOLBAR_VERSIONS') ?>',
					handler: function(grid, rowIndex, colIndex) {
						jQuery('#versionsModal').modal('show')
					}
	
			},          
                    
			//columna con personalidades representadas por iconos
			{ 
				xtype: 'gridcolumn',
				width: 30,
				hidden: true,//hideable : false,
				menuDisabled: true,
				resizable: false,
				dataIndex: 'icon',
				header: '<img src="'+pathImg+'user.png" alt="Personalidad" />',
				renderer: function(value, metaData, record, rowIndex, colIndex, store, view ){
					return '<img src="'+pathImg+value+'.png"/>';
				},
			},
			//columnas con personalidades
			{ hidden: true,text: 'Personalidad',  dataIndex: 'personalidad' },
			{ hidden: true,text: 'Nombre', dataIndex: 'name', flex: 1 },
			{ hidden: true,text: 'Dirección', dataIndex: 'address' },
			
			
<?php
    $columns = getColumns();
    foreach ($columns as $key => $column) {
        echo "{text: '{$column['FIELD_NAME']}', dataIndex: '{$column['FIELD_CODE_NAME']}',},";
    }
?>
		],
                tbar: [
                  { 
                      xtype: 'button', 
                      text: 'Añadir nuevo registro',
                      icon: 'http://localhost/gpcb/resources_20170226/tsjdf_libros/images/add.png',
					  handler: function(grid, rowIndex, colIndex) {
						  jQuery('#collapseModal').modal('show');
					  }
                  }
                ],
"height": 300,
width: '100%',
		renderTo: 'extjs-content',
	});
});
</script>
<div id="extjs-content"></div>