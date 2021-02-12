
import Person from './person' // Javascript Class
import Greeter from './greeter/greeter' // Typescript Class
import * as express from "express"; // Express


const p1 = new Person('Javascript ES6 Class, no types')
const g1 = new Greeter('Typescript Class, has types')
const app = express();
var http = require("http").Server(app);


console.log(p1.sayName())
console.log(g1.greet())

const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});