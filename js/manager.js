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

var rewardList = [], cnt1 = 0, cnt2 = 0, member=[];
function parse() {
    rewardList = [];
    member = [];
    cnt1 = 0;
    cnt2 = 0;

    var inputs = $(":input");
    inputs.each(function(){
        if(this.type != "button" && this.type != "file") {
            rewardList[cnt1++] = $(this).val();
        }
    });

    $("td>span").each(function(){
        member[cnt2++] = this.innerText;
    });
}

function submit() {
    parse();

    $.ajax({
        url: "https://lzblog.club/lottery/php/dataHandler.php",
        type: "POST",
        data: {
            length: cnt1,
            rewards: rewardList,
            amount: cnt2,
            list: member
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