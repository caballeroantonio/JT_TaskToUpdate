<?php

/**
 * @version     2.0.0
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
defined('_JEXEC') or die;

jimport('joomla.application.component.modellist');

/**
 * Methods supporting a list of Tsjdf_libros2 records.
 */
class Tsjdf_libros2ModelLibros extends JModelList {

    /**
     * Acceso a la DBO
     * @var DBO 
     */
    private $db;

    /**
     * Constructor.
     * 
     * como las funciones de este controlador y sus herencias utilizan la DBO agrego la variable privada
     *
     * @param    array    An optional associative array of configuration settings.
     *
     * @see        JController
     * @since      1.6
     */
    public function __construct($config = array()) {
        $this->db = JFactory::getDBO();
        parent::__construct($config);
    }

    public static function getToralFieldLabels() {
        $torales = new stdClass();
        $torales->numero = 'Número';
        $torales->ano = 'Año';
        $torales->bis = 'Bis';
        $torales->nrecurso = 'Número de recurso';
        $torales->tipoarchivo = 'Tipo de archivo';
        $torales->tipojuicio = 'Tipo de juicio';
        $torales->expFriendlyName = 'Expediente';
        $torales->regimeSelector = 1;//selector tipo de persona:fisca|moral

        if (!isset($_SESSION['empleado']))
            return $torales;
        $empleado = $_SESSION['empleado'];
        switch ($empleado->o__id_tipoorgano * 1000 + $empleado->o__id_materia) {
//					case 1001:	//Juzgado 1 en materia Civil
//					case 1002:	//Juzgado 1 Oral en Materia Civil
//					case 1003:	//Juzgado 1 en materia Civil de Cuantía Menor
//					case 1004:	//Juzgado 1 en materia Familiar
//					case 1008:	//Juzgado 1 en materia de Justicia para Adolescentes para Delitos Graves
//					case 1011:	//Juzgado 1 Oral en Materia Familiar
//					case 1012:	//Juzgado 1 Especializado en Ejecucion de Medidas Sancionadoras en Materia de Justicia para Adolescentes
//					case 3001:	//Consignaciones en materia Civil
//				$torales->regimeSelector = false;
//break;

            case 1005: //Juzgado 1 en materia Penal
            case 1006: //Juzgado 1 en materia Penal de Delitos No Graves
            case 1009: //Juzgado 1 en materia de Justicia para Adolescentes para Delitos No Graves
            case 1010: //Juzgado 1 en materia Penal de Ejecución de Sentencias
            case 3005: //Consignaciones en materia Penal
                $torales->expFriendlyName = 'CAUSA';
                break;


            case 2001: //Sala 1 en materia Civil
            case 2004: //Sala 1 en materia Familiar
            case 2005: //Sala 1 en materia Penal
            case 2007: //Sala 1 en materia de Justicia para Adolescentes
                $torales->expFriendlyName = 'Toca';
                break;
        }


        return $torales;
    }

    function getHolaMundo() {
        return 'libros2-model de hola mundo<br/>';
    }

    /**
     * jala los datos de empleado de un usuario
     * @param int $user
     * @return object id_rol, id_organo, id_secretaria
      stdClass Object
      (
      [id] => 1
      [id_rol] => 1
      [id_organo] => 8
      [id_secretaria] =>
      [o__id_tipoorgano] => 1
      [o__id_materia] => 1
      [o__organo] => Juzgado 8 en materia Civil
      )
     */
    function getEmpleado($user) {//*, o.numero, o.id_tipoorgano, o.id_materia  INNER JOIN jtc_organos o ON e.id_organo = o.id
        $this->db->setQuery("SELECT e.id, e.id_rol, e.id_organo, e.id_secretaria, o.id_tipoorgano 'o__id_tipoorgano', o.id_materia 'o__id_materia', o.organo 'o__organo', o.numero 'o__numero'
							FROM jt_empleados e
							INNER JOIN jtc_organos o ON o.id = e.id_organo
							WHERE e.id = {$user->id};");
        $empleado = $this->db->loadObject();
		
        //esta propiedad ya no me encanta.
        $empleado->is_admin = in_array(7, $user->getAuthorisedGroups());	
		
        return $empleado;
    }

    /**
     * busca los datos de otro usuario
     * 
     * lo utilizo en http://localhost/jDev3/index.php?option=com_tsjdf_libros2&view=libros&&layout=empleado&tmpl=component&id_user=1
     * 
     * @param int $id_user un usuario diferente al current_user
     * @return object name, username from #__users
     */
    function getUser($id_user) {
        $this->db->setQuery("SELECT name, username FROM #__users WHERE id = {$id_user};");
        return $this->db->loadObject();
    }

    /**
     * Lista de libros
      Array
      (
      [0] => stdClass Object
      (
      [user_id] => 1
      [nombre] => LIBRO DE GOBIERNO
      [url] => index.php?option=com_tsjdf_libros&view=v3&layout=libro&clave=ljc01
      [distribution] => 1
      [id_libro] => 3
      [can_read] => 1
      )
      ...
      )
     */
    function getBookList($empleado) {
        $this->db->setQuery("SELECT * FROM jtvc_libros WHERE e__id = {$empleado->id} ;"); //AND id_libro IN(44,45)
        $libros = $this->db->loadObjectList('l__clave');

        /**
         * @rule:
         * LIBRO DE CONTROL DE ADOPCIONES INTERNACIONALES si el juzgado < 6
         * LIBRO DE CONTROL DE RESTITUCIONES INTERNACIONALES si el número del juzgado es > 5
         */
        if (isset($libros['ljf21']) && $empleado->o__numero > 5)
            unset($libros['ljf21']);
        if (isset($libros['ljf22']) && $empleado->o__numero < 6)
            unset($libros['ljf22']);

        return $libros;
    }

}
