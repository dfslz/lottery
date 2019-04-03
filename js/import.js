function upload(obj) {
    var file = obj.files[0];
    var fileReader = new FileReader();

    fileReader.onload = function(ev) {
        var data = ev.target.result;
        var wb = XLSX.read(data, {type:"binary"});

        var stuff = [];
        for(var sheet in wb.Sheets) {
            if(wb.Sheets.hasOwnProperty(sheet)) {
                stuff = stuff.concat(XLSX.utils.sheet_to_json(wb.Sheets[sheet]));
                break;
            }
        }
        var title = getStuff("姓名", "uid");
        $("#stuffList").append(title);
        for(var i = 0; i < stuff.length; i++) {
            var p = getStuff(stuff[i]["姓名"], stuff[i]["uid"]);
            $("#stuffList").append(p);
        }
    };
    fileReader.readAsBinaryString(file);
}

function getStuff(name, id) {
    var stuffName = document.createElement("input");
    var stuffId = document.createElement("input");

    stuffName.value = name;
    stuffName.className = "table";
    stuffId.value = id;
    stuffId.className = "table";

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(stuffName);
    
    var td2 = document.createElement("td");
    td2.appendChild(stuffId);
    tr.appendChild(td1);
    tr.appendChild(td2);
    return tr;
}