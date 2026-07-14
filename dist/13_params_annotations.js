"use strict";
function func1(a, b) {
    return a + b;
}
const num12 = [1, 2, 3];
const doubled = num12.map((n) => n * 2); //(n: number)
console.log(doubled);
const times2 = (n) => n * 2; // always prefer to give annotations
function distanceFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceFromOrigin({ x: 3, y: 2 }));
