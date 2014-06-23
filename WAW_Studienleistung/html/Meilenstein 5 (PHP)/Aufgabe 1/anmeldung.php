<?php


$vorname = $_GET["vorname"];
$nachname = $_GET["nachname"];
$email = $_GET["email"];
$matrikelnr = $_GET["matrikelnr"];
$handy = $_GET["handy"];
$studiengang = $_GET["studiengang"];

$params = $vorname." ".$nachname.", ".$matrikelnr.", ".$email.", ".$handy.", ".$studiengang.";".PHP_EOL;

if($_GET["messe"] == "cebit"){
    $my_file = 'cebit.txt';
    $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    fwrite($handle, $params);

    fclose($handle);
}

if($_GET["messe"] == "conhit"){
    $my_file = 'conhit.txt';
    $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    fwrite($handle, $params);

    fclose($handle);
}

if($_GET["messe"] == "webtechcon"){
    $my_file = 'webtech.txt';
    $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    fwrite($handle, $params);

    fclose($handle);
}
?>