<?php
    $rewards = $_POST["rewards"];
    $length = $_POST["length"];

    //获取抽奖信息
    $root = "/var/www/html/lottery/data/";
    $fin = fopen($root."dataInfo.dat", "r");

    $amount = 0;
    fscanf($fin, "%d", $amount);

    $lotteryList = [];
    for($i = 0; $i < $amount; ++$i) {
        fscanf($fin, "%d", $lotteryList[$i]);
    }
    fclose($fin);

    //随机生成一个id
    $id = rand(0, 100000);
    while(in_array($id, $lotteryList)) {
        $id = rand(0, 100000);
    }

    $fout = fopen($root."dataInfo.dat", "w");
    $lotteryList[$amount] = $id;

    //重写抽奖信息
    fprintf($fout, "%d", $amount+1);
    for($i = 0; $i <= $amount; ++$i) {
        fprintf($fout, "\n%d", $lotteryList[$i]);
    }
    fclose($fout);

    //写入抽奖信息
    $newLottery = fopen($root.$id, "w");
    for($i = 0; $i < $length; ++$i) {
        fprintf($newLottery, "%s\n", $rewards[$i]);
    }
    echo json_encode("ok");
    fclose($newLottery);
?>