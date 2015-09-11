<?php

require_once("connectDB.php");
$data = json_decode(file_get_contents("php://input"));
$clientCart= mysql_real_escape_string($data->clientCart);




	$sql = "INSERT INTO productcart (user, name) VALUES( NULL, '".$clientCart."')"; 
	$connect->exec($sql);

