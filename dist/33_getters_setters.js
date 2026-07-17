"use strict";
class Temperature {
    #c = 0;
    constructor(celsius) {
        this.celsius = celsius;
    }
    get celsius() {
        return this.#c;
    }
    set celsius(value) {
        if (Number.isNaN(value)) {
            throw new Error("Not a number! please check input");
        }
        this.#c = value;
    }
    get fahrenheit() {
        return (this.#c * 9) / 5 + 32;
    }
    set fahrenheit(f) {
        this.celsius = ((f - 32) * 5) / 9;
    }
}
const t = new Temperature(25);
t.fahrenheit = 212;
