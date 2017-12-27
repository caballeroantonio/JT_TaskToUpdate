<?php
/**
 * @version     3.10
 * @package     com_tsjdf_libros2
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license    Licencia Pública General GNU versión 2 o posterior. Consulte LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die('Restricted access');
?>
<p>Bienvenido a la administración del portal del Sistema de Control de Información y Registros Digitales del TSJDF</p>

<ul>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=empleados">Empleados</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=h_accounts">Histórico de cargos</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=reports">Reportes</a></li>
<!--<li><a href="index.php?option=com_tsjdf_libros&view=statistical&layout=records">Estadisticas</a></li>-->
<?php /*?><li><a href="index.php?option=com_tsjdf_libros&view=v3&layout=libro&tmpl=component&clave=lejemplo">Libro de ejemplo</a></li><?php */?>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=resetpassword">Reset password</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=reenumerar">Reenumerar el consecutivo de un libro</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=queries">queries</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=test_opc">TestOPC</a></li>
<li><a href="index.php?option=com_tsjdf_libros2&view=admin&layout=findexpediente">Buscar expediente</a></li>
</ul>