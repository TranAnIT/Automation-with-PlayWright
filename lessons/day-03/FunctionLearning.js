// Function, Method
/**
 * Function
 * DRY: Don't repeat Yourself
 * Single Responsibility: Tính Đơn Nhiệm
 * Function Name: Động từ và thể hiện được tính năng
 * camelCase
 * 
 **/

//Declaration Method 01: Function Decalaration | Hoisting
let returnedValue = functionName();
function functionName(params) {
    return 1;

}

// Declaration Method 02: Function Expression | NOT hoisting

const addNumber = function(firstNum, secondNum) {
    return firstNum + secondNum;
}
addNumber(1,2);