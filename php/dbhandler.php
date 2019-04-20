<?php

//require 'db.php';
require 'dbcreator.php';

function queryTime($id) {
    $db = login(); //创建连接

    $sql = "select * from lotteries where lid=$id";
    $res = $db->query($sql);

    $db = null; //释放连接
    return $res;
}

function queryRewards($id) {
    $db = login();

    $sql = "select * from rewards where lid=$id";
    $res = $db->query($sql);

    $db = null;
    return $res;
}

function queryMembers($id) {
    $db = login();

    $sql = "select * from members where lid=$id";
    $res = $db->query($sql);

    $db = null;
    return $res;
}

function insertLottery($info = ['000000', '1970-01-01', '1970-01-01']) {
    $db = login(); //创建连接

    $table = 'lotteries';
    $values = "value('$info[0]', '$info[1]', '$info[2]')";
    $sql = "insert into $table $values";
    $res = $db->exec($sql);

    $db = null; //释放连接
    return $res;
}

function insertRewards($list, $id) {
    $db = login();
    $table = 'rewards';

    for($i = 0; $i < count($list); $i += 3) {
        $t1 = $i + 1;
        $t2 = $i + 2;
        $values = "values('$list[$i]', $list[$t1], $list[$t2], '$id')";
        $sql = "insert into $table $values";
        $db->exec($sql);
    }

    $db = null;
}

function insertMembers($list, $id) {
    $db = login();
    $table = 'members';

    for($i = 0; $i < count($list); $i += 2) {
        $t1 = $i + 1;
        $values = "values('$list[$i]', '$list[$t1]', '$id')";
        $sql = "insert into $table $values";
        echo $sql."\n";
        $db->exec($sql);
    }

    $db = null;
}

function deleteLottery($id) {
    $db = login(); //create link

    $table = 'lotteries';
    $sql = "delete from $table where lid='$id'";
    $res = $db->exec($sql);

    $db = null; //free link
    return $res;
}