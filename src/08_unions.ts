//Value -> this or that

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    id.toFixed(2);
  }
}

// Object union
type Admin = {
  role: "Admin";
  permissions: string[];
};
type Customer = {
  role: "Customer";
  loyaltyPoints: number;
};

function describeUser(u: Admin | Customer) {
  if (u.role === "Admin") {
    console.log(u.permissions);
  } else {
    console.log(u.loyaltyPoints);
  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.role, "Admin User");
  } else {
    console.log(u.loyaltyPoints);
  }
}

// array of unions and union of arrays
const arrOfUnion: (string | number)[] = ["a", 1, "b", 2];

const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ["x", "y"] : [1, 2];
