"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runaVeryBigSum = runaVeryBigSum;
function runaVeryBigSum() {
    let q1a = [
        1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
    ];
    console.log(aVeryBigSum(q1a));
}
function aVeryBigSum(ar) {
    let result = 0;
    for (let number of ar) {
        result += number;
    }
    return result;
}
