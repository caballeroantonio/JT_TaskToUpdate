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
        'FIELD_NAME' => 'Año j.',
        'FIELD_CODE_NAME' => 'anoj',
        'FIELD_DESCRIPTION' => '<p>Año judicial</p>',//<p>Año judicial</p>
        'FIELDTYPE_ID' => 1,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ANOJ
                FIELD_INTRO=<p>Año judicial</p>
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` YEAR(4) DEFAULT NULL Año j.

                FIELD_NAME_LATEX=A\~no j.
                FIELD_CODE_NAME_LATEX=anoj
                FIELD_DBCOMMENT_LATEX=A\~no judicial


    */
    $fields['anoj'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'Expediente',
        'FIELD_CODE_NAME' => 'id_expediente',
        'FIELD_DESCRIPTION' => '<p>@ToDo add CONSTRAINT id_expediente -&gt; jt_expediente</p>',//<p>@ToDo add CONSTRAINT id_expediente -&gt; jt_expediente</p>
        'FIELDTYPE_ID' => 33,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=ID_EXPEDIENTE
                FIELD_INTRO=<p>@ToDo add CONSTRAINT id_expediente -&gt; jt_expediente</p>
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL Expediente

                FIELD_NAME_LATEX=Expediente
                FIELD_CODE_NAME_LATEX=id\_expediente
                FIELD_DBCOMMENT_LATEX=@ToDo add CONSTRAINT id\_expediente -\&gt; jt\_expediente


    */
    $fields['id_expediente'] = $field;
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
        'FIELD_NAME' => 'NÚMERO DE FOJAS',
        'FIELD_CODE_NAME' => 'field5',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 22,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD5
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL NÚMERO DE FOJAS

                FIELD_NAME_LATEX=N\'UMERO DE FOJAS
                FIELD_CODE_NAME_LATEX=field5
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field5'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'No. Y DESCRIPCIÓN DE DOCUMENTOS',
        'FIELD_CODE_NAME' => 'field6',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 4,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD6
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TEXT DEFAULT NULL No. Y DESCRIPCIÓN DE DOCUMENTOS

                FIELD_NAME_LATEX=No. Y DESCRIPCI\'ON DE DOCUMENTOS
                FIELD_CODE_NAME_LATEX=field6
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field6'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DEL AUTO DE REMISIÓN',
        'FIELD_CODE_NAME' => 'field7',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD7
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DEL AUTO DE REMISIÓN

                FIELD_NAME_LATEX=FECHA DEL AUTO DE REMISI\'ON
                FIELD_CODE_NAME_LATEX=field7
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field7'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DE RECEPCIÓN EN EL ARCHIVO JUDICIAL',
        'FIELD_CODE_NAME' => 'field9',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD9
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DE RECEPCIÓN EN EL ARCHIVO JUDICIAL

                FIELD_NAME_LATEX=FECHA DE RECEPCI\'ON EN EL ARCHIVO JUDICIAL
                FIELD_CODE_NAME_LATEX=field9
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field9'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'PERSONA QUE RECIBIÓ DEL ARCHIVO (isMoral)',
        'FIELD_CODE_NAME' => 'field10_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD10_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' PERSONA QUE RECIBIÓ DEL ARCHIVO (isMoral)

                FIELD_NAME_LATEX=PERSONA QUE RECIBI\'O DEL ARCHIVO (isMoral)
                FIELD_CODE_NAME_LATEX=field10\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field10_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'PERSONA QUE RECIBIÓ DEL ARCHIVO (paterno)',
        'FIELD_CODE_NAME' => 'field10_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD10_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL PERSONA QUE RECIBIÓ DEL ARCHIVO (paterno)

                FIELD_NAME_LATEX=PERSONA QUE RECIBI\'O DEL ARCHIVO (paterno)
                FIELD_CODE_NAME_LATEX=field10\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field10_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'PERSONA QUE RECIBIÓ DEL ARCHIVO (materno)',
        'FIELD_CODE_NAME' => 'field10_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD10_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL PERSONA QUE RECIBIÓ DEL ARCHIVO (materno)

                FIELD_NAME_LATEX=PERSONA QUE RECIBI\'O DEL ARCHIVO (materno)
                FIELD_CODE_NAME_LATEX=field10\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field10_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'PERSONA QUE RECIBIÓ DEL ARCHIVO (nombre)',
        'FIELD_CODE_NAME' => 'field10_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD10_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL PERSONA QUE RECIBIÓ DEL ARCHIVO (nombre)

                FIELD_NAME_LATEX=PERSONA QUE RECIBI\'O DEL ARCHIVO (nombre)
                FIELD_CODE_NAME_LATEX=field10\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field10_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FECHA DE DEVOLUCIÓN',
        'FIELD_CODE_NAME' => 'field11',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 5,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD11
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` DATETIME DEFAULT NULL FECHA DE DEVOLUCIÓN

                FIELD_NAME_LATEX=FECHA DE DEVOLUCI\'ON
                FIELD_CODE_NAME_LATEX=field11
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field11'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NÚMERO DE FOLIO DE DEVOLUCIÓN',
        'FIELD_CODE_NAME' => 'field12',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 1,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD12
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NÚMERO DE FOLIO DE DEVOLUCIÓN

                FIELD_NAME_LATEX=N\'UMERO DE FOLIO DE DEVOLUCI\'ON
                FIELD_CODE_NAME_LATEX=field12
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field12'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'RECIBIÓ (isMoral)',
        'FIELD_CODE_NAME' => 'field14_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD14_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' RECIBIÓ (isMoral)

                FIELD_NAME_LATEX=RECIBI\'O (isMoral)
                FIELD_CODE_NAME_LATEX=field14\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field14_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'RECIBIÓ (paterno)',
        'FIELD_CODE_NAME' => 'field14_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD14_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL RECIBIÓ (paterno)

                FIELD_NAME_LATEX=RECIBI\'O (paterno)
                FIELD_CODE_NAME_LATEX=field14\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field14_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'RECIBIÓ (materno)',
        'FIELD_CODE_NAME' => 'field14_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD14_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL RECIBIÓ (materno)

                FIELD_NAME_LATEX=RECIBI\'O (materno)
                FIELD_CODE_NAME_LATEX=field14\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field14_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'RECIBIÓ (nombre)',
        'FIELD_CODE_NAME' => 'field14_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD14_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL RECIBIÓ (nombre)

                FIELD_NAME_LATEX=RECIBI\'O (nombre)
                FIELD_CODE_NAME_LATEX=field14\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field14_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'ENTREGO (isMoral)',
        'FIELD_CODE_NAME' => 'field15_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD15_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' ENTREGO (isMoral)

                FIELD_NAME_LATEX=ENTREGO (isMoral)
                FIELD_CODE_NAME_LATEX=field15\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field15_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'ENTREGO (paterno)',
        'FIELD_CODE_NAME' => 'field15_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD15_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL ENTREGO (paterno)

                FIELD_NAME_LATEX=ENTREGO (paterno)
                FIELD_CODE_NAME_LATEX=field15\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field15_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'ENTREGO (materno)',
        'FIELD_CODE_NAME' => 'field15_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD15_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL ENTREGO (materno)

                FIELD_NAME_LATEX=ENTREGO (materno)
                FIELD_CODE_NAME_LATEX=field15\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field15_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'ENTREGO (nombre)',
        'FIELD_CODE_NAME' => 'field15_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD15_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL ENTREGO (nombre)

                FIELD_NAME_LATEX=ENTREGO (nombre)
                FIELD_CODE_NAME_LATEX=field15\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field15_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FIRMA DE LA PERSONA 1',
        'FIELD_CODE_NAME' => 'field19',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 34,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD19
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL FIRMA DE LA PERSONA 1

                FIELD_NAME_LATEX=FIRMA DE LA PERSONA 1
                FIELD_CODE_NAME_LATEX=field19
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field19'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'HUELLA DE LA PERSONA 1',
        'FIELD_CODE_NAME' => 'field19h',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 39,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD19H
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL HUELLA DE LA PERSONA 1

                FIELD_NAME_LATEX=HUELLA DE LA PERSONA 1
                FIELD_CODE_NAME_LATEX=field19h
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field19h'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE2 (isMoral)',
        'FIELD_CODE_NAME' => 'field20_isMoral',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD20_ISMORAL
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TINYINT(1) NOT NULL DEFAULT '0' NOMBRE2 (isMoral)

                FIELD_NAME_LATEX=NOMBRE2 (isMoral)
                FIELD_CODE_NAME_LATEX=field20\_isMoral
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field20_isMoral'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE2 (paterno)',
        'FIELD_CODE_NAME' => 'field20_paterno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD20_PATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(255) DEFAULT NULL NOMBRE2 (paterno)

                FIELD_NAME_LATEX=NOMBRE2 (paterno)
                FIELD_CODE_NAME_LATEX=field20\_paterno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field20_paterno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE2 (materno)',
        'FIELD_CODE_NAME' => 'field20_materno',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD20_MATERNO
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE2 (materno)

                FIELD_NAME_LATEX=NOMBRE2 (materno)
                FIELD_CODE_NAME_LATEX=field20\_materno
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field20_materno'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'NOMBRE2 (nombre)',
        'FIELD_CODE_NAME' => 'field20_nombre',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 41,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD20_NOMBRE
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` VARCHAR(45) DEFAULT NULL NOMBRE2 (nombre)

                FIELD_NAME_LATEX=NOMBRE2 (nombre)
                FIELD_CODE_NAME_LATEX=field20\_nombre
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field20_nombre'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'FIRMA DE LA PERSONA 2',
        'FIELD_CODE_NAME' => 'field21',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 34,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD21
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL FIRMA DE LA PERSONA 2

                FIELD_NAME_LATEX=FIRMA DE LA PERSONA 2
                FIELD_CODE_NAME_LATEX=field21
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field21'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'HUELLA DE LA PERSONA 2',
        'FIELD_CODE_NAME' => 'field21h',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 39,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD21H
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` INT(10) DEFAULT NULL HUELLA DE LA PERSONA 2

                FIELD_NAME_LATEX=HUELLA DE LA PERSONA 2
                FIELD_CODE_NAME_LATEX=field21h
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field21h'] = $field;
    //{OBJECT_FIELD}
    $field = array(
        'FIELD_NAME' => 'OBSERVACIONES',
        'FIELD_CODE_NAME' => 'field22',
        'FIELD_DESCRIPTION' => '',//
        'FIELDTYPE_ID' => 4,
    );
    /*
                FIELD_OPTIONS_LANGUAGE_VARS=
                FIELD_CODE_NAME_UPPER=FIELD22
                FIELD_INTRO=
                FIELD_DESCRIPTION_INI=

                FIELD_DB=`` TEXT DEFAULT NULL OBSERVACIONES

                FIELD_NAME_LATEX=OBSERVACIONES
                FIELD_CODE_NAME_LATEX=field22
                FIELD_DBCOMMENT_LATEX=


    */
    $fields['field22'] = $field;
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
if ($this->params->get('save_history') AND $this->params->get('ljf18_save_history'))
{
//	JHtml::_('behavior.modal', 'a.modal_jform_contenthistory');//creo que se carga con el botón versiones
	
	//hacer parametrizable data_id para que funcione versiones
	
	//$model	= JModelLegacy::getInstance('[%CompObject%]Form','[%ArchitectComp%]Model', array('ignore_request' => FALSE));
	$model	= JModelLegacy::getInstance('Ljf18Form','JtCaModel', array('ignore_request' => FALSE));
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
						'url' => new JUri('index.php?option=com_jtca&view=ljf18form&layout=edit&layout=edit&tmpl=component&id=1&function=on_collapseModal')
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
		title: 'LIBRO DE REMISIÓN DE DOCUMENTOS AL ARCHIVO',
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