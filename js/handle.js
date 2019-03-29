function start() {
    var startButton = document.getElementById("start");
    startButton.style.backgroundColor = "yellow";

    var num = (Math.random() * 10000000) % 3;
    var arr = [];
    arr[0] = document.getElementById("0").innerHTML;
    arr[1] = document.getElementById("1").innerHTML;
    arr[2] = document.getElementById("2").innerHTML;

    document.getElementById("ok").innerHTML = arr[parseInt(num)];
}

function recover() {
    document.getElementById("start").style.backgroundColor = "orange";
}

function load() {
    
}