<?php
/**
	@Author: evaristocrates
	@Description: 
	Realiza pruebas de insert en jtc_libros, mediante request
	"index.php?option=com_tsjdf_libros2&task=v4.create&store=libro&clave", 
	consulta de campos y especificacion de valores default para campos torales
	
	@Dependencies: 
	Para la obtencion de los nombre y tipo de dato de cada columna se hace uso de la vista jt3_vs_ca, 
	se han generado expedientes default (and e.numero = 1 and  e.ano = '2015') para cada libro.
	Para que funcione es necesario obtener de un Curl la siguinete linea "Cookie: a3e..."y reemplazarla mas abajo.

	@TODO: 
	Integrar en un esquema JUnit (Pruebas unitarias), 
	automatizar la obtencion de session, 
	integrar en este u otro archivo la actualizacion, ademas de insert (Funciones CRUD). 
	
*/


    define('_JEXEC', 1);
    define('JPATH_BASE', realpath(dirname(__FILE__) . '/../'));  
    require_once JPATH_BASE . '/includes/defines.php';
    require_once JPATH_BASE . '/includes/framework.php';
    $mainframe = JFactory::getApplication('site');
	
	$host = "192.168.1.67";
	//$baseUrl = "http://{$host}/gpcb/";
	$baseUrl = "http://{$host}/";
	
	//Select jtc_
	$clave = "ljc01";	
	$db = JFactory::getDbo();
	$db->setQuery("SELECT * FROM jtc_libros WHERE published = 1 and clave like 'ljc__' ");
	//$db->setQuery("SELECT * FROM jtc_libros WHERE published = 1 AND clave = '{$clave}'");
	$libros = $db->loadObjectList();
	
	foreach ($libros as $libro){
		//Select jt3_vs_ca, jt3_campos
		$queryFields = 
		" SELECT d2.f_code_name, d2.f_name, f.mysql_datatype FROM jt3_vs_ca d2 ".
		" LEFT JOIN ca.jos_componentarchitect_fields f ON d2.f_id = f.id".
		" WHERE 1".
		" AND d2.dic = 2".
		" AND d2.co_state = 1".
		" AND d2.f_state = 1".
		" AND d2.co_code_name = '{$libro->clave}'".
		" ORDER BY d2.co_ordering, d2.f_ordering";
		$db = JFactory::getDbo();
		//$db->setQuery("SELECT * FROM jt3_campos WHERE published = 1 AND clave = '{$libro->clave}'");
		
		$db->setQuery($queryFields);
		$fields = $db->loadObjectList();	
		
		echo "<br> ";		
		echo "<br> BOOK{ <br> NAME: {$libro->nombre}, <br> CODE_NAME: {$libro->clave}, <br> URL: {$libro->url} <br> }";		
		echo "<br> ";		
		
		// Obtencon de id_expediente //
		$db = JFactory::getDbo();
		$db->setQuery(
			" select e.id from jtc_libros l"
			." left join jtc_tipoorgano tpo on tpo.id = l.id_tipoorgano"
			." left join jtc_organos o on o.id_tipoorgano = tpo.id"
			." left join jt_expedientes e on e.id_organo = o.id"
			." where l.clave = '{$libro->clave}'"
			." and e.numero = 1 and  e.ano = '2015'"
			." limit 1"				
		);
		$id_expediente = $db->loadResult();			
		//echo "Expediente:  {$id_expediente}";

		$jsonFields = array();		
		
		foreach ($fields as $field){			
			//Campos particulares por nombre
			switch ($field->f_code_name){
			case "field5":
				$jsonFields[$field->f_code_name] = '2018-01-01 00:00:00';
				break;				
				
			default:
			
				//Campos particulares por tipo
				switch ($field->mysql_datatype){
				case "YEAR":
					$jsonFields[$field->f_code_name] = 2018;
					break;
				case "DATETIME":
					$jsonFields[$field->f_code_name] = null;//'2018-01-01 00:00:00';
					break;
				case "INT":
					$jsonFields[$field->f_code_name] = null;
					break;
				case "DECIMAL":
					$jsonFields[$field->f_code_name] = null;
					break;
				case "VARCHAR":
					$jsonFields[$field->f_code_name] = '';
					break;
				case "TEXT":		
					$jsonFields[$field->f_code_name] = '';
					break;
				case "TINYINT":
					$jsonFields[$field->f_code_name] = null;
					break;
				default:
					$jsonFields[$field->f_code_name] = '1';				
				break;
				}			
			}
				

			
		}
		
		// Campos torales
		$jsonFields["id_expediente"] = $id_expediente;
		$jsonFields["id_organo"] = 1;
		$jsonFields["id_secretaria"] = 157;
		$jsonFields["anoj"] = 2018;
		$jsonFields["ordering"] = 1; 
		$jsonFields["version"] = 1;
		$jsonFields["state"] = 1;
		$jsonFields["created"] = '2018-01-01 00:00:00';
		$jsonFields["created_by"] = 1;
		$jsonFields["modified"] = '2018-01-01 00:00:00';
		$jsonFields["modified_by"] = 1;
		
		
		
		echo "<br>";
		//echo json_encode($jsonFields);
		//echo "<br>";
		$jsonFields = json_encode(array($jsonFields));
		$data = urlencode($jsonFields); 
		$curlCommand = 'curl "'
					  ."{$baseUrl}" 
					  ."index.php?option=com_tsjdf_libros2&task=v4.create&store=libro&clave={$libro->clave}&_dc=1515541610075\""
					  ." -H \"Host: {$host}\""
					  .' -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0"'
					  .' -H "Accept: */*" -H "Accept-Language: en-US,en;q=0.5" --compressed'
					  ." -H \"Referer: {$baseUrl}"
					  ."index.php?option=com_tsjdf_libros2&view=v4&layout=libro&clave={$libro->clave}\""
					  .' -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8"'
					  .' -H "X-Requested-With: XMLHttpRequest"'
					  .' -H "Cookie: a3e7fa78f3096c1e0159f37df40bb8b9=sbtcdldeanucf44nd9gs0lunn7; joomla_user_state=logged_in; dd296e574a7edb0668070b54fe9488bb=sbtcdldeanucf44nd9gs0lunn7" '
					  .' -H "Connection: keep-alive" --data "data="'
					  ."{$data}";
					  
					  
		//echo '<br><br> Comando CURL:';
		//echo $curlCommand;
		//echo '<br><br>';
		$row = exec($curlCommand,$output,$error);
		
		while(list(,$row) = each($output)){
			echo $row, "<BR>\n";
		}
		if($error){
			echo "Error : $error<BR>\n";
			exit;
		}

	}	

	
	
?>

