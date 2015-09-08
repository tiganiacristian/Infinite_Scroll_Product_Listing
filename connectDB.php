<?php
	try
	{
		$connect = new PDO("mysql:host=localhost;dbname=products",'root','');
	}
	catch(Exception $e)
	{
		die("Error".$e->getMessage());
	}

?>
