/// <reference path="node-vsdoc.js" />
/**
 * Module dependencies.
 */

var express = require('express');
var ejs = require('ejs');
var routes = require('./routes');
var sio = require('socket.io');
var socket = require('./socket');

var app = module.exports = express.createServer();
var websocket = sio.listen(app);

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.register("html", ejs);

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.post('/note/save', routes.save);
app.get('/test', routes.test);

//Socket
websocket.configure('production', function () {
    io.set('log level', 1);
});

socket.start(websocket);

app.listen(8080);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
