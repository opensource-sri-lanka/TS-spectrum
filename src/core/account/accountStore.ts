import Account from "./account";

export default class AccountStore {
    accounts: Account[]

    addAccount(a: Account) {
        this.accounts.push(a)
    }

    // finds and returns a account with the username in account store
    // returns null if no account has that userName
    findAccountWithName(userName: String) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].userName == userName) {
                return this.accounts[i]
            }
        }
        return null
    }
}