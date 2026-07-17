"use strict";
// protected ->class, subclasses
class Animal {
    energy = 23;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount);
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const dog = new Dog();
dog.eat(10);
dog.run();
dog.status();
