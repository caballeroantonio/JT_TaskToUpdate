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


require_once ( JPATH_COMPONENT . '/helpers/Book2ExtJSApp.php' );
class ljjadg01App extends Tsjdf_libros2HelpersBook2ExtJSApp{
    
    function getViewInitialConditions() {
        $obj = parent::getViewInitialConditions();
        $obj->field2 = $this->t349h->insertAs_Is('new Date()');
        return $obj;
    }
	
/**
formItems=[
	sfield31	AUTORIDAD REMITENTE
	sfield29	NOMBRES DEL ADOLESCENTE
	sfield9	EDAD
	sfield10	CONDUCTA
	sfield11	COMUNIDAD
	sfield12	PLIEGO DE REMISION
	funcion1[items]=[
		sfield28	TIPO DE PETICIÓN
		sfield13	FECHA EN QUE SE RESUELVE LA PETICION DEL MP
		sfield14	SENTIDO
		sfield15	FECHA Y HORA DE PUESTA A DISPOSICION
	]
	funcion2[items]=[
		sfield21	CALIFICACION DE LA DETENCION
	]
	sfield16	DECLARACION INICIAL
	sfield17	RESOLUCION INICIAL(descontinuado)
	sfield30	RESOLUCION INICIAL
	sfield18	FUNCIÓN
	sfield19	SENTENCIA
	sfield20	OBSERVACIONES PARTICULARES
	funcion3[items]=[
		sfield22	MECANISMOS ALTERNATIVOS 
		sfield23	SUSPENSIÓN DE PROCESO A PRUEBA
		sfield24	JUICIO ABREVIADO
		sfield25	FECHA DE AUDIENCIA INTERMEDIA
		sfield26	AUTO DE APERTURA
		sfield27	OBSERVACIONES
	]
]
 */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        
        $fields['field4']['id'] = 'field4';
        $fields['field6']['id'] = 'field6';
        
        $fields['field6']['onSetActiveRecord'] = $this->t349h->insertAs_Is('function(record){
                    this.validate1(record.data.sfield12);
                    this.validate2(record.data.sfield18);
            },
            validate1: function(newValue){
                    var recordForm = this.recordForm, fieldset,i;
                    //condiciones iniciales
                    for(i=1;i<3;i++){
                            fieldset = recordForm.getComponent("funcion" + i);
                            fieldset.setDisabled(true);
                            fieldset.setVisible(false);
                    }
                    //sfield12	PLIEGO DE REMISION
                    if(newValue == 5){//SIN DETENIDO
                            fieldset = recordForm.getComponent("funcion1");
                            fieldset.setDisabled(false);
                            fieldset.setVisible(true);
                    }else if(newValue == 6){//CON DETENIDO
                            fieldset = recordForm.getComponent("funcion2");
                            fieldset.setDisabled(false);
                            fieldset.setVisible(true);
                    }
            },
            validate2: function(newValue){
                    //si (sfield18) FUNCIÓN == control se activa el fieldset funcion 3
                    fieldset = this.recordForm.getComponent("funcion3");
                    fieldset.setDisabled(!(newValue == 11));
                    fieldset.setVisible(!fieldset.isDisabled());
            }');
        $fields['field6']['formItems']['sfield12']['listeners'] = $this->t349h->insertAs_Is('{
                change: function( component, newValue, oldValue, eOpts ){
                        Ext.getCmp("field6").validate1(newValue);
                },
            }');
        $fields['field6']['formItems']['sfield18']['listeners'] = $this->t349h->insertAs_Is('{
                change: function( component, newValue, oldValue, eOpts ){
                        Ext.getCmp("field6").validate2(newValue);
                },
            }');
        
        $funcion1 = array(
            'xtype'=>'fieldset',
            'title'=>'S/D',
            'itemId'=>'funcion1',
            'items'=>array(
                $fields['field6']['formItems']['sfield28'],
                $fields['field6']['formItems']['sfield13'],
                $fields['field6']['formItems']['sfield14'],
                $fields['field6']['formItems']['sfield15'],
            ),
        );
        
        //si inserto sobre los unset, se van al final; debo sobreescribirlos para no desacomodarlos.
        $fields['field6']['formItems']['sfield28'] = $funcion1;
//        unset($fields['field6']['formItems']['sfield28']);
//        unset($fields['field6']['formItems']['sfield13']);
        unset($fields['field6']['formItems']['sfield14']);
        unset($fields['field6']['formItems']['sfield15']);
        
        $funcion2 = array(
            'xtype'=>'fieldset',
            'title'=>'C/D',
            'itemId'=>'funcion2',
            'items'=>array(
                $fields['field6']['formItems']['sfield21'],
            ),
        );
        $fields['field6']['formItems']['sfield13'] = $funcion2;
        unset($fields['field6']['formItems']['sfield21']);
        
        //funcion3[sfield22, sfield23, sfield24, sfield25, sfield26, sfield27]
        $funcion3 = array(
            'xtype'=>'fieldset',
            'title'=>'CONTROL',
            'itemId'=>'funcion3',
            'items'=>array(
                $fields['field6']['formItems']['sfield22'],
                $fields['field6']['formItems']['sfield23'],
                $fields['field6']['formItems']['sfield24'],
                $fields['field6']['formItems']['sfield25'],
                $fields['field6']['formItems']['sfield26'],
                $fields['field6']['formItems']['sfield27'],
            ),
        );
        unset($fields['field6']['formItems']['sfield22']);
        unset($fields['field6']['formItems']['sfield23']);
        unset($fields['field6']['formItems']['sfield24']);
        unset($fields['field6']['formItems']['sfield25']);
        unset($fields['field6']['formItems']['sfield26']);
        unset($fields['field6']['formItems']['sfield27']);
        $fields['field6']['formItems'][] = $funcion3;

        return $fields;
    }
}

$bookApp = new ljjadg01App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    ($bookApp->getViewFormFields());
//    return;
//}
?> 
<!--ExtJS model-->
<script language="javascript">
	Ext.define('tsjdf.model.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getModelConfiguration()) ?>);
</script>
<!--ExtJS store-->
<script language="javascript">
	Ext.define('tsjdf.store.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getStoreConfiguration()) ?>);
</script>
<!--app-->
<script language="javascript">
	Ext.application(<?= $bookApp->encode($bookApp->getAppConfiguration()) ?>);
</script>