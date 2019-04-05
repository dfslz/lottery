<?php
$path = "/var/www/html/lottery/data/";
$id = $_POST["id"];

$fileName = $id . ".member";

$fmember = fopen($path . $fileName, "r"); //打开文件

fscanf($fmember, "%d", $amount);

$list = [];

for ($i = 0; $i < $amount * 2; $i++) {
    fscanf($fmember, "%s", $list[$i]);
}

fclose($fmember); //关闭文件

echo json_encode($list);
