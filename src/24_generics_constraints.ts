// <T> -> constraint T so that only certain shapes are allowed
// <T extends X>
// key contraints -> <K extends keyof T> -> k must be a key of T
//.length

function lenN4<T extends { length: number }>(xN4: T): number {
  return xN4.length;
}

console.log(lenN4("hello"));
console.log(lenN4([1, 2, 3]));
console.log(lenN4({ length: 10, tag: "ok" }));

// console.log(lenN4(123));

type UserN6 = { id: string; name: string; age?: number };

function userN6Extract<T, K extends keyof T>(
  arrN4: T[],
  keyN4: K,
): Array<T[K]> {
  return arrN4.map((item) => item[keyN4]);
}

const usersN6: UserN6[] = [
  {
    id: "1",
    name: "name1",
    age: 22,
  },
  {
    id: "2",
    name: "name2",
  },
];

// console.log(userN6Extract(usersN6, "id"));
// console.log(userN6Extract(usersN6, "name"));

type xy = { a: string; b: number };

type keysStr = keyof xy;

let key: keysStr;

key = "a"; // ✅
key = "b"; // ✅
// key = "c"; // ❌ Error

type XY = {
  a: string;
  b: number;
};

function printKey(key: keyof XY) {
  console.log(key);
}

printKey("a"); // ✅
printKey("b"); // ✅
// printKey("c"); // ❌ Error
