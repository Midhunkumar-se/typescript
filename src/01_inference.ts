// goal -> understand when to let typescript infer types
// ts ->  js very well
// when ts will write the types / when ur going to write

let count = 0; //ts knows number
const site = "abcd"; //ts sees the exact literal "abcd"
const scores = [1, 2, 3, 4];

// over annonation isnt bad ->  just noisy

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 2));

//you should also annotate when the type is not obvious

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
