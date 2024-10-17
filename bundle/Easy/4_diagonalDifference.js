"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rundiagonalDifference = rundiagonalDifference;
function rundiagonalDifference() {
    let q1a = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ];
    console.log(diagonalDifference(q1a));
}
function diagonalDifference(arr) {
    let result = 0;
    let lengthArray = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(`Test ke-${i + 1}`);
        console.log(arr[i][i]);
        console.log(arr[lengthArray][i]);
        result += arr[i][i] - arr[lengthArray][i];
        lengthArray--;
    }
    return Math.abs(result);
}
