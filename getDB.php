<?php 

	require_once('database/connectDB.php');

	$limit = $_GET['showLimit'];
	if ($_GET['items']){
		$items = $_GET['items'];
	}
	else  $items =16;

	$query = $connect->query("SELECT * FROM productlist LIMIT  $limit, $items");

	$data = array();
	while($row = $query->fetch()) {
	$product = array(
		"id" => $row['id'],
		"imageUrl" => $row['imageUrl'],
		"name" => $row['name'],
		"price" => $row['price'],
		"category" => $row['category'],
	);
	array_push($data, $product);
}
echo json_encode($data);


