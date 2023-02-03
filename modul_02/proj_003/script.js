'use strict';

// Устаревшие варианты:

// const num = new Number(3);
// console.log(num);

// const numF = new Function(5);
// console.log(numF);

// --------------------

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь, ${this.name}, ушёл.`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// Классы (в ES 6)

class User1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello1() {
        console.log(`New Hello ${this.name}`);
    }
    exit1() {
        console.log(`Новый Пользователь, ${this.name}, ушёл.`);
    }
}

const john = new User1('John', 33);
console.log(john);