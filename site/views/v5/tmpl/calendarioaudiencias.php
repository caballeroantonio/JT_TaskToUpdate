<?php
/**
 * @version     1.0.0
 * @package     com_gpcb
 * @copyright   Copyright (C) 2014. All Rights Reserved
 * @license     Creative Commons Attribution-NoDerivatives 4.0 International License
 * @author      caballeroantonio <caballeroantonio@hotmail.com> - http://caballeroantonio.com
 */
// no direct access
defined('_JEXEC') or die;

$empleado = $_SESSION['empleado'];

$db = JFactory::getDbo();

$query = $db->getQuery(true);
$query
->select('l.*')
->from('jtvc_libros l')
->where("e__id = {$empleado->id}")
->where("l__nombre LIKE 'AGENDA %'")
->setLimit(1);

if($empleado->id_secretaria){
	$query
	->select('s.secretaria')
	->join('LEFT', "jtc_secretarias s ON s.id = {$empleado->id_secretaria}");
}

$db->setQuery($query);
$libro = $db->loadObject();

$document = JFactory::getDocument();
$document->setDescription('Agenda');

$tpl_params = JFactory::getApplication()->getTemplate(true)->params;
$document->addScript("templates/gpcb/assets_{$tpl_params->get('assetVersion')}/js/plugins/fullcalendar/lib/moment.min.js");
$document->addScript("templates/gpcb/assets_{$tpl_params->get('assetVersion')}/js/plugins/fullcalendar/fullcalendar.min.js");
$document->addScript("templates/gpcb/assets_{$tpl_params->get('assetVersion')}/js/plugins/fullcalendar/gcal.js");
$document->addScript("templates/gpcb/assets_{$tpl_params->get('assetVersion')}/js/plugins/fullcalendar/locale/es.js");
?>
<script language="javascript">
    $(document).ready(function ($) {
        $('.calendar').fullCalendar({
            //defaultView: 'listWeek',
            lang: "es",
            header: {
                left: 'month, listDay',//agendaWeek, agendaDay,
                center: 'title',
                right: 'prev, next, today'
            },
            editable: false,
            timeFormat: 'h(:mm)A',
            //defaultTimedEventDuration: '00:15:00',#duración de 15 min por audiencia
            businessHours: {
                // days of week. an array of zero-based day of week integers (0=Sunday)
                dow: [1, 2, 3, 4, 5], // Monday - Friday
                start: '9:00',
                end: '18:00',
            },
            eventSources: [
<?php /*?>                {
                    googleCalendarApiKey: 'AIzaSyCb-FboqiQb9jXOO3L5JbVJrOMxPze4hKU',                    
                    googleCalendarId: 'es.mexican#holiday@group.v.calendar.google.com',
                    color: 'yellow',
                    textColor: 'black'
                },<?php */?>
<?php 
if(!$libro):
    JError::raiseWarning( 100, 'No existen datos para mostrar' );
else:
    ?>

                {
                    events: function (start, end, timezone, callback) {
                        startParam: 'faudiencia',
                                filter = [
                                    {
                                        field: 'faudiencia',
                                        data: {
                                            type: 'date',
                                            comparison: 'gt',
                                            value: start.format('Y-M-D'),
                                        }
                                    },
                                    {
                                        field: 'faudiencia',
                                        data: {
                                            type: 'date',
                                            comparison: 'lt',
                                            value: end.format('Y-M-D'),
                                        }
                                    },
                                ];
                        $.ajax({
                            url: '<?= JURI::base() ?>index.php?option=com_tsjdf_libros2',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                task: 'v4.read',
                                store: 'libro',
                                clave: '<?= $libro->l__clave ?>',
                                filter: filter,
                                limit: 0
                            },
                            success: function (json, textStatus, jqXHR) {
                                if (!json.success)
                                    return;
                                if (json.warning)
                                    alert(json.message);

                                $(json.data).each(function (index, record) {
                                    record.start = record.faudiencia;
                                    record.title = record.e__name;
                                });
                                callback(json.data);
                            }
                        });
                    },
                }
    <?php
endif;//!$libro
?>
            ],
<?php /*?>            eventClick: function(calEvent, jsEvent, view) {

                alert('Event: ' + calEvent.title);
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('View: ' + view.name);

                // change the border color just for fun
                $(this).css('border-color', 'red');

            }<?php */?>
        });
    });
</script>
<div class="widget">
    <div class="widget-header">
        <h3><i class="fa fa-calendar"></i> Agenda
            <?php
            if ($libro && $libro->l__distribution == 2 && $empleado->id_secretaria)
                echo " de la secretaría {$libro->secretaria}";
            ?>
        </h3>
    </div>
    <div class="widget-content">
        <div class="calendar"></div>
    </div>
</div>