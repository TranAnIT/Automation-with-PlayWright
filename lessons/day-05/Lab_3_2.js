/**
 * Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5
 */

let intArr = [1, 2, 5, 4, 3];

let minValue = Math.min(...intArr);
let maxValue = Math.max(...intArr);

console.log(`Minimum: ${minValue}`);
console.log(`Maximum: ${maxValue}`);
