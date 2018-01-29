<?php

/**
 * @version     2.0.1
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
// No direct access
defined('_JEXEC') or die;

jimport('joomla.application.component.controller');

class Tsjdf_libros2Controller extends JControllerLegacy {
	
    /**
    * Usuario del sistema
    * @var object
    */
    protected $user;
    /**
    * datos de empleado asociados al usuario del sistema
    * @var object 
    */
    protected $empleado;
       
    function __construct(){
        parent :: __construct();
        //carga las preferencias de la sesión para evitar cargarlas por querys querys
        $this->user = JFactory::getUser();// es igual a $_SESSION['user'];
        if($this->user->guest){
            //do nothing
        }else if(!isset($_SESSION['empleado']) ){
            $libros_model = $this->getModel('Libros');
            $this->empleado = $_SESSION['empleado'] = $libros_model->getEmpleado($this->user);
            $_SESSION['libros'] = $libros_model->getBookList($_SESSION['empleado']);
        }else{
            $this->empleado = $_SESSION['empleado'];
        }
		//sleep(20);
    }

    public function display($cachable = false, $urlparams = false) {
        $document = JFactory::getDocument();
        $document->setTitle('TSJ CDMX');
		
        require_once JPATH_COMPONENT . '/helpers/tsjdf_libros2.php';
        $helper = new Tsjdf_libros2FrontendHelper();

        /**
        * Set the default view name and format from the Request.
        */
        $view = $this->input->get('view', 'guest');
        $this->input->set('view', $view);
		
        /**
        * access control
        * todas las vistas son reservadas a usuarios registrados excepto guest
        */
        if($this->user->guest && $view != 'guest'){
            //index.php?option=com_tsjdf_libros2&view=guest
            $this->setRedirect('index.php?option=com_users&view=login',JText::_('COM_TSJDF_LIBROS2_LOGIN_REQUIRED'));
            return;
        }
		
        if(isset($this->empleado)){
            //En todas las vistas pongo el órgano
            $document = JFactory::getDocument();
            $document->setTitle($this->empleado->o__organo);

            /**
             * rule tx : que a los jueces les aparezca un link para admin empleados en el template artister tsjdf
             * @todo implementar en menú joomla
            */
            if( in_array($this->empleado->id_rol, [91,131]) ){
                $document->addScriptDeclaration('if(typeof Ext != "undefined")
                    Ext.onReady(function(){
                        if(typeof jQuery != "undefined")
                            jQuery(\'.art-hmenu\').first().append(\'<li><a href="index.php?option=com_tsjdf_libros2&view=v5&layout=empleados" >Empleados</a></li>\');
                                                                        });');
            }
        }
        
        /**
         * Cargar los modelos
         */
        // Set the default view name and format from the Request.
        $vName   = $this->input->getCmd('view', 'guest');
        $vFormat = $document->getType();
        $lName   = $this->input->getCmd('layout', 'default');
        if ($view = $this->getView($vName, $vFormat)){
            switch ($vName){
                case 'v5':
                    $view->setModel($this->getModel('Libros'));
                    break;
            }
            $view->setLayout($lName);
        }
        
        parent::display($cachable, $urlparams);
        return $this;
    }
	
    /**
    * función de prueba que es visible desde controllers/*.php
    */
    public function buscame(){
            echo 'toy en controller';
    }
}
