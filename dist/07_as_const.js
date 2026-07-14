"use strict";
// Readonly
const ROLES = ["admin", "user", "operator"];
let role;
role = "admin"; // ✅
role = "user"; // ✅
role = "operator"; // ✅
// role = "manager";    // ❌ Error
function setRole(r) {
    console.log(r);
}
setRole("operator");
