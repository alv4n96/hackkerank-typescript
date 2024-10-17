"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSimpleArraySum = runSimpleArraySum;
function runSimpleArraySum() {
    let q1 = [23, 12];
    let q2 = [1, 2, 3, 4, 10, 11];
    console.log(simpleArraySum(q1));
    console.log(simpleArraySum(q2));
}
function simpleArraySum(ar) {
    let result = 0;
    for (let item of ar) {
        result += item;
    }
    return result;
}
