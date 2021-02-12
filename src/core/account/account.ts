import {compareHash, createHash} from "../utils/hash";

export default class Account {
    userName: String
    publicKey: String
    passwordHash: String

    constructor(userName: string, publicKey: String) {
        this.userName = userName
        this.publicKey = publicKey
    }

    savePassword(password: String, rejectedCallback: ((reason: any) => (PromiseLike<void> | void)) | undefined | null) {
        createHash(password).then((value => {
            this.passwordHash = value
        }), rejectedCallback)
    }

    checkPassword(password: String) {
        return compareHash(password, this.passwordHash)
    }
}
