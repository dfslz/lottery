function init() {
    $(".selector").each(function (index, element) {
        $(element).click(function() {
            sort(index);
        });
    });
}

function sort(type) {
    var start = $(".controlPanel").each(function () {
        var start = $(this).children(".timeMessage").eq(0).text();
        var end = $(this).children(".timeMessage").eq(1).text();
        var date = new Date();
        var nowms = date.getTime();
        var startms = (new Date(start)).getTime();
        var endms = (new Date(end)).getTime();

        if (type == 0) {
            $(this).parent().css("display", "block");
        } else if (type == 1) {
            if (endms > nowms && startms < nowms) {
                $(this).parent().css("display", "block");
            } else {
                $(this).parent().css("display", "none");
            }
        } else if (type == 2) {
            if (startms > nowms) {
                $(this).parent().css("display", "block");
            } else {
                $(this).parent().css("display", "none");
            }
        } else if (type == 3) {
            if (nowms > endms) {
                $(this).parent().css("display", "block");
            } else {
                $(this).parent().css("display", "none");
            }
        }
    });
}