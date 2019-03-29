<?php
$path = "/var/www/html/lottery/data/";

$list = array(); //抽奖信息数组

$fin = fopen($path . "dataInfo.dat", "r");
$amount = 0;
fscanf($fin, "%d", $amount); //读取抽奖总数

for ($i = 0; $i < $amount; ++$i) {
    fscanf($fin, "%s", $id);
    $fInfo = fopen($path . $id, "r"); //打开抽奖信息

    $cnt = 1;
    $list[$i][0] = $id;
    while (!feof($fInfo)) {
        fscanf($fInfo, "%s", $list[$i][$cnt++]);
    }
    fclose($fInfo);
}
fclose($fin);

echo json_encode($list);
 