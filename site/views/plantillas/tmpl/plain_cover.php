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
isset ($this->xtpl) or die('objeto plantilla no definida');

$clave = JRequest :: getCmd('clave');
$id_record = JRequest :: getInt('id_record');

!empty($clave) or die('clave de libro invalida');
!empty($id_record) or die('id del registro del libro invalido');

$db	= JFactory::getDBO();
$db->setQuery("SELECT nombre, tabla, distribution FROM jtc_libros WHERE published AND clave = '{$clave}';");
$libro = $db->loadObject();

!is_null($libro) or die('clave de libro invalida');

$query = $db->getQuery(true);
$query->select("l.created AS 'COMENZO'");
$query->from( $libro->tabla . ' l');

$query->select("o.organo AS 'ORGANO'");
$query->join('LEFT', 'jtc_organos o ON o.id = l.id_organo');

if($libro->distribution == 2){
	$query->select("s.secretaria AS 'SECRETARIA'");
	$query->join('LEFT', 'jtc_secretarias s ON s.id = l.id_secretaria');
}else
	$query->select("'este libro no se distribuye X secretaría' AS 'SECRETARIA'");

$query->select("e.name AS 'EXPEDIENTE'");
$query->join('LEFT', 'jt_expedientes e ON e.id = l.id_expediente');

$query->select("e.txt_tipojuicio AS 'JUICIO'");

$query->select("e.id AS 'id_expediente'");
$query->where("l.id = {$id_record}");
$query->setLimit(1, 0);

$db->setQuery($query);
$registro = $db->loadAssoc();

if(!$registro)
	die('no existe el regitro');

$this->xtpl->assign('REGISTRO',$registro);

$query = "SELECT 
a.txt_ijuridico 'ijuridico', GROUP_CONCAT(a.fullname SEPARATOR ', ') 'nombre'
FROM jtvsl_partescontenciosas a
WHERE id_record = {$registro['id_expediente']} AND a.id_field = 2156
GROUP BY a.id_ijuridico;";
$db->setQuery($query);
	$partescontenciosas = $db->loadAssocList();
	$this->xtpl->array_loop('main.loop', 'PARTESCONTENCIOSAS', $partescontenciosas);
$this->xtpl->parse('main');
$this->xtpl->out('main');
?>