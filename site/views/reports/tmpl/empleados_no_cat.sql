SELECT
u.id,
e.created 'Creado', cb.name AS 'Creado por',
e.modified 'Modificado', mb.name AS 'Modificado por',
CONVERT_TZ(u.lastvisitDate,'+00:00','-06:00') 'Última visita',
u.name 'Nombre', u.username 'Nombre de usuario', u.email 'Correo electrónico', o.organo 'Órgano', s.secretaria 'Secretaría', r.rol 'Puesto', e.ponencia 'Ponencia', 
IF(u.block, 'Si', 'No') AS 'Acceso restringido'
FROM jos_users u
LEFT JOIN jt_empleados e ON e.id = u.id
LEFT JOIN jtc_organos o ON o.id = e.id_organo
LEFT JOIN jtc_secretarias s ON s.id = e.id_secretaria
LEFT JOIN jtc_general r ON r.id = e.id_rol
LEFT JOIN jos_users cb ON cb.id = e.created_by
LEFT JOIN jos_users mb ON mb.id = e.modified_by
RIGHT OUTER JOIN jos_user_usergroup_map m ON m.user_id = e.id AND m.group_id = 2
ORDER BY e.id_organo, e.id_rol;