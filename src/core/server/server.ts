import * as express from "express"; // Express
import * as socket from "socket.io";
import { Socket } from "socket.io";
import AccountStore from "../account/accountStore";
import Account from "../account/account";
import account from "../account/account";
import accountStore from "../account/accountStore"; // Socket io


let http = require("http")

// set up socket.io and bind it to our
// http server.
let io = require("socket.io")


export class Server {
    accounts: AccountStore
    io: any
    server: any
    constructor() {
        this.accounts = new AccountStore()
        this.io = new io.Server()
        this.server = http.createServer()
        this.io.attach(this.server)
    }

    start(addr: String) {
        // Connect user to web socket
        this.io.on("connection", function (socket: Socket) {
            let acc: Account
            let loggedIn = false


            socket.on("login", ({ useName, password }) => {
                if (useName !== undefined && password !== undefined) {
                    let a = this.accounts.findAccountWithName(useName)
                    if (a !== null) {
                        a.checkPassword(password).then((correct) => {
                            if (correct) {
                                acc = a
                                loggedIn = true
                                socket.emit("login_success")
                            } else {
                                socket.emit("login_error")
                            }
                        })
                    } else {
                        socket.emit("login_error")
                    }
                } else {
                    socket.emit("login_error")
                }
            })

            socket.on("signup", ({ username, password, publicKey }) => {
                if (username !== undefined && password !== undefined && publicKey !== undefined) {
                    if (this.accouts.userNameUsed(username) == false) {
                        let a = new Account(username, publicKey)
                        a.savePassword(password, () => {
                            socket.emit("signup_error")
                        }, () => {
                            this.accouts.addAccount(a)
                            socket.emit("signup_success")
                        })
                    } else {
                        socket.emit("signup_error")
                    }
                }
            })

            console.log("a user connected");
        });

        // Config server listening port
        const server = this.server.listen(addr, function () {
            console.log("listening on " + addr);
        });
    }
}

