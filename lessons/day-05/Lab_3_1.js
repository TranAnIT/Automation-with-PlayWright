/**
 * Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3
 */

let intArr = [1, 2, 3, 4, 5];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);
