SELECT
r.rol 'Puesto', COUNT(*) 'Total'
FROM jos_users u
LEFT JOIN jt_empleados e ON e.id = u.id
LEFT JOIN jtc_general r ON r.id = e.id_rol
RIGHT OUTER JOIN jos_user_usergroup_map m ON m.user_id = e.id AND m.group_id = 2
WHERE 1
AND id_rol
AND u.block = false
GROUP BY e.id_rol
ORDER BY e.id_rol;