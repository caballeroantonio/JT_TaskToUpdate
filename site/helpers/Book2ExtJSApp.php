<?php

/**
 * @version     4.1
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
defined('_JEXEC') or die;

class Tsjdf_libros2HelpersBook2ExtJSApp{
    
    private $empleado;
    private $libro;
    public $campos;
    /**
     * As_is JSON encoder
     */
    protected $t349h;
    /**
     * component parameters
     */
    private $params;
    
    /**
     * Valor mínimo para la captura del año judicial en la interfaz de los libros
     */
    const EXT_TX_GRID_BOOK_ANOJ_MINVALUE = 2016;
    const ADMINISTRATOR_USERGROUP = 7;
    const READ_ONLY_USERGROUP = 10;
    const VISITADOR_USERGROUP = 11;
	
    private $user_belong_administrator_usrgrp;
    private $user_belong_read_only_usrgrp;
    private $user_belong_visitador_usrgrp;
	
    private $userGroups;
    
    /**
     * @param object $empleado Detalle del empleado
     */
    public function __construct($libro, $empleado) {
        $this->libro = $libro;
        $this->empleado = $empleado;
        $this->params = JComponentHelper::getParams('com_tsjdf_libros2');
        
        $this->userGroups = JFactory::getUser()->getAuthorisedGroups();
        
        $this->user_belong_administrator_usrgrp = in_array($this::ADMINISTRATOR_USERGROUP, $this->userGroups);
        $this-> user_belong_read_only_usrgrp = in_array($this::READ_ONLY_USERGROUP, $this->userGroups);
        $this->user_belong_visitador_usrgrp = in_array($this::VISITADOR_USERGROUP, $this->userGroups);
        
        //codificador JSON_AS_IS
        require_once ( JPATH_COMPONENT . '/helpers/T349.php' );
        $this->t349h = new Tsjdf_libros2HelpersBook2T349();

        //obtener campos
        $db = JFactory::getDbo();
        $db->setQuery("SELECT * FROM jt3_campos WHERE published AND clave = '{$this->libro['clave']}' ORDER BY ordering, id;");        
        $this->campos = $db->loadObjectList();
        foreach($this->campos as $campo){
            $campo->childs = array();
            if($campo->dataType == 'parent'){
                $db->setQuery("SELECT c.dataIndex, c.columnText, c.columnTooltip, c.dataType, c.store, c.displayField, "
                    . "p.alwaysChange OR c.alwaysChange AS alwaysChange FROM jt3_campos c "
                    . "INNER JOIN jt3_campos p ON c.clave = p.store "
                    . "WHERE c.published AND p.id = {$campo->id} ORDER BY c.ordering, c.id;");
                $childs = $db->loadObjectList();
                $campo->childs[$campo->dataIndex] = $childs;
            }
        }
    }
    
    /**
     * Devuelve texto compatible con JSON para que ExtJS dibuje las columnas del GRID
     * @return array Columns
     */
    public function getViewColumns(){
        $columns = array();
        
        //statuscolumn
        $columns[] = array('xtype' => 'statuscolumn');

        //destroycolumn
        if($this->user_belong_administrator_usrgrp){
            $columns[] = array('xtype' => 'destroycolumn');
        }
        
        //destroycolumn
        if($this->user_belong_visitador_usrgrp){
            $columns[] = array('xtype' => 'destroyt397column');
        }
        
        //caratulacolumn & dexpedientecolumn
        if(strpos($this->libro['nombre'],'LIBRO DE GOBIERNO')!== false){
            $columns[] = array(
                'xtype' => 'caratulacolumn', 
                'clave' => $this->libro['clave'],
            );
            $columns[] = array('xtype' => 'dexpedientecolumn');
        }
		
		//versions
        $component='jtca';
        $JTable_file = JPATH_ADMINISTRATOR . "/components/com_{$component}/tables/{$this->libro['clave']}s.php";
		if(file_exists($JTable_file)){
				$columns[] = array(
					'xtype' => 'versionscolumn', 
					'clave' => $this->libro['clave'],
					'tooltip' => JText::_('JTOOLBAR_VERSIONS'),
				);
		}
        
        //autor cuando la distribución es por usuario
        if($this->libro['distribution'] == 3){
            $columns[] = array(
                'xtype' => 'gridcolumn',
                'dataIndex' => 'created_byuser',
                'text' => 'Creado por',
                'tooltip' => 'Nombre del usuario que creó el registro.',
                'hidden' => $this->empleado->id_rol==91?false:true,
            );
        }

        //Año judicial
        $columns[] = array(
            'xtype' => 'gridcolumn',
            'dataIndex' => 'anoj',
            'text' => 'Año j.',
            'tooltip' => 'Año judicial.',
            'hidden' => $this->params->get('anoj')== 0,
        );
        
        //ordering
         $columns['ordering'] = array(
            'xtype' => 'gridcolumn',
            'dataIndex' => 'ordering',
            'text' => $this->libro['id_tipoorgano'] == 3?'Folio':'No.',
            'tooltip' => 'El número siguiente al último registro realizado.',
            'hidden' => true
         );
                    
         //consignaciones penales no utiliza #expediente
         if(in_array($this->libro['id_tipoorgano'], [1,2])){
            //No. de expediente
            $columns['e__name'] = array(
                'xtype' => 'gridcolumn',
                'dataIndex' => 'e__name',
                'tooltip' => $this->libro['id_tipoorgano'] == 2?'Identifica un asunto que se ingresó a Segunda Instancia':'Identifica un asunto ingresado en el Juzgado',
                'text' => $this->t349h->insertAs_Is('Ext.tx.form.field.ExpedientePicker.prototype.fieldLabel'),
            );  

         if($this->libro['id_tipoorgano']== 2 && $this->libro['id_materia'] == 14){
            $columns['e__delito'] = array(
                'xtype' =>'gridcolumn',
                'text' =>'Delito',
                'renderer' => $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.getExpediente().data.delito;
                        }"),
            );
            $columns['e__pena'] = array(
                'xtype' =>'gridcolumn',
                'text' =>'Pena de prisión',
                'renderer' => $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.getExpediente().data.pena;
                        }"),
            );
         }
		 
         if($this->libro['id_tipoorgano']== 2 && $this->libro['id_materia'] == 5){
            $columns['e__delito'] = array(
                'xtype' =>'gridcolumn',
                'text' =>'Delito',
                'renderer' => $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.getExpediente().data.delito;
                        }"),
            );
            $columns['e__pena'] = array(
                'xtype' =>'gridcolumn',
                'text' =>'Pena o medida privativa',
                'renderer' => $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.getExpediente().data.pena;
                        }"),
            );
         }
        
            //Tipo de juicio
            $columns['e__txt_tipojuicio'] = array(
                'xtype' =>'gridcolumn',
                'dataIndex' =>'e__txt_tipojuicio',
                'text' =>'Tipo de juicio'
            );
         } 

        //SECRETARÍA        
        if($this->libro['distribution'] == 2){
            $columns[] = array(
                'xtype' => 'gridcolumn',
                'dataIndex' => 'id_secretaria',
                'text' => JText::_('COM_TSJDF_LIBROS2_SECRETARIA_TO'.$this->libro['id_tipoorgano']),
                'tooltip' => 'La '. JText::_('COM_TSJDF_LIBROS2_SECRETARIA_TO'.$this->libro['id_tipoorgano']) .' a la que corresponde el expediente.',
                'renderer' => $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                            value = Ext.StoreMgr.get('catalogo.secretarias').getById(value);
                            if(value !== null)
                                    return value.get('secretaria');
                    }")
            );
        }
        
        if($this->libro['id_tipoorgano'] == 3){
            $templatecolumn = array(
                'xtype' => 'templatecolumn',
                'text' => 'SITUACIÓN LEGAL',
            );
            switch ($this->libro['clave']) {
                case 'lcp01':
                    $templatecolumn['tpl'] = 'C/D';
                    $columns[] = $templatecolumn;
                break;
                case 'lcp02':
                    $templatecolumn['tpl'] = 'S/D';
                    $columns[] = $templatecolumn;
                break;
                case 'lcp18':
                    $templatecolumn['tpl'] = 'C/D';
                    $columns[] = $templatecolumn;
                break;
                case 'lcp19':
                    $templatecolumn['tpl'] = 'S/D';
                    $columns[] = $templatecolumn;
                break;
                case 'lcp25':
                    $templatecolumn['tpl'] = 'C/D';
                    $columns[] = $templatecolumn;
                break;
                case 'lcp26':
                    $templatecolumn['tpl'] = 'S/D';
                    $columns[] = $templatecolumn;
                break;
            }
        }

        //genera cada campo de la tabla jt3_campos
        $has_flex = false;
        foreach($this->campos as $campo){
            $column = $this->getViewColumn($campo);
            if(!$column)
                continue;
            if(!$has_flex){
                $has_flex = true;
                $column['flex'] = true;
            }
            $columns[$campo->dataIndex] = $column;
        }
        return $columns;
    }
    
    /**
     * encode each column from jt3_campos
     */
    private function getViewColumn($campo){
//        $column = new stdClass();

        $column = array(
            'width' => $this->t349h->insertAs_Is("Ext.util.TextMetrics.measure(fooColumn.getEl(),'{$campo->columnText}').width + 15"),
            'minWidth' => 100,
            'dataIndex' => $campo->dataIndex,
            'text' => $campo->columnText,
            'tooltip' => $campo->columnTooltip?$campo->columnTooltip:$campo->columnText,
        );

        switch($campo->dataType){
            //campos que no se despliegan en columnas
            case 'Fexterna':
            case 'Hexterna':
            case 'multiline':
            case 'parent':
                return null;
            break;
            //campos que no tienen atributos
            case 'int':
            case '':
            case 'VARCHAR255': 
            case 'averiguacion':
            break;
            //campos con atributos
            case 'boolean':
                $column['renderer'] = $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = Ext.StoreMgr.get('catalogo.SiNo').getById(value);
                                if(value !== null)
                                        return value.get('text');
                        }");
            break;
            case 'currency':
                $column['xtype'] = 'numbercolumn';
                //$column['renderer'] = $this->t349h->insertAs_Is('Ext.util.Format.usMoney');
            break;
            case 'date':
                $column['xtype'] = 'datecolumn';
                $column['format'] = 'd-m-Y';
            break;
            case 'datetime':
                $column['xtype'] = 'datetimecolumn';
            break;
            case 'ref':
                $column['renderer'] = $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                                    value = Ext.StoreMgr.get('catalogo.{$campo->store}').getById(value);
                                                                    if(value !== null)
                                                                            return value.get('{$campo->displayField}');
                                                            }");
            break;
            case 'ref2':
                $column['renderer'] = $this->t349h->insertAs_Is("function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                                    value = Ext.StoreMgr.get('catalogo.general{$campo->store}').getById(value);
                                                                    if(value !== null)
                                                                            return value.get('text');
                                                            }");
            break;
            case 'expediente':
                $column['xtype'] = 'expedientecolumn';
            break;
            case 'person':
                $column['xtype'] = 'templatecolumn';
                $column['tpl'] = "{{$campo->dataIndex}_paterno} {{$campo->dataIndex}_materno} {{$campo->dataIndex}_nombre}";
//				$this->t349h->insertAs_Is("[
//                                                                    '{{$campo->dataIndex}_paterno} {{$campo->dataIndex}_materno} {{$campo->dataIndex}_nombre}'
//                                                            ]");
            break;
            case 'NFempleado':
                $column['width'] = $this->t349h->insertAs_Is("Ext.util.TextMetrics.measure(fooColumn.getEl(),'NOMBRE {$campo->columnText}').width + 15");
                $column['dataIndex'] = "{$campo->dataIndex}_name";
                $column['text'] = "NOMBRE {$campo->columnText}";
                $column['tooltip'] = $campo->columnTooltip?$campo->columnTooltip:'NOMBRE '.$campo->columnText;
            break;
            case 'suggest':
                $column['dataIndex'] = "txt_{$campo->dataIndex}";
            break;
            default: die("error column en: {$campo->columnText} por caso no contemplado");
            break;
        }
        
        return $column;
    }
    
    /**
     * @return string Devuelve texto compatible con JSON para que ExtJS dibuje el Row Expander
     */
    public function getViewRowExpanderBodyTpl(){
$rowexpander = <<<EOD
<tpl if="T397_comment">
			<p>
				<b>Observaciones del visitador: </b>{T397_comment:this.insertBreaks}
			</p>
			</tpl>
EOD;
        $rowexpander .= "\r\n";
        $rowexpander .= $this->getViewRowExpanderExpediente_tmpl();
        
        foreach($this->campos as $campo){
            switch($campo->dataType){
		case 'Fexterna':
                    $rowexpander .= "<p>
							<b>FIRMA {$campo->columnText}: </b><br/>
							<img src=\"{{$campo->dataIndex}_file}\" />
						</p>";
		break;
		case 'Hexterna':
                    $rowexpander .= "<p>
							<b>HUELLA {$campo->columnText}: </b><br/>
							<img src=\"{{$campo->dataIndex}h_file}\" width=\"105\" />
						</p>";
		break;
		case 'NFempleado': 
                    $rowexpander .= "<p>
							<b>NOMBRE Y FIRMA {$campo->columnText}: </b>{{$campo->dataIndex}_name}
						</p>
						<p>
							<img src=\"{{$campo->dataIndex}_file}\" />
						</p>";
		break;
		case 'multiline':
                    $rowexpander .= "<p><b>{$campo->columnText}: </b>{{$campo->dataIndex}:this.insertBreaks}</p>";
		break;
            
		case 'parent':
                    if($campo->store === 'persons'){
                        $rowexpander .= "
<table border=\"1\">
  <caption><strong>{$campo->columnText}</strong></caption>
  <tr>
    <th>#</th>
    <th>A. Paterno<br/>/Razón social</th>
    <th>A. Materno</th>
    <th>Nombre</th>
  </tr>
<tpl for=\"{$campo->dataIndex}\">
  <tr>
    <td>{#}</td>
        <tpl if=\"isMoral\">
			<td colspan=\"3\">{paterno} {materno} {nombre}</td>
        <tpl else>
			<td>{paterno}</td>
			<td>{materno}</td>
			<td>{nombre}</td>
        </tpl>
  </tr>
</tpl>
</table>";
                    }else{
                        $rowexpander .= "
<table border=\"1\">
  <caption><strong>{$campo->columnText}</strong></caption>
  <tr>
    <th>#</th>";
                        foreach($campo->childs[$campo->dataIndex] as $child){
                            switch($child->dataType){
                                case 'NFempleado':
                                        $rowexpander .= "<th>NOMBRE Y FIRMA {$child->columnText}:</th>";
                                break;
                                case 'Fexterna':
                                        $rowexpander .= "<th>FIRMA {$child->columnText}:</th>";
                                break;
                                case 'Hexterna':
                                        $rowexpander .= "<th>HUELLA {$child->columnText}:</th>";
                                break;
                                default:
                                        $rowexpander .= "<th>{$child->columnText}:</th>";
                                break;
                            }
                        }
                        $rowexpander .= "
  </tr>
<tpl for=\"{$campo->dataIndex}\">
  <tr>
    <td>{#}</td>
";
                        foreach($campo->childs[$campo->dataIndex] as $child){
                            switch($child->dataType){
                                case 'person':
                                    //$rowexpander .= "<b>$child->columnText :</b>{".$child->dataIndex."_paterno} {".$child->dataIndex."_materno} {".$child->dataIndex."_nombre}<br/>";
                                    $rowexpander .= "<td>{{$child->dataIndex}}</td>";
                                break;
                                case 'NFempleado':
                                        $rowexpander .= "<td>{{$child->dataIndex}_name}</td>";
                                        $rowexpander .= "<td><img src=\"{{$child->dataIndex}_file}\" /></td>";
                                break;
                                case 'Fexterna':
                                        $rowexpander .= "<td><img src=\"{{$child->dataIndex}_file}\" /></td>";
                                break;
                                case 'Hexterna':
                                        $rowexpander .= "<td><img src=\"{{$child->dataIndex}_file}\" width=\"105\" /></td>";
                                break;
                                case 'multiline':
                                        $rowexpander .= "<td>{{$child->dataIndex}:this.insertBreaks}</td>";
                                break;
                                case 'date':
                                        $rowexpander .= "<td>{{$child->dataIndex}:this.formatDate}</td>";
                                break;
                                case 'datetime':
                                        $rowexpander .= "<td>{{$child->dataIndex}:this.formatDateTime}</td>";
                                break;
                                case 'boolean':
                                        $rowexpander .= "<td>{[this.getStoreValue(\"catalogo.SiNo\",values.$child->dataIndex, \"text\")]}</td>";
                                break;
                                case 'ref':
                                        $rowexpander .= "<td>{[this.getStoreValue(\"catalogo.{$child->store}\",values.{$child->dataIndex},\"{$child->displayField}\")]}</td>";
                                break;
                                case 'ref2':
                                        $rowexpander .= "<td>{[this.getStoreValue(\"catalogo.general{$child->store}\",values.{$child->dataIndex}, \"text\")]}</td>";
                                break;
                                default:
                                        $rowexpander .= "<td>{{$child->dataIndex}}</td>";
                                break;
                            }
                        }
                        $rowexpander .= "
  </tr>
</tpl>
</table>";
			}
		break;
            }
        }
        
        return $rowexpander;
    }
    
    /**
     * @return JSON_str Campos para editar el registro.
     */
    public function getViewFormFields() {
        $this->fields = array();
        
        //año judicial
        if($this->params->get('anoj') == '2'){
            $this->fields['anoj'] = array(
                'xtype' => 'numberfield',
                'name' => 'anoj',
                'fieldLabel' => 'Año judicial',
                'labelStyle' => 'font-weight:bold',

                'allowDecimals' => false,

                'allowBlank' => false,

                'itemId' => 'anoj',

                'minValue' => $this->user_belong_administrator_usrgrp?'2000':$this::EXT_TX_GRID_BOOK_ANOJ_MINVALUE,
                'maxValue' => $this->getCurrentAnoJudicial(),
            );
        }
        
        //ordering
        $this->fields[] = array(
            'xtype' => "numberfield",
            'name' => "ordering",
            'minValue' => 1,

            'fieldLabel' => $this->libro['id_tipoorgano'] == 3?'Folio':'No.',
			//disabled para que el usuario sepa que registro está editando con el ordering.
            'disabled' => !$this->user_belong_administrator_usrgrp,
        );
        
        //expediente
        if(in_array($this->libro['id_tipoorgano'], [1,2])){
			
                $this->fields['id_expediente'] = array(
                    'xtype' => 'expedientepicker',
                    'name' => 'id_expediente',
                    'isSala' => $this->libro['id_tipoorgano'] == 2,
                    'isSalaPenal' => $this->libro['id_tipoorgano'] == 2 && 
                        (
                            $this->libro['id_materia'] == 5 ||
                            $this->libro['id_materia'] == 14
                        ),
                    'regimeSelector' => !(
                        $this->libro['id_tipoorgano'] == 2 &&
                        (
                                $this->libro['id_materia'] == 5 || 
                                $this->libro['id_materia'] == 14
                        )
                    ),
                );
            
                $this->fields['id_expediente']['allowBlankAddress'] = !($this->empleado->o__id_tipoorgano == 1 && $this->empleado->o__id_materia < 4);
                $this->fields['id_expediente']['columns']['nombre']['tpl'] = ['{paterno} {materno} {nombre}'];
            
            if($this->user_belong_administrator_usrgrp){
                $this->fields['id_expediente']['columns'][] = ['xtype' => 'destroycolumn'];
            }
            
            $this->fields['id_expediente']['columns'] = array_values($this->fields['id_expediente']['columns']);
        }
        
        //secretaría
        if($this->libro['distribution'] == 2){
            $this->fields[] = array(
                'xtype' => 'combobox',
                'emptyText' => 'Select',
                'forceSelection' => true,
                'queryMode' => 'local',

                'store' => 'catalogo.secretarias',
                'displayField' => 'secretaria',
                'valueField' => 'id',
                'name' => 'id_secretaria',
                'fieldLabel' => JText::_('COM_TSJDF_LIBROS2_SECRETARIA_TO'.$this->libro['id_tipoorgano']),
                'allowBlank' => false,
                'itemId' => 'id_secretaria',
            );
        }
        
        foreach($this->campos as $campo){
            $this->addViewFormField($this->fields,$campo);
        }
        
        #T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
        if($this->user_belong_visitador_usrgrp){
            foreach ($this->fields as &$field) {
                $field['disabled'] = true;
            }
            
            array_unshift($this->fields,
                array(
                    'xtype' => 'textareafield',
                    'name' => 'T397_comment',
                    'fieldLabel' => 'Comentarios de visitador',
                )
            );
        }
        
        if($this->libro['id_tipoorgano'] == 3 && isset($this->fields['organo2'])){
            $this->fields['organo2']['store'] = 'filtro_organo2';
        }
        
        return $this->fields;
    }
    
    /**
     * Genera el año judicial [fecha limite 30/nov/*]
     */
    private function getCurrentAnoJudicial(){
        //generamos la fecha del 30 de noviembre del presente
        $anoj = date_create_from_format('Y-m-d', date('Y').'-11-30');
        //comparamos si ya pasó respecto de hoy.
        if (date_diff(date_create(), $anoj)->invert) {
            return $anoj->format('Y') + 1;
        } else {
            return $anoj->format('Y');
        }
    }
    
    /**
     * Genera un campo de edición de formulario
     * @param array $fields Array al que se adjunta el valor generado
     * @param object $campo Definición del objeto
     * @return array Campo
     */
    private function addViewFormField(&$fields, $campo){
        $field = array(
            'name' => $campo->dataIndex,
            'fieldLabel' =>  $campo->columnText.($campo->alwaysChange?'*':''),
        );
        
        switch($campo->dataType){
            case 'boolean':
                $field['xtype'] = 'combobox';
                $field['emptyText'] = 'Select';
                $field['forceSelection'] = true;
                $field['queryMode'] = 'local';

                $field['store'] = 'catalogo.SiNo';
                $field['valueField'] = 'id';
            break;
            case 'int': 
                $field['xtype'] = 'numberfield';
                $field['allowDecimals'] = false;
                $field['minValue'] = 0;
            break;
            case 'currency':
                $field['xtype'] = 'numberfield';
                $field['minValue'] = 0;
            break;
            case 'date':
                $field['xtype'] = 'datefield';
                $field['format'] = 'd-m-Y';
            break;
            case 'datetime':
                $field['xtype'] = 'datetimefield';
            break;
            case 'NFempleado':
                $field['xtype'] = 'wacompicker';
                $field['fieldLabel'] = 'NOMBRE Y FIRMA '.$campo->columnText.($campo->alwaysChange?'*':'');
            break;
            case 'Fexterna':
                $field['xtype'] = 'wacompicker';
            break;
            case 'Hexterna':
                $field['xtype'] = 'fingerprintpicker';
            break;
            case 'expediente':
                $field['xtype'] = 'textfield';
                $field['maxLength'] = 45;
                $field['regex'] = $this->t349h->insertAs_Is('/^\d+\x2F\d{4}.*$/');//number/year
                $field['regexText'] = 'número/año (yyyy)';
            break;
            case 'averiguacion':
                //tx? en consignaciones penales agregar la librería 'Ext.tx.form.field.Averiguacion'
                $field['xtype'] = 'averiguacionfield';
            break;
            case 'ref':
                $field['xtype'] = 'combobox';
                $field['emptyText'] = 'Select';
                $field['forceSelection'] = true;
                $field['queryMode'] = 'local';

                $field['store'] = 'catalogo.'.$campo->store;
                $field['displayField'] = $campo->displayField;
                $field['valueField'] = 'id';
            break;
            case 'ref2':
                $field['xtype'] = 'combobox';
                $field['emptyText'] = 'Select';
                $field['forceSelection'] = true;
                $field['queryMode'] = 'local';

                $field['store'] = "catalogo.general{$campo->store}";
                $field['displayField'] = 'text';
                $field['valueField'] = 'id';
            break;
            case 'suggest':
                $field['name'] = "txt_{$campo->dataIndex}";
                $field['xtype'] = 'combobox';
                $field['emptyText'] = 'Select';
                //$field['forceSelection']= true;
                $field['queryMode'] = 'local';

                $field['store'] = 'catalogo.'.$campo->store;
                $field['displayField'] = $campo->displayField;
                $field['valueField'] = $campo->displayField;
            break;
            case 'multiline':
                $field['xtype'] = 'textareafield';
            break;
            case 'person':
                $field['xtype'] = 'personfieldset';
                $field['title'] = $field['fieldLabel'];
                unset($field['fieldLabel']);
                $field['personFieldPrefix'] = $campo->dataIndex.'_';
                $field['alwaysChange'] = $campo->alwaysChange;
                $field['regimeSelector'] = !$campo->displayField;
                //en campos corridos no siempre buscan capturar el nombre
                $field['allowBlank'] = true;	
            break;
            case '':
                $field['xtype'] = 'textfield';
                $field['maxLength'] = 45;
            break;
            case 'VARCHAR255':
                $field['xtype'] = 'textfield';
                $field['maxLength'] = 255;
            break;
            case 'parent': //inicia case 'parent'
                $field = array(//sublibro
                    'xtype' => 'book',
                    'itemId' => $campo->dataIndex,
                    'initialConditions' => array('id_field' => $campo->id),
                    'title' => $campo->columnText.($campo->alwaysChange?'*':''),
                    'height' => 300,
                    'sortableColumns' => false,
                    'enableColumnResize' => false,
                    'enableColumnHide' => false,
					'bbar' => null,
                );

                //columnas de sub-libro
                $field['columns'][] = array('xtype'=>'statuscolumn');
                if($campo->store == 'persons'){      
                    $field['columns'][] = array(
                        'xtype' => 'templatecolumn',
                        'text' => 'Nombre',
                        'flex' => 1,
                        'tpl' => '{paterno} {materno} {nombre}',
                    );
                }else{
                    foreach($campo->childs[$campo->dataIndex] as $child){
                        $sfield = $this->getViewColumn($child);
                        if($sfield)
                            $field['columns'][$child->dataIndex] = $sfield;
                    }
                }
                if($this->user_belong_administrator_usrgrp)
                    array_unshift($field['columns'], array('xtype'=>'destroycolumn'));
                
                //campos de sub-libro
                $field['formItems'] = array();
                if($campo->store == 'persons'){
                    $field['formItems'][] = array(
                        'xtype' => 'personfieldset',
                        'personFieldPrefix' => '',
                        'alwaysChange' => $campo->alwaysChange,
                        'regimeSelector' => !$campo->displayField,
                    );
                }else{
                    foreach($campo->childs[$campo->dataIndex] as $child)
                        $this->addViewFormField($field['formItems'], $child);
                }
            break;//end case 'parent'
            default: die("error field en: $campo->columnText");
            break;
        }
        
        
        if($campo->dataIndex == 'billete'){
            $field['regex'] = $this->t349h->insertAs_Is('/^\w$/');
            $field['regexText'] = 'sólo caracteres alfanuméricos';
        }
        
        $fields[$campo->dataIndex] = $field;
        return $field;
    }
    /**
     * Genera los filtros para la definición ExtJS
     * @todo: investigar cómo precargar filtros
@todo: investigar cómo hacer que el menu del fitro acepte el allowBlank
        allowBlank: false,
        value: {'eq':2015},
        active: true,
     */
    public function getViewFilters(){
        $filters = array();
        
        //año judicial
        $filters [] = array(
            'dataIndex' => 'anoj',
            'filterText' => 'Ano j.',
        );
        
        //ordering
        $filters[] = array(
            'dataIndex' => 'ordering',
            'filterText' => $this->libro['id_tipoorgano'] == 3?'Folio':'No.',
        );
        
        //expediente
        if(in_array($this->libro['id_tipoorgano'], [1,2])){
            $filters['id_expediente'] = array(
                'type' => 'hasmany',
                'dataIndex' => 'id_expediente',
                'filterText' => $this->t349h->insertAs_Is('Ext.tx.form.field.ExpedientePicker.prototype.fieldLabel'),
                'fields' => array(
                    'numero' => array(
                        'fieldLabel' => 'Número',
                        'fieldCls' => 'Ext.form.field.Number',
                    ),
                    'ano' => array(
                        'fieldLabel' => 'Año',
                        'fieldCls' => 'Ext.form.field.Number',
                    ),
                    'bis' => array(
                        'fieldLabel' => 'Bis',
                        'fieldCls' => 'Ext.form.field.Number',
                    ),
                    'nrecurso' => array(
                        'fieldLabel' => 'Número de recurso',
                        'fieldCls' => 'Ext.form.field.Number',
                    ),
                    'id_tipojuicio' => array(
                        'fieldLabel' => 'Tipo de juicio',
                        'fieldCls' => 'Ext.form.field.ComboBox',

                        'emptyText' => 'Select',
                        'forceSelection' => true,
                        'queryMode' => 'local',

                        'store' => 'catalogo.tipojuicio',
                        'displayField' => 'tipojuicio',
                        'valueField' => 'id',
                    ),
                    'txt_tipojuicio' => array(
                        'fieldLabel' => 'Tipo de juicio',
                    ),
                ),
                'menuItems' => ['numero','ano','bis','nrecurso', 'id_tipojuicio', 'txt_tipojuicio',],
            );

            //partescontenciosas
            $filters['partescontenciosas'] = array(
                'type' => 'hasmany',
                'dataIndex' => 'partescontenciosas',
                'filterText' => JText::_( 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT' ),
                'fields' => array(
                    "txt_ijuridico" => array(
                        'fieldLabel' => JText::_( 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_IJURIDICO' ),
                    ),							  
                    "isMoral" => array(
                        'fieldLabel' => 'Es persona moral?',
                        'fieldCls' => 'Ext.form.field.ComboBox',
                        'store' => 'catalogo.SiNo',
                        'valueField' => 'id',
                        'forceSelection' => true,
                        'queryMode' => 'local',
                    ),
                    "paterno" => array(
                            'fieldLabel' => 'A. Paterno',
                    ),
                    "materno" => array(
                            'fieldLabel' => 'A. Materno',
                    ),
                    "nombre" => array(
                            'fieldLabel' => 'Nombre(s)',
                    ),
                ),
                'menuItems' => ["txt_ijuridico", "isMoral","paterno","materno","nombre",],
            );

        }
        //secretaría
        if($this->libro['distribution'] == 2){
            $filters[] = array(
                'dataIndex' => 'id_secretaria',
                'filterText' => JText::_('COM_TSJDF_LIBROS2_SECRETARIA_TO'.$this->libro['id_tipoorgano']),

                'type' => 'list',
                'labelField' => 'secretaria',
                'store' => 'catalogo.secretarias',
                'phpMode' => true,
                'single' => true
            );
        }
        
        foreach($this->campos as $campo){
            $filter = $this->getViewFilter($filters,$campo);
            if($filter)
                $filters[] = $filter;
        }
        return $filters;
    }
    
    /**
     * Genera un objeto filter en función de las propiedades del $campo
     */
    private function getViewFilter($filters,$campo){
        //utilizo array y no objeto porque con sub-campos necesito hacer array_merge
        $filter = array();
        $filter['dataIndex'] = $campo->dataIndex;
        $filter['filterText'] = $campo->columnText;
        
        switch($campo->dataType){
             //campos que no se despliegan en filtros
            case 'NFempleado':
            case 'Fexterna':
            case 'Hexterna':
                return;
            break;
            //campos que no tienen atributos
            case 'int':
            case 'currency':
            case '':
            case 'VARCHAR255': 
            case 'averiguacion': 
            case 'expediente':
            case 'person':
                    //aqui podría separar por paterno, materno, nombre, isMoral
            case 'multiline':
            break;
            //campos con atributos
            case 'boolean':
                $filter['type'] = 'list';
                $filter['labelField'] = 'text';
                $filter['store'] = 'catalogo.SiNo';
                $filter['phpMode'] = true;
                $filter['single'] = true;
            break;
            case 'date':
                $filter['dateFormat'] = 'Y-m-d';
            break;
            case 'datetime':
//                //menuItems : ['before', 'after'];
                $filter['dateFormat'] = 'Y-m-d';
            break;
            case 'ref':
                $filter['type'] = 'list';
                $filter['labelField'] = $campo->displayField;
                $filter['store'] = "catalogo.{$campo->store}";
                $filter['phpMode'] = true;
                $filter['single'] = true;
            break;
            case 'ref2':
                $filter['type'] = 'list';
                $filter['labelField'] = 'text';
                $filter['store'] = "catalogo.general{$campo->store}";
                $filter['phpMode'] = true;
                $filter['single'] = true;
            break;
            case 'parent':
                $filter['type'] = 'hasmany';
                $filter = array_merge($filter, $this->getViewSubFilterFiled($campo));
            break;
            case 'suggest':
                $filter['dataIndex'] = "txt_{$campo->dataIndex}";
			break;
        }
        
        return $filter;
    }
    /**
     * Genera un objeto filter en función de las propiedades del sub_campo
     */    
    private function getViewSubFilterFiled($campo){
        $subFilter = array();
        $fields = array();
        $menuItems = array();
        
        foreach($campo->childs[$campo->dataIndex] as $child){
            switch($child->dataType){
                case '':
                case 'expediente':
                case 'averiguacion':
                case 'VARCHAR255':
                case 'multiline':
                case 'person'://tal vez debería dividirlo en paterno, materno, nombre
                    $menuItems[] = $child->dataIndex;
                    $fields[$child->dataIndex] = array('fieldLabel' => $child->columnText);
                break;
                case 'suggest':
                    $menuItems[] = "txt_{$child->dataIndex}";
                    $fields['txt_'.$child->dataIndex] = array('fieldLabel' => $child->columnText);
                break;
                case 'date':
                case 'datetime':
                    $menuItems[] = $child->dataIndex;
                    $fields[$child->dataIndex] = array(
                        'fieldLabel' => $child->columnText,
                        'fieldCls' => 'Ext.form.field.Date',
                        'format' => 'Y-m-d',
                    );
                break;
                case 'boolean':
                        $menuItems[] = $child->dataIndex;
                        $fields[$child->dataIndex] = array(
                            'fieldLabel' => $child->columnText,
                            'fieldCls' => 'Ext.form.field.ComboBox',
                            'store' => 'catalogo.SiNo',
                            'valueField' => 'id',
                            'forceSelection' => true,
                            'queryMode' => 'local',
                        );
                break;
                case 'int':
                case 'currency':
                    $menuItems[] = $child->dataIndex;
                    $fields[$child->dataIndex] = array(
                        'fieldLabel' => $child->columnText,
                        'fieldCls' => 'Ext.form.field.Number',
                    );
                break;
                case 'ref':
                        $menuItems[] = $child->dataIndex;
                        $fields[$child->dataIndex] = array(
                            'fieldLabel' => $child->columnText,
                            'fieldCls' => 'Ext.form.field.ComboBox',

                            'emptyText' => 'Select',
                            'forceSelection' => true,
                            'queryMode' => 'local',

                            'store' => "catalogo.{$child->store}",
                            'displayField' => $child->displayField,
                            'valueField' => 'id',
                        );
                break;
                case 'ref':
                    $menuItems[] = $child->dataIndex;
                    $fields[$child->dataIndex] = array(
                        'fieldLabel' => $child->columnText,
                        'fieldCls' => 'Ext.form.field.ComboBox',

                        'emptyText' => 'Select',
                        'forceSelection' => true,
                        'queryMode' => 'local',

                        'store' => "catalogo.{$child->store}",
                        'displayField' => 'text',
                        'valueField' => 'id',
                    );
                break;
            }
        }
        
        $subFilter['fields'] = $fields;
        $subFilter['menuItems'] = $menuItems;
        return $subFilter;
    }
    

    private function getViewRowExpanderExpediente_tmpl(){
        if($this->libro['id_tipoorgano'] == 3)
            return;
        //{datos} lo quité porque el rowexpander no está tomando los valores de la respuesta ajax al hacer update-render; y solo se reflejaba el cambio al recargar toda la interfaz. Si lo regreso, aplicar una funcion que reemplace \n por <br/>
        $address_detail = '';
        
        
        $template = 
'<table border="1" style="width: 100%; max-width: 800px;">
  <caption><strong>'.JText::_( 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT' ).'</strong></caption>
  </tr>
    <th style="max-width: 30px">#</th>
	<th style="width: 20%">'.JText::_( 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_IJURIDICO' ).'</th>
    <th style="width: 30%">Nombre<br/>/Razón social</th>
	<th style="width: 40%">Datos</th>
  </tr>
';        
$template .= <<<EOD
<tpl for="Expediente.partescontenciosas">
  <tr>
    <td>{#}</td>
	<td>{txt_ijuridico}</td>
	<td>{paterno} {materno} {nombre}</td>
	<td>
		CURP: {curp}
		<br/>RFC: {rfc}
		<br/>Calle: {calle} # {numero}
		<br/>Colonia: {colonia}
		<br/>C.P.: {cp}
		<br/>{municipio},{[this.getStoreValue("catalogo.entidadesf",values.id_entidadf,"entidadfn")]}
	</td>
  </tr>
</tpl>
</table>
EOD;
        return $template;
    }
    
    //view functions
    private function getViewRequires(){
        $requires[] = 'Ext.tx.grid.Book2';
		$requires[] = 'Ext.tx.grid.column.Versions';
        
        if($this->libro['id_tipoorgano'] == 3) 
            $requires[] = 'Ext.tx.form.field.Averiguacion';
        
        #T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
        if($this->user_belong_visitador_usrgrp) 
            $requires[] = 'Ext.tx.grid.column.DestroyT397';
        return $requires;
    }
    
    private function getViewStoresArray($campos = array()){
        $is_root = empty($campos);
        $stores = [];
        if($is_root){
            $stores[] = 'catalogo.tipojuicio';
            $stores[] = 'catalogo.SiNo';
            $stores[] = 'catalogo.general28';//partescontenciosas
			
            if($this->libro['distribution'] == 2)
                $stores[] = 'catalogo.secretarias';
            
                $stores[] = 'catalogo.entidadesf';
                $stores[] = 'catalogo.municipios';
                                
            $campos = $this->campos;           
            
        }
        
        foreach($campos as $campo){
            $store_name = NULL;
            
            switch ($campo->dataType){
                case 'ref':
                case 'suggest':
                    $store_name = "catalogo.{$campo->store}";
                    break;
                case 'ref2':
                     $store_name = "catalogo.general{$campo->store}";
                    break;
                case 'boolean':
                     $store_name = 'catalogo.SiNo';
                    break;
                case 'parent':
                    $childs = $this->getViewStoresArray($campo->childs[$campo->dataIndex]);
                    foreach ($childs as $child) {
                        if(!in_array($child,$stores))
                                $stores[] = $child;
                    }
                    break;
            }
            
            if($store_name && !in_array($store_name,$stores))
                    $stores[] = $store_name;
        }
        
        if($is_root)
            $stores[] = "libro.{$this->libro['clave']}";        
            
        return $stores;
    }
    
    public function getViewInitialConditions(){
        $obj = new stdClass();
        if($this->libro['distribution'] == 2 && $this->empleado->id_secretaria) {
            $obj->id_secretaria = $this->empleado->id_secretaria;
        }
        
        if($this->libro['id_tipoorgano'] == 3) {
            $obj->fh_recepcion = $this->t349h->insertAs_Is('new Date()');
        }
        
        return $obj;
    }
    
    //model functions
    private function getModelUses(){
            $uses [] = 'tsjdf.model.libro.expediente';
                
        foreach($this->campos as $campo){
            if($campo->dataType == 'parent')
                $uses[] = "tsjdf.model.libro.{$campo->store}";
        }        
        return $uses;
    }
    private function getModelBelongsTo(){
        $BelongsTo = new stdClass();
//        if($this->libro['id_tipoorgano'] == 1){
            $BelongsTo->foreignKey = 'id_expediente';
            $BelongsTo->getterName = 'getExpediente';
            $BelongsTo->setterName = 'setExpediente';
            $BelongsTo->name = 'Expediente';
            $BelongsTo->associationKey = 'expediente';
            $BelongsTo->model = 'tsjdf.model.libro.expediente';
//        }

        return $BelongsTo;
    }
    
    private function getModelProxy(){
        $proxy = array(
		'type' => 'ajax',
		'api' => array(
                    'read' => "index.php?option=com_tsjdf_libros2&task=v4.read&store=libro&clave={$this->libro['clave']}",
                    'create' => "index.php?option=com_tsjdf_libros2&task=v4.create&store=libro&clave={$this->libro['clave']}",
                    'update' => "index.php?option=com_tsjdf_libros2&task=v4.update&store=libro&clave={$this->libro['clave']}",
		),
		'reader' => array(
                    'type' => 'json',
                    'messageProperty' => 'message',
                    'root' => 'data'
		),
		'writer' => array(
                    'type' => 'json',
                    'allowSingle' => false,
                    'encode' => true,
                    'root' => 'data',
                    'writeAllFields' => true,
		),
        );
                    
        if($this->user_belong_administrator_usrgrp){
            $proxy['api']['destroy'] = "index.php?option=com_tsjdf_libros2&task=v4.destroy&store=libro&clave={$this->libro['clave']}";
        }
		
        if($this->user_belong_read_only_usrgrp){
            unset($proxy['api']['create']);
//            unset($proxy['api']['update']);//se necesita deshabilitar el evento doble click del javascript
        }
        
        #T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
        if($this->user_belong_visitador_usrgrp){
            unset($proxy['api']['create']);
            $proxy['api']['update'] = "index.php?option=com_tsjdf_libros2&task=v4.setT397Comment&clave={$this->libro['clave']}";
            $proxy['api']['destroy'] = "index.php?option=com_tsjdf_libros2&task=v4.unsetT397Comment&clave={$this->libro['clave']}";
        }
        return $proxy;
    }
    
    public function getModelFields(){
        $fields = array();
        
        //created_byuser
        if($this->libro['distribution'] == 3){
            $fields[] = array(
                'name' => 'created_byuser',
                'type' =>  'string',
                'persist' => false
            );
        }

        //id_expediente
        $fields['id_expediente'] = array(
            'name' => 'id_expediente',
            'type' =>  'int',
            'useNull' => $this->libro['exp_optional'] == 1 || $this->libro['id_tipoorgano'] == 3?
                true:false, 
        );
        
        if(in_array($this->libro['id_tipoorgano'], [1,2])){

            //e__name
            $fields['e__name'] = array(
                'name' => 'e__name',
                'type' =>  'string',
                'persist' => false
            );

            //e__txt_tipojuicio
            $fields['e__txt_tipojuicio'] = array(
                            'name' => 'e__txt_tipojuicio',
                            'type' =>  'string',
                            'persist' => false
            );
        }
        
        //anoj
        $fields[] = array(
			'name' => 'anoj',
			'type' =>  'int',
			'defaultValue' => $this->getDefaultAnoj()
        );
        
        //ordering
        $fields[] = array(
                'name' => 'ordering',
                'type' => 'int',
                'persist' => $this->user_belong_administrator_usrgrp
        );

        //id_secretaria
        if($this->libro['distribution'] == 2){
            $fields[] = array(
			'name' => 'id_secretaria',
			'useNull' => true,
			'type' =>  'int',
            );
        }
        
        $campos = $this->campos;
        foreach($campos as $campo){
            $field = array(
                'name' => $campo->dataIndex,
                'useNull' => true,                
            );

            switch($campo->dataType){
                case 'parent':
                    continue 2;//exit foreach
                    break;
                case 'person':
                    $field['type'] = 'string';
                    $field['persist'] = false;
                    
                    $fields[] = array(
			'name' => $campo->dataIndex.'_isMoral',
			'useNull' => true,
			'type' =>  'int',
                    );
                    
                    $fields[] = array(
			'name' => $campo->dataIndex.'_paterno',
			'useNull' => true,
			'type' =>  'string' 
                    );

                    $fields[] = array(
			'name' => $campo->dataIndex.'_materno',
			'useNull' => true,
			'type' =>  'string' 
                    );
                    
                    $fields[] = array(
			'name' => $campo->dataIndex.'_nombre',
			'useNull' => true,
			'type' =>  'string' 
                    );
                    //y al final genera un concat para la vista
                    break;
		case 'boolean':
		case 'int':
		case 'ref':
		case 'ref2':  
                    $field['type'] = 'int';
                    break;
		case 'currency':  
                    $field['type'] = 'float';
		break;
		case '':
		case 'VARCHAR255':
		case 'multiline':
		case 'expediente':
		case 'averiguacion':
                    $field['type'] = 'string';
		break;
		case 'date':
		case 'datetime':  
                    $field['type'] = 'date';
                    $field['dateFormat'] = 'Y-m-d H:i:s';
		break;
		case 'NFempleado':  
                    //para el puntero
                    $field['type'] = 'int';
                    //nombre del empleado
                    $fields[] = array(
                        'name' =>  $campo->dataIndex.'_name', 
                        'persist' => false, 
                        'type' =>  'string'
                    );
                    //archivo
                    $fields[] = array(
                        'name' =>  $campo->dataIndex.'_file', 
                        'persist' => false, 
                        'type' =>  'string'
                    );

		break;
		case 'Fexterna':  
		case 'Hexterna':  
                    //puntero firma / huella
                    $field['type'] = 'int';
                    //url firma / huella
                    $fields[] = array(
                        'name' =>  $campo->dataIndex.'_file',
                        'persist' =>  false,
                        'type' =>  'string'
                    );
		break;
		case 'suggest':
                    $field['name'] = "txt_{$campo->dataIndex}";
                    $field['type'] = 'string';
		break;
            }
            $fields[$campo->dataIndex] = $field;
        }
        
        #T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
        if($this->user_belong_visitador_usrgrp){
            foreach ($fields as &$field) {
                $field['persist'] = false;
            }
        }
		
            $fields[] = array(
                'name' => 'T397_comment',
                'type' => 'string',
                'persist' => $this->user_belong_visitador_usrgrp
            );
        
        //id
        $fields[] = array(
            'name' => 'id',
            'type' =>  'int',
        );
        return $fields;
    }
    
    /**
    * devuelve el valor predeterminado para el año judicial al Ext.data.Model
    * el ano judicial comienza el 1o de diciembre
    */
    private function getDefaultAnoj(){
        switch($this->params->get('anoj')){
            case 0://Ano en curso
                return date('Y');
            break;
            case 1://función getAnoj() [fecha limite 30/nov/*]
                return $this->getAnoj();
            break;
            case 2://Elegido por el usuario
                return 0;
            break;
        }
    }
    
    public function getModelConfiguration(){
        $model = array(
            'extend' => 'Ext.data.Model',
            'uses' => $this->getModelUses(),
            'belongsTo' =>  $this->getModelBelongsTo(),
            'hasMany' => [],
            'proxy' => $this->getModelProxy(),
            'fields' => array_values($this->getModelFields()),
        );
         foreach($this->campos as $campo){
             if($campo->dataType == 'parent'){
                 $model['hasMany'][] = array(
			'model' => "tsjdf.model.libro.{$campo->store}",
			'foreignKey' => 'id_record',
			'name' => $campo->dataIndex,
                 );
             }
         }
        
        return $model;
    }
    
    public function getStoreConfiguration(){
        $store = array(
            'extend' => 'Ext.data.Store',
            'requires' => "tsjdf.model.libro.{$this->libro['clave']}",
            'remoteSort' => true,
            'storeId' => "libro.{$this->libro['clave']}",
            'model' => "tsjdf.model.libro.{$this->libro['clave']}",
        );
        return $store;
    }
    
    public function getAppConfiguration(){
        $app = array(
            'requires' => $this->getViewRequires(),
            'name' => 'tsjdf',
            'appFolder' => "resources_{$this->params->get('assetVersion')}/tsjdf_libros/app",
        );
        $stores = $this->getViewStoresArray();
        $app['stores'] = $stores;
        
        #ExtJS load all stores
        $launch_fn = 'function(){
			myMask = new Ext.LoadMask(document.body,{msg:"Cargando recursos..."});
			myMask.show();';
        foreach ($stores as $store){
            if($store == 'catalogo.SiNo')
                continue;
            $launch_fn .= "Ext.create('tsjdf.store.{$store}').load({
                scope: this,
                callback: this.onStoresReady
            });";
        }
        $launch_fn .= '}';
        $app['launch'] = $this->t349h->insertAs_Is($launch_fn);
        
        #ExtJS wait until all stores are loaded
        $onStoresReady_fn = 'function(){   if( 1 ';
        foreach ($stores as $store){
             $onStoresReady_fn .= "\n & !Ext.StoreManager.get('$store').isLoading()";
        }
        $onStoresReady_fn .= '){
            var fooColumn = Ext.widget("gridcolumn",{hidden: true, renderTo: Ext.getBody()});';
		
        if($this->libro['id_tipoorgano'] == 3){
            $filtro_organo1 = '';
            $filtro_organo2 = '';
            switch ($this->libro['clave']) {
                case 'lcp01': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp02': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp03': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp04': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp05': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp06': 
                    $filtro_organo1 = '8|9';
                    $filtro_organo2 = '8|9';
                break;
                case 'lcp07': 
                    $filtro_organo1 = '8|9';
                    $filtro_organo2 = '8|9';
                break;
                case 'lcp09': 
                    $filtro_organo1 = '8';
                    $filtro_organo2 = '9';
                break;
                case 'lcp10': 
                    $filtro_organo1 = '10';
                break;
                case 'lcp12': 
                    $filtro_organo1 = '8';
                    $filtro_organo2 = '9';
                break;
                case 'lcp13': 
                    $filtro_organo1 = '10';
                    $filtro_organo2 = '10';
                break;
                case 'lcp14': 
                    $filtro_organo1 = '10';
                break;
                case 'lcp15': 
                    $filtro_organo1 = '5|6|8|9';
                break;
                case 'lcp18': 
                    $filtro_organo1 = '5';
                break;
                case 'lcp19': 
                    $filtro_organo1 = '5';
                break;
                case 'lcp20': 
                    $filtro_organo1 = '5|6';
                    $filtro_organo2 = '5|6';
                break;
                case 'lcp21': 
                    $filtro_organo1 = '5|6';
                    $filtro_organo2 = '5';
                break;
                case 'lcp22': 
                    $filtro_organo1 = '5|6';
                break;
                case 'lcp23': 
                    $filtro_organo1 = '5|6';
                break;
                case 'lcp24': 
                    $filtro_organo1 = '1|4|5';
                break;
                case 'lcp25': 
                    $filtro_organo1 = '6';
                break;
                case 'lcp26': 
                    $filtro_organo1 = '6';
                break;
                case 'lcp27': 
                    $filtro_organo1 = '5|6';
                    $filtro_organo2 = '5|6';
                break;
                case 'lcp28': 
                    $filtro_organo1 = '6';
                    $filtro_organo2 = '6';
                break;
                case 'lcp29': 
                    $filtro_organo1 = '5|6';
                break;
                case 'lcp30': 
                    $filtro_organo1 = '5';
                break;
                case 'lcp31': 
                    $filtro_organo1 = '6';
                break;
                case 'lcp32': 
                    $filtro_organo1 = '10';
                break;
                case 'lcp34': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp39': 
                    $filtro_organo1 = '8|9';
                    $filtro_organo2 = '8|9';
                break;
                case 'lcp40': 
                    $filtro_organo1 = '8|9';
                break;
                case 'lcp41': 
                    $filtro_organo1 = '8|9';
                break;   
            }
            
            $onStoresReady_fn .= "var filtro_organo1 = Ext.StoreMgr.get('catalogo.organos');";
            
            //todos los juzgados de origen y destino son de la misma materia, no hace falta un segundo filtro.
            if($filtro_organo2){
                $onStoresReady_fn .= "var filtro_organo2 = new tsjdf.store.catalogo.organos();
                    filtro_organo1.each(function(record){
                      filtro_organo2.add(record.copy());
                    });
                    filtro_organo2.filter([
                    {property: 'numero', value: /^(?!100)/},
                    {property: 'id_tipoorgano', value: /^1$/},
                    {property: 'id_materia', value: /^({$filtro_organo2})$/},
                    ]);
                    Ext.StoreMgr.add('filtro_organo2', filtro_organo2 );";
            }
            
            $onStoresReady_fn .= "filtro_organo1.filter([
                    {property: 'numero', value: /^(?!100)/},
                    {property: 'id_tipoorgano', value: /^1$/},
                    {property: 'id_materia', value: /^({$filtro_organo1})$/},
                ]);
                Ext.StoreMgr.add('filtro_organo2', filtro_organo1 );";
                        

        }
        
        $onStoresReady_fn .= 'Ext.create("Ext.tx.grid.Book2", '.
				$this->encode($this->getAppGridConfiguration())
					   .");
            myMask.hide();
            myMask = new Ext.LoadMask(Ext.getCmp('book').getEl(),{msg:'Espere un momento...'});
            window.dispatchEvent(new Event('resize'));
         }}";
        $app['onStoresReady'] = $this->t349h->insertAs_Is($onStoresReady_fn);
        return $app;
    }
    
    public function getAppGridConfiguration(){
        $gridB2 = array(
            'renderTo' => 'extjs-content',
            'height' => 700,
            'title' => $this->libro['nombre'],
            'store' => "libro.{$this->libro['clave']}",
            'isRoot' => true,
            'show_pagingtoolbar' => true,
            'hide_addBtn' => $this->user_belong_visitador_usrgrp || $this->user_belong_read_only_usrgrp,
            'id' => 'book',
            'features' => array(
                array(
                            'ftype' => 'search',
                            'targetCt' => "toolbar[dock=top]",
                            'filters' => array_values($this->getViewFilters()),
                ),
            ),
            'initialConditions' => $this->getViewInitialConditions(),
            'onException' => $this->t349h->insertAs_Is("function(){
							Ext.MessageBox.show({
								title: '{$this->libro['nombre']} - detenido',
								msg: 'La aplicación ha sido detenida porque ocurrió un error inesperado. Por favor actualice la página e inténtelo de nuevo.',
								icon: Ext.MessageBox.ERROR,
								buttons: Ext.Msg.OK
							});
						}"),
            'columns' => array_values($this->getViewColumns()),
        );
                                                                
        //columnas y forms no deben llevar indice en el json
        $formItems = $this->getViewFormFields();
        foreach ($formItems as &$formItem) {
            if(isset($formItem['formItems']))
                $formItem['formItems'] = array_values ($formItem['formItems']);
            if(isset($formItem['columns']))
                $formItem['columns'] = array_values ($formItem['columns']);
        }
        $formItems = array_values($formItems);
        $gridB2['formItems'] = $formItems;
                                                                
        $rowexpander = $this->getViewRowExpanderBodyTpl();
        $rowexpander = str_replace("\r\n","",$rowexpander);
        if($rowexpander != ''){
            $gridB2['plugins'] = $this->t349h->insertAs_Is("[{
                ptype: 'rowexpander',
                expandOnDblClick: false,
                rowBodyTpl : new Ext.XTemplate(
                        '{$rowexpander}',
                        {
                                insertBreaks: function(value){
                                        if(!value)
                                                return;
                                        return value.replace(/\\n/g, '</br>');
                                },
                                formatDate: function(value){
                                        return Ext.Date.format(value, 'Y-m-d');
                                },
                                formatDateTime: function(value){
                                        return Ext.Date.format(value, 'd-m-Y g:i A');
                                },
                                getStoreValue: function(store,value, labelField){
                                    row = Ext.StoreMgr.get(store).getById(value);
                                    if(row !== null)
                                        return row.get(labelField);
                                },

                        }
                )
        }]");
/*
    también puedo usar:
    'l j \\d\\e F \\d\\e\\l Y'
    calculatePath: function(value){
            var mask = '',i;
            for(i=1;i<12;i++){
                    if(!(i%3)){
                            mask = '/' + mask;

                            continue;
                    }
                    mask = value.toString(16).slice(-1) + mask;
                    value = value>>4;
            }
            return mask
    }
 */
        }
        
        return $gridB2;
    }
    
    public function encode($obj){
        return $this->t349h->encode($obj);
    }
}
