"use strict";
//Value -> this or that
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
function describeUserWithInOperator(u) {
    if ("permissions" in u) {
        console.log(u.role, "Admin User");
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
// array of unions and union of arrays
const arrOfUnion = ["a", 1, "b", 2];
const unionOfArrays = Math.random() > 0.1 ? ["x", "y"] : [1, 2];
