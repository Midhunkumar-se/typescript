"use strict";
//Return Type
// Parameters<F>
//InstanceType<Constructors>
//ConstructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: "mk",
        log: isExtraInfo ? "details" : undefined,
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
console.log(argsInfo);
console.log(resultInfo.name);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi I am this -> ${this.name}`;
    }
}
const resultInfo1 = ["MK", 23];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
