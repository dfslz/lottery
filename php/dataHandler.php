<?php
require 'dbhandler.php';

function getid($id) {
    $id += 1e7;
    return substr($id."", 1, 6);
}

$rewards = $_POST["rewards"];
$length = $_POST["length"];
$memberAmount = $_POST["amount"];
$member = $_POST["list"];

$lid = getid(rand(0, 1000000));
while(queryTime($lid) != null) {//随机生成一个id
    $lid = getid(rand(0, 1000000));
}
insertLottery([$lid, $rewards[0], $rewards[1], $rewards[2]]);

//获取抽奖信息
$root = "/var/www/html/lottery/data/";
$fin = fopen($root . "dataInfo.dat", "r");

$amount = 0;
fscanf($fin, "%d", $amount);

$lotteryList = [];
for ($i = 0; $i < $amount; ++$i) {
    fscanf($fin, "%d", $lotteryList[$i]);
}
fclose($fin);

//随机生成一个id
$id = rand(0, 100000);
while (in_array($id, $lotteryList)) {
    $id = rand(0, 100000);
}

$fout = fopen($root . "dataInfo.dat", "w");
$lotteryList[$amount] = $id;

//重写抽奖信息列表
fprintf($fout, "%d", $amount + 1);
for ($i = 0; $i <= $amount; ++$i) {
    fprintf($fout, "\n%d", $lotteryList[$i]);
}
fclose($fout);

//写入抽奖信息
$newLottery = fopen($root . $id, "w");
for ($i = 0; $i < $length; ++$i) {
    fprintf($newLottery, "%s\n", $rewards[$i]);
}
fclose($newLottery);

//写入人员名单
$fmember = fopen($root . $id . ".member", "w");
fprintf($fmember, "%d\n", $memberAmount / 2 - 1);
for ($i = 2; $i < $memberAmount; $i++) { //$member[0,1]两位为title
    fprintf($fmember, "%s\n", $member[$i]);
}
fclose($fmember);

echo json_encode("ok");
