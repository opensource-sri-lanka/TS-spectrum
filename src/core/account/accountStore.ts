import Account from "./account";

export default class AccountStore {
    accounts: Account[]

    addAccount(a: Account) {
        this.accounts.push(a)
    }
}