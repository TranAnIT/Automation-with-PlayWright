const readline = require('readline-sync');

let number = Number(readline.question('Enter a number: '));

if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}