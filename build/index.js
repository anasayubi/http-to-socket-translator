"use strict";
// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http_1 = require("http");
var SocketIO = require("socket.io");
var app = express();
var httpServer = new http_1.Server(app);
var ioServer = SocketIO(httpServer);
console.log("Server listening on port 9001");
httpServer.listen(9001);
app.use(function (req, res, next) {
    console.log("Incoming request");
    console.log(req.path);
    res.status(200).send("Ok");
    // ioServer.emit("")
});
ioServer.on('connection', function (socket) {
    console.log("Incoming connection");
});
//# sourceMappingURL=index.js.map