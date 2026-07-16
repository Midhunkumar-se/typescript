"use strict";
// Exclude<U, V> -> remove from U those numbers assignable to V
// Extract<U, V> -> keep from U those memebers assianable to V
// Nonnullable
function handleEvent1(e) {
    console.log(e);
}
function handleEvent2(e) {
    console.log(e);
}
function square(num) {
    return num * 2;
}
square(10);
// square(null)
