function create() {
    var conf = confirm("创建新抽奖前请确保以保存上一个抽奖信息已经提交");
    if (conf == false) {
        return false;
    }

    //create new lottery
    clearLottery();
    var newLottery = document.createElement("li");
    newLottery.innerHTML = "new Lottery";
    var menu = document.getElementById("create");
    menu.appendChild(newLottery);
}

function clearLottery() {
    var es = document.getElementsByClassName("inputStyle");
    for (var i = 0; i < es.length; ++i) { //清除input输入框
        es.item(i).value = "";
    }

    //删除上一个new lottery

}

function addReward() {
    var rewardTable = document.getElementById("rewardTable");

    var tr = document.createElement("tr");

    var rewardName = document.createElement("td");
    var inputName = document.createElement("input");
    inputName.type = "text";
    inputName.className = "table";
    rewardName.appendChild(inputName);
    tr.appendChild(rewardName);

    var rewardAmount = document.createElement("td");
    var inputAmount = document.createElement("input");
    inputAmount.type = "number";
    inputAmount.className = "table";
    inputAmount.min = "0";
    tr.appendChild(rewardAmount);
    rewardAmount.appendChild(inputAmount);

    var rewardRate = document.createElement("td");
    var inputRate = document.createElement("input");
    inputRate.type = "number";
    inputRate.className = "table";
    inputRate.min = "0";
    inputRate.max = "100";
    tr.appendChild(rewardRate);
    rewardRate.appendChild(inputRate);

    rewardTable.appendChild(tr);
}

var rewardList = [], cnt = 0;
function parse() {
    rewardList = [];
    cnt = 0;
    var inputs = $(":input");
    inputs.each(function(){
        if($(this).val() != "添加奖品") {
            rewardList[cnt++] = $(this).val();
        }
    });
}

function submit() {
    parse();

    $.ajax({
        url: "https://lzblog.club/lottery/php/dataHandler.php",
        type: "POST",
        data: {
            length: cnt,
            rewards: rewardList
        },
        dataType: "json",
        success: function (data, status) {
            //TODO: 更新本地数据
            if(data == "ok") {
                alert("数据上传成功");
                $("#create").children("li").text(rewardList[0]);
            }
        }
    });
}