"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStaircase = runStaircase;
function runStaircase() {
    let q1a = 3;
    staircase(q1a);
}
function staircase(n) {
    let theStars = "";
    for (let i = 1; i <= n; i++) {
        theStars = "";
        for (let j = n; j >= 1; j--) {
            //   console.log(`j = ${j},i = ${i}`);
            if (j > i) {
                theStars += " ";
            }
            else {
                theStars += "#";
            }
        }
        console.log(theStars);
    }
    // Write your code here
}
