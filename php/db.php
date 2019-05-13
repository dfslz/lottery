<?php

$dbtype = 'mysql';
$host = '127.0.0.1';
$dbname = 'lottery';

$dsn = "$dbtype:host=$host;dbname=$dbname";
$username = 'zhi';
$password = 'luozhi';

function login() {
    $dsn = $GLOBALS['dsn'];
    $username = $GLOBALS['username'];
    $password = $GLOBALS['password'];

    $db = new PDO($dsn, $username, $password);
    return $db;
}

$link = login();