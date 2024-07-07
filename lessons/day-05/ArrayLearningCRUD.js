//CRUD: Create Read Update Delete

//Literal Declaration

let MyNumArray = [1, 2, 3, 4, 5];
let arrayLength = MyNumArray.length;
console.log(`Array's length: ${arrayLength}`);
console.log(`Array's value at index 3: ${MyNumArray[3]}`);

for (let index = 0; index < MyNumArray.length; index++) {
    console.log(`Array's value at index ${index}: ${MyNumArray[index]}`);
}

// Convert all elements into even numbers
for (let index = 0; index < MyNumArray.length; index++) {
    MyNumArray[index] = MyNumArray[index] * 2;
}
console.log(MyNumArray);