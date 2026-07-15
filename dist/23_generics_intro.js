"use strict";
// understand what is "type paramenters" <T>
// how typescript infers <T> from your arguments automatically
// is  a function -> the types are "blanks" -> you fill in later
// <T> is a placeholder
// TS will try to understand what T should be
function id(x) {
    return x;
}
// infers T
// id(5) -> T is a number
// id("String") -> T is a string
const xyz = id(5);
console.log(xyz + 1, id("mk"));
function fistGen(arr) {
    return arr[0];
}
console.log(fistGen([1, 2, 3, 4]));
