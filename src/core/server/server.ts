import * as express from "express"; // Express
import * as socket from "socket.io";
import {Socket} from "socket.io"; // Socket io

// socket.io variables
const app = express();
var http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);

// Connect user to web socket
io.on("connection", function (socket: Socket) {

    console.log("a user connected");
});

// Config server listening port
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});