'use strict';

// Устаревшие варианты:

// const num = new Number(3);
// console.log(num);

// const numF = new Function(5);
// console.log(numF);

// ------------------------------------------------

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь, ${this.name}, ушёл.`);
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// ------------------------------------------------

// Классы (в ES 6)

// class User1 {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello1() {
//         console.log(`New Hello ${this.name}`);
//     }
//     exit1() {
//         console.log(`Новый Пользователь, ${this.name}, ушёл.`);
//     }
// }

// const john = new User1('John', 33);
// console.log(john);

// --------------------------------------------------

// function showThis() {
//     console.log(this);
// }
// showThis();

// ----------


//  1) Обычная функция: this = window, но если 'use strict' то htis = undefined.
//  2) Контекст у метода объекта - сам объект
//  3) this  в конструкторах и классах - это новый экземпляр объекта
//  4) Ручная привязка this: call, apply, bind


// 1)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// -----------

// 2)
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// --------

// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user2 = {
//     name: "Johnny"
// };

// sayName.call(user2, 'Smith');
// sayName.apply(user2, ['Smith1']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// -----------------------

// Применение:

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // console.log(this);
    this.style.backgroundColor = 'red';
});


// Точно такая же фукция, только через стрелочную фукцию:

// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
// });


const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj1.sayNumber();


// const double = (a) => {
//     return a * 2;
// }
//  Более короткая запись предыдущей функции:
    const double = a => a * 2;  
    console.log(double(4));
//  Если фукция принимает два аргумента, то нужно их оборачивать в круглые скобки:
    const plus = (a, b) => a + b;
    console.log(plus(2, 4));

    