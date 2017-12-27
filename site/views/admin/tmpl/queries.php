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

require_once(JPATH_SITE.'/components/com_tsjdf_libros2/extjs.php');
?>
<div id="extjs-content"></div>
<script language="javascript">
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel', {
		title: 'Reportes extraordinarios.',
		width: '100%',
		height: 600,
		defaults: {
			// applied to each contained panel
			autoScroll: true,
		},
		layout: {
			// layout-specific configs go here
			type: 'accordion',
			animate: true,
		},
		items: [{
			title: 'Campos de Libros',
			html: "<?=str_replace("\r\n",'<br/>',
"SELECT 
t.tipo, m.materia
,l.nombre AS 'Nombre del libro'
-- , l.clave, c.clave
, c.dataIndex AS 'Campo de libro'
, CASE
WHEN c.dataType = 'NFempleado' THEN CONCAT('NOMBRE Y FIRMA ', c.columnText)
ELSE c.columnText
END AS 'Nombre del campo'
, c.dataType AS 'Tipo de dato'


, p.dataIndex AS 'Sub-campo de campo'
, CASE
WHEN p.dataType = 'NFempleado' THEN CONCAT('NOMBRE Y FIRMA ', p.columnText)
ELSE p.columnText
END AS 'Nombre del sub-campo'
, p.dataType AS 'Tipo de dato'
, c.alwaysChange
FROM jtc_libros l
LEFT JOIN jt3_campos c ON l.tabla LIKE CONCAT('%',c.clave,'s')
LEFT JOIN jt3_campos p ON p.clave = c.store AND c.dataType = 'parent' AND p.published
INNER JOIN jtc_materia m ON m.id = l.id_materia
INNER JOIN jtc_tipoorgano t ON t.id = l.id_tipoorgano
WHERE 1
AND l.id_materia
AND l.published
AND c.published
ORDER BY l.id_tipoorgano, l.id_materia, l.clave, l.ordering, c.ordering;"
)?>"
		},
{
			title: 'Tipo de juicio',
			html: "<?=str_replace("\r\n",'<br/>',"SELECT t.id, t.id_tipoorgano, t.id_materia, t.tipojuicio, o.tipo AS 'tipoorgano', m.materia FROM jtc_tipojuicio t
INNER JOIN jtc_tipoorgano o ON o.id = t.id_tipoorgano
INNER JOIN jtc_materia m ON m.id = t.id_materia
WHERE published
ORDER BY ordering;")?>"
		},
		{
			title: 'Relación de empleados',
			html: "<?=str_replace("\r\n",'<br/>',"SELECT
u.id, 
e.created, cb.name AS 'created_by',
e.modified, mb.name AS 'modified_by',
CONVERT_TZ(u.lastvisitDate,'+00:00','-06:00') 'lastvisitDate',
u.name, u.username, u.email, o.organo, s.secretaria, r.text AS 'rol', e.ponencia, g.title AS 'user-group',
u.block AS 'acceso restringido'
FROM jos_users u
LEFT JOIN jt_empleados e ON e.id = u.id
LEFT JOIN jtc_organos o ON o.id = e.id_organo
LEFT JOIN jtc_secretarias s ON s.id = e.id_secretaria
LEFT JOIN jtc_general r ON r.id = e.id_rol
LEFT JOIN jos_users cb ON cb.id = e.created_by
LEFT JOIN jos_users mb ON mb.id = e.modified_by
LEFT JOIN jos_user_usergroup_map m ON m.user_id = e.id
LEFT JOIN jos_usergroups g ON g.id = m.group_id
ORDER BY e.id_organo, e.id_rol;")?>"
		},
		{
			title: 'Reporte de totales de registros',
			html: "<?=str_replace("\r\n",'<br/>',"
DROP TABLE IF EXISTS brm_registros;
CREATE TABLE IF NOT EXISTS brm_registros (
  id INT NOT NULL AUTO_INCREMENT ,
  id_libro INT NULL ,
  id_materia INT NULL ,
  id_tipoorgano INT NULL ,
  id_organo INT NULL ,
  total INT NULL ,
  PRIMARY KEY (id) )
ENGINE = InnoDB;

SELECT 
CONCAT('INSERT INTO brm_registros
(id_libro, id_materia, id_tipoorgano, id_organo, total)
SELECT ', l.id ,', ', l.id_materia,', ', l.id_tipoorgano,', id_organo, COUNT(*) FROM ', l.tabla ,' GROUP BY id_organo;') AS 'query'
FROM jtc_libros l
WHERE 1
AND l.id_materia
AND l.published
;


SELECT r.* , t.tipo, m.materia, o.organo, l.nombre 
FROM jtc_organos o
LEFT JOIN brm_registros r ON  o.id_materia = r.id_materia 
	AND o.id_tipoorgano = r.id_tipoorgano AND o.id = r.id_organo
INNER JOIN jtc_libros l ON l.id = r.id_libro
LEFT JOIN jtc_materia m ON m.id = r.id_materia
LEFT JOIN jtc_tipoorgano t ON t.id = r.id_tipoorgano
ORDER BY r.id_tipoorgano, r.id_materia, o.numero, l.ordering;")?>"
		},
		],
		renderTo: 'extjs-content'
	});
});
</script>
