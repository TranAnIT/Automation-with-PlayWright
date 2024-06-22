/**
* < 18 khong ban
* 18 -> 55: Unlimited
* 56>: 2 chai
*/

const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

if(clientAge < 18){
    console.log("Khong ban");
} else if (clientAge <= 55) {
    console.log('Unlimited!');
} else {
    console.log('2 chai!');
}

/**
 * true && true -> true
 * true && false -> false
 * false && false -> false
 * false && true -> false
 * 
 * true || true -> true
 * false || true -> true
 * false || false -> false
 * true || false -> true
 */

