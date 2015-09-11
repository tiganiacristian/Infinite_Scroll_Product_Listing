<?php 

	require_once('connectDB.php');

	$limit = $_GET['showLimit'];

	$query = $connect->query("SELECT * FROM productlist LIMIT  $limit, 16");

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


