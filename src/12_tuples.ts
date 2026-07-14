//tuples => fixed length and fixed types
//(String | number)[]
//optional tuples

const userEntry: [string, number] = ["Sangam", 28];

type responseRow = [status: number, message?: string];

const r11: responseRow = [200];

const corners: readonly [number, number] = [0, 0];
console.log(r11);
