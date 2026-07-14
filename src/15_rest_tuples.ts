function sumAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4));

//Tuple rest

function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];

  for (let i = start; i <= end; i += step) out.push(i);
  return out;
}
console.log(makeRange(1, 5));
console.log(makeRange(1, 5, 3));
console.log(makeRange(2, 3));
