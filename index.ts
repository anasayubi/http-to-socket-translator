// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

import * as express from "express";
import { Server } from "http";
import * as SocketIO from "socket.io";

const app = express();
let httpServer = new Server(app);
let ioServer = SocketIO(httpServer);

console.log("Server listening on port 9001")
httpServer.listen(9001);

app.use((req, res, next) => {
    console.log("Incoming request");
    console.log(req.path);
    res.status(200).send("Ok");
    
    // ioServer.emit("")
});

ioServer.on('connection', function(socket) {
    console.log("Incoming connection");
});