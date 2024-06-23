const readline = require('readline-sync');

let YourHeight = Number(readline.question('Your Height (m):'));
let YourWeight = Number(readline.question('Your Weight(kg):'));
console.log(`Height: ${YourHeight}, Weight: ${YourWeight}`);

let BMI = YourWeight / (YourHeight*YourHeight);
console.log(`Your BMI is: ${BMI.toFixed(2)}`);

if(BMI <  18.5){
    console.log("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9 ) {
    console.log('Normal weight');
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obesity');
}