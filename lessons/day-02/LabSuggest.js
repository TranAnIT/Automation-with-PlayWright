const readline = require('readline-sync');

let YourHeight = Number(readline.question('Your Height (m): '));
let YourWeight = Number(readline.question('Your Weight (kg): '));
console.log(`Height: ${YourHeight}, Weight: ${YourWeight}`);

let BMI = YourWeight / (YourHeight * YourHeight); // Corrected BMI calculation
console.log(`Your BMI is: ${BMI.toFixed(2)}`);

let message = '';
if (BMI < 18.5) {
    message = "Underweight";
    // Suggest increase in weight
    let minNormalWeight = 18.5 * YourHeight * YourHeight;
    let weightToGain = minNormalWeight - YourWeight;
    message += `. You need to gain at least ${weightToGain.toFixed(2)} kg to reach a normal weight.`;
} else if (BMI >= 18.5 && BMI <= 24.9) {
    message = 'Normal weight';
} else if (BMI >= 25 && BMI <= 29.9) {
    message = 'Overweight';
    // Suggest decrease in weight
    let maxNormalWeight = 24.9 * YourHeight * YourHeight;
    let weightToLose = YourWeight - maxNormalWeight;
    message += `. You need to lose at least ${weightToLose.toFixed(2)} kg to reach a normal weight.`;
} else {
    message = 'Obesity';
    // Suggest decrease in weight
    let maxNormalWeight = 24.9 * YourHeight * YourHeight;
    let weightToLose = YourWeight - maxNormalWeight;
    message += `. You need to lose at least ${weightToLose.toFixed(2)} kg to reach a normal weight.`;
}

console.log(message);