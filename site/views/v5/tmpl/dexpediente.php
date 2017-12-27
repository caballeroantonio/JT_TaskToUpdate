<?php 
/**
* @package TSJDF
* @author caballeroantonio
* @website Sistemas de Lectura y Facturación Inmediata
* @email caballeroantonio@hotmail.com
* @copyright GNU General Public License version 3, or later
* @license GNU General Public License version 3, or later
**/

// no direct access
defined('_JEXEC') or die('Restricted access');

$libros = $_SESSION['libros'];

$jinput = JFactory::getApplication()->input;
$id_expediente = $jinput->getInt('id_expediente');

    //datos del expediente
    $book = JModelLegacy::getInstance('Book','Tsjdf_libros2Model', (object) array('clave'=>'expediente', 'version'=> '0', 'id_expediente' => $id_expediente) );
    $book_query = $book->getQuery();
    $db = JFactory::getDbo();
    $db->setQuery($book_query);

    
    $exp_records = $db->loadAssocList();
    $forms[] = $form = new stdClass();
    $form->items[] = $fieldset = new stdClass();
    $fieldset->title = 'Datos generales';
    $fieldset->items = getFieldsExpediente($exp_records);

//cada libro
foreach ($libros as $key => $libro){ 
    $forms[] = $form = new stdClass();
    $form->title = $libro->l__nombre;
    
    $book = JModelLegacy::getInstance('Book','Tsjdf_libros2Model', (object) array('clave'=>$libro->l__clave, 'version'=> '4') );
    $book_query = $book->getQuery();
    $book_query->where("l.id_expediente = '{$id_expediente}'")
        ->group('l.id');
    $db->setQuery($book_query);
    $book_records = $db->loadAssocList();
    
    if($book_records){
        foreach ($book_records as $book_record) {
            $form->title = $libro->l__nombre;
            $form->items[] = $fieldset = new stdClass();
            $fieldset->title = 'CONSECUTIVO '. $book_record['CONSECUTIVO'];

            $fieldset->items = getFields($book_record, true);
        }

    }else{
        $form->html = '<p>No hay datos asociados a este expediente</p>';
    }
    
}

function getFieldsExpediente($exp_records){
    $items = [];
    foreach ($exp_records as $key => $value) {
        if($key > 0){
            unset($value['Expediente']);
            unset($value['Tipo de juicio']);
        }
        $fields = getFields($value);
        foreach ($fields as $field) {
            $items[] = $field;
        }
//        print_r($fields);
    }
//    die;
//    print_r($items);die;
    return $items;
}

function getFields($book_record, $hidd_some_fields = false){
    $items = [];
    foreach ($book_record as $fieldLabel => $fieldValue) {
        $field = new stdClass();
        $field->fieldLabel = JText::_($fieldLabel);
        $field->value = $fieldValue;
        if($hidd_some_fields)
        switch ($fieldLabel) {
            case 'id':
                $field->hidden = true;
                break;
            case 'CONSECUTIVO':
            case 'ÓRGANO':
            case 'Expediente':
            case 'Tipo de juicio':
            case 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT':
            case 'Tipo de persona':
            case 'Nombre':
            case 'CURP':
            case 'RFC':
            case 'Dirección':
                continue 2;
            default:
                break;
        }
        $items[] = $field;
    }
    return $items;
}

//echo json_encode($forms, JSON_PRETTY_PRINT);
//print_r($book_record);
//exit;
?> 
<style>
.x-item-disabled .x-form-item-label, .x-item-disabled .x-form-field, .x-item-disabled .x-form-display-field, .x-item-disabled .x-form-cb-label, .x-item-disabled .x-form-trigger{
    opacity: 1;
}/*
 defaultType: 'textfield',
.x-form-text{
    border-style: hidden;
    background: none;
}*/
</style>
<script language="javascript">
	Ext.application({			
		requires: [
		],
 
		stores: [

		],				
		name: 'tsjdf',
		appFolder: 'resources_<?= $this->cmp_params->get('assetVersion') ?>/tsjdf_libros/app',
		launch: function(){
                    myMask = new Ext.LoadMask(document.body,{msg:"Cargando recursos..."});
                    myMask.show();
                    
                    Ext.create('Ext.panel.Panel', {
                        title: '<?= $libros[key($libros)]->l__nombre ?>',
                        width: '100%',
                        renderTo: 'extjs-content',
                        
                        defaults: {
                            xtype: 'panel',
                            bodyPadding: 5,
                            layout: 'anchor',

                            defaults: {
                                collapsible: true,
                                defaultType: 'displayfield',
                                defaults: {
                                    anchor: '100%',
                                    disabled: true,
                                    readOnly: true,
                                },
                            },                    
                            defaultType:'form',
                        },
                        items: <?= json_encode($forms) ?>
                    });
                    
                    this.onStoresReady ();
		},
		onStoresReady: function(){
                    myMask.hide();
                    myMask.msg = 'Espere un momento...';
					window.dispatchEvent(new Event('resize'));
		}
	});
</script>
