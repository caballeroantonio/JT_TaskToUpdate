<?php
/**
 * @version     2.0.0
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
 
// no direct access
defined('_JEXEC') or die('Restricted access');

//		$model = $this->getModel('Libros');
//		echo ($model->getHolaMundo());
//		$helper = new Tsjdf_libros2FrontendHelper();
//		echo ($helper->getHolaMundo());

$db	= JFactory::getDBO();
$user	= JFactory::getUser();
$Itemid	= JRequest::getInt('Itemid');
$empleado = $_SESSION['empleado'];

        /**
         * @todo: no me acuerdo cuales son las reglas
         */
        if ($empleado->id_organo == 317) {
			$app = JFactory::getApplication();
			$app->redirect('index.php?option=com_tsjdf_libros2&view=v5&layout=cp');
        }
// header of books
echo ("<h1>Libros de {$empleado->o__organo}</h1>");

// list of books
$libros = $_SESSION['libros'];

//deberia ser si no pintamos ni descontinuados ni actuales
if( count($libros) == 0 )
	echo "<p>No tenemos libros para tí aqui.</p>";
	
//$distribution = array('órgano', 'secretaría', 'usuario');
echo '<ol>';
foreach ($libros as $libro){
	echo "<li><a href=\"{$libro->l__url}\"&Itemid={$Itemid}\">{$libro->l__nombre}</a></li>\n";//(distribución por {$distribution[$libro->l__distribution-1]})
}
echo '</ol>';

$params = JComponentHelper::getParams('com_tsjdf_libros2');
$schemav1 = $params->get('schemav1');
$schemav2 = $params->get('schemav2');

//para que capacitación no pinte nada
if($schemav1 == ' ' || $schemav2 ==' ')
	return;
	
//pinto v1 o v2
$release = 0;
switch($empleado->o__id_tipoorgano){
	//Juzgado
	case 1:
		switch($empleado->o__id_materia){
			case 1://jc
			case 2://jCivil de Proceso Oral
			case 3://jCivil de Cuantía Menor
			case 4://jf
			case 7://Justicia para Adolescentes
			case 9://Justicia para Adolescentes para Delitos No Graves
				$release = 1;
			break;
			case 5://jp
			case 6:// algunos Penal de Delitos No Graves
			case 8://Justicia para Adolescentes para Delitos Graves
				$release = 2;
			break;
			
			case 10://Penal de Ejecución de Sentencias
			default:
				return;
		}
	break;
	//Sala
	case 2:
		case 5://sp
			$release = 2;
		break;
		default:
			$release = 1;
		break;
	break;
	//Consignaciones
	case 3:
		$release = 1;
	break;
}

$libros = array();
echo ("<h1>Libros descontinuados de {$empleado->o__organo}</h1>");

switch($release){
	/*
	los organos renegados necesitan el $schemav2.jos_tsjdf_organos
	*/
	case 2:
		$db->setQuery("SELECT l.libro, l.url FROM jt_empleados e
INNER JOIN {$schemav2}.jos_tsjdf_organos o ON e.id_organo = o.id
INNER JOIN {$schemav2}.jos_tsjdf_libros l ON l.id_tipoorgano = o.id_tipoorgano AND l.id_materia = o.id_materia
 AND e.id = {$user->id};");
		$db->query();
		$libros = $db->loadAssocList();
		
		echo '<ol>';
		foreach ($libros as $libro){
			echo "<li><a href=\"".$libro['url']."&view=v2&Itemid={$Itemid}\">".$libro['libro']."</a></li>";
		}
		echo '</ol>';
		if( sizeof($libros) != 0 )//si no hay libros en v2 que pinte los de v1 por los organos renegados
	break;
	case 1:
		$db->setQuery("SELECT l.libro, l.url FROM jt_empleados e
		INNER JOIN jtc_organos o ON e.id_organo = o.id
		INNER JOIN {$schemav1}.jos_tsjdf_librosxorgano lo ON o.id_tipoorgano = lo.id_tipoorgano
		INNER JOIN jtc_librosv1 l ON lo.id_libro = l.id
		WHERE o.id_materia = lo.id_materia AND lo.published AND e.id = {$user->id};");
		$db->query();
		$libros = $db->loadAssocList();
		echo '<ol>';
		foreach ($libros as $libro){
			echo '<li><a href="index.php?option=com_tsjdf_libros&view=v1&'. JRoute::_($libro['url'].'&Itemid='.$Itemid, false). '">'.$libro['libro'].'</a></li>';
		}
		echo '</ol>';
	break;
	case 3:
		$db->setQuery("SELECT * FROM jtvc_libros WHERE e__id = {$user->id}");
		$libros = $db->loadAssocList();
		
		echo '<ol>';
		foreach ($libros as $libro){
			echo "<li><a href=\"".$libro['url']."&Itemid={$Itemid}\">".$libro['nombre']."</a></li>";
		}
		echo '</ol>';
	break;
}

if( sizeof($libros) == 0 )
	echo "<p>No tenemos libros para tí aqui.</p>";