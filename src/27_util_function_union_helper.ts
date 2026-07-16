//Return Type
// Parameters<F>
//InstanceType<Constructors>
//ConstructorParameters<C>

function ExtractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: "mk",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: GetUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);

console.log(argsInfo);
console.log(resultInfo.name);

class PersonN1 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet() {
    return `Hi I am this -> ${this.name}`;
  }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>;
type PersonConstructorP1 = ConstructorParameters<typeof PersonN1>;

const resultInfo1: PersonConstructorP1 = ["MK", 23];
const abc: PersonInstanceN1 = new PersonN1(...resultInfo1);

console.log(abc.greet());
