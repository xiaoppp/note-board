// all the records
var items = [];

exports.start = function (websocket) {
    websocket.sockets.on('connection', function (socket) {
        socket.emit('connected', items);

        socket.on('save message', function (data, fn) {

            console.log('======================================');
            console.log(items.length);
            console.log(data.ID);

            var index = 0;

            for (var i = 0; i < items.length; i++) {
                console.log('data ID:' + data.ID);
                console.log('items[i] ID:' + items[i].ID);

                if (items[i].ID === data.ID) {
                    index = i;
                    break;
                }
            }

            items.splice(i, 1, data);

            console.log('======================================');

            socket.broadcast.emit('new message', data);
            fn(true);
        });

        socket.on('delete message', function (id) {
            var index = 0;
            var item = null;

            for (var i = 0; i < items.length; i++) {
                if (items[i].ID == id) {
                    index = i;
                    item = items[i];
                    break;
                }
            }
            items.splice(i, 1);

            socket.broadcast.emit('delete message', item);
        });
    });

    websocket.sockets.on('disconnect', function (socket) {
    });
}



