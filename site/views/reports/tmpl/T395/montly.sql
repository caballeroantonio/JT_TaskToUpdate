#obtener el total de registros por órgano
UPDATE jtc_organos o
INNER JOIN (
	SELECT r.id_organo, SUM(r.m1 + r.m2 + r.m3 + r.m4 + r.m5 + r.m6 + r.m7 + r.m8 + r.m9 + r.m10 + r.m11 + r.m12) AS 't_registros'  
    FROM jtr_crecimiento2 r
    GROUP BY r.id_organo
) r2 ON r2.id_organo = o.id
SET o.t_registros = r2.t_registros;

#obtener el total de registros por empleado
UPDATE jt_empleados SET t_registros = 0;

#requieren saber cuantos registros ha capturado el usuario en el órgano a que se encuentra adscrito actualmente
/*
SELECT 
CONCAT('#',GROUP_CONCAT(CONCAT_WS(" ", t.tipo, m.materia, l.nombre)) , '
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS \'t_registros\', l.created_by FROM ', l.tabla,' l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;\n') ''
FROM jtc_libros l
INNER JOIN jtc_tipoorgano t ON t.id = l.id_tipoorgano
INNER JOIN jtc_materia m ON m.id = l.id_materia
WHERE 1
AND published
GROUP BY l.tabla
ORDER BY l.id_tipoorgano, l.id_materia, l.ordering;
*/


#Juzgado Civil LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE INGRESOS DE VALORES,Juzgado Familiar LIBRO DE INGRESOS DE VALORES,Juzgado Familiar de Proceso Oral LIBRO DE INGRESOS DE VALORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE EGRESOS DE VALORES,Juzgado Familiar LIBRO DE EGRESOS DE VALORES,Juzgado Penal LIBRO DE EGRESOS DE VALORES,Juzgado Familiar de Proceso Oral LIBRO DE EGRESOS DE VALORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE REGISTRO DE PROMOCIONES,Juzgado Civil de Cuantía Menor LIBRO DE REGISTRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE TURNO PARA SENTENCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE AUXILIARES DE LA ADMINISTRACIÓN DE JUSTICIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE REGISTRO PARA NOTARIOS,Juzgado Familiar LIBRO DE REGISTRO PARA NOTARIOS,Juzgado Familiar de Proceso Oral LIBRO DE REGISTRO PARA NOTARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE REGISTRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE REMISIÓN DE DOCUMENTOS AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE ENVÍO DE EXPEDIENTES AL ARCHIVO JUDICIAL PARA SU DESTRUCCIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc19s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE CONTROL DE ASUNTOS CONFORME A LOS ARTÍCULOS 13 FRACCIÓN XIV Y 25 DE LA LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc20s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil LIBRO DE MINISTERIO PÚBLICO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jc21s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE CERTIFICADO DE DEPÓSITOS DE INGRESOS Y EGRESOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE SENTENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE AUXILIARES DE LA ADMINISTRACIÓN DE JUSTICIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE NOTARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Proceso Oral LIBRO DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_joc14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE INGRESO DE VALORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE EGRESOS DE VALORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE TURNO PARA SENTENCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE REGISTRO PARA NOTARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE REGISTRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE REMISIÓN DE EXPEDIENTES AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Civil de Cuantía Menor LIBRO DE REMISIÓN DE DOCUMENTOS AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jccm17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE GOBIERNO,Juzgado Familiar de Proceso Oral LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE PROMOCIONES,Juzgado Familiar de Proceso Oral LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE SENTENCIAS,Juzgado Familiar de Proceso Oral LIBRO DE SENTENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE RECURSOS DE APELACIÓN,Juzgado Familiar de Proceso Oral LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE EXHORTOS,Juzgado Familiar de Proceso Oral LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE OFICIOS,Juzgado Familiar de Proceso Oral LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE ACTUARIOS,Juzgado Familiar de Proceso Oral LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE AUXILIARES DE LA ADMINISTRACIÓN DE JUSTICIA, TUTORES Y CURADORES,Juzgado Familiar de Proceso Oral LIBRO DE AUXILIARES DE LA ADMINISTRACIÓN DE JUSTICIA, TUTORES Y CURADORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE REGISTRO DE AMPAROS,Juzgado Familiar de Proceso Oral LIBRO DE REGISTRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE CONTROL DE FIANZAS,Juzgado Familiar de Proceso Oral LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE CONTROL DE MULTAS,Juzgado Familiar de Proceso Oral LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE TURNO A CARGO DE LOS SECRETARIOS DE ACUERDOS,Juzgado Familiar de Proceso Oral LIBRO DE TURNO A CARGO DE LOS SECRETARIOS DE ACUERDOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar AGENDA DE AUDIENCIAS,Juzgado Familiar de Proceso Oral AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE REMISIÓN AL ARCHIVO,Juzgado Familiar de Proceso Oral LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE REMISIÓN DE DOCUMENTOS AL ARCHIVO,Juzgado Familiar de Proceso Oral LIBRO DE REMISIÓN DE DOCUMENTOS AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE ENVÍO DE EXPEDIENTES AL ARCHIVO JUDICIAL PARA SU DESTRUCCIÓN,Juzgado Familiar de Proceso Oral LIBRO DE ENVÍO DE EXPEDIENTES AL ARCHIVO JUDICIAL PARA SU DESTRUCCIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf19s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE CONTROL DE ASUNTOS CONFORME A LOS ARTÍCULOS 13 FRACCIÓN XIV Y 25 DE LA LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA,Juzgado Familiar de Proceso Oral LIBRO DE CONTROL DE ASUNTOS CONFORME A LOS ARTÍCULOS 13 FRACCIÓN XIV Y 25 DE LA LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf20s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE CONTROL DE ADOPCIONES INTERNACIONALES,Juzgado Familiar de Proceso Oral LIBRO DE CONTROL DE ADOPCIONES INTERNACIONALES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf21s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Familiar LIBRO DE CONTROL DE RESTITUCIONES INTERNACIONALES,Juzgado Familiar de Proceso Oral LIBRO DE CONTROL DE RESTITUCIONES INTERNACIONALES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jf22s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REGISTRO DE BILLETES DE DEPÓSITO (INGRESOS)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REGISTRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE TURNO PARA SENTENCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE EXHORTOS,Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE OFICIOS,Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE ACTUARIO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REGISTRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REGISTRO DE AMPAROS CIRCULANTES O NEGADOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE CONTROL DE MULTAS,Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE CONTROL DE PEDIMENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REGISTRO EN QUE SE HAYA OBSEQUIADO O NEGADO LA ORDEN DE APREHENSIÓN, COMPARECENCIA, PRESENTACIÓN, ARTÍCULO 36 DEL CÓDIGO DE PROCEDIMIENTOS PENALES Y OTROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE CONTROL DE FIRMAS DE PROCESADOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp19s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE TURNO PARA CONCLUSIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp20s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jp21s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CERTIFICADO DE DEPÓSITOS DE INGRESO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CERTIFICADO DE DEPÓSITOS DE EGRESO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE TURNO PARA SENTENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE REGISTRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE AMPAROS CIRCULANTES O NEGADOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CONTROL DE MULTAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CONTROL DE PEDIMENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE REGISTRO EN QUE SE HAYA OBSEQUIADO O NEGADO LA ORDEN DE APREHENSIÓN, COMPARECENCIA, PRESENTACIÓN, ARTÍCULO 36 DEL CÓDIGO DE PROCEDIMIENTOS PENALES Y OTROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE CONTROL DE FIRMAS PROCESADOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Delitos No Graves LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpdng18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE INGRESOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE EGRESOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE SENTENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE CONTROL DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE CONTROL DE PEDIMENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves ARTICULO 36 o ARTICULO 28 LJADF
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE CONTROL DE PRESENTACIÓN DE ADOLESCENTES EN LIBERTAD ANTE EL JUEZ
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos Graves LIBRO DE AMPAROS 'LOCOS'
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadg18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE GOBIERNO,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE PROMOCIONES,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves AGENDA DE AUDIENCIAS,Juzgado Ejecución de Medidas Sancionadoras en Transición AGENDA DE AUDIENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE SENTENCIAS,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE SENTENCIAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE RECURSOS DE APELACIÓN,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE EXHORTOS,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE OFICIOS,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE AMPAROS,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE ACTUARIO,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE ACTUARIO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE CONTROL DE PEDIMENTOS,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE CONTROL DE PEDIMENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBRO DE REMISIÓN AL ARCHIVO,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBRO DE REMISIÓN AL ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Justicia para Adolescentes para Delitos No Graves LIBROS DE VALORES,Juzgado Ejecución de Medidas Sancionadoras en Transición LIBROS DE VALORES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jjadng12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE GOBIERNO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE PROMOCIONES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE RECURSOS DE APELACIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE OFICIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE ACTUARIOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE AMPAROS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE AMPAROS CIRCULANTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE CONTROL DE PEDIMENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes08s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE MULTAS JUDICIALES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias AGENDA DE AUDIENCIAS PARA JUICIOS ORALES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE INGRESOS Y EGRESOS DE BILLETES DE DEPÓSITO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE FIANZAS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE RESOLUCIONES EN AUDIENCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE RESOLUCIONES DE PLANO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE BENEFICIOS REVOCADOS Y ORDENES DE RE-APREHENSIÓN
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE DESISTIMIENTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE ARCHIVO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes17s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Juzgado Penal de Ejecución de Sentencias LIBRO DE EXHORTOS
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_jpes18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRETA DE REGISTRO DE SENTENCIAS -TURNO- (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRETA DE REGISTRO DE ASISTENCIA (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRETA DE VISTAS AL M.P (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE MULTAS (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil AGENDA (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE CONTROL DE BILLETES Y PÓLIZAS (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE EGRESOS (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE PÓLIZAS Y FIANZAS (OFICIAL) - egresos
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc08es l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE PÓLIZAS Y FIANZAS (OFICIAL) - ingresos
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc08is l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE GOBIERNO (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE ACTUARIO (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRETA DE OFICIOS (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil LIBRO DE REGISTRO DE AMPAROS (OFICIAL)
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Sala Civil PAPELETAS PARA EL PRÉSTAMO DE EXPEDIENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_lsc13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE JUSTICIA PARA ADOLESCENTES CON DETENIDO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp01s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE JUSTICIA PARA ADOLESCENTES SIN DETENIDO
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp02s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE REMISIONES CON DETENIDO DE JUZGADOS ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp03s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE JUSTICIA PARA ADOLESCENTES CON DETENIDO DE PGR
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp04s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE JUSTICIA PARA ADOLESCENTES SIN DETENIDO DE PGR
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp05s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA INCOMPETENCIAS ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp06s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA EXCUSAS DE ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp07s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE ETAPA DE EJECUCIÓN PARA ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp09s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE BENEFICIOS PENITENCIARIOS.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp10s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE OFICIOS.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp11s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE TURNO DE SALAS PARA JUZGADOS ORALES.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp12s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE EXPEDIENTILLOS DE JUZGADOS DE EJECUCIÓN PARA JUZGADOS PENAL O NO GRAVES.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp13s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE CUMPLIMIENTO DE EJECUTORIAS PARA JUZGADOS DE EJECUCIÓN.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp14s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE OFICIOS DE AMPAROS DE TRAMITE.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp15s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE  OFICIOS DE AMPAROS DE CONOCIMIENTO.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp16s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA CONSIGNACIONES CON DETENIDO PRIMERA INSTANCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp18s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA CONSIGNACIONES SIN DETENIDO PRIMERA INSTANCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp19s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA INCOMPETENCIAS PRIMERA INSTANCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp20s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE EXCUSAS PARA JUZGADOS DE PRIMERA INSTANCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp21s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE ORDENES DE ARRAIGOS Y DE CATEOS PRIMERA INSTANCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp22s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE ORDENES DE APREHENSIÓN, REAPREHENSION Y TRASLADO.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp23s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE REGISTRO DE LA LEY DE ACCESO A LAS MUJERES A UNA VIDA LIBRE DE VIOLENCIA.
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp24s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA CONSIGNACIONES CON DETENIDO DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp25s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA CONSIGNACIONES SIN DETENIDO DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp26s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO PARA INCOMPETENCIAS DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp27s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE EXCUSAS PARA JUZGADOS  DE DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp28s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE ORDENES PARA ARRAIGOS Y CATEOS DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp29s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES JUZGADOS DE PRIMERA INSTANCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp30s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES JUZGADOS DE DELITOS NO GRAVES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp31s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES JUZGADOS DE EJECUCIÓN DE SENTENCIA
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp32s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES DE SALAS PENALES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp33s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES JUZGADOS DE ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp34s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE LIBERTADES DE SALAS DE ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp35s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRETA DE RETURNO DE ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp36s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE EXCUSAS PARA JUZGADOS DE JUSTICIA PARA ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp39s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE ORDENES DE DETENCIÓN PARA JUZGADOS DE JUSTICIA PARA ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp40s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;

#Consignaciones Penal LIBRO DE TURNO DE REMISIONES SIN DETENIDO DE JUZGADOS ADOLESCENTES
UPDATE jt_empleados e
INNER JOIN (
	SELECT COUNT(*) AS 't_registros', l.created_by FROM jtl_cp41s l
	INNER JOIN jt_empleados e ON e.id_organo = l.id_organo AND e.id = l.created_by
	GROUP BY l.id_organo, l.created_by 
) r2 ON r2.created_by = e.id
SET e.t_registros = e.t_registros + r2.t_registros;