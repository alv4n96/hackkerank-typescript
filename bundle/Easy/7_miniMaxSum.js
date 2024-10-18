"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMiniMaxSum = runMiniMaxSum;
function runMiniMaxSum() {
    let q1a = [140638725, 436257910, 953274816, 734065819, 362748590];
    miniMaxSum(q1a);
}
function miniMaxSum(arr) {
    let lowNumber = 0, highNumber = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            highNumber += arr[i];
        }
        if (i != arr.length - 1) {
            lowNumber += arr[i];
        }
    }
    console.log(`${lowNumber} ${highNumber}`);
}
