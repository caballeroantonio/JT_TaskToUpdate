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

/*

DROP TABLE IF EXISTS `jt_vlcp24s`;
DROP VIEW IF EXISTS `jt_vlcp24s`;
CREATE OR REPLACE VIEW jt_vlcp24s AS

SELECT l.id,l.id_organo, l.anoj, l.ordering, l.id_expediente 
,l.fh_recepcion,l.field3,l.field4,l.field10,l.field11,l.field12,l.field13,l.field14,l.field15,l.field16,l.field17,l.field18,l.organo1,l.field8,
 CONCAT_WS(' ',l.field9_paterno, l.field9_materno, l.field9_nombre) AS field9,
 l.field9_paterno, l.field9_materno, l.field9_nombre, l.field9_isMoral 
,l.created
FROM jt_lcp24s l;
 */

class lcp24App extends Tsjdf_libros2HelpersBook2ExtJSApp{
    
    const ART_66_FRAC_1 = 'Desocupación del domicilio';
    const ART_66_FRAC_2 = 'Alejamiento';
    const ART_66_FRAC_3 = 'Entrega de objetos y documentos';
    const ART_66_FRAC_4 = 'No comunicación';
    const ART_66_FRAC_5 = 'Alejamiento de entorno social';
    const ART_77_FRAC_1 = 'Suspención de visitas';
    const ART_77_FRAC_2 = 'Inventario de bienes';
    const ART_77_FRAC_3 = 'De enajenación de bienes';
    const ART_77_FRAC_4 = 'Obligación alimentaria';
    

    /**
     * campos agrupados por medidas cautelares
     */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        $art66 = array(
            'xtype' => 'fieldset',
            'title' => 'MEDIDAS SOLICITAS (Art. 66)',
            'defaultType' => 'checkbox',
            'items' => array(),
        );

        
        $art71 = array(
            'xtype' => 'fieldset',
            'title' => 'MEDIDAS SOLICITAS (Art. 71)',
            'defaultType' => 'checkbox',
            'items' => array(),
        );
       
        foreach ($fields as $key => $field) {
            $obj = new stdClass();
            
            if($key && in_array($key, ['field10','field11','field12','field13','field14'])){
                $art66['items'][] = $obj;
            }else if($key && in_array($key, ['field15','field16','field17','field18'])){
                $art71['items'][] = $obj;
            }else{
                continue;
            }
            $obj->name = $field['name'];
            $obj->fieldLabel = $field['fieldLabel'];
            unset($fields[$key]);
            
            switch ($key){
                case false:break;//needed
                default: break;
                case 'field10':
                    $obj->fieldLabel .= ' - ' . $this::ART_66_FRAC_1;
                break;
                case 'field11':
                    $obj->fieldLabel .= ' - ' . $this::ART_66_FRAC_2;
                break;
                case 'field12':
                    $obj->fieldLabel .= ' - ' . $this::ART_66_FRAC_3;
                break;
                case 'field13':
                    $obj->fieldLabel .= ' - ' . $this::ART_66_FRAC_4;
                break;
                case 'field14':
                    $obj->fieldLabel .= ' - ' . $this::ART_66_FRAC_5;
                break;
                case 'field15':
                    $obj->fieldLabel .= ' - ' . $this::ART_77_FRAC_1;
                break;
                case 'field16':
                    $obj->fieldLabel .= ' - ' . $this::ART_77_FRAC_2;
                break;
                case 'field17':
                    $obj->fieldLabel .= ' - ' . $this::ART_77_FRAC_3;
                break;
                case 'field18':
                    $obj->fieldLabel .= ' - ' . $this::ART_77_FRAC_4;
                break;
            }
        }
        $fields['field10'] = $art66;
        $fields['field15'] = $art71;
        return $fields;
    }
    
    /**
     * Solicitan checkboxes para los campos field10 al field18.
     */
    function getModelFields() {
        $fields = parent::getModelFields();
        foreach ($fields as $key => &$field) {
            switch ($key){
                case false:break;//needed
                case 'field10':
                case 'field11':
                case 'field12':
                case 'field13':
                case 'field14':
                case 'field15':
                case 'field16':
                case 'field17':
                case 'field18':
                    $field['type'] = 'boolean';
                    unset($field['useNull']);
                break;
            }
        }
        
        $fields['created'] = array(
            'name' => 'created',
            'type' => 'date', 
            'dateFormat' => 'Y-m-d H:i:s',
            'persist' => 1,
        );
        
        return $fields;
    }
    
    function getViewColumns() {
        $columns = parent::getViewColumns();
        $renderer = $this->t349h->insertAs_Is('function(value, metaData, record, rowIndex, colIndex, store, view) {return value?"Si":"No"}');
        
        $columns['ordering']['xtype'] = 'templatecolumn';
        $columns['ordering']['hidden'] = false;
        $columns['ordering']['tpl'] = $this->t349h->insertAs_Is('new Ext.XTemplate("LAMVLV/{ordering}/{created:this.formatDate}",
									{
										formatDate: function(value){
											return Ext.Date.format(value, "y");
										},
									})');
        
        
        foreach ($columns as $key => $column) {
            $obj = new stdClass();
            
            if($key && in_array($key, ['field10','field11','field12','field13','field14','field15','field16','field17','field18'])){
                
                $obj->dataIndex = $columns[$key]['dataIndex'];
                $obj->tooltip = $columns[$key]['tooltip'];
                $obj->renderer = $renderer;
                $obj->width = '50';
                
                switch ($key){
                    case false:break;//needed
                    default: break;
                    case 'field10':
                        $obj->text = 'A.66 f.1';
                    break;
                    case 'field11':
                        $obj->text = 'A.66 f.2';
                    break;
                    case 'field12':
                        $obj->text = 'A.66 f.3';
                    break;
                    case 'field13':
                        $obj->text = 'A.66 f.4';
                    break;
                    case 'field14':
                        $obj->text = 'A.66 f.5';
                    break;
                    case 'field15':
                        $obj->text = 'A.77 f.1';
                    break;
                    case 'field16':
                        $obj->text = 'A.77 f.2';
                    break;
                    case 'field17':
                        $obj->text = 'A.77 f.3';
                    break;
                    case 'field18':
                        $obj->text = 'A.77 f.4';
                    break;
                }
                
                $columns[$key] = $obj;            
            }
                
        }
        
        return $columns;
    }
    
    function getViewRowExpanderBodyTpl(){
        $rowexpander = parent::getViewRowExpanderBodyTpl();
        $rowexpander .= '
<p>
	<ul>
			<li><strong>Medidas de protección otorgadas por el Juez penal (Artículo 66):</strong></li>
		<tpl if=\"field10\">
			<li><strong>I.</strong> La desocupación por el agresor, del domicilio conyugal o donde habite la víctima, independientemente de la acreditación de propiedad o posesión del inmueble, aún en los casos de arrendamiento del mismo, y en su caso el reingreso de la víctima una vez que se resguarde su seguridad. Esta orden implica la presunción de la posesión, uso y goce de los bienes que se encuentren en el domicilio; </li>
		</tpl>
		<tpl if=\"field11\">
			<li><strong>II.</strong> La prohibición al agresor de acercarse o ingresar al domicilio, lugar de trabajo, de estudios de la víctima y las víctimas indirectas, o cualquier otro que frecuente la víctima; </li>
		</tpl>
		<tpl if=\"field12\">
			<li><strong>III.</strong> Ordenar la entrega inmediata de objetos de uso personal y documentos de identidad de la víctima y, en su caso, de las víctimas indirectas; </li>
		</tpl>
		<tpl if=\"field13\">
			<li><strong>IV.</strong> La prohibición al agresor de comunicarse por cualquier medio o por interpósita persona, con la víctima y, en su caso, las víctimas indirectas; </li>
		</tpl>
		<tpl if=\"field14\">
			<li><strong>V.</strong> Prohibición de intimidar o molestar en su entorno social a la víctima, víctimas indirectas o testigos de los hechos. Esta orden de protección podrá incluir que el probable agresor se acerque o comunique por cualquier medio o a través de interpósita persona, con los parientes de la víctima, consanguíneos en línea recta ascendente o descendente sin limitación de grado y colateral hasta el cuarto grado, o civil. </li>
		</tpl>
			<li><strong>Medidas de protección otorgadas por el Juez civil o familiar (Artículo 71):</strong></li>
		<tpl if=\"field15\">
			<li><strong>I.</strong> Suspensión temporal al agresor del régimen de visitas y convivencia con sus descendientes;</li>
		</tpl>
		<tpl if=\"field16\">
			<li><strong>II.</strong> Elaboración del inventario de los bienes de su propiedad o que formen parte de su patrimonio, incluyendo los implementos de trabajo de la víctima; </li>
		</tpl>
		<tpl if=\"field17\">
			<li><strong>III.</strong> Prohibición al agresor de enajenar o hipotecar bienes de la sociedad conyugal o las que se encuentren en el domicilio común en caso de concubinato o sociedad de convivencia; </li>
		</tpl>
		<tpl if=\"field18\">
			<li><strong>IV.</strong> Obligación alimentaría provisional e inmediata. </li>
		</tpl>
	</ul>
</p>
';
        return $rowexpander;
    }
}

$bookApp = new lcp24App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r($bookApp->getModelFields());
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