// value must be everything from A and from B

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2; // must have both id and createdAt

const e: Entity = { id: "el", createdAt: new Date() };

//Homework -> create two types
type Username = { name: string };
type UserEmail = { email: string };

type UserDetails = Username & UserEmail;

const d: UserDetails = { name: "John", email: "john@gmail.com" };
// console.log(d);
// console.log(e);

// It is not possible
type NumberHolderUnique = { a: number };
type StirngHolderUnique = { a: string };

type NumberStringMix = NumberHolderUnique & StirngHolderUnique;
// const obj: NumberStringMix = {
//   a: 10,
// };

type Product = { id: string; title: string };
type Priced = { price: number };

type PricedProduct = Product & Priced;
const obj2: PricedProduct = { id: "23", title: "mk", price: 300 };
console.log(obj2);
