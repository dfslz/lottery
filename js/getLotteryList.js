$(document).ready(function () {
    $.ajaxSettings.async = false;
    $.post("https://lzblog.club/lottery/php/getLotteryList.php", function (data) {
        var array = JSON.parse(data);
        for (var i = 0; i < array.length; ++i) {
            createNewLottery(array[i]);
        }
    });
    $.ajaxSettings.async = true;
    init();

    function createNewLottery(info) {
        var container = document.createElement("div");
        container.className = "mainContainer";

        var panel = document.createElement("div");
        panel.className = "controlPanel";
        container.appendChild(panel);

        var pic = document.createElement("img");
        pic.className = "picture";
        pic.src = "img/2.png";
        panel.appendChild(pic);

        var start = document.createElement("p");
        start.className = "timeMessage";
        panel.appendChild(start);

        var end = document.createElement("p");
        end.className = "timeMessage";
        panel.appendChild(end);

        var name = document.createElement("p");
        name.className = "name";
        panel.appendChild(name);

        //元素创建完毕,写入抽奖信息
        container.id = info[0];
        name.innerText = info[1];
        start.innerText = info[2];
        end.innerText = info[3];

        container.onclick = clicked;

        $("#display").append(container);
    }

    function clicked() {
        var lottery = this.id;
        setCookie("page", this.id, 1);
        location.href = "https://lzblog.club/lottery/lottery.html";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
});