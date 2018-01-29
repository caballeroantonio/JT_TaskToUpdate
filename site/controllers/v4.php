<?php
/**
 * @version     2.0.0
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */

// No direct access.
defined('_JEXEC') or die;

require_once JPATH_COMPONENT.'/controllers/ws.php';


class Tsjdf_libros2ControllerV4 extends Tsjdf_libros2ControllerWS
{
	protected $tableName = '';
	/**
	 *	ExtJS CRUD create task
	 *	Estoy haciendo un left join por código para el expFriendlyName, pero no lo estoy haciendo en el update; en el read lo cargo del objeto hijo y me ahorro un LEFT JOIN. Es confuso pero más óptimo.
	 */
	function create(){	
		$store = JRequest::getCmd('store');//libro o catalogo
		$json = json_decode(rawurldecode ($_POST['data']),1);
		
		$this->checkLogin();
		
		//ReadOnly group
		if(in_array(10, $this->user->getAuthorisedGroups())){
			$this->result['success'] = false;
			$this->result['message'] = 'No puedes generar registros';
		}

		if($this->result['success']){
			$tableSelect = '';
			//elijo la base de datos
			if($store=='libro' || $store == 'sublibro'){
				$this->setQuery("SELECT l.tabla, l.view, l.distribution, l.nombre, b.can_write 	
								,l.id_tipoorgano, l.id_materia
								FROM jtc_libros l 
							  LEFT JOIN jt_book_blacklist b ON b.id_book  = l.id AND b.id_user = '{$this->user->id}'
							  WHERE l.published 
							  AND l.clave = '{$this->clave}'
							  ;");
				$libro = $this->db->loadAssoc();
				
				//jt_book_blacklist
				if($libro['can_write'] == '0'){
					$this->result['success'] = false;
					$this->result['message'] .= JText::sprintf('LIBRODIGITAL_BLACK_LIST', " de escritura a {$libro['nombre']}");
				}
				
				$this->tableName = $libro['tabla'];
				$tableSelect = $libro['view'];
				/*
				si uso dataType != 'parent' excluye dataType IS NULL
				por eso uso NOT dataType <=> 'parent'
				*/
				$this->setQuery("SELECT columnText, dataIndex, dataType, store, displayField FROM jt3_campos WHERE  published AND clave = '{$this->clave}' AND NOT dataType <=> 'parent' ORDER BY ordering, id;");
				$campos = $this->db->loadObjectList('dataIndex');
			}else{
			  $this->result['success'] = false;
			  $this->result['message'] .= 'Opción no valida.<br/>';
			}
			
			if($this->result['success'])	
			foreach($json as $row){
				$object = new stdClass();
				$object->created = new DateTime();
				$object->created = $object->created->format('Y-m-d H:i:s');
				$object->created_by	= $this->user->id;

				$this->query = $this->db->getQuery(true);
				$this->query->select('l.*');

				if($store == 'libro' && $this->clave != 'expediente'){
					$object->id_expediente = $row['id_expediente'];
				}

				//ordering
				if($this->clave == 'expediente')
					$object->id_organo = $this->empleado->id_organo;
				else if($store=='libro'){
                                        $object->anoj = $row['anoj'];
					$object->id_organo = $this->empleado->id_organo;
						
					$queryOrdering = $this->db->getQuery(true);
					$queryOrdering->select('MAX(ordering)');
					$queryOrdering->from($tableSelect);
					$queryOrdering->where("anoj = '{$object->anoj}'");
					
					switch($libro['distribution']){
						case 2:
							//ordering por secretaria
							$queryOrdering->where("id_secretaria = '{$row['id_secretaria']}'", 'AND');
							$object->id_secretaria = $row['id_secretaria'];
						break;
						case 3:
							//ordering por usuario
							$queryOrdering->where("created_by = '{$this->user->id}'", 'AND');
						break;
						default:
							//ordering por organo
							$queryOrdering->where("id_organo = '{$this->empleado->id_organo}'", 'AND');
						break;
					}
					$this->setQuery( $queryOrdering );
					$object->ordering = $this->db->loadResult() + 1;
				}else if($store == 'sublibro'){
					$object->id_field = $row['id_field'];
					$object->id_record = $row['id_record'];
				}

				/*estos campos son combo*/
				foreach($campos as $campo){
					switch($campo->dataType){
						case 'person':
							unset($campos[$campo->dataIndex]);
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_paterno';
							$campo2->columnText .= '(A.Paterno)';
							$campo2->dataType = 'VARCHAR255';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_materno';
							$campo2->columnText .= '(A.Materno)';
							$campo2->dataType = '';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_nombre';
							$campo2->columnText .= '(A.Nombre)';
							$campo2->dataType = '';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_isMoral';
							$campo2->columnText .= '(Régimen)';
							$campo2->dataType = 'boolean';
							$campos[$campo2->dataIndex] = $campo2;
						break;
						case 'Fexterna':
						case 'Hexterna':
							$campos[$campo->dataIndex]->dataType = 'int';
						break;
						case 'suggest':
							unset($campos[$campo->dataIndex]);
							$campo2 = clone $campo;
//							$campo2->dataType = 'int';
//							$campos[$campo2->dataIndex] = 'id_'.$campo2;
							
							$campo2 = clone $campo;
							$campo2->dataType = 'VARCHAR255';
							$campo2->dataIndex = 'txt_'.$campo2->dataIndex;
							$campos[$campo2->dataIndex] = $campo2;
						break;
					}
				}
				
				foreach($row as $key => $value){
					if(!array_key_exists($key, $campos))
						continue;
					$campo = $campos[$key];
				
					switch($campos[$key]->dataType){
						case '':
						case 'VARCHAR255':
						case 'string':
						case 'multiline':
						case 'expediente':
							/*
								El formulario envía cadena vacia en lugar de NULL.
								Yo hago diferencia entre NULL y cadena vacia porque NULL es alwaysChange
							*/
							if($value === '')
								$value = NULL;
						break;
						case 'NFempleado':
							if(!$value)
								continue 2;
							else if($campo->store == 99 || $this->empleado->id_rol == $campo->store)
								;//$value = $this->empleado->id;
							else{
								$this->result['message'] .= "Tu perfil no te permite modificar el campo FIRMA {$campo->columnText}.<br/>";
								$this->result['warning'] = true;
								continue 2;
							}
						break;
						default:
						break;
					}
					$object->$key = $value;
				}
				
				if($this->result['success'])
					$this->checkRules($object, false);
				if($this->result['success']){
					try {
						$object = $this->save($object);
					} catch (Exception $e) {
						$this->result['success'] = false;
						$this->result['message'] .= "Se ha producido un error en la base de datos.<!--$e--><br/>";
						continue;
					}					
					
					$this->query->from($tableSelect . ' l');
					$this->query->where("l.id = '{$object->id}'");
					$this->setQuery($this->query);
					$this->db->query();
					array_push($this->result['data'],$this->db->loadAssoc());
					$this->result['message'] .= 'Registro creado.<br/>';
				}
			}
		}
		$this->finish();
	}


	/*
		ExtJS CRUD read task
		para catalogos pageSize: -1,
	*/
	public function read(){
		$store = JRequest::getCmd('store');//libro o catalogo
		$offset = JRequest::getInt('start',0);
		$limit = JRequest::getInt('limit',25);
		$page = JRequest::getInt('page',1);
		
		$this->query->select('*');
		
		if($store == 'libro' || $store == 'empleados'){
			$this->checkLogin();

			//jt_book_blacklist
			$this->setQuery("SELECT b.can_read FROM jtc_libros l
			LEFT JOIN jt_book_blacklist b ON b.id_book  = l.id AND b.id_user = '{$this->user->id}'
			WHERE l.published 
			AND l.clave = '{$this->clave}'
			;");
			$can_read = !($this->db->loadResult()== '0');
			if(!$can_read){
				$this->result['success'] = false;
				$this->result['message'] .= JText::sprintf('LIBRODIGITAL_BLACK_LIST', " de lectura");
				//$this->query->setLimit(0);//adelante se sobreescribe
			}
		}

		//cuando querymode = remote
		$queryRequest = JRequest::getString('query');
                		
		//elijo la base de datos
		if(!$this->result['success']){
			//:) !$this->result['success'] es false
		}else if($store == 'libro'){
			$this->query->clear('select');
			$this->query->select('l.*');
			$this->setQuery("SELECT id, tabla,view, distribution FROM jtc_libros WHERE published AND clave = '{$this->clave}';");
			$libro = $this->db->loadAssoc();
			$this->query->from("{$libro['view']} l");
			$this->query->where("l.id_organo = '{$this->empleado->id_organo}'", 'AND');
			$this->query->group('l.id');
			
			if($this->clave == 'expediente'){
				$id = JRequest::getInt('id',-1);//podría usar in_array('id', $_REQUEST) en lugar de if($id), no me conviene poner cero como condicion inicial
				if($id > 0)
					$this->query->where("l.id='{$id}'", 'AND');//solo carga un registro
				if($queryRequest){
                                    $queryRequest = $this->db->escape($queryRequest);
                                    $this->query->where("l.name LIKE '{$queryRequest}%'", 'AND');
                                }
			}else{
				$this->query->order('anoj DESC'); 
				switch($libro['distribution']){
					case 2://por secretaria
						if($this->empleado->id_secretaria)
							$this->query->where("l.id_secretaria = '{$this->empleado->id_secretaria}'", 'AND');
//						a los jueces se les dificultaría revisar
//						else
//							$this->query->order('l.id_secretaria'); 
					break;
					case 3://por usuario
						if($this->empleado->id_rol != 91)
							$this->query->where("l.created_by = '{$this->user->id}'", 'AND');
//						a los jueces se les dificultaría revisar
//						$this->query->order('l.created_by'); 
					break;
				}
				
				//no puede ir después del ordering		
				$sort = json_decode(JRequest::getVar('sort'),0);
				if($sort){
					if($sort[0]->property === 'e__name'){
						$this->query->order("e__ano {$sort[0]->direction}, e__numero {$sort[0]->direction}");
					}else{
						$this->query->order("{$sort[0]->property} {$sort[0]->direction}");
					}				
				}
				
				$this->query->order('ordering DESC');
                                
                                #agrega comentario para el T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
                                $this->query->select('t397.T397_comment');
                                $this->query->join('LEFT', "jt_t397 t397 ON t397.id = l.id AND t397.id_libro = {$libro['id']} AND t397.published");
                                
			}
		}else if($store=='empleados'){
			$this->query->from('jtvl_empleados');
			$this->query->order('id DESC');
			$this->result['token'] = JSession::getFormToken();
		}else if($store=='catalogo2'){
			$this->query->clear('select');
			$this->query->select('id, text');
			$this->query->from('jtc_general');
			$this->query->where('state = 1');
			$this->query->where("id_catalogo = '{$this->clave}'");
			$this->query->order('ordering ASC');
		}else if($store=='catalogo'){
			switch($this->clave){
				case 'acuerdo':
				case 'apelante': 
				case 'ejecutoria': 
				case 'libertades': 
				case 'reclusorios2': 
				case 'reclusorios3': 
				case 'resolucion7': 
				case 'resolucion8':
				case 'titular': 
				case 'tipoauxiliar':
				case 'lanzamientos':
				case 'tipodiligencia':
				case 'tipoapelacion':
				case 'devueltos':
				case 'enviados':
				case 'baja':
				case 'talvez':
				case 'tipoaudiencia':
				case 'asunto':
				case 'caracter': 
				case 'cuantia': 				
				case 'roles': 				
				case 'admision': 				
				case 'especialidades': 				
				case 'exhortos': 
				case 'informe': 
				case 'recurso': 
				case 'resolucion': 
				case 'resolucion2': 
				case 'resolucion3': 
				case 'resolucion4': 
				case 'resolucion5': 
				case 'resolucion6': 
				case 'clasificacion':
				case 'reclusorios':
				case 'situacion':
				case 'situacion2':
				case 'situacion3':
				case 'situacion4':
				case 'situacion5':
				case 'notificacion':
				case 'procedencia':
				case 'procedimiento':
				case 'amparo':
				case 'delegaciones':
				case 'motivo':
				case 'amparo2':
				case 'ejecucion':
				case 'autoridad':
				case 'libros':
				case 'tipoorgano':
				case 'materia':
				case 'entidadesf':
					$this->query->from("jtc_{$this->clave} l");
					break;
				case 'organos':
					$this->query->from('jtc_organos l');
					$this->query->order('id_tipoorgano, id_materia, published DESC, numero');
					break;
				case 'organos_wo':
                                        $this->query->clear('select');
                                        $this->query->select('id, organo');
					$this->query->from('jtc_organos l');
					$this->query->order('id_tipoorgano, id_materia, published DESC, numero');
					break;
				case 'organos_jp':
                                        $this->query->clear('select')
                                        ->select('id, organo')
                                        ->where('id_tipoorgano = 1')
                                        ->where('id_materia = 5')
                                        ->from('jtc_organos l')
                                        ->order('id_tipoorgano, id_materia, published DESC, numero');
					break;
				case 'organosextintos':
					$this->query->from("jtc_organos l");
					$this->query->where("published = false");
					$this->query->where("id_tipoorgano = '{$this->empleado->o__id_tipoorgano}'");
					$this->query->where("id_materia = '{$this->empleado->o__id_materia}'");
					$this->query->order('id_tipoorgano, id_materia, published DESC, numero');
					break;
				case 'magistradop':
					if($this->checkLogin())
						break;
                                        $this->query->clear('select')
                                        ->select('s.id AS "id", CONCAT_WS(" - ",s.secretaria,  u__name) "txt"')
					->from('jtc_secretarias s')
                                        ->join('LEFT', 'jtva_empleados e ON s.id_organo = e.e__id_organo AND s.id = e.e__id_secretaria AND e.e__id_rol = 91 AND e.u__block = 0')
                                        ->where('s.secretaria LIKE "Ponencia%"')
                                        ->where("s.id_organo = {$this->empleado->id_organo}")
                                        ->order('s.description');
					break;
				case 'tipojuicio':
					if($this->checkLogin())
						break;
					$this->query->clear('select')
					->select('id, tipojuicio')
					->from('jtvc_tipojuicio')
					->where("id_organo = '{$this->empleado->id_organo}'");
					break;
				case 'secretarias':
					if($this->checkLogin())
						break;
					
					$this->query->from('jtc_secretarias');
					$this->query->where("id_organo = '{$this->empleado->id_organo}'");
					break;
				case 'all_secretarias':
					$this->query->from('jtc_secretarias');
					break;
				case 'country':
					$this->query->from('jtc_country');
					$this->query->where('published');
					$this->query->order('ordering ASC');
					break;
				case 'currency':
					$this->query->from('jtc_country');
					$this->query->where('published_cur');
					$this->query->order('ordering_cur ASC');
					break;
				case 'municipios':
					//[{"property":"id_entidadf","value":2}]
					$filter = JRequest::getVar('filter');
					$property_filter = json_decode($filter, true);
					$this->query->from('jtc_municipios')
						->where("id_entidadf = '{$property_filter[0]['value']}'")
						->order('id_municipio');
					break;
				case 'ijuridico':
					if($this->checkLogin())
						break;
									/*
									109	Actor
									110	Demandado
									111	Victima
									112	Tercero
									113	Tercero llamado a juicio
									114	Adjudicatario
									115	Diverso Acreedor
									117     Sentenciado
									116     otro
127	Imputado
128	Acusado
129	Ofendido
130	Apelante
									*/
                                    $query_where_in = '116, 109, 110';
                                    switch($this->empleado->o__id_tipoorgano*1000+$this->empleado->o__id_materia){
                                        case 1001://Juzgado en materia Civil
                                            $query_where_in .= ',114, 115';
											if($this->empleado->o__numero<11)
												$query_where_in .= ',111, 112';
                                            break;
                                        case 1002://Juzgado Oral en Materia Civil
                                            $query_where_in .= ',113';
                                            break;
                                        case 2014://Sala de Ejecución de Sanciones Penales
                                            $query_where_in .= ',117';
                                            break;
										case 2005://Sala en materia penal
											$query_where_in .= ',127, 128, 129, 130';
										break;
                                    }
                                        
					$this->query->clear('select');
					$this->query->select('id, text');
					$this->query->from('jtc_general');
					$this->query->where('state = 1');
					$this->query->where("id_catalogo = '28'");
					$this->query->where("id IN ({$query_where_in})");
					$this->query->order('ordering ASC');
					
				break;
				default:
				  $this->result['success'] = false;
				  $this->result['message'] .= 'Opción no valida.<br/>';
				break;
			}
                }else if($store=='sublibro'){
                    //do nothing
					$this->result['message'] .= 'estás buscando phantomRecords!.<br/>';
                    $this->finish();
		}else{
		  $this->result['success'] = false;
		  $this->result['message'] .= 'Opción no valida.<br/>';
		}	
                
		$filter = JRequest::getVar('filter');
		if($this->result['success'] && $filter && $this->result['success']){
			$this->applyFilter( $filter, $this->query);
		}

		if($this->result['success']){
			try{
				if($limit>0)
					$this->query->setLimit($limit,$offset);
										
				if($this->clave == 'expediente' && $id == '0' ){
					$this->result['message'] .= 'estás buscando phantomRecords!.<br/>';
					$this->result['data'] = new stdClass();
					$this->query = $this->db->getQuery(true);
				}else{
                                    //catalogo con id=0,value=otros
                                    if(JRequest::getInt('wo',0)){
                                        $this->setQuery("({$this->query}) UNION SELECT 0, 'Otro'");
                                    }else{
                                        $this->setQuery($this->query);
                                    }
					$this->db->query();
					$this->result['data'] = $this->db->loadAssocList();
                                                      
                                      //si no hay datos en el repositorio de expedientes llama a opc
					if($store == 'libro' && $this->clave == 'expediente' && !sizeof($this->result['data'])){
//                                            /*
//                                             * si encuentra datos en opc y se guardaron 
//                                             * vuelve a cargar los datos del repositorio de expedientes
//                                             */
                                            if($this->getOPC($queryRequest, (object) [
                                                'id_organo' => $this->empleado->id_organo,
                                                'id_tipoorgano' => $this->empleado->o__id_tipoorgano,
                                                'id_materia' => $this->empleado->o__id_materia,
                                                'numero' => $this->empleado->o__numero,
                                              ])){
                                                $this->setQuery($this->query);
                                                $this->db->query();
                                                $this->result['data'] = $this->db->loadAssocList();
                                            }
                                        }
                                        
                                        //cargamos los datos anidados
                                        if($store == 'libro' && sizeof($this->result['data'])){
                                            $this->getExpedientes();
                                        }
				}
                                
				//<!--calcula el total-->
				if($limit>0 && $this->clave != 'expediente'){
					$this->query->clear('limit');
					$this->query->clear('select');
					$this->query->select('COUNT(*)');
                    $this->setQuery($this->query);
					$this->db->query();	
					$this->result['total'] = $this->db->loadResult();
				}
				$this->result['message'] .= 'Datos cargados.<br/>';
			} catch (Exception $e) {
				$this->result['success'] = false;
				$this->result['message'] .= "Se ha producido un error en la base de datos.<!--$e--><br/>";
			}
		}
//		print_r($this->result);return;
		$this->finish();
	}

	/**
		ExtJS CRUD update task
	*/
	function update(){
		$store = JRequest::getCmd('store');//libro o catalogo
		$json = json_decode(rawurldecode ($_POST['data']),1);
		
		$this->checkLogin();
		
		//ReadOnly group
		if(in_array(10, $this->user->getAuthorisedGroups())){
			$this->result['success'] = false;
			$this->result['message'] = 'No puedes modificar registros';
		}

		if($this->result['success']){
			$tableSelect = '';
			//elijo la base de datos
			if($store=='libro'){
				$this->setQuery("SELECT l.id, l.tabla, l.view, l.nombre, b.can_write 
								,l.id_tipoorgano, l.id_materia
								FROM jtc_libros l 
							  LEFT JOIN jt_book_blacklist b ON b.id_book  = l.id AND b.id_user = '{$this->user->id}'
							  WHERE l.published 
							  AND l.clave = '{$this->clave}';");
				$libro = $this->db->loadAssoc();

				//jt_book_blacklist
				if($libro['can_write'] === '0'){
					$this->result['success'] = false;
					$this->result['message'] .= JText::sprintf('LIBRODIGITAL_BLACK_LIST', " de escritura a {$libro['nombre']}");
				}

				$this->tableName = $libro['tabla'];
				$tableSelect = $libro['view'];
				
				/*
				si uso dataType != 'parent' excluye dataType IS NULL
				por eso uso NOT dataType <=> 'parent'
				*/
				$this->setQuery("SELECT columnText, alwaysChange, dataIndex, dataType, store, displayField FROM jt3_campos WHERE  published AND clave = '{$this->clave}' AND NOT dataType <=> 'parent' ORDER BY ordering, id;");
				$campos = $this->db->loadObjectList('dataIndex');
				
				if($this->empleado->is_admin){
					//quieren poder editar el ordering
					$ordering = new stdClass();
					$ordering->dataIndex = 'ordering';
					$ordering->columnText = 'No. Consecutivo';
					$ordering->dataType = 'int';
					$ordering->alwaysChange = 'true';
					$campos['ordering'] = $ordering;
				}
				
			}else if($store == 'sublibro'){
				$this->setQuery("SELECT id, tabla,view FROM jtc_libros WHERE published AND clave = '{$this->clave}';");
				$libro = $this->db->loadAssoc();
				$this->tableName = $libro['tabla'];
				$tableSelect = $libro['view'];
				
				$this->setQuery("SELECT CONCAT_WS('->', p.columnText, c.columnText) AS columnText, p.alwaysChange OR c.alwaysChange AS alwaysChange, c.dataIndex, c.dataType, c.store, c.displayField
					FROM jt3_campos c
					INNER JOIN jt3_campos p ON c.clave = p.store
					WHERE c.published AND p.published AND c.clave = '{$this->clave}' AND p.dataType = 'parent' AND p.id = {$json[0]['id_field']} ORDER BY c.ordering, c.id;");
				$campos = $this->db->loadObjectList('dataIndex');
			}else{
			  $this->result['success'] = false;
			  $this->result['message'] .= 'Opción no valida.<br/>';
			}
		}
		
		if($this->result['success'])
		foreach($json as $row){
                    
                    #T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
                    $this->setQuery("SELECT * FROM jt_t397 WHERE id = {$row['id']} AND id_libro = {$libro['id']} AND published;");
                    $t397 = $this->db->loadObject();
                    
                    if($t397){
                        $this->result['success'] = false;
                        $this->result['message'] .= JText::sprintf('LIBRODIGITAL_T397_NOUPDATE', $t397->T397_comment);
                        break;
                    }
                    
			$object = new stdClass();
			$object->id = $row['id'];
			$object->modified = new DateTime();
			$object->modified = $object->modified->format('Y-m-d H:i:s');
			$object->modified_by = $this->user->id;
			
			$this->query = $this->db->getQuery(true);
			$this->query->select('*');
		
			$this->setQuery("SELECT * FROM {$this->tableName} WHERE id = '{$object->id}' ;");
			$record2update = $this->db->loadAssoc();
			
			if($store == 'libro' && $this->clave != 'expediente'){
				$campo2 = new stdClass();
				$campo2->dataIndex = 'id_expediente';
				$campo2->columnText = '(Expediente)';
				$campo2->dataType = 'int';
				$campo2->alwaysChange = true;
				$campos['id_expediente'] = $campo2;
			}
			
			$is_time_valid_update = strtotime('+1 day', strtotime($record2update['created']))-time()>0?1:0;

				/*estos campos son combo*/
				foreach($campos as $campo){
					switch($campo->dataType){
						case 'person':
							unset($campos[$campo->dataIndex]);
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_paterno';
							$campo2->columnText .= '(A.Paterno)';
							$campo2->dataType = 'VARCHAR255';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_materno';
							$campo2->columnText .= '(A.Materno)';
							$campo2->dataType = '';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_nombre';
							$campo2->columnText .= '(A.Nombre)';
							$campo2->dataType = '';
							$campos[$campo2->dataIndex] = $campo2;
							
							$campo2 = clone $campo;
							$campo2->dataIndex .= '_isMoral';
							$campo2->columnText .= '(Régimen)';
							$campo2->dataType = 'boolean';
							$campos[$campo2->dataIndex] = $campo2;
						break;
						case 'Fexterna':
						case 'Hexterna':
							$campos[$campo->dataIndex]->dataType = 'int';
						break;
						case 'suggest':
							unset($campos[$campo->dataIndex]);
							$campo2 = clone $campo;
//							$campo2->dataType = 'int';
//							$campos[$campo2->dataIndex] = 'id_'.$campo2;
							
							$campo2 = clone $campo;
							$campo2->dataType = 'VARCHAR255';
							$campo2->dataIndex = 'txt_'.$campo2->dataIndex;
							$campos[$campo2->dataIndex] = $campo2;
						break;
					}
			}
                        
			foreach($row as $key => $value){
				if(!array_key_exists($key, $campos))
					continue;
				$campo = $campos[$key];
				$is_alwayschange = is_null($record2update[$key]) || $is_time_valid_update || $campo->alwaysChange || $this->empleado->is_admin;
			
				switch($campos[$key]->dataType){
					case '':
					case 'VARCHAR255':
					case 'string':
					case 'multiline':
					case 'expediente':
						/*
							El formulario envía cadena vacia en lugar de NULL.
							Yo hago diferencia entre NULL y cadena vacia porque NULL es alwaysChange
						*/
						if($value === '')
							$value = NULL;
					break;
					case 'NFempleado':
						if(!$value)
							continue 2;
						else if($campo->store == 99 || $this->empleado->id_rol == $campo->store)
							;//$value = $this->empleado->id;
						else{
							$this->result['message'] .= "Tu perfil no te permite modificar el campo FIRMA {$campo->columnText}.<br/>";
							$this->result['warning'] = true;
							continue 2;
						}
					break;
					default:
					break;
				}
                                /*
                                 * //xml object requires all fields, so I must omit:
                                 * //& $record2update[$key] !== $value
                                 * // false == NULL por eso puse !==
                                 */
				if($is_alwayschange ){
					$object->$key = $value;
				}
				else if($record2update[$key] != $value){
					$this->result['message'] .= "{$campo->columnText} ({$value}) no se puede modificar.<br/>";
					$this->result['warning'] = true;
				}
			}

			if($this->result['success'])
				$this->checkRules($object, true);
			if($this->result['success']){
				try {
						$object = $this->save($object);
				} catch (Exception $e) {
					$this->result['success']=false;
					$this->result['message'] .= "Se ha producido un error en la base de datos.<!--{$e}--><br/>";
					continue;
				}
				
				$this->query->from($tableSelect);
				$this->query->where("id = '{$object->id}'");
				$this->setQuery($this->query);
				$this->db->query();
				array_push($this->result['data'],$this->db->loadAssoc());
				$this->result['message'] .= 'El registro fue actualizado.<br/>';
			}
		}
		$this->finish();
	}
	
	/*
		ExtJS CRUD destroy task
	*/
	function destroy(){
		
		$store = JRequest::getCmd('store');//libro o catalogo
				
		$json = json_decode(rawurldecode ($_POST['data']),1);
		
		$this->adminOnly();
		
		if($this->result['success']){
			$this->setQuery("SELECT tabla FROM jtc_libros WHERE published AND clave = '{$this->clave}';");
			$libro = $this->db->loadAssoc();
			$table = $libro['tabla'];
			if($store == 'sublibro'){
				foreach($json as $row){
					$this->setQuery("DELETE FROM {$table} WHERE id = {$row['id']};");
					$this->db->query();
				}
			}elseif($store=='libro'){
				$this->setQuery("SELECT c.id, l.tabla
FROM jt3_campos c
INNER JOIN jtc_libros l ON l.clave = c.store

WHERE 1
AND c.published AND c.clave = '{$this->clave}' AND c.dataType = 'parent'");
				$campos = $this->db->loadObjectList();
				foreach($json as $row){
					foreach($campos as $campo){
						$this->setQuery("DELETE FROM {$campo->tabla} WHERE id_field = '{$campo->id}' AND id_record='{$row['id']}';");
						$this->db->query();
					}
					$this->setQuery("DELETE FROM {$table} WHERE id = '{$row['id']}';");
					$this->db->query();
				}				
			}else{
			  $this->result['success'] = false;
			  $this->result['message'] .= 'Opción no valida.<br/>';
			}
		}
		$this->finish();
	}
	
	private function checkRules($object, $update = false){
		switch($this->clave){
//			case 'ejemplo':
////			case 'expediente':
//				$this->result['success'] = false;
//				$this->result['message'] .= 'probando un error.<br/>';
//			break;
			//@rule Solicitaron que no acepte duplicados en el No de Oficio (field10 es obligatorio en la interfaz), pregunta el ano judicial del registro
			case 'ljc08':
				if(!property_exists($object,'field10'))
					break;
				if($update){
					$this->setQuery("SELECT anoj FROM jt_ljc08s WHERE id = '{$object->id}'");
					$this->db->query();
					$anoj = $this->db->loadResult();
				}

				$this->setQuery("SELECT COUNT(*) FROM jt_ljc08s WHERE field10 = '{$object->field10}' AND id_organo = '{$this->empleado->id_organo}'". ($update?" AND id != '{$object->id}'":"") . ' AND anoj = ' .($update? $anoj : $object->anoj ) );
				$this->db->query();
				$count = $this->db->loadResult();
				if($count){
					$this->result['success'] = false;
					$this->result['message'] .= 'El oficio ya está registrado.<br/>';
				}
			break;
                        //@rule Fecha de entrega (field12)debe ser igual o mayor a la Fecha de cuando se gira oficio(field11)
			/*case 'ljf14':
				if($object->field11 && $object->field12){
					$field11 =  strtotime($object->field11);
					$field12 =  strtotime($object->field12);
					if($field11 > $field12){
						$this->result['success'] = false;
						$this->result['message'] .= 'La fecha de entrega a la dirección de multas judiciales debe ser mayor o igual a la fecha en que se gira el oficio a la oficina recaudadora del TSJDF.<br/>';
					}
				}
			break;*/
                        //@rule Sólo secretarios de acuerdos y jueces puede editar las observaciones
			case 'ljpdng01':
				if(isset($object->field15) && !($this->empleado->id_rol == 91 || $this->empleado->id_rol == 92)  ){
					unset($object->field15);
					$this->result['message'] .= 'Sólo secretarios de acuerdos y jueces puede editar las observaciones.<br/>';
					$this->result['warning'] = true;
				}
			break;
			//Escribe el expFriendlyName
			case 'expediente':
				if($update)
					break;
				$object->name = "{$object->numero}/{$object->ano}";
				if($object->nrecurso)
					$object->name .= "/{$object->nrecurso}";
				if($object->bis)
					$object->name .= " {$object->bis} Bis";
				if($object->id_tipoarchivo){
					$this->setQuery("SELECT text FROM jtc_general WHERE id = '{$object->id_tipoarchivo}';");
					$object->name .= ' '.$this->db->loadResult();
				}
				
			break;
		}
                
                /**
                 * valida billetes no repetidos
                 */
                if(property_exists($object, 'billete') && $object->billete){
                    $query = $this->db->getQuery(true);
                    $query->select('GROUP_CONCAT(e.name, " del ", o.organo) billetes')
                    ->from("{$this->tableName} l")
                    ->join('LEFT', 'jt_expedientes e ON e.id = l.id_expediente')
                    ->join('LEFT', 'jtc_organos o ON o.id = l.id_organo');
                    $query->where('l.billete = '. $this->db->quote($object->billete));
                    if(isset($object->id))
                        $query->where("l.id != {$object->id}");
                        
                    $this->setQuery($query);
                    $billetes = $this->db->loadResult();
                    if($billetes){
                        $this->result['success'] = false;
                        $this->result['message'] .= "El valor ya está registrado en {$billetes}.<br/>";
                    }
                }
	}

	/*
	expedienteSearch = false; búsqueda de registros en libros
	expedienteSearch = true; búsqueda de expedientes
	
	*/
	private function getExpedientes(){
        $from = 'jtvsl_partescontenciosas';
        $alias = '';
        
        
		if($this->clave == 'expediente'){
			foreach($this->result['data'] as &$expediente){
                $this->setQuery("SELECT * FROM {$from} WHERE {$alias}id_field = 2156 AND {$alias}id_record = '{$expediente['id']}';");
                $expediente['partescontenciosas'] = $this->db->loadAssocList();
			}
			return;
		}
		
		foreach($this->result['data'] as &$record){
			if(!$record['id_expediente'])
				continue;
			$this->setQuery("SELECT * FROM jt_expedientes WHERE id = '{$record['id_expediente']}';");
			$expediente = $this->db->loadAssoc();
                        if(!$expediente)
				continue;
            $this->setQuery("SELECT * FROM {$from} WHERE {$alias}id_field = 2156 AND {$alias}id_record = '{$expediente['id']}';");
			$expediente['partescontenciosas'] = $this->db->loadAssocList();
            
			$record['expediente'] = $expediente;
		}
		$this->getSubrecords();
	}
	
	private function getSubrecords(){
		//<!--la informacion de los 2 querys se puede almacenar en un json en jtc_libros-->
		$this->setQuery("SELECT c.id, c.dataIndex, l.view FROM jt3_campos c INNER JOIN jtc_libros l ON c.store = l.clave WHERE c.published AND l.published AND c.clave = '{$this->clave}' AND c.dataType = 'parent';");
		$this->db->query();
		$subrecords = $this->db->loadObjectList();
		
		if($subrecords)
		foreach($this->result['data'] as &$record){
			foreach($subrecords as $parent){
				$this->setQuery("SELECT * FROM {$parent->view} WHERE id_field = '{$parent->id}' AND id_record = '{$record['id']}'");
				$this->db->query();
				$record[$parent->dataIndex] = $this->db->loadAssocList();
			}
		}
	}
	
	function uploadfile(){
		if($this->checkLogin()){
			$this->finish();
			return;
		}
		/*
		//en caso de que necesite pasar argumentos post al atachment
		foreach($_POST as $key=>$value){//$key = nombre del campo
			$this->result['data'][$key] = 'algun valor de retorno para cada field para que lo busque js';
			if($value == ''){
				$this->result['success'] = false;
				$this->result['errors'][$key] = 'Error porque ...';
				$this->result['message'] .= "Falta {$key}<br/>";
			}
		}
		*/
		foreach($_FILES as $key=>$file){
			if($file["type"] != "image/jpeg" ){
				$this->result['success'] = false;
				$this->result['message'] .= 'Petición rechazada<br/>';
				$this->result['errors'][$key] = "{$file['name']} es un tipo de archivo inválido";
				break;
			}
			$object = new stdClass();
			$object->created = new DateTime();
			$object->created = $object->created->format('Y-m-d H:i:s');
			$object->created_by	= $this->user->id;
			$object->filename = time().'-'.JUserHelper::genRandomPassword(8).'.jpg';
			
			$object->id_type = JRequest::getInt('id_type',0);
			
			$this->db->insertObject("jt_uploadedfiles", $object);
			$object->id = $this->db->insertid();
									
			$dest = $this->calculatePath($object->id);
			if(!file_exists($dest))
				mkdir($dest, 0777, true);
			
			$dest .= $object->filename;
			$this->result['success'] &= move_uploaded_file($file["tmp_name"], $dest);
			$this->result['data'][$key] = $object->id;
			$this->result['data'][$key."_file"] = $dest;
			//$this->result['errors'][$key] = 'Error porque ...';
		}
		
		if($this->result['success'])
			$this->result['message'] .= 'Files uploaded!<br/>';
		$this->finish();
	}
	
	/*
	Convierte un entero a hexagesimal de 8 caracteres separados por slash
	uploads/xx/xx/xx/xx/
	*/
	private function calculatePath($val){
		$val = $val/1024;
		$mask = "";
		for($i=1;$i<12;$i++){
			if(!($i%3)){
				$mask = "/" . $mask;
				continue;
			}
			$mask = substr(dechex($val),-1) . $mask;
			$val = $val>>4;

		}
		$mask = strtoupper($mask);
		return "uploads/$mask/";
	}
	
	/**
	* Busca un expediente en OPC
	* return false si no es exitoso o pone el resultado en $this->result['data'][0]
         * @param string $expediente text like 1000/2015/6 5 Bis Expediente principal
         * @param object {id_organo,id_tipoorgano, id_materia, numero}
	*/
	private function getOPC($expediente, $params){
/*		
			$queryRequest = '1000/2015/6 5 Bis Expediente principal';
	\/		Array ( [0] => 1000 [1] => 2015 [2] => 6 5 Bis Expediente principal ) 
	\W		Array ( [0] => 1000 [1] => 2015 [2] => 6 [3] => 5 [4] => Bis [5] => Expediente [6] => principal ) 
	\D		Array ( [0] => 1000 [1] => 2015 [2] => 6 [3] => 5 [4] => ) 
	\s		Array ( [0] => 1000/2015/6 [1] => 5 [2] => Bis [3] => Expediente [4] => principal ) 
*/
		$expediente = preg_split('/\W/', $expediente);//la fórmula se pude mejorar para buscar expediente/ano
		if(count($expediente)<2)
			return;
		$is_juzgado = $params->id_tipoorgano==1;
		
		
		switch($params->id_tipoorgano*1000+$params->id_materia){
			// id_tipoorgano	id_materia
			case 1001: $clave_materia='C'; break;	//	1	1	Juzgado en materia Civil
			case 1002: $clave_materia='V'; break;	//	1	2	Juzgado Oral en Materia Civil
			case 1003: $clave_materia='U'; break;	//	1	3	Juzgado en materia Civil de Cuantía Menor
			case 1004: $clave_materia='F'; break;	//	1	4	Juzgado en materia Familiar
			case 1005: $clave_materia='P'; break;	//	1	5	Juzgado en materia Penal
			case 1006: $clave_materia='L'; break;	//	1	6	Juzgado en materia Penal de Delitos No Graves
			//case 1008: $clave_materia='E'; break;	//	1	8	Juzgado en materia de Justicia para Adolescentes para Delitos Graves
			//case 1009: $clave_materia='O'; break;	//	1	9	Juzgado en materia de Justicia para Adolescentes para Delitos No Graves
			case 1010: $clave_materia='S'; break;	//	1	10	Juzgado en materia Penal de Ejecución de Sentencias
			case 1011: $clave_materia='R'; break;	//	1	11	Juzgado Oral en Materia Familiar
			//case 1012: $clave_materia='???'; break;	//	1	12	Juzgado Especializado en Ejecucion de Medidas Sancionadoras en Materia de Justicia para Adolescentes
//			case 2001: $clave_materia='C'; break;	//	2	1	Sala en materia Civil
//			case 2004: $clave_materia='F'; break;	//	2	4	Sala en materia Familiar
			//case 2005: $clave_materia='P'; break;	//	2	5	Sala en materia Penal
			//case 2007: $clave_materia='???'; break;	//	2	7	Sala Justicia para Adolescentes
			//case 3001: $clave_materia='C'; break;	//	3	1	Consignaciones en materia Civil
			//case 3005: $clave_materia='P'; break;	//	3	5	Consignaciones en materia Penal
			default:
				//case 2007: $clave_materia='?????'; break;	//	2	7	Sala en materia de Justicia para Adolescentes
				$clave_materia='';
				return;
			break;
		}
		
		//generar el link curl -v 'http://LIBROGOB:cantera@10.8.2.160:8080/opc/api/expediente.json?materia=F&juzgado=37&expediente=2440&anio=2014'
//		$link = 'http://opc.cantera-tech.com:8080/opc/api/expediente.json?materia=F&juzgado=37&expediente=2440&anio=2014';
		$link = $this->params->get('opc_address').
		($is_juzgado?'expediente':'toca').
		'.json?materia='.$clave_materia.'&'.
		($is_juzgado?'juzgado':'sala').
		"={$params->numero}&".($is_juzgado?'expediente':'toca')."={$expediente[0]}&anio={$expediente[1]}";
		
		 $opc = $this->getUrlContent($link);
                 if(!$opc){
                     if($this->user->id == 1)
                         $this->result['message'] .= "error con {$link}. <br/>";
                     return;
                 }
		 
			$expediente = new stdClass();
			$expediente->txt_opc	= $opc;
			$opc = json_decode($opc);//false stdClass , true Array

			$expediente->created = new DateTime();
			$expediente->created = $expediente->created->format('Y-m-d H:i:s');
			$expediente->name = "{$opc->expediente}/{$opc->anio} {$opc->tipo_registro}";//tipo_registro no está homogeneo con id_tipoarchivo
			$expediente->id_opc	= $opc->id_opc;
			$expediente->numero	= $opc->expediente;
			$expediente->ano = $opc->anio;
			
			//especificos del usuario
			$expediente->created_by	= $this->user->id;
			$expediente->id_organo = $params->id_organo;
			
			//especificos de OPC
			$expediente->id_tipojuicio	= 53;// los catálogos no están homologados por lo que se usa jtc_tipojuicio.53 = 'otro ...'

			$this->setQuery("SELECT tipojuicio FROM jtc_tipojuicioopc WHERE id = '{$opc->tipo_juicio}';");
			$expediente->txt_tipojuicio	= $this->db->loadResult();

			$this->db->insertObject("jt_expedientes", $expediente);
			$expediente->id = $this->db->insertid();
			
			//partes contenciosas
			foreach($opc->actores as $actor){
				$actor->created = $expediente->created;
				$actor->created_by= $expediente->created_by;
				$actor->id_field= 2156;
				$actor->id_ijuridico= 109;
				$actor->id_record= $expediente->id;
				//$actor->nombre se pone solo
				$actor->isMoral= $actor->tipo_persona=='M';unset($actor->tipo_persona);
				$actor->paterno= $actor->primer_apellido; unset($actor->primer_apellido);
				$actor->materno= $actor->segundo_apellido; unset($actor->segundo_apellido);
				if($actor->isMoral)
					$actor->paterno = $actor->razon_social;
				unset($actor->razon_social);
				$this->db->insertObject("jtsl_partescontenciosas", $actor);
				$actor->id = $this->db->insertid();
				$expediente->partescontenciosas[] = $actor;
			}
			foreach($opc->demandados as $demandado){
				
				$demandado->created = $expediente->created;
				$demandado->created_by= $expediente->created_by;
				$demandado->id_field= 2156;
				$actor->id_ijuridico= 110;
				$demandado->id_record= $expediente->id;
				//$demandado->nombre se pone solo
				$demandado->isMoral= $demandado->tipo_persona=='M';unset($demandado->tipo_persona);
				$demandado->paterno= $demandado->primer_apellido; unset($demandado->primer_apellido);
				$demandado->materno= $demandado->segundo_apellido; unset($demandado->segundo_apellido);
				if($demandado->isMoral)
					$demandado->paterno = $demandado->razon_social;
				unset($demandado->razon_social);
				$this->db->insertObject("jtsl_partescontenciosas", $demandado);
				$demandado->id = $this->db->insertid();
				$expediente->partescontenciosas[] = $demandado;
			}			
//		$this->result['data'][0] = $expediente;
            return true;
	}
        
        
    /**
     * views\admin\tmpl\get_exp.php
     * index.php?option=com_tsjdf_libros2&task=reports.getExpediente
     */
    public function findExpediente(){
        $this->checkLogin(1);
        $e = JRequest::getVar('e');
        
         //voy a utilizar las variables sin quote
        foreach ($e as $key => $value) {
//          $e[$key] = $this->db->quote($value);
            if(!is_numeric($value))
                die('sólo numeros');
        } 
        
        $query = "SELECT 
e.id
,o.organo AS 'ÓRGANO'
,e.name AS 'Expediente', e.numero 'Número', e.ano 'Año', e.txt_tipojuicio AS 'Tipo de juicio'
,p.txt_ijuridico 'COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT', tp.text 'Tipo de persona',p.fullname 'Nombre'
, p.address 'Dirección'
FROM jt_expedientes e 
LEFT JOIN jtc_organos o ON o.id = e.id_organo
LEFT JOIN jtvsl_partescontenciosas p ON p.id_field = 2156 AND p.id_record = e.id
LEFT JOIN jtc_general tp ON tp.id = p.isMoral + 104
WHERE 1
AND e.id_organo = ". $this->db->quote($e['id_organo']) ."
AND e.numero = ". $this->db->quote($e['numero']) ."
AND e.ano = ". $this->db->quote($e['ano']) ."
;";
        $this->setQuery($query);
        $this->db->query();
        $this->result['data'] = $this->db->loadAssocList();
        $success = sizeof($this->result['data']);
        if( !$success ){
            
            $this->setQuery("SELECT * FROM jtc_organos WHERE id = {$e['id_organo']};");
            $this->db->query();
            $organo = $this->db->loadObject();
            $organo->id_organo = $organo->id;
            $success = $this->getOPC("{$e['numero']}/{$e['ano']}", $organo);
        }
        if(!$success)
            die("can't get the expediente.");
        $this->exportQuery("Expedientes", $query);
    }
                
	function getUrlContent($url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 5);
		curl_setopt($ch, CURLOPT_USERPWD, 'LIBROGOB:cantera');
		$data = curl_exec($ch);
		$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		
		if($httpcode == 200){
		   return $data;
		}else{
			$this->result['success'] = false;
			$this->result['message'] .= "Ha surgido una situación con la comunicación con OPC.<br/>";
//			echo $httpcode.'<br/>'.$url;die;
		  return false;
		}
	}
        
        /**
         * agrega comentario para el T397 MODULO DE AYUDAS PARA AUDITORIAS INTERNAS
         */
        public function setT397Comment(){
            #permisos
            $this->checkLogin();
            //ReadOnly group
            if(!in_array(11, $this->user->getAuthorisedGroups())){
                    $this->result['success'] = false;
                    $this->result['message'] = 'No tienes privilegios para realizar la acción';
                    $this->finish();
                    return;
            }
            
            #datos
            $this->clave = JRequest::getCmd('clave');	
            $json = json_decode(rawurldecode ($_POST['data']),1);
            
            $this->setQuery("SELECT l.* FROM jtc_libros l
                WHERE l.published 
                AND l.clave = '{$this->clave}';");
            $libro = $this->db->loadAssoc();
            
            foreach($json as $row){
                
                $row['published'] = !empty($row['T397_comment']);
                
                $this->setQuery("INSERT INTO jt_t397 (id, id_libro, T397_comment, published, created, created_by) VALUES
                  ({$row['id']}, {$libro['id']}, {$this->db->quote($row['T397_comment'])}, {$this->db->quote($row['published'])}, NOW(), {$this->db->quote($this->user->id)})
                  ON DUPLICATE KEY UPDATE T397_comment={$this->db->quote($row['T397_comment'])}, published = {$this->db->quote($row['published'])},
				  modified = NOW(), modified_by = {$this->db->quote($this->user->id)}
				  ;");

                $this->db->query();
//                array_push($this->result['data'],$this->db->loadAssoc());//no estoy retornando datos
                $this->result['message'] .= 'El registro fue actualizado.<br/>';
            }
            $this->finish();
        }
        
	function getOPCTest(){
		$vars = Jrequest::getVar('opc');
		$db	= JFactory::getDBO();
		$db->setQuery("SELECT * FROM jtc_organos WHERE id = {$vars['id_organo']};");
		$organo = $db->loadObject();
		
		$is_juzgado = $organo->id_tipoorgano ==1;
		$clave_materia='';
		switch($organo->id_tipoorgano*1000+$organo->id_materia){
			// id_tipoorgano	id_materia
			case 1001: $clave_materia='C'; break;	//	1	1	Juzgado en materia Civil
			case 1002: $clave_materia='V'; break;	//	1	2	Juzgado Oral en Materia Civil
			case 1003: $clave_materia='U'; break;	//	1	3	Juzgado en materia Civil de Cuantía Menor
			case 1004: $clave_materia='F'; break;	//	1	4	Juzgado en materia Familiar
			case 1005: $clave_materia='P'; break;	//	1	5	Juzgado en materia Penal
			case 1006: $clave_materia='L'; break;	//	1	6	Juzgado en materia Penal de Delitos No Graves
			case 1008: $clave_materia='E'; break;	//	1	8	Juzgado en materia de Justicia para Adolescentes para Delitos Graves
			case 1009: $clave_materia='O'; break;	//	1	9	Juzgado en materia de Justicia para Adolescentes para Delitos No Graves
			case 1010: $clave_materia='S'; break;	//	1	10	Juzgado en materia Penal de Ejecución de Sentencias
			case 1011: $clave_materia='R'; break;	//	1	11	Juzgado Oral en Materia Familiar
			case 2001: $clave_materia='C'; break;	//	2	1	Sala en materia Civil
			case 2004: $clave_materia='F'; break;	//	2	4	Sala en materia Familiar
			case 2005: $clave_materia='P'; break;	//	2	5	Sala en materia Penal
			case 2007: $clave_materia='?????'; break;	//	2	7	Sala en materia de Justicia para Adolescentes
			case 3001: $clave_materia='C'; break;	//	3	1	Consignaciones en materia Civil
			case 3005: $clave_materia='P'; break;	//	3	5	Consignaciones en materia Penal
		}
		
//		$is_juzgado = false;$clave_materia='S';$organo->numero = 1;
		
		//generar el link
//		$link = 'http://opc.cantera-tech.com:8080/opc/api/expediente.json?materia=F&juzgado=37&expediente=2440&anio=2014';
		$params = JComponentHelper::getParams('com_tsjdf_libros2');
		$link = $params->get('opc_address').
		($is_juzgado?'expediente':'toca').
		'.json?materia='.$clave_materia.'&'.
		($is_juzgado?'juzgado':'sala').
		"={$organo->numero}&".($is_juzgado?'expediente':'toca')."={$vars['expediente']}&anio={$vars['anio']}";

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $link);
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 5);
		curl_setopt($ch, CURLOPT_USERPWD, 'LIBROGOB:cantera');
		$data = curl_exec($ch);
		$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		switch($httpcode){
			case 200:
				$this->result['success'] = true;
				$this->result['message'] = "Consulta realizada";
				$this->result['data'] = $data;
			break;
			case 401:
				$this->result['success'] = false;
				$this->result['message'] = "No autenticado";
			break;
			case 403:
				$this->result['success'] = false;
				$this->result['message'] = "Sin permisos";
			break;
			case 404:
				$this->result['success'] = false;
				$this->result['message'] = "No encontrado";
			break;
			case 500:
				$this->result['success'] = false;
				$this->result['message'] = "Error de sistema";
			break;
			default:
				$this->result['success'] = false;
				$this->result['message'] = "Error inesperado";
			break;
		}
		$this->result['link'] = $link;
//		echo json_encode($result);	
                $this->finish();
		
	}
    
    /**
     * I'll try to avoid save direct to DB, better use JTable and J! rules
//        $_POST['jform']['id'] = '4';
//        $_POST['jform']['field7']='3.2';
//        $_POST['jform']['id_expediente']='151';
//        $data  = JFactory::getApplication()->input->post->get('jform', array(), 'array');

        //admin
        //$model = JModelLegacy::getInstance($this->clave,"{$component}Model", array('ignore_request' => FALSE));
        ////$form = $model->getForm();
        //$saved = $model->save($data);
        //echo "=={$saved}==";
        //return;
     */
    function save($object){
        $component='jtca';
        $JTable_file = JPATH_ADMINISTRATOR . "/components/com_{$component}/tables/{$this->clave}s.php";
        //mediante componente adicional
        if(file_exists($JTable_file)){
            $object = (array) $object;
            JForm::addFormPath(JPATH_SITE . "/components/com_{$component}/models/forms/");
            require_once JPATH_SITE . "/components/com_{$component}/models/{$this->clave}form.php";
            require_once JPATH_ADMINISTRATOR . "/components/com_{$component}/tables/{$this->clave}s.php";
            JFactory::getLanguage()->load("com_{$component}", JPATH_SITE);

            $model = JModelLegacy::getInstance("{$this->clave}form","{$component}Model", array('ignore_request' => false));
            $form	= $model->getForm();
            //valida
            if (!$model->validate($form, $object)){
                // Get the validation messages.
                $errors	= $model->getErrors();
                // Push up to three validation messages out to the user.
                for ($i = 0, $n = count($errors); $i < $n AND $i < 3; $i++)
                {
                    if (JError::isError($errors[$i])){
                        $this->result['message'] .= $errors[$i]->getMessage().'<br/>';
                    }else{
                        $this->result['message'] .= $errors[$i].'<br/>';
                    }
                }
                throw new Exception('Error');
            }
            //guarda
            else if($model->save($object)){
                $object['id'] = $model->getItem()->id;
            }else{
                $this->result['message'] .= $model->getError().'<br/>';
                throw new Exception('Error');
            }
            
            
            
            $object = (object) $object;
        }
        //directo a la base
        else{
            if (isset ($object->id) && $object->id != 0){
                $this->db->updateObject($this->tableName, $object, 'id',true);
            }else{
                $this->db->insertObject($this->tableName, $object);
                $object->id = $this->db->insertid();                
            }
        }
        
        return $object;
    }
}