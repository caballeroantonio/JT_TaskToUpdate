<?php

/**
 * @version     3.11
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
defined('_JEXEC') or die;

/**
* En esta clase he pensado poner las definiciones de libros y campos.
* En $libro->fields están las referencias de los campos del libro.
*	Si el campo es una referencia a otra tabla, en él estoy sobre-escribiendo el valor, por ejemplo, l.id_expediente = '1/2015'.
* Inicialmente tenía en mente que la información se pudiera:
	- exportar a un documento excel maquetado 
	- se controlara la anchura del documento para que cupiera al envíarse a impresiones tamaño carta
	- se controlara el colspan y rowspan de cada registro para que los elementos anidados (sub-arrays) no provoquen excesiva cantidad de renglones
	- se controlara el colspan y rowspan de cada registro para que las observaciones (campos multiline) se deplegaran en toda la anchura del documento
	- que el documento excel fuera parecido al ExtJS.Grid y rowexpander de la interfaz de usuario.
	- $this->libro->rowexpanders iba a poner los elementos que dibujo dentro del ExtJS.Grid.rowexpander, ya no lo voy a hacer; ahora los puse en $libro->fields
*/
class Tsjdf_libros2ModelBook extends JModelItem{
	
	public $clave;
	private $query;
	public $is_sublibro;
	public $libro; #jtc_libros object
	
	/*
	settings.version = 2 descontinuado(jt_campos)
	settings.version = 4 vinculación con expediente(jt3_campos)
	*/
	public function __construct( $settings = stdClass){
		foreach($settings as $key => $value){
			$this->{$key} = $value;
		}
		$this->setDbo(JFactory::getDBO());
		
		$this->query = $this->getDbo()->getQuery(true);
		$empleado = $_SESSION['empleado'];
                                
                switch($this->version){
                    case 0:
                        $this->getExpediente();
                        break;
                    case 2:
                        
                        $params = JComponentHelper::getParams('com_tsjdf_libros2');
                        $schemav2 = $params->get('schemav2');
//                        $schemav2 = 'lg_tsjdf_prod';
                        
                        $this->getDbo()->setQuery("SELECT libro, tabla, id_tipoorgano, distribution FROM jtc_librosv2 WHERE published AND clave = '{$this->clave}';");
                        $this->libro = $this->getDbo()->loadObject();
                        if(!$this->libro) die('clave invalida');

                        //se podría pasar a getToralFieldLabels
                        $orderingLabel = $this->libro->id_tipoorgano == 3?'FOLIO':'CONSECUTIVO';
					
                        $this->query->select("l.id AS 'id', l.created AS 'Creado', cb.name  AS 'Creado por', l.modified  AS 'Modificado', mb.name AS 'Modificado por'\n")
                        ->where("l.id_organo = {$empleado->id_organo}")
                        // CB
                        ->join('LEFT', 'jos_users cb ON cb.id = l.created_by')
                        // MB
                        ->join('LEFT', 'jos_users mb ON mb.id = l.modified_by')

                        // L
                        ->from("{$schemav2}.{$this->libro->tabla} l")
                        ->select("l.anoj AS 'AÑO JUDICIAL'")
                        ->order('l.anoj');
                        
                        //secretaria
                        if($this->libro->distribution==2){
                            $this->query->select("s.secretaria AS 'SECRETARÍA'\n")
                            ->join('LEFT', 'jtc_secretarias s ON s.id = l.id_secretaria');
                        }
                        $this->query->select("l.ordering AS '{$orderingLabel}'\n")
                        ->order('l.ordering');
                        
                        $this->getDbo()->setQuery("SELECT COLUMN_NAME AS 'dataIndex', DATA_TYPE, id, columnText, store, displayField 
,(columnText LIKE 'FIRMA%' AND DATA_TYPE = 'int' AND COLUMN_NAME LIKE 'id\_%') 'isfirma'
FROM jt_columns_v2 
WHERE 1
AND TABLE_NAME = 'jos_tsjdf_libro_{$this->clave}'
AND COLUMN_NAME NOT IN ('id', 'why_modify','created', 'created_by', 'modified', 'modified_by', 'id_organo', 'id_secretaria', 'ordering', 'anoj' );");
                        $campos = $this->getDbo()->loadAssocList('dataIndex');
                        $alias = 'l';
        		foreach($campos as $key => $campo){
                            
                            if($campo['store']){
                                if($campo['store'] == 'organos'){
                                    $campo['store'] = 'jtc_organos';
                                }else{
                                    $campo['store'] = "{$schemav2}.#__tsjdf_catalogo_{$campo['store']}";
                                }
                                $this->query->select("c{$campo['id']}.{$campo['displayField']} AS '{$campo['columnText']}'\n")
                                ->join('LEFT', "{$campo['store']} c{$campo['id']} ON c{$campo['id']}.id = {$alias}.{$campo['dataIndex']}");
                            }else if($campo['isfirma']){
				$this->query->select("u_{$campo['id']}.name AS '{$campo['columnText']}'")
                                ->join('LEFT', "jos_users u_{$campo['id']} ON {$alias}.{$campo['dataIndex']} = u_{$campo['id']}.id");
                            }
                            else{
                                $this->query->select("{$alias}.{$campo['dataIndex']} AS '{$campo['columnText']}'\n");
                            }
        		}
                        break;
                    case 4:
		
		//solo libros, no sublibros, no alias
		$this->is_sublibro = stripos($this->clave, "_")===false?false:true;
		if($this->is_sublibro) die('aqui no quiero sublibros!!!');
		
		$this->getDbo()->setQuery("SELECT id, nombre, tabla, distribution, id_materia, id_tipoorgano, clave, 'l' AS 'alias' FROM jtc_libros WHERE published AND clave = '{$this->clave}';");
		$this->libro = $this->getDbo()->loadObject();
		if(!$this->libro) die('clave invalida');
		
		//se podría pasar a getToralFieldLabels
		$orderingLabel = $this->libro->id_tipoorgano == 3?'FOLIO':'CONSECUTIVO';
                $this->query->select("l.id AS 'id', l.created AS 'Creado', cb.name  AS 'Creado por', l.modified  AS 'Modificado', mb.name AS 'Modificado por'\n")
		->where("l.id_organo = {$empleado->id_organo}")
		// CB
		->join('LEFT', 'jos_users cb ON cb.id = l.created_by')
		// MB
		->join('LEFT', 'jos_users mb ON mb.id = l.modified_by');
		
		$this->libro->fields['l.id'] = array('dataIndex'=>'id', 'columnText'=>'id', 'dataType' => 'int');
		$this->libro->fields['l.created'] = array('dataIndex'=>'created', 'columnText'=>'Creado', 'dataType' => 'date');
		$this->libro->fields['l.created_by'] = array('dataIndex'=>'created_by', 'columnText'=>'Creado por', 'dataType' => '');
		$this->libro->fields['l.modified'] = array('dataIndex'=>'created', 'columnText'=>'Modificado', 'dataType' => 'date');
		$this->libro->fields['l.modified_by'] = array('dataIndex'=>'modified_by', 'columnText'=>'Modificado por', 'dataType' => '');
		
		// L
		$this->query->from( $this->libro->tabla . ' l');
//		if(!$this->is_sublibro){
			$this->query->select("l.anoj AS 'AÑO JUDICIAL', l.ordering AS '{$orderingLabel}'\n")
			->order('l.anoj');
			$this->libro->fields['l.anoj'] = array('dataIndex'=>'anoj', 'columnText'=>'AÑO JUDICIAL', 'dataType' => 'int');
			$this->libro->fields['l.ordering'] = array('dataIndex'=>'ordering', 'columnText'=>$orderingLabel, 'dataType' => 'int');
//		}
		switch($this->libro->distribution){
			case 1:
			break;
			case 2:
				// S
				$this->query->select("s.secretaria AS 'SECRETARÍA'\n")->join('LEFT', 'jtc_secretarias s ON s.id = l.id_secretaria')
				->order('l.id_secretaria');
				$this->libro->fields['l.id_secretaria'] = array('dataIndex'=>'id_secretaria', 'columnText'=>'SECRETARÍA', 'dataType' => '');
			break;
			case 3:
				$this->query->order('l.created_by');
			break;
		}
//		if(!$this->is_sublibro)
			$this->query->order('l.ordering');
                    
			$this->query
			->select("o.organo AS 'ÓRGANO'\n")->join('LEFT', 'jtc_organos o ON o.id = l.id_organo');
                        $this->getExpediente();
                        $this->navegaArbol($this->libro->clave, 'l', $this->libro->fields);//, $this->libro->rowexpanders
                #agrega comentario para el T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
                $this->query->select('t397.T397_comment AS \'Comentario de visitador\'');
                $this->query->join('LEFT', "jt_t397 t397 ON t397.id = l.id AND t397.id_libro = {$this->libro->id} AND t397.published");
                    break;
		}
		//$this->query->setLimit(50);
	}
	
	
	public function getColumns(){
	}
        
        public function getFields(){
            return $this->libro->fields;
        }
	
	function test(){
		echo $this->query."\n<br/>";
		print_r($this->libro);
	}
	
	/*
		integra los campos al $this->query
	*/
	function integrarCampos($campo, $alias, &$fields = array()){//, &$rowexpanders = array()
		switch($campo['dataType']){
			case '' :
			case 'expediente' :
			case 'averiguacion' :
			case 'currency' :
			case 'int' :
			case 'datetime' :
			case 'suggest' :
			case 'VARCHAR255' :
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("{$alias}.{$campo['dataIndex']} AS '{$campo['columnText']}'\n");
			break;
			// necesita saltos de línea?
			case 'multiline' :
				$fields//$rowexpanders
				["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("{$alias}.{$campo['dataIndex']} AS '{$campo['columnText']}'\n");
			break;
			case 'date' :
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("DATE({$alias}.{$campo['dataIndex']}) AS '{$campo['columnText']}'\n");
			break;
			case 'person' :
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("CONCAT_WS(' ', {$alias}.{$campo['dataIndex']}_paterno, {$alias}.{$campo['dataIndex']}_materno, {$alias}.{$campo['dataIndex']}_nombre) AS '{$campo['columnText']}'\n");
			break;		
			
			case 'boolean' :
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("CASE {$alias}.{$campo['dataIndex']} WHEN 0 THEN 'No' WHEN 1 THEN 'Sí' END AS '{$campo['columnText']}'\n");
			break;
			case 'ref' :
				//en country conviven también el catálogo currency
				switch($campo['store']){
					case 'currency':
						$campo['store'] = 'country';
					break;
					case 'organosextintos':
						$campo['store'] = 'organos';
					break;
				}
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("c{$campo['id']}.{$campo['displayField']} AS '{$campo['columnText']}'\n")
				->join('LEFT', "jtc_{$campo['store']} c{$campo['id']} ON c{$campo['id']}.id = {$alias}.{$campo['dataIndex']}");
			break;
			case 'ref2' :
				$fields["{$alias}.{$campo['dataIndex']}"] = $campo;
				$this->query->select("c{$campo['id']}.text AS '{$campo['columnText']}'\n")
				->join('LEFT', "jtc_general c{$campo['id']} ON c{$campo['id']}.id = {$alias}.{$campo['dataIndex']}");
			break;
			case 'Fexterna' :
			case 'Hexterna' :
				$fields//$rowexpanders
				["{$alias}.{$campo['dataIndex']}"] = $campo;
                                
                                break;
//				$this->query->select("calculatePath(f{$campo['id']}.id,f{$campo['id']}.filename) AS 'FIRMA {$campo['columnText']}'")
//				->join('LEFT', "jt_uploadedfiles f{$campo['id']} ON {$alias}.{$campo['dataIndex']} = f{$campo['id']}.id")
//				
//				->select("calculatePath(h{$campo['id']}.id, h{$campo['id']}.filename) AS 'HUELLA {$campo['columnText']}'\n")
//				->join('LEFT', "jt_uploadedfiles h{$campo['id']} ON {$alias}.{$campo['dataIndex']} = h{$campo['id']}.id");
			break;
			case 'NFempleado' :
				$fields//$rowexpanders
				["{$alias}.{$campo['dataIndex']}"] = $campo;
                                
                                break;
				$this->query->select("u_{$campo['id']}.name AS 'NOMBRE {$campo['columnText']}'")
				->select("calculatePath(f{$campo['id']}.id,f{$campo['id']}.filename) AS 'FIRMA {$campo['columnText']}'\n")
				->join('LEFT', "jt_uploadedfiles f{$campo['id']} ON {$alias}.{$campo['dataIndex']} = f{$campo['id']}.id")
				->join('LEFT', "jos_users u_{$campo['id']} ON f{$campo['id']}.created_by = u_{$campo['id']}.id");
			break;
			case 'parent' :
				$campo['alias'] = "c{$campo['id']}";
				$fields//$rowexpanders
				["{$alias}.{$campo['dataIndex']}"] = &$campo;
				$sub_tabla = '';
				if($campo['store'] == 'persons'){
					$this->query->select("CONCAT_WS(' ', c{$campo['id']}.paterno, c{$campo['id']}.materno, c{$campo['id']}.nombre) AS '{$campo['columnText']}'\n");
					$sub_tabla = 'jtsl_persons';
					$this->query->join('LEFT', "{$sub_tabla} c{$campo['id']} ON c{$campo['id']}.id_record = {$alias}.id AND c{$campo['id']}.id_field = {$campo['id']}");
				}else{
					$campo['fields'] = array();
					//$campo['rowexpanders'] = array();
					$this->getDbo()->setQuery("SELECT view FROM jtc_libros WHERE published AND clave = '{$campo['store']}' LIMIT 1 ;");
					$sub_tabla = $this->getDbo()->loadResult();
					$this->query->join('LEFT', "{$sub_tabla} c{$campo['id']} ON c{$campo['id']}.id_record = {$alias}.id AND c{$campo['id']}.id_field = {$campo['id']}\n");
					$this->navegaArbol($campo['store'], 'c'.$campo['id'], $campo['fields']);//, $campo['rowexpanders']
				}
			break;
		}
	}
	
	function navegaArbol($clave, $alias, &$fields = array()){//, &$rowexpanders = array()
		$this->getDbo()->setQuery("SELECT id, dataIndex, columnText, dataType, store, displayField FROM jt3_campos WHERE published AND clave = '{$clave}' ORDER BY ordering, id;");
		$campos = $this->getDbo()->loadAssocList('dataIndex');
		foreach($campos as $key => $campo){
			$this->integrarCampos($campo, $alias, $fields);//, $rowexpanders
		}
	}
	
	function getQuery(){
		return $this->query;
	}
	
	function getRecords(){
		$this->getDbo()->setQuery($this->query);
		return $this->getDbo()->loadAssocList();
	}
        
    private function getExpediente(){
        $torales = JModelLegacy::getInstance('Libros', 'Tsjdf_libros2Model')->getToralFieldLabels();
        
        $this->query->select("e.name AS '{$torales->expFriendlyName}', e.txt_tipojuicio AS '{$torales->tipojuicio}'\n");
        if($this->libro){
            $this->query->join('LEFT', "jt_expedientes e ON e.id = {$this->libro->alias}.id_expediente");
        }
        //solo quieren los datos del expediente
        else{
            $this->getDbo()->setQuery("SELECT o.id_materia, o.id_tipoorgano, 'e' AS 'alias'  FROM jt_expedientes e INNER JOIN jtc_organos o ON o.id = e.id_organo WHERE e.id = '{$this->id_expediente}';");
            $this->libro = $this->getDbo()->loadObject();
            if(!$this->libro) die('id_expediente invalido');
            
            $this->query->from('jt_expedientes e');
            $this->query->where("e.id = '{$this->id_expediente}'");
        }

    #si existen otros campos anidados (!= actor/demandado) no se mostrarían adecuadamente a causa del GROUP BY
    #por lo que de momento poner todos los nombres en una celda concatenando no va funcionar

        $this->query
        ->select("p.txt_ijuridico 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT', tp.text 'Tipo de persona'")
        ->select("p.fullname 'Nombre', p.curp 'CURP', p.rfc 'RFC', p.address 'Dirección'")		
        ->join('LEFT', 'jtvsl_partescontenciosas p ON p.id_field = 2156 AND p.id_record = e.id')
        ->join('LEFT', 'jtc_general tp ON tp.id = p.isMoral + 104');
//        $this->query
//        ->select("GROUP_CONCAT(DISTINCT CONCAT_WS('\t', p.fullname, p.address) SEPARATOR '\n') AS 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT'\n")
//        ->group("{$this->libro->alias}.id");

        $this->libro->fields["{$this->libro->alias}.id_organo"] = array('dataIndex'=>'id_organo', 'columnText'=>'ÓRGANO', 'dataType' => '');
        $this->libro->fields["{$this->libro->alias}.id_expediente"] = array('dataIndex'=>'id_expediente', 'columnText'=>'{$torales->expFriendlyName}', 'dataType' => '');
        $this->libro->fields['e.id_tipojuicio'] = array('dataIndex'=>'txt_tipojuicio', 'columnText'=>'{$torales->tipojuicio}', 'dataType' => '');

        /**
        * fake dataIndex, pongo estos campos belongTo
        * $this->libro->rowexpanders['p.partescontenciosas']
        */
        $this->libro->fields['p.partescontenciosas'] = 
            array('id'=> '2156', 'dataIndex'=>'partescontenciosas', 'columnText'=>'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT', 'dataType' => 'parent', 'store' => 'partescontenciosas', 'alias' => 'p');
    }
}
