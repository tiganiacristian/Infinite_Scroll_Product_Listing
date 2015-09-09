<?php

require_once("connectDB.php");
$data = json_decode(file_get_contents("php://input"));
$name = mysql_real_escape_string($data->name);
$price = mysql_real_escape_string($data->price);
$count = mysql_real_escape_string($data->count);


	$sql = "INSERT INTO productcart VALUES('".$name."','".$count."')"; 
	$connect->exec($sql);

