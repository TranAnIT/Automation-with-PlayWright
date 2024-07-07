/**
 * Merge 2 SORTED integer array into one SORTED array

Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays and compare elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

let array1 = [1, 12, 16, 28, 34];
let array2 = [1, 13, 16, 27, 99];
let sortedArray = mergeSortedArrays(array1, array2);

console.log(sortedArray);
