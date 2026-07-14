const a11: number[] = [1, 2, 3];
const a22: Array<number> = [1, 2, 3]; //Array<T>

const score = [10, 20, 30];

const mix = [1, "2", 3, "4"];

function printArrNums(arr: (string | number)[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(typeof element);
  }
}

printArrNums(mix);
