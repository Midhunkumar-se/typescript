"use strict";
const xss = [1, 2, 3];
const ys = [1, 2, 3];
const yss = [1, 2, 3];
xss[0] = 9; //mutable
function sum(arr) {
    let element = 0;
    for (const n of arr) {
        element += n;
    }
    return element;
}
console.log(sum(xss)); // passing mutable array in readonly param is allowed
const res = yss.map((n) => n * 2);
console.log(res);
