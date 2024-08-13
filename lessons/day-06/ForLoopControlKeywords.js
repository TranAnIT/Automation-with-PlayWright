const targetNum = 3;
const array = [1, 2, 3, 4, 5];
let targetNumIndex;
for (index = 0; index < array.length; index++) {
    //for loop body 
    if (array[index] === targetNum) {
        targetNumIndex = index;
        break;
    }
}

console.log(targetNumIndex);

for (index = 0; index < array.length; index++) {
    //for loop body 
    if (isEvenNumber(array[index]) === targetNum) {
        continue;
    } else {
        array[index] = array[index] + 1;
    }
    log
}

function isEvenNumber(number) {
    return number % 2 === 0;
}