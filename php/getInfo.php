<?php
$id = $_POST["id"];
$path = "/var/www/html/lottery/data/";
$array = [];

if(!file_exists($path.$id)) {
    echo json_encode($array);
    exit(0);
}

$fout = fopen($path . $id, "r");
for ($i = 0; $i < 3; ++$i) {
    fscanf($fout, "%s", $nothing);
}

$cnt = 0;
while (!feof($fout)) {
    fscanf($fout, "%s", $array[$cnt++]);
    fscanf($fout, "%s", $group[1]);
    fscanf($fout, "%s", $group[2]);
}

echo json_encode($array);
 