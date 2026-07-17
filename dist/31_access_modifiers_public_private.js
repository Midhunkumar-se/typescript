"use strict";
class BankAccount {
    owner;
    balance = 0;
    #otp = 123456;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0)
            throw new Error("Amount must be positive");
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return this.#otp === code;
    }
}
const acc = new BankAccount("Mk");
acc.deposit(5000);
console.log(acc.getBalance());
