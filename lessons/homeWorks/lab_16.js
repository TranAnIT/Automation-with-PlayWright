// Abstract class BankingAccount
class BankingAccount {
    constructor(balance = 0) {
        if (this.constructor === BankingAccount) {
            throw new Error("Cannot instantiate abstract class BankingAccount");
        }
        this.balance = balance;
    }

    deposit(amount) {
        throw new Error("Method 'deposit' must be implemented.");
    }

    withdraw(amount) {
        throw new Error("Method 'withdraw' must be implemented.");
    }

    getBalance() {
        throw new Error("Method 'getBalance' must be implemented.");
    }
}

// SavingsAccount subclass
class SavingsAccount extends BankingAccount {
    constructor(balance = 0) {
        super(balance);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to savings account.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance for withdrawal.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from savings account.`);
        }
    }

    getBalance() {
        return this.balance;
    }
}

// CheckingAccount subclass
class CheckingAccount extends BankingAccount {
    constructor(balance = 0, minimumBalance = 50) {
        super(balance);
        this.minimumBalance = minimumBalance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to checking account.`);
    }

    withdraw(amount) {
        if (this.balance - amount < this.minimumBalance) {
            console.log("Insufficient balance to maintain minimum balance of 50.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from checking account.`);
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Create instances and test methods
const savings = new SavingsAccount(200);
const checking = new CheckingAccount(200);

// Test SavingsAccount
console.log("Savings Account:");
savings.deposit(100); // Balance: 300
savings.withdraw(50); // Balance: 250
console.log(`Current balance: ${savings.getBalance()}`); // Should print 250

// Test CheckingAccount
console.log("\nChecking Account:");
checking.deposit(100); // Balance: 300
checking.withdraw(260); // Should fail, needs to leave at least 50
checking.withdraw(200); // Should work, leaving 100
console.log(`Current balance: ${checking.getBalance()}`); // Should print 100
