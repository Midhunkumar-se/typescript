const xss = [1, 2, 3];
const ys: readonly number[] = [1, 2, 3];
const yss: ReadonlyArray<number> = [1, 2, 3];

xss[0] = 9; //mutable

function sum(arr: readonly number[]): number {
  let element = 0;
  for (const n of arr) {
    element += n;
  }
  return element;
}

console.log(sum(xss)); // passing mutable array in readonly param is allowed

const res = yss.map((n) => n * 2);
console.log(res);
