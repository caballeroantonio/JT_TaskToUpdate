<?php

/**
 * @version     2.0.0
 * @package     com_tsjdf_libros2
 * @copyright   Sistemas de Lectura y Facturación Inmediata. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
// No direct access
defined('_JEXEC') or die;

jimport('joomla.application.component.view');

/**
 * View class for a list of Tsjdf_libros2.
 */
class Tsjdf_libros2ViewGuest extends JViewLegacy
{

    public function display($tpl = null) {
//        require_once(JPATH_SITE.'/components/com_tsjdf_libros2/extjs.php');
        parent::display($tpl);
    }

}
?>
<div id="extjs-content"></div>