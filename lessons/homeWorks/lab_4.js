const prompt = require("prompt-sync")();

// Define the Bank Account object structure
function BankAccount(accountNumber, routingNumber, balance) {
    this.accountNumber = accountNumber;
    this.routingNumber = routingNumber;
    this.balance = balance;
}

// Create the first Bank Account object
let bankAccount1 = new BankAccount("123456789", "987654321", 1000.00);

// Clone the first Bank Account object and update the account number
let bankAccount2 = Object.assign({}, bankAccount1);
bankAccount2.accountNumber = "987654321";

// Store both bank accounts in an array
let bankAccounts = [bankAccount1, bankAccount2];

// Function to find an account by account number
function findAccount(accountNumber) {
    return bankAccounts.find(account => account.accountNumber === accountNumber);
}

// Function to withdraw money from an account
function withdrawMoney(account, amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance.");
    } else {
        account.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${account.balance.toFixed(2)}`);
    }
}

// Console interface application
function bankingApp() {
    let input;
    do {
        console.log("\n=== Banking Application ===");
        console.log("1. Find an account");
        console.log("2. Update balance");
        console.log("0. Exit the program");
        input = prompt("Enter your choice: ");

        switch (input) {
            case "1":
                let accountNumber = prompt("Enter the account number: ");
                let account = findAccount(accountNumber);
                if (account) {
                    console.log(`Account found. Balance: $${account.balance.toFixed(2)}`);
                } else {
                    console.log("Account not found.");
                }
                break;
            case "2":
                accountNumber = prompt("Enter the account number: ");
                account = findAccount(accountNumber);
                if (account) {
                    let amount = parseFloat(prompt("Enter the amount to withdraw: "));
                    withdrawMoney(account, amount);
                } else {
                    console.log("Account not found.");
                }
                break;
            case "0":
                console.log("Exiting the program.");
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    } while (input !== "0");
}

// Start the banking application
bankingApp();
