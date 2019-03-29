$(document).ready(function(){
    $("#submit").click(function(){
        var user = $("#username").val();
        var psd = $("#password").val();

        $.ajax({
            url: "https://lzblog.club/lottery/php/login.php",
            type: "POST",
            data: {
                username: user,
                password: psd
            },
            dataType: "json",
            success: function(data, status) {
                if(!status) {
                    alert("please check your network");
                } else {
                    if(data[0] == "true") {
                        location.href=data[1];
                    } else {
                        alert("please check your id or password");
                    }
                }
            }
        });
    });
});