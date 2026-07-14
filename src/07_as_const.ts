// Readonly
const ROLES = ["admin", "user", "operator"] as const;

//derive a union from the array
type Role = (typeof ROLES)[number];
let role: Role;

role = "admin"; // ✅
role = "user"; // ✅
role = "operator"; // ✅

// role = "manager";    // ❌ Error

function setRole(r: Role) {
  console.log(r);
}

setRole("operator");
