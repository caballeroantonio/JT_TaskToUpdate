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
 * @CAversion		Id: compobject.php 595 2016-01-13 17:55:47Z BrianWade $
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

/**
 * Ljf07 controller class.
 * 
 */
class JtCaControllerLjf07 extends JControllerForm
{
	/**
	 * @var    string	$view_item	The URL view item variable.
	 */
	protected $view_item = 'ljf07form';
	/**
	 * @var    string	$view_list	The URL view list variable.
	 */
	protected $view_list = 'ljf07s';
	/**
	 * 
	 * @var    string	$url_var	The URL edit variable
	 */
	protected $url_var = 'a.id';
	/**
	 * Constructor
	 *
	 */
	public function __construct($config = array())
	{
		parent::__construct($config);

		$this->registerTask('apply',		'save');
		$this->registerTask('save2new',		'save');
		$this->registerTask('save2copy',	'save');
	}

	/**
	 * Method override to check if you can add a new record.
	 *
	 * @param	array	$data	An array of input data.
	 *
	 * @return	boolean
	 * 
	 */
	protected function allowAdd($data = array())
	{
		$user		= JFactory::getUser();
		$allow		= null;
		if ($allow === null)
		{
			// In the absense of better information, revert to the component permissions.
			return parent::allowAdd();
		}
		else
		{
			return $allow;
		}
	}

	/**
	 * Method override to check if you can edit an existing record.
	 *
	 * @param	array	$data	An array of input data.
	 * @param	string	$key	The name of the key for the primary key; default is id
	 *
	 * @return	boolean
	 * 
	 */
	protected function allowEdit($data = array(), $key = 'id')
	{
		$record_id	= (int) isset($data[$key]) ? $data[$key] : 0;
		$user		= JFactory::getUser();
		$asset		= 'com_jtca';
		// Check general edit permission first.
		if ($user->authorise('core.edit', $asset))
		{
			return true;
		}

		// Fallback on edit.own.
		// First test if the permission is available.
		if ($user->authorise('core.edit.own', $asset))
		{
			$owner_id = 0;
			// Now test the owner is the user.
			if (isset($data['created_by']))
			{ 
				$owner_id	= (int) $data['created_by'];
			}
			if (empty($owner_id) AND $record_id)
			{
				// Need to do a lookup from the model.
				$record		= $this->getModel('ljf07form')->getItem($record_id);

				if (empty($record))
				{
					return false;
				}

				$owner_id = $record->created_by;
			}

			// If the owner matches 'me' then do the test.
			if ($owner_id == $user->id)
			{
				return true;
			}
		}

		// Since there is no asset tracking, revert to the component permissions.
		return parent::allowEdit($data, $key);
	}
	/**
	 * Method override to check if you can delete an existing record.
	 *
	 * @param	array	$data	An array of input data.
	 * @param	string	$key	The name of the key for the primary key; default is id
	 *
	 * @return	boolean
	 *
	 */
	protected function allowDelete($data = array(), $key = 'id')
	{
		$record_id	= (int) isset($data[$key]) ? $data[$key] : 0;
		$user		= JFactory::getUser();
		$asset		= 'com_jtca';

		// Check general delete permission.
		if ($user->authorise('core.delete', $asset))
		{
			return true;
		}

		// Fallback on delete.own.
		// First test if the permission is available.
		if ($user->authorise('core.delete.own', $asset))
		{
			$owner_id = 0;
			// Now test the owner is the user.
			if (isset($data['created_by']))
			{ 
				$owner_id	= (int) $data['created_by'];
			}
			if (empty($owner_id) AND $record_id)
			{
				// Need to do a lookup from the model.
				$record		= $this->getModel('ljf07form')->getItem($record_id);

				if (empty($record))
				{
					return false;
				}

				$owner_id = $record->created_by;
			}

			// If the owner matches 'me' then do the test.
			if ($owner_id == $user_id)
			{
				return true;
			}
			// If the owner matches 'me' then do the test.
			if ($owner_id == $user->id)
			{
				return true;
			}
			else
			{
				return false;
			}
		}		
	}	
	/**
	 * Method to get a model object, loading it if required.
	 *
	 * @param	string	$name	The model name. Optional.
	 * @param	string	$prefix	The class prefix. Optional.
	 * @param	array	$config	Configuration array for model. Optional.
	 *
	 * @return	object	The model.
	 * 
	 */
	public function getModel($name = 'ljf07form', $prefix = '',$config = array('ignore_request' => true))
	{
		$model = parent::getModel($name, $prefix, $config);

		return $model;
	}
	/**
	 * Method to get the return page saved in session data.
	 *
	 * @param	string	$context	The context string used to store the return data
	 *
	 * @return	string	The url string for the return page
	 * 
	 */
	protected function getReturnPage($context)
	{
		$app		= JFactory::getApplication();

		if (!($return = $app->getUserState($context.'.return'))) 
		{
			return JUri::base();
		}

		$return = base64_decode($return);

		if (!JUri::isInternal($return)) 
		{
			$return = JUri::base();
		}

		return $return;
	}
	/**
	 * Method to set the return page as a saved entry in session data.
	 *
	 * @param	string	$context	The context string used to store the return data
	 *
	 * @return	void
	 * 
	 */
	protected function setReturnPage($context)
	{
		$app		= JFactory::getApplication();

		$return = $this->input->get('return', null, 'base64');
		
		if (empty($return) OR !JUri::isInternal(base64_decode($return)))
		{
			$return = base64_encode(JUri::base());
		}
		
		$app->setUserState($context.'.return', $return);
	}
	/**
	 * Method to clear the return page in session data.
	 *
	 * @param	string	$context	The context string used to store the return data
	 *
	 * @return	void
	 * 
	 */	
	protected function clearReturnPage($context)
	{
		$app		= JFactory::getApplication();

		$app->setUserState($context.'.return', null);
	}
	/**
	 * Method to add a new record.
	 *
	 * @return  mixed  True if the LIBRO DE EXHORTOS can be added, a error object if not.
	 *
	 */
	public function add()
	{
		$app		= JFactory::getApplication();
		$context	= $this->option.'.edit.'.$this->context;


		// Clear the record edit information from the session.
		$app->setUserState($context.'.data',	null);

		// Set the return page.
		$this->setReturnPage($context);

		$url = 'index.php?option='.$this->option.'&view='.$this->view_item.'&layout=edit'.$this->getRedirectToItemAppend();
		$tmpl = JFactory::getApplication()->input->get('tmpl');
		if($tmpl)
			$url = "{$url}&tmpl={$tmpl}";

		$redirect = JRoute::_($url, false);

		$this->setRedirect($redirect);

		return true;
	}

	/**
	 * Method to edit a object
	 *
	 * Sets object ID in the session from the request, checks the item out, and then redirects to the edit page.
	 * 
	 * @param   string  $key     The name of the primary key of the URL variable.
	 * @param   string  $url_var  The name of the URL variable if different from the primary key
	 * (sometimes required to avoid router collisions).
	 *
	 * @return  boolean  True if access level check and checkout passes, false otherwise.
	 *
	 */
	public function edit($key = 'id', $url_var = null)
	{
		
		$app		= JFactory::getApplication();
		$context	= $this->option.'.edit.'.$this->context;
		$ids		= $this->input->get('cid', array(), 'array');

		// Get the id of the group to edit.
		$record_id =  (int) (empty($ids) ? $this->input->getInt('id') : array_pop($ids));

		// Access check
		if (!$this->allowEdit(array('id' => $record_id))) 
		{
			JError::raiseError(403, JText::_('JERROR_ALERTNOAUTHOR'));

			return false;
		}

		// Get the menu item model.
		$model = $this->getModel('ljf07form');
		// Set the return url
		$this->setReturnPage($context);

		// Check that this is not a new item.

		if ($record_id > 0) 
		{
			$item = $model->getItem($record_id);

		}

		// Check-out succeeded, register the ID for editing.
		$this->holdEditId($context, $record_id);
		$app->setUserState($context.'.data',	null);

		$redirect = JRoute::_('index.php?option='.$this->option.'&view='.$this->view_item
							.$this->getRedirectToItemAppend($record_id, $key), false);

		$this->setRedirect($redirect);

		return true;
	}

	/**
	 * Method to cancel an edit
	 *
	 * Checks the item in, sets item ID in the session to null, and then redirects to the list page.
	 * 
	 * @param   string  $key  The name of the primary key of the URL variable.
	 *
	 * @return  boolean  True if access level checks pass, false otherwise.
	 */
	public function cancel($key = 'id')
	{
		// Check for request forgeries.
		$this->checkToken();
		
		
		$app		= JFactory::getApplication();
		$model		= $this->getModel('ljf07form');
		$context	= $this->option.'.edit.'.$this->context;
		$record_id	= $this->input->getInt('id');

		if ($record_id) 
		{
			// Check we are holding the id in the edit list.
			if (!$this->checkEditId($context, $record_id)) 
			{
				// Somehow the person just went to the form - we don't allow that.
				$this->setMessage(JText::sprintf('JLIB_APPLICATION_ERROR_UNHELD_ID', $record_id), 'error');
				$this->setRedirect($this->getReturnPage($context));
				
				// Make sure return url is cleared
				$this->clearReturnPage($context);	
				return false;
			}

		}

		// Clear the menu item edit information from the session.
		$this->releaseEditId($context, $record_id);
		$app->setUserState($context.'.data',	null);

		// Redirect to the list screen.
		$this->setRedirect($this->getReturnPage($context));
		
		// Make sure return url is cleared
		$this->clearReturnPage($context);			
		return true;
	}
	/**
	 * Method to save the record
	 *
	 * @param   string  $key     The name of the primary key of the URL variable.
	 * @param   string  $url_var  The name of the URL variable if different from the primary key (sometimes required to avoid router collisions).
	 *
	 * @return  boolean  True if successful, false otherwise.* 
	 */
	public function save($key = 'id', $url_var = null)
	{
		// Check for request forgeries.
		$this->checkToken();
		
		
		$app		= JFactory::getApplication();
		// Think I need to leave this as JRequest for now as the App input only returns a copy of the post data so any changes will be lost
		// Replace with direct POST variable after some checking
		$data		= JRequest::getVar('jform', array(), 'post', 'array');
		$model		= $this->getModel('ljf07form');
		$task		= $this->getTask();
		$context	= $this->option.'.edit.'.$this->context;
		$record_id = $this->input->getInt('id',0);	
		if (!$this->checkEditId($context, $record_id)) 
		{
			// Somehow the person just went to the form and saved it - we don't allow that.
			$this->setMessage(JText::sprintf('JLIB_APPLICATION_ERROR_UNHELD_ID', $record_id), 'error');
			$this->setRedirect($this->getReturnPage($context));
			
			// Make sure return url is cleared
			$this->clearReturnPage($context);	
			return false;
		}

		// Populate the row id from the session.
		$data['id'] = $record_id;
		// The save2copy task needs to be handled slightly differently.
		if ($task == 'save2copy') 
		{

			// Reset the ID and then treat the request as for Apply.
			$data['id']	= 0;
			$task		= 'apply';
		}

		// Validate the posted data.
		$form	= $model->getForm();
		if (!$form) 
		{
			JError::raiseError(500, $model->getError());

			return false;
		}
		$datastore = $data;		
		$data	= $model->validate($form, $data);

		// Check for validation errors.
		if ($data === false) 
		{
			// Get the validation messages.
			$errors	= $model->getErrors();

			// Push up to three validation messages out to the user.
			for ($i = 0, $n = count($errors); $i < $n AND $i < 3; $i++)
			{
				if (JError::isError($errors[$i])) 
				{
					$app->enqueueMessage($errors[$i]->getMessage(), 'warning');
				}
				else 
				{
					$app->enqueueMessage($errors[$i], 'warning');
				}
			}

			// Save the data in the session.
			$app->setUserState($context.'.data', $datastore);

			// Redirect back to the edit screen.
			$this->setRedirect(JRoute::_(
				'index.php?option='.$this->option.'&view='.$this->view_item
				. $this->getRedirectToItemAppend($record_id, $key), false
				)
			);
			return false;
		}

		// Attempt to save the data.
		if (!$model->save($data)) 
		{
			// Save the data in the session.
			$app->setUserState($context.'.data', $data);

			// Redirect back to the edit screen.
			$this->setMessage(JText::sprintf('JLIB_APPLICATION_ERROR_SAVE_FAILED', $model->getError()), 'warning');
			$this->setRedirect(JRoute::_(
				'index.php?option='.$this->option.'&view='.$this->view_item
				. $this->getRedirectToItemAppend($record_id, $key), false
				)
			);
			return false;
		}


		if ($record_id == 0) 
		{
			$this->setMessage(JText::_('COM_JTCA_LJF07S_SUBMIT_SAVE_SUCCESS'));
		} 
		else 
		{
			$this->setMessage(JText::_('COM_JTCA_LJF07S_SAVE_SUCCESS'));
		}

		// Redirect the user and adjust session state based on the chosen task.
		switch ($task)
		{
			case 'apply':
				// Set the row data in the session.
				$record_id = $model->getState('ljf07.id');
				$this->holdEditId($context, $record_id);
				$app->setUserState($context.'.data',	null);

				// Redirect back to the edit screen.
				$this->setRedirect(JRoute::_(
					'index.php?option='.$this->option.'&view='.$this->view_item
					. $this->getRedirectToItemAppend($record_id, $key), false
					)
				);				
				break;

			case 'save2new':
				// Clear the row id and data in the session.
				$this->releaseEditId($context, $record_id);
				$app->setUserState($context.'.data',	null);

				// Redirect back to the edit screen.
				$this->setRedirect(JRoute::_(
					'index.php?option='.$this->option.'&view='.$this->view_item
					.'&layout=edit', false
					)
				);
			break;

			default:
				// Clear the row id and data in the session.
				$this->releaseEditId($context, $record_id);
				$app->setUserState($context.'.data',	null);

				// Redirect to the list screen.
				$this->setRedirect($this->getReturnPage($context));
				
				// Make sure return url is cleared
				$this->clearReturnPage($context);					
				break;
		}
		// Invoke the postSave method to allow for the child class to access the model.
		$this->postSaveHook($model, $data);

		return true;		
	}

	/**
	 * Method to delete a object
	 *
	 * Sets object ID in the session from the request and then deletes the object.
	 *
	 * @return	boolean	True if the record can be edited, false if not.
	 */
	public function delete()
	{
		// Check for request forgeries
		$this->checkToken();
		
		$app		= JFactory::getApplication();
		$context	= "$this->option.delete.$this->context";
		$ids		= $this->input->get('cid', array(), 'array');

		// Get the id of the group to edit.
		$id =  (int) (empty($ids) ? $this->input->getInt('id') : array_pop($ids));

		// Access check
		if (!$this->allowDelete(array('id' => $id))) 
		{
			JError::raiseError(403, JText::_('JERROR_ALERTNOAUTHOR'));

			return false;
		}

		// Get the menu item model.
		$model = $this->getModel('ljf07');

		// Check that this is not a new item.

		if ($id > 0) 
		{
			
			$trash_state = -2;
			if($model->publish($id, $trash_state))
			{
				$this->setMessage(JText::_('COM_JTCA_LJF07S_DELETE_SUCCESS'));
				
			}
			else
			{
				$this->setMessage(JText::_('COM_JTCA_LJF07S_DELETE_FAILED'));
			}
		}

		$this->setReturnPage($context);

		$this->setRedirect($this->getReturnPage($context));
		
		// Make sure return url is cleared
		$this->clearReturnPage($context);	
		
		return true;
	}	
	/**
	 * Function that allows child controller access to model data after the data has been saved.
	 *
	 * @param   JModelLegacy  $model  The data model object.
	 * @param   array         $validData   The validated data.
	 *
	 * @return  void
	 *
	 */
	protected function postSaveHook(JModelLegacy $model, $valid_data = array())
	{
		return;
	}	
	
	
        /**
         * Redirect to History view
         * Jform->getInput('contenthistory') no es re-utilizable en vista plural
         */
        public function showHistory(){
            $item_id = $this->input->getInt('item_id');
            $model = $this->getModel();
            $typeId = JTable::getInstance('Contenttype')->getTypeId($model->typeAlias);            

            $link   = 'index.php?option=com_contenthistory&view=history&layout=modal&tmpl=component'
                    . '&item_id=' . $item_id . '&type_id=' . $typeId . '&type_alias='
                    . $model->typeAlias . '&' . JSession::getFormToken() . '=1&template=protostar';
            $this->setRedirect($link);
        }
	
}
