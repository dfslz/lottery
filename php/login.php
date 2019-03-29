<?php
    function check($usr, $pwd ) {
        if($usr == $pwd ) {
            return true;
        } else {
            return false;
        }
    }

    $id = $_POST["username"];
    $psd = $_POST["password"];
    
    if(check($id, $psd)) {
        echo json_encode(["true", "https://lzblog.club/lottery/admin/manager.html"]);
    } else {
        echo json_encode(["false"]);
    }
?>