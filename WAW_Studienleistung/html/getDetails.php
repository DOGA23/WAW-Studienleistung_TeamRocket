<?php
header('Content-Type: "application/json"');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    $params = $_GET;
}

$file = $_SERVER["DOCUMENT_ROOT"]."/WAW/Milestone 2/lib/json/".$params["dateiname"].".json";
echo(file_get_contents($file));

?>