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

//http://localhost/gpcb/index.php?option=com_tsjdf_libros2&view=v4&layout=tortidb&clave=lejemplo&format=txt
$doc = JFactory::getDocument();
$doc->setMimeEncoding('text/plain');

$clave = JRequest :: getCmd('clave');
$sublibro = ( stripos($clave, "_")===false?false:true 
	OR JRequest :: getInt('sublibro', 0) ); 
$showCreateTable = JRequest :: getInt('showCreateTable', 1);

if(!$clave)
	die('debes elegir una clave de libro');
switch($clave){
	case 'xxx':
	break;
}
	
$db	= JFactory::getDBO();
$db->setQuery("SELECT * FROM jt3_campos WHERE NOT dataType <=> 'parent' AND published AND clave = '$clave' ORDER BY ordering, id;");
$campos = $db->loadObjectList();

$db->setQuery("SELECT id, distribution, id_tipoorgano, tabla, view FROM jtc_libros WHERE clave = '{$clave}';");
$libro = $db->loadObject();
if(!$libro)
	die('clave invalida');

if($showCreateTable):
?>

DROP TABLE IF EXISTS `<?=$libro->tabla?>`;
CREATE TABLE IF NOT EXISTS `<?=$libro->tabla?>` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	 PRIMARY KEY (`id`),
	`state` TINYINT(1) NOT NULL DEFAULT 1,
	`created` DATETIME NULL,
	`created_by` INT NULL,
	INDEX `l3_<?=$libro->id?>_createdby_idx` (`created_by` ASC),
	CONSTRAINT `l3_<?=$libro->id?>_createdby`
		FOREIGN KEY (`created_by`)
		REFERENCES `jos_users` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,
	`modified` DATETIME NULL,
	`modified_by` INT NULL,
<?php if(!$sublibro){?>
	`id_expediente` INT NULL,
	INDEX `l3_<?=$libro->id?>_expediente_idx` (`id_expediente` ASC),
	CONSTRAINT `l3_<?=$libro->id?>_expediente`
		FOREIGN KEY (`id_expediente`)
		REFERENCES `jt_expedientes` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,

	`id_organo` INT NULL,
	INDEX `l3_<?=$libro->id?>_organo_idx` (`id_organo` ASC),
	CONSTRAINT `l3_<?=$libro->id?>_organo`
		FOREIGN KEY (`id_organo`)
		REFERENCES `jtc_organos` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,
        
	`id_secretaria` INT NULL,
	INDEX `l3_<?=$libro->id?>_secretaria_idx` (`id_organo` ASC, `id_secretaria` ASC),
	CONSTRAINT `l3_<?=$libro->id?>_secretaria`
		FOREIGN KEY (`id_organo` , `id_secretaria`)
		REFERENCES `jtc_secretarias` (`id_organo` , `id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,
 	`anoj` YEAR NULL,
 	INDEX `l3_<?=$libro->id?>_anoj_idx` (`anoj` ASC),
	`ordering` INT NOT NULL,
<?php }else{?>
	`id_field` INT NOT NULL COMMENT 'apunta al id de jt3_campos',
	INDEX `sl3_<?=$libro->id?>_field` (`id_field` ASC),
	`id_record` INT NOT NULL COMMENT 'apunta al id de jtlv4_XXXX',
	INDEX `sl3_<?=$libro->id?>_record` (`id_record` ASC),
<?php }?>
<?php 
$i = 0;
foreach($campos as $campo){
	$i++;
	switch($campo->dataType){
		case 'ref':
			if($campo->store == 'currency')
				$campo->store = 'country';
			else if($campo->store == 'organosextintos')
				$campo->store = 'organos';
		?> 
	`<?=$campo->dataIndex?>` INT NULL COMMENT '<?=$campo->columnText?>',
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC),
	CONSTRAINT `c3_<?=$campo->id?>`
		FOREIGN KEY (`<?=$campo->dataIndex?>`)
		REFERENCES `jtc_<?=$campo->store?>` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE 
		<?php break;
		case 'ref2':?> 
	`<?=$campo->dataIndex?>` INT NULL ,
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC),
	CONSTRAINT `c3_<?=$campo->id?>`
		FOREIGN KEY (`<?=$campo->dataIndex?>`)
		REFERENCES `jtc_general` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE 
		<?php break;
		case 'date':
		case 'datetime':?> 
	`<?=$campo->dataIndex?>` DATETIME NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case '':
		case 'string':?> 
	`<?=$campo->dataIndex?>` VARCHAR(45) NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'VARCHAR255':?>
	`<?=$campo->dataIndex?>` VARCHAR(255) NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'suggest':?> 
	`txt_<?=$campo->dataIndex?>` VARCHAR(255) NULL COMMENT '<?=$campo->columnText?>',
	`id_<?=$campo->dataIndex?>` INT(11) NULL COMMENT 'FK <?=$campo->store?>'
        <?php break;
		case 'person': ?> 
	`<?=$campo->dataIndex?>_paterno` VARCHAR(255) NULL, `<?=$campo->dataIndex?>_materno` VARCHAR(45) NULL, `<?=$campo->dataIndex?>_nombre` VARCHAR(45) NULL, `<?=$campo->dataIndex?>_isMoral` TINYINT(1) NOT NULL
        <?php break;
		case 'multiline': ?> 
	`<?=$campo->dataIndex?>` TEXT NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'boolean': ?> 
	`<?=$campo->dataIndex?>` TINYINT(1) NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'averiguacion':
		case 'expediente': ?> 
	`<?=$campo->dataIndex?>` VARCHAR(45) NULL COMMENT '<?=$campo->columnText?>',
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC)
        <?php break;
		case 'int': ?> 
	`<?=$campo->dataIndex?>` INT NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'currency': ?> 
	`<?=$campo->dataIndex?>` DECIMAL(11,2) NULL COMMENT '<?=$campo->columnText?>'
        <?php break;
		case 'NFempleado':?> 
	`<?=$campo->dataIndex?>` INT NULL COMMENT 'id <?=$campo->columnText?>',	
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC),
	CONSTRAINT `c3_<?=$campo->id?>`
		FOREIGN KEY (`<?=$campo->dataIndex?>`)
		REFERENCES `jt_uploadedfiles` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE 
		<?php break;
		case 'Fexterna': ?> 
	`<?=$campo->dataIndex?>` INT NULL COMMENT 'id_firma <?=$campo->columnText?>',
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC),
	CONSTRAINT `c3_<?=$campo->id?>`
		FOREIGN KEY (`<?=$campo->dataIndex?>`)
		REFERENCES `jt_uploadedfiles` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
        <?php break;
		case 'Hexterna': ?> 
	`<?=$campo->dataIndex?>` INT NULL COMMENT 'id_huella <?=$campo->columnText?>',
	INDEX `c3_<?=$campo->id?>_idx` (`<?=$campo->dataIndex?>` ASC),
	CONSTRAINT `c3_<?=$campo->id?>`
		FOREIGN KEY (`<?=$campo->dataIndex?>`)
		REFERENCES `jt_uploadedfiles` (`id`)
		ON DELETE RESTRICT
		ON UPDATE CASCADE 
        <?php break;
		default:
			echo "error con: $campo->dataType";
		break;
	}
	
	if($campo->dataIndex == 'billete')
	echo ", INDEX `idx_billete` (`billete` ASC)";
	
	if( ($i)!=count($campos))
		echo ',';
}

/**
* reglas partículares
*/
switch($clave){
//	case 'ljjadng01': //ya no no se usa KEY `ljjadng01-autoridad_idx` (`field3`), no se ha borrado el KEY ni el campo field3
	case 'ljc08':
		echo "\n,UNIQUE INDEX `ljc08-field10` (`id_organo` ASC, `field10` ASC, `anoj` ASC)\n";
	break;

}
?> 
)COMMENT = 'generado el <?=date('Y-m-d H:i:s')?>'; 

<?php 
endif; //$showCreateTable
?>

DROP TABLE IF EXISTS `<?=$libro->view?>`;
DROP VIEW IF EXISTS `<?=$libro->view?>`;
CREATE OR REPLACE VIEW <?=$libro->view?> AS
<?php 
$db	= JFactory::getDBO();
$query = $db->getQuery(true);
$query->select('l.id');

if(!$sublibro){
	$query->select("l.id_organo, l.anoj, l.ordering, l.id_expediente \n");
        
        if($libro->id_tipoorgano != 3)
	$query->select("e.name 'e__name', e.txt_tipojuicio 'e__txt_tipojuicio', e.numero 'e__numero', e.ano 'e__ano' \n")
		->join('LEFT', "jt_expedientes e ON e.id = l.id_expediente \n");
	
	/*
	en el controller meto e.name, e.tipojuicio, e.id_tipojuicio
	 $query->join('LEFT', "jt_expedientes e ON e.id = l.id_expediente \n");
*/
	if($libro->distribution == 2)
		$query->select('l.id_secretaria');
	if($libro->distribution == 3)
		$query->select('l.created_by, u.name AS created_byuser')
		->join('LEFT', "jos_users u ON l.created_by = u.id \n");
}else{
	$query->select("l.id_field, l.id_record \n");
}
$i = 0;
foreach($campos as $campo){
	$i++;
	switch($campo->dataType){
		case 'NFempleado':
/*			
			lo usaba para firmar con el login.
			FALSE AS fx, para que el checkbox estuviera siempre blank
			jalaba el nombre de jos_users
			nunca se almacenó ninguna firma en jt_empleados.sign
			echo "false AS $campo->dataIndex, u_$campo->dataIndex.name AS $campo->dataIndex". "_name, e_$campo->dataIndex.sign AS $campo->dataIndex"."_sign";*/
			$query->select("\n {$campo->dataIndex}, u_{$campo->id}.name AS {$campo->dataIndex}_name, calculatePath(f_{$campo->id}.id,f_{$campo->id}.filename) AS {$campo->dataIndex}_file \n")
			->join('LEFT', "jt_uploadedfiles f_{$campo->id} ON l.{$campo->dataIndex} = f_{$campo->id}.id \n")
			->join('LEFT', "jos_users u_{$campo->id} ON f_{$campo->id}.created_by = u_{$campo->id}.id \n");
		break;
		case 'Fexterna':
			$query->select("\n {$campo->dataIndex}, calculatePath(f_{$campo->id}.id,f_{$campo->id}.filename) AS {$campo->dataIndex}_file \n")
			->join('LEFT', "jt_uploadedfiles f_{$campo->id} ON l.{$campo->dataIndex} = f_{$campo->id}.id \n");
		break;
		case 'Hexterna':
			$query->select("\n {$campo->dataIndex}, calculatePath(h_{$campo->id}.id,h_{$campo->id}.filename) AS {$campo->dataIndex}_file \n")
			->join('LEFT', "jt_uploadedfiles h_{$campo->id} ON l.{$campo->dataIndex} = h_{$campo->id}.id \n");
		break;
		case 'person':
			$query->select("\n CONCAT_WS(' ',l.{$campo->dataIndex}_paterno, l.{$campo->dataIndex}_materno, l.{$campo->dataIndex}_nombre) AS {$campo->dataIndex}")
			->select("\n l.{$campo->dataIndex}_paterno, l.{$campo->dataIndex}_materno, l.{$campo->dataIndex}_nombre, l.{$campo->dataIndex}_isMoral \n");
		break;
                case 'suggest':
                    $query->select("l.id_{$campo->dataIndex}, l.txt_{$campo->dataIndex}");
                break;
		default:
			$query->select("l.{$campo->dataIndex}");
		break;
	}
} 
$query->from("{$libro->tabla} l");
// mejor en el controller
// $query->order("l.anoj DESC,l.ordering \n");
echo $query.';';
exit();
?>