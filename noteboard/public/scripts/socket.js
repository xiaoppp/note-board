var socket = io.connect('http://10.221.212.100:8080/');

socket.on('connected', function (itemsdata) {
    $("#notification").text('welcome to blackboard, you have connected to the web socket server');

    //alert(localitemlist.length);

    for (var i = 0; i < itemsdata.length; i++) {
        var note = new Note(itemsdata[i]);
        note.Create();
    }

    isLoad = true;
});

socket.on('delete message', function (data) {
    //MESSAGE('please note, one item has been removed...');

    removeItemToLocal(data);

    $("#notification").text('One message deleted by other people: ' + data.Content);
});

socket.on('new message', function (data) {
    //MESSAGE('please note, one item has been add or changed...');

    removeItemToLocal(data);

    var note = new Note(data);
    note.Create();

    $("#notification").text('New message from other people: ' + data.Content);
});