"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// ------

// console.dir([1, 2, 3]);

// ------

let soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const john = {
//     health: 100
// };
//  Ещё один способ:
const john = Object.create(soldier);

// Старая запись:
// john.__proto__ = soldier;

//  Новая запись:
// Object.setPrototypeOf(john, soldier)
// console.log(john.armor);


john.sayHello();

