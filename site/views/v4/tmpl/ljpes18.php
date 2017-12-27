<?php 
/**
* @package TSJDF
* @author caballeroantonio
* @website Sistemas de Lectura y Facturación Inmediata
* @email caballeroantonio@hotmail.com
* @copyright GNU General Public License version 3, or later
* @license GNU General Public License version 3, or later
**/

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once ( JPATH_COMPONENT . '/helpers/Book2ExtJSApp.php' );
class ljpes18App extends Tsjdf_libros2HelpersBook2ExtJSApp{


    /**
     * Regla de negocios, este libro no ocupa expediente
     */
    function getViewFormFields() {
        $fields = parent::getViewFormFields();
        unset($fields['id_expediente']);
        return $fields;
    }
    
    function getViewColumns() {
        $columns = parent::getViewColumns();
		unset($columns['e__name']);
		unset($columns['e__txt_tipojuicio']);
        return $columns;
    }
	
    function getViewFilters() {
        $filters = parent::getViewFilters();
        unset($filters['id_expediente']);
        unset($filters['partescontenciosas']);
        return $filters;
    }
    
    function getViewRowExpanderBodyTpl() {
/*
<!--<table border="1">
  <caption><strong>COM_TSJDF_LIBROS2_PARTESCONTENCIOSAS_TEXT</strong></caption>
  </tr>
    <th>#</th>
    <th>A. Paterno<br/>/Razón social</th>
    <th>A. Materno</th>
    <th>Nombre</th><th>Datos</th></tr><tpl for="Expediente.partescontenciosas">
  <tr>
    <td>{#}</td>
        <tpl if="p__isMoral">
			<td colspan="3">{p__paterno} {p__materno} {p__nombre}</td>
        <tpl else>
			<td>{p__paterno}</td>
			<td>{p__materno}</td>
			<td>{p__nombre}</td>
        </tpl>
        <td>
		CURP: {a__curp}
		<br/>RFC: {a__rfc}
		<br/>Calle: {a__calle} # {a__numero}
		<br/>Colonia: {a__colonia}
		<br/>C.P.: {a__cp}
		<br/>{a__municipio},{[this.getStoreValue(\"catalogo.entidadesf\",values.a__id_entidadf,\"entidadfn\")]}
	</td>
  </tr>
</tpl>
</table><table border="1">
  <caption><strong>{[Ext.tx.form.field.ExpedientePicker.prototype.demandadosText]}</strong></caption>
  </tr>
    <th>#</th>
    <th>A. Paterno<br/>/Razón social</th>
    <th>A. Materno</th>
    <th>Nombre</th><th>Datos</th></tr><tpl for="Expediente.demandados">
  <tr>
    <td>{#}</td>
        <tpl if="p__isMoral">
			<td colspan="3">{p__paterno} {p__materno} {p__nombre}</td>
        <tpl else>
			<td>{p__paterno}</td>
			<td>{p__materno}</td>
			<td>{p__nombre}</td>
        </tpl>
        <td>
		CURP: {a__curp}
		<br/>RFC: {a__rfc}
		<br/>Calle: {a__calle} # {a__numero}
		<br/>Colonia: {a__colonia}
		<br/>C.P.: {a__cp}
		<br/>{a__municipio},{[this.getStoreValue(\"catalogo.entidadesf\",values.a__id_entidadf,\"entidadfn\")]}
	</td>
  </tr>
</tpl>
</table>--><p>
*/		
        $rowexpander = <<<EOD
<tpl if="T397_comment"><p><b>Observaciones del visitador: </b>{T397_comment:this.insertBreaks}</p></tpl>
<b>DILIGENCIA: </b>{field7:this.insertBreaks}</p><p><b>OBSERVACIONES: </b>{field11:this.insertBreaks}</p>
EOD;
        return $rowexpander;
    }
}

$bookApp = new ljpes18App($this->libro, $this->empleado);
//if(JRequest::getVar('format')){
//    print_r( $bookApp->getViewFilters());
//    return;
//}
?> 
<!--ExtJS model-->
<script language="javascript">
	Ext.define('tsjdf.model.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getModelConfiguration()) ?>);
</script>
<!--ExtJS store-->
<script language="javascript">
	Ext.define('tsjdf.store.libro.<?=$this->clave?>', <?= $bookApp->encode($bookApp->getStoreConfiguration()) ?>);
</script>
<!--app-->
<script language="javascript">
	Ext.application(<?= $bookApp->encode($bookApp->getAppConfiguration()) ?>);
</script>