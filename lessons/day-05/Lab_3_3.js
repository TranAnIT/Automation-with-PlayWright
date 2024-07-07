/**Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34] */


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let intArr = [12, 34, 1, 16, 28];
let sortedArr = bubbleSort(intArr);

console.log(sortedArr);
