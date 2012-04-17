var saveItemToLocal = function (item) {
    var index = 0;
    for (var i = 0; i < localitemlist.length; i++) {
        if (item.ID == localitemlist[i].ID) {
            index = i;
            break;
        }
    }
    localitemlist.splice(i, 1, item);
}

var removeItemToLocal = function (item) {
    var index = 0;
    for (var i = 0; i < localitemlist.length; i++) {
        if (item.ID == localitemlist[i].ID) {
            $("#" + item.ID).detach();
            index = i;
            break;
        }
    }
    localitemlist.splice(i, 1);
}

function MESSAGE(msg) {
    $('#message').html('<p>Message notification: <br /><br />' + msg + '<br /><br />' + 'click to continue...</p>');
    $('#message').show();
    setTimeout(
		function () {
		    $('#message').one(
				'mouseup',
				function () {
				    $('#message').hide();
				}
			);
		},
		750
	);
}



// public functions
var currentday = function () {
    var now = new Date();
    var year = now.getFullYear().toString();
    var month = (now.getMonth() + 1).toString();
    var day = now.getDate().toString();

    var days = year * 365 + month * 30 + day;
    return days;
}

var currentsecond = function () {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var seconds = hour * 60 * 60 + minute * 60 + second;
    return seconds;
}

var currentdate = function () {
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var days = year * 365 + month * 30 + day;

    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var seconds = hour * 60 * 60 + minute * 60 + second;
    return { day: days, second: seconds, minute: minute };
}

var calculate = (function (hour, minute, second) {
    var a = 123;
    var b = 123;

    var c = hour * 60 * 60 + minute * 60 + second;
    return c;
});

 //date {day:'', second:''};
var compareDate = function (date1, date2) {
    if (date1.day == date2.day)
        return date1.second < date2.second;
    else
        return date1.day < date2.day;
}
