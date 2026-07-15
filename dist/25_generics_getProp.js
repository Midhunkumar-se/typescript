"use strict";
function getUserN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = {
    id: "u1",
    name: "mk",
};
const idValN7 = getUserN7(uN7, "name");
function setUserPropN7(objN7, keyN7, newVal) {
    objN7[keyN7] = newVal;
}
setUserPropN7(uN7, "name", "john");
setUserPropN7(uN7, "id", "T1");
