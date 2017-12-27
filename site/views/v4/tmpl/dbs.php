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

//http://localhost/gpcb/index.php?option=com_tsjdf_libros2&view=v4&layout=dbs&format=txt

$db	= JFactory::getDBO();
$materias = array(
//'ljc__', 'ljoc__', 'ljccm__', 'ljf__', 'ljp__', 'ljpdng__'
//'ljjadg__', 'ljjadng__', 'ljpes__', 'ljomf__', 'ljemst__', 'lsc__', 'lcp__', 'lspe__', 'lsps__'
'lsps__'
);

foreach($materias as $materia){
	$db->setQuery("SELECT clave FROM jtc_libros WHERE clave LIKE '{$materia}' AND tabla LIKE CONCAT('%',clave,'s') AND published ORDER BY id_tipoorgano, id_materia, ordering;");
	$libros = $db->loadObjectList();
	foreach($libros as $libro){
		$url = JURI::base()."index.php?option=com_tsjdf_libros2&view=guest&layout=tortidb&showCreateTableX=false&clave={$libro->clave}";
		echo "\n-- {$url}";
		$ch = curl_init($url);
		curl_exec($ch);
		curl_close($ch);
	}
}
?>