#el mes anterior
SET @my_curdate := DATE_SUB(NOW(), INTERVAL 1 MONTH);
SET @my_month := MONTH(@my_curdate);
SET @my_year := YEAR(@my_curdate);

/*
#Requieren saber cuántos registros se generan mensualmente por tabla por lo que contabilizo los registros en tmp_crecimiento2 y luego los paso a jtr_crecimiento2
SELECT 
CONCAT("DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM ",t.TABLE_NAME," l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = '",t.TABLE_NAME,"'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;
") ''
FROM  INFORMATION_SCHEMA.TABLES t
WHERE 1
AND TABLE_SCHEMA = (SELECT DATABASE())
AND t.TABLE_NAME LIKE 'jtl%'
ORDER BY t.TABLE_NAME;
*/


DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp19s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp19s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp20s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp20s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp21s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp21s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp22s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp22s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp23s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp23s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp24s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp24s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp25s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp25s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp26s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp26s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp27s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp27s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp28s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp28s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp29s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp29s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp30s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp30s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp31s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp31s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp32s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp32s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp33s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp33s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp34s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp34s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp35s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp35s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp36s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp36s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp39s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp39s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp40s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp40s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_cp41s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_cp41s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_ejemplos l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_ejemplos'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc19s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc19s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc20s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc20s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jc21s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jc21s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jccm17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jccm17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf19s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf19s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf20s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf20s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf21s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf21s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jf22s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jf22s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadg18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadg18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jjadng12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jjadng12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (

	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_joc14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_joc14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp19s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp19s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp20s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp20s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jp21s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jp21s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpdng18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpdng18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes08s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes08s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes14s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes14s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes15s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes15s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes16s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes16s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes17s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes17s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_jpes18s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_jpes18s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc01s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc01s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc02s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc02s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc03s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc03s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc04s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc04s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc05s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc05s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc06s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc06s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc07s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc07s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc08es l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc08es'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc08is l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc08is'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc09s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc09s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc10s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc10s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc11s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc11s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc12s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc12s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

DROP TABLE IF EXISTS tmp_crecimiento2;
CREATE TEMPORARY TABLE tmp_crecimiento2 AS (
	SELECT 
	id_organo, b.id 'id_libro',
	year(created) 'year', month(created) 'month', COUNT(*) 'total' 
	FROM jtl_lsc13s l 
	LEFT JOIN jtc_organos o ON o.id = l.id_organo
	LEFT JOIN jtc_libros b 
		ON b.id_tipoorgano = o.id_tipoorgano AND b.id_materia = o.id_materia 
		AND b.tabla = 'jtl_lsc13s'
	WHERE year(created) = @my_year AND month(created) = @my_month
	GROUP BY id_organo, year(created), month(created)
);
CALL crecimiento2_months;

#el reporte final a excel
SELECT r.id_organo, r.id_libro, o.organo 'Órgano', l.nombre 'Nombre del libro' ,
r.m1 'Enero', r.m2 'Febrero', r.m3 'Marzo', r.m4 'Abril', r.m5 'Mayo', r.m6 'Junio', r.m7 'Julio', r.m8 'Agosto', r.m9 'Septiembre', r.m10 'Octubre', r.m11 'Noviembre', r.m12 'Diciembre',
(r.m1 + r.m2 + r.m3 + r.m4 + r.m5 + r.m6 + r.m7 + r.m8 + r.m9 + r.m10 + r.m11 + r.m12) AS 'Registros'
FROM jtr_crecimiento2 r
INNER JOIN jtc_libros l ON l.id = r.id_libro
INNER JOIN jtc_organos o ON o.id = r.id_organo
WHERE 1
AND r.year = @my_year
;