export default class Account {
    userName: String
    publicKey: String
    passwordHash: String

    constructor(userName: string, publicKey: String, password: String) {
        this.userName = userName
        this.publicKey = publicKey
        this.savePassword(password)
    }

    savePassword(password: String) {
        // TODO: add password hashing stuff here
        this.passwordHash = password
    }

    checkPassword(password: String) {
        // TODO: add password verification stuff here
        return true
    }
}
