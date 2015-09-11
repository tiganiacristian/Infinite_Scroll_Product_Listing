<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "products");

$result = $conn->query("SELECT id, imageUrl, name, price, category FROM productlist");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"imageUrl":"'   . $rs["imageUrl"]        . '",';
    $outp .= '"name":"'   . $rs["name"]        . '",';
    $outp .= '"price":"'   . $rs["price"]        . '",';
    $outp .= '"category":"'. $rs["category"]     . '"}'; 
}

$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>

