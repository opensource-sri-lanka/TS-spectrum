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
        this.passwordHash = password
    }

    checkPassword() {
        return true
    }
}
