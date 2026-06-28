"use strict";
function calcArray(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += 1;
        sum += arr[i];
    }
    return {
        sum,
        count
    };
}
const arrayNumbers = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);
