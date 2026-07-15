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
/*
Generic constraints let you restrict what types can be used as a generic type parameter. You do this with the extends keyword.

Basic Syntax
function example<T extends Constraint>(value: T) {
  // ...
}

Here, T must satisfy the Constraint.

Why do we need constraints?

Without a constraint:

function getLength<T>(value: T) {
  return value.length; // ❌ Error
}

TypeScript complains because T could be anything—even a number, which doesn't have a length property.

Example 1: Constrain to objects with a length
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}

console.log(getLength("Hello"));      // 5
console.log(getLength([1, 2, 3]));    // 3
console.log(getLength([ ]));          // 0

// ❌ Error
getLength(100);

Since string and Array have a length property, they're allowed.

Example 2: Constrain to a specific interface
interface User {
  name: string;
}

function greet<T extends User>(user: T) {
  console.log(`Hello ${user.name}`);
}

greet({ name: "Midhun" });

// ✅ Extra properties are fine
greet({
  name: "John",
  age: 25,
});

// ❌ Error
greet({
  age: 25,
});

The object must have at least a name property.

Example 3: Using keyof

One of the most common uses of constraints:

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Midhun",
  age: 25,
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));

// ❌ Error
getProperty(user, "email");
How it works
keyof T

creates a union of the object's keys.

For:

type User = {
  name: string;
  age: number;
};

keyof User becomes:

"name" | "age"

So K can only be "name" or "age".

Example 4: Constrain to a class
class Animal {
  eat() {
    console.log("Eating");
  }
}

function feed<T extends Animal>(animal: T) {
  animal.eat();
}

feed(new Animal());

// ❌ Error
feed({});

Only instances compatible with Animal are allowed.

Example 5: Multiple Constraints
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

function printInfo<T extends HasName & HasAge>(person: T) {
  console.log(person.name, person.age);
}

printInfo({
  name: "Midhun",
  age: 25,
});

T must satisfy both interfaces.

Example 6: Constraint with Arrays
function firstElement<T extends any[]>(arr: T) {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b"]));

// ❌ Error
firstElement(100);
Generic Constraint vs Generic

Without constraint:

function print<T>(value: T) {
  console.log(value);
}

T can be anything.

With constraint:

function print<T extends string>(value: T) {
  console.log(value.toUpperCase());
}

print("hello");

// ❌ Error
print(100);

Only strings are allowed.

Real-World Example

Suppose you're building a reusable function that works with database records.

interface Entity {
  id: number;
}

function findById<T extends Entity>(items: T[], id: number) {
  return items.find(item => item.id === id);
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(findById(users, 2));

The function is generic, but it guarantees every item has an id
*/
