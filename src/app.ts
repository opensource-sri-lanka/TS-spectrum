
import Person from './person'; // Javascript Class
import Greeter from './greeter/greeter'; // Typescript Class
import * as express from "express"; // Express
import * as socket from "socket.io"; // Socket io


const p1 = new Person('Javascript ES6 Class, no types')
const g1 = new Greeter('Typescript Class, has types')

// socket.io variables
const app = express();
var http = require("http").Server(app);


console.log(p1.sayName())
console.log(g1.greet())


// Config server listening port
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});