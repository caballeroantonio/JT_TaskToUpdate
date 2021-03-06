<?php
/**
 * @version 		$Id:$
 * @name			TSJ CDMX Libros TxCA
 * @author			caballeroantonio (caballeroantonio.com)
 * @package			com_jtca
 * @subpackage		com_jtca.site
 * @copyright		Copyright (c) 2017 - 2020. All Rights Reserved
 * @license			GNU General Public License version 3 or later; See http://www.gnu.org/copyleft/gpl.html 
 * 
 * The following Component Architect header section must remain in any distribution of this file
 *
 * @CAversion		Id: compobjectform.php 571 2016-01-04 15:03:02Z BrianWade $
 * @CAauthor		Component Architect (www.componentarchitect.com)
 * @CApackage		architectcomp
 * @CAsubpackage	architectcomp.site
 * @CAtemplate		joomla_3_4_standard (Release 1.0.1)
 * @CAcopyright		Copyright (c)2013 - 2016  Simply Open Source Ltd. (trading as Component Architect). All Rights Reserved
 * @Joomlacopyright Copyright (c)2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @CAlicense		GNU General Public License version 3 or later; See http://www.gnu.org/copyleft/gpl.html
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 */

defined('_JEXEC') or die;

use Joomla\Registry\Registry;

// Base this model on the backend version.
require_once JPATH_ADMINISTRATOR.'/components/com_jtca/models/ljpes16.php';

class JtCaModelLjpes16Form extends JtCaModelLjpes16
{
	/**
	 * Model context string.
	 *
	 * @var		string
	 */
	protected $context = 'com_jtca.edit.ljpes16';
	/**
	 * Model typeAlias string. Used for version history.
	 *
	 * @var        string
	 */
	public $typeAlias = 'com_jtca.ljpes16';
	/**
	 * Method to auto-populate the model state.
	 *
	 * Note. Calling getState in this method will result in recursion.
	 *
	 * @return  void
	 */
	protected function populateState()
	{
		$app = JFactory::getApplication();

		// Load state from the request.
		$pk = $app->input->getInt('id');
		$this->setState('ljpes16.id', $pk);

		$return = $app->input->get('return', null, 'base64');
		$this->setState('return_page', base64_decode($return));		
		
		// Load the parameters. Merge Global and Menu Item params into new object
		$params = $app->getParams();
		$menu_params = new Registry;

		if ($menu = $app->getMenu()->getActive())
		{
			$menu_params->loadString($menu->params);
		}

		$merged_params = clone $menu_params;
		$merged_params->merge($params);

		$this->setState('params', $merged_params);

		$this->setState('layout', $app->input->getString('layout'));
	}

	/**
	 * Returns a Table object, always creating it
	 *
	 * @param	type	$type	The table type to instantiate
	 * @param	string	$prefix	A prefix for the table class name. Optional.
	 * @param	array	$config	Configuration array for model. Optional.
	 * 
	 * @return	JTable	A database object
	*/
	public function getTable($type = 'Ljpes16s', $prefix = 'JtCaTable', $config = array())
	{
		return JTable::getInstance($type, $prefix, $config);
	}

	/**
	 * Method to get the login form.
	 *
	 * The base form is loaded from XML and then an event is fired
	 * for users plugins to extend the form with extra fields.
	 *
	 * @param	array	$data		An optional array of data for the form to interogate.
	 * @param	boolean	$load_data	True if the form is to load its own data (default case), false if not.
	 * @return	mixed	A JForm object on success, false on failure
	 * 
	 */
	public function getForm($data = array(), $load_data = true)
	{
		// Get the form.
		$form = $this->loadForm('com_jtca.edit.ljpes16', 'ljpes16', array('control' => 'jform', 'load_data' => $load_data));
		if (empty($form))
		{
			return false;
		}
		return $form;
	}

	/**
	 * Method to get libro de desistimientos data.
	 *
	 * @param	integer	$item_id	The id of the libro de desistimientos.
	 * @param	boolean		Get recursively item children - true or false
	 * @return	mixed	LIBRO DE DESISTIMIENTOS item data object on success, false on failure.
	 */
	public function getItem($item_id = null, $recursive = false)
	{
		
		$item_id = (int) (!empty($item_id)) ? $item_id : $this->getState('ljpes16.id');

		// Get a row instance.
		$table = $this->getTable();

		// Attempt to load the row.
		$return = $table->load($item_id);

		// Check for a table object error.
		if ($return === false AND $table->getError())
		{
			$this->setError($table->getError());
			return false;
		}

		$properties = $table->getProperties(1);
		$item = JArrayHelper::toObject($properties, 'JObject');

		// Convert params field to Registry.
		$item->params = new Registry;
		$item->params->loadString($item->params);
		
		// Include any manipulation of the data on the record e.g. expand out Registry fields
		// NB The params registry field - if used - is done automatcially in the JAdminModel parent class
		
	
				

		if (isset($item->id_organo) AND $item->id_organo !='')
		{
			$item->id_organo = explode(',',JString::trim($item->id_organo, ','));
		}	
		if (isset($item->id_secretaria) AND $item->id_secretaria !='')
		{
			$item->id_secretaria = explode(',',JString::trim($item->id_secretaria, ','));
		}	

			
		// Compute selected asset permissions.
		$user	= JFactory::getUser();
		$user_id	= $user->get('id');

		// Get user name.
		if ($item_id)
		{
			$db		= $this->getDbo();
			$query	= $db->getQuery(true);
			// Retrieve user name(s)
			$query->select($db->quoteName('id').', '.$db->quoteName('name'));
			$query->from($db->quoteName('#__users'));
			$query->where($db->quoteName('id').' = '.$item->created_by);
					// Setup the query
			$db->setQuery($query);

			// Return the result
			$created_by_user = $db->loadObjectList();					
			$item->created_by_name = $created_by_user ? $created_by_user[0]->name : $item->created_by;
			
			$query->clear();
			$query->select($db->quoteName('id').', '.$db->quoteName('name'));
			$query->from($db->quoteName('#__users'));
			$query->where($db->quoteName('id').' = '.$item->modified_by);
					// Setup the query
			$db->setQuery($query);

			// Return the result
			$modified_by_user = $db->loadObjectList();			
			$item->modified_by_name = $modified_by_user ? $modified_by_user[0]->name : $item->modified_by;
		}
		else
		{
			// New item.
			$item->created_by_name = $user->name;
			$item->modified_by_name = $user->name;
		}
		
		$asset	= 'com_jtca';

		// Check general edit permission first.
		if ($user->authorise('core.edit', $asset)) 
		{
			$item->params->set('access-edit', true);
		}
		// Now check if edit.own is available.
		else 
		{
			if (!empty($user_id) AND $user->authorise('core.edit.own', $asset)) 
			{
				// Check for a valid user and that they are the owner.
				if ($user_id == $item->created_by) 
				{
					$item->params->set('access-edit', true);
				}
			}
		}
		if ($user->authorise('core.create', $asset))
		{
			$item->params->set('access-create', true);
		}	
		if ($user->authorise('core.delete', $asset)) 
		{
			$item->params->set('access-delete', true);
		}
		// Now check if delete.own is available.
		else
		{ 
			if (!empty($user_id) AND $user->authorise('core.delete.own', $asset)) 
			{
				// Check for a valid user and that they are the owner.
				if ($user_id == $item->created_by) 
				{
					$item->params->set('access-delete', true);
				}
			}
		}
		// Check edit state permission.
		if ($item_id)
		{
			// Existing item
			$item->params->set('access-change', $user->authorise('core.edit.state', $asset));
		}
		else
		{
			// New item.
			$item->params->set('access-change', $user->authorise('core.edit.state', 'com_jtca'));
		}
		

				
		return $item;
	}

	/**
	 * Method to validate the form data.
	 *
	 * @access	public
	 * @param	object		$form		The form to validate against.
	 * @param	array		$data		The data to validate.
	 * @param   string		$group		The name of the field group to validate.
	 * 
	 * @return	mixed		Array of filtered data if valid, false otherwise.
	 */
	public function validate($form, $data, $group = null)
	{
		$this->setAccessFilters($form, $data);

		return parent::validate($form, $data, $group);
	}

	protected function setAccessFilters(&$form, $data)
	{
		$user = JFactory::getUser();

		if (!$user->authorise('core.edit.state', 'com_jtca'))
		{
			$form->setFieldAttribute('state', 'filter', 'unset');
		}
	}

	/**
	 * Method to get the data that should be injected in the form.
	 *
	 * @return	mixed	The data for the form.
	 * 
	 */
	protected function loadFormData()
	{
		// Check the session for previously entered form data.
		$data = JFactory::getApplication()->getUserState('com_jtca.edit.ljpes16.data', array());

		if (empty($data))
		{
			$data = $this->getItem();
		}

		return $data;
	}

	/**
	 * Method to save the form data.
	 *
	 * @param	array	The form data.
	 * @return	boolean	True on success.
	 * 
	 */
	public function save($data)
	{
		$dispatcher = JEventDispatcher::getInstance();
		$table		= $this->getTable();
		$form		= $this->getForm($data, false);
		$pk			= (!empty($data['id'])) ? $data['id'] : (int) $this->getState('ljpes16.id');
		$is_new		= true;

		if (!$form)
		{
			JError::raiseError(500, $this->getError());
			return false;
		}

		
		// Validate the posted data.
		$valid_data	= $this->validate($form, $data);
		if ($valid_data === false)
		{
			return false;
		}

		// Load the row if saving an existing item.
		if ($pk > 0)
		{
			$table->load($pk);
			$is_new = false;
		}
		else
		{
			// Save the default (empty) rules for the component
			$actions = JAccess::getActions('com_jtca');
			$action_array = array();
			foreach ($actions as $action)
			{
				$action_array[$action->name] = array(); 
			}
			$data['rules'] = $action_array;
		}
		
		// Bind the data.
		if (!$table->bind($data))
		{
			$this->setError($table->getError());
			return false;
		}

		// Check the data.
		if (!$table->check())
		{
			$this->setError($table->getError());
			return false;
		}

		// Reorder the libro de desistimientos so the new libro de desistimientos is first
		if (empty($table->id))
		{
			$conditions_array = $this->getReorderConditions($table);
			
			$conditions = implode(' AND ', $conditions_array);				
			$table->reorder($conditions);
		}

		// Include the tsj cdmx libros txca plugins for the onSave events.
		JPluginHelper::importPlugin('jtca');

		$result = $dispatcher->trigger('onLjpes16BeforeSave', array('com_jtca.ljpes16', &$table, $is_new));

		if (in_array(false, $result, true))
		{
			JError::raiseError(500, $table->getError());
			return false;
		}

		// Store the data.
		if (!$table->store())
		{
			$this->setError($table->getError());
			return false;
		}
		
		// Clean the cache.
		$cache = JFactory::getCache('com_jtca');
		$cache->clean();

		$dispatcher->trigger('onLjpes16AfterSave', array('com_jtca.ljpes16', $table, $is_new));

		$this->setState('ljpes16.id', $table->id);
	

		return true;
	}


	/**
	* A protected method to get a set of ordering conditions.
	*
	* @param	object	A record object.
	* @return	array	An array of conditions to add to add to ordering queries.
	*/
	protected function getReorderConditions($table)
	{
		$db = JFactory::getDbo();
		
		$condition = array();
		$condition[] = $db->quoteName('state').' >= 0';
		return $condition;
	}	
}