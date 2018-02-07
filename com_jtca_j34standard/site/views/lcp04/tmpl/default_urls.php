<?php
/**
 * @version 		$Id:$
 * @name			TSJ CDMX Libros TxCA
 * @author			caballeroantonio (caballeroantonio.com)
 * @package			com_jtca
 * @subpackage		com_jtca.admin
 * @copyright		Copyright (c) 2017 - 2020. All Rights Reserved
 * @license			GNU General Public License version 3 or later; See http://www.gnu.org/copyleft/gpl.html 
 * 
 * The following Component Architect header section must remain in any distribution of this file
 *
 * @CAversion		Id: default_urls.php 571 2016-01-04 15:03:02Z BrianWade $
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

/*
 *	Initialise values for the layout 
 */	

$urls = $this->item->urls;

// Create shortcuts to some parameters.
$params = $this->item->params;

/*
 *	Layout HTML
 */
?>
<?php if ($urls AND (!empty($urls['urla']) OR !empty($urls['urlb']) OR !empty($urls['urlc']))) : ?>
	<div class="content-links">
	<ul class="nav nav-tabs nav-stacked">
		<?php
		$urlarray = array(
			array($urls['urla'], $urls['urla_text'], $urls['urla_target'], 'a'),
			array($urls['urlb'], $urls['urlb_text'], $urls['urlb_target'], 'b'),
			array($urls['urlc'], $urls['urlc_text'], $urls['urlc_target'], 'c')
			);
			foreach ($urlarray as $url) :
				$link = $url[0];
				$label = $url[1];
				$target = $url[2];
				$id = $url[3];

				if ( ! $link) :
					continue;
				endif;

				// If no label is present, take the link
				$label = ($label) ? $label : $link;

				// If no target is present, use the default
				$target = $target ? $target : $params->get('target'.$id);
				?>
			<li class="content-links-<?php echo $id; ?>">
				<?php
					// Compute the correct link

					switch ($target)
					{
						case 1:
							// open in a new window
							echo '<a href="'. htmlspecialchars($link) .'" target="_blank"  rel="nofollow">'.
							htmlspecialchars($label) .'</a>';
							break;

						case 2:
							// open in a popup window
							$attribs = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=600';
							echo "<a href=\"" . htmlspecialchars($link) . "\" onclick=\"window.open(this.href, 'targetWindow', '".$attribs."'); return false;\">".
							htmlspecialchars($label).'</a>';
							break;
						case 3:
							// open in a modal window
							JHtml::_('behavior.modal', 'a.modal');
							echo '<a class="modal" href="'.htmlspecialchars($link).'"  rel="{handler: \'iframe\', size: {x:600, y:600}}">'.
							htmlspecialchars($label).'</a>';
							break;
						default:
								// open in parent window
							echo '<a href="'.  htmlspecialchars($link) . '" rel="nofollow">'.
						
							htmlspecialchars($label) . ' </a>';
							break;
					}
				?>
				</li>
		<?php endforeach; ?>
	</ul>
</div>
<?php endif; ?>
