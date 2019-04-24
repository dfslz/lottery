<?php

require 'db.php';

function createLotteries()
{
    $db = login(); //log in db

    $sql = "create table lotteries(lid char(6) primary key, begin date, end date, name varchar(50))";
    $db->exec($sql);

    $db = null; //free
}

function createRewards()
{
    $db = login(); //log in db

    $sql = "create table rewards(" .
        "name varchar(50)," .
        "amount int," .
        "rate int," .
        "lid char(6)," .
        "primary key(name, lid)," .
        "foreign key(lid) references lotteries(lid) on delete cascade" .
        ")";
    $db->exec($sql);

    $db = null; //free
}

function createMembers()
{
    $db = login(); //log in db

    $sql = "create table members(" .
        "uid char(6) primary key," .
        "name varchar(25)," .
        "lid char(6)," .
        "foreign key(lid) references lotteries(lid) on delete cascade" .
        ")";
    $db->exec($sql);

    $db = null; //free
}

function createUser()
{
    $db = login();

    $sql = "create table user(" .
        "user varchar(20) primary key," .
        "password varchar(50)" .
        ")";
    $db->exec($sql);

    $pwd = md5("admin");
    $sql = "insert into user values('admin', '$pwd')";
    $db->exec($sql);

    $db = null;
}
