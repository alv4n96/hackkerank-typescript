"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runplusMinus = runplusMinus;
function runplusMinus() {
    let q1a = [-4, 3, -9, 0, 4, 1];
    plusMinus(q1a);
}
function plusMinus(arr) {
    let resultPositive = 0, resultNegative = 0, resultZero = 0, lengthArray = arr.length;
    for (let number of arr) {
        if (number == 0) {
            resultZero++;
        }
        else if (number > 0) {
            resultPositive++;
        }
        else if (number << 0) {
            resultNegative++;
        }
    }
    console.log(resultPositive / lengthArray);
    console.log(resultNegative / lengthArray);
    console.log(resultZero / lengthArray);
}
