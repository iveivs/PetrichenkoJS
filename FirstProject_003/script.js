"use strict"

// CALLBACK ФУНКЦИИ

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

//=====================================

// function learnJS(lang, callback) {
//     console.log(`I learn ${lang} `);
//     callback();
// }

// function done() {
//     console.log('I try this lesson');
// }

// learnJS('JavaScript', done);


// // learnJS('JavaScript', function() {
// //     console.log('I try this lesson');
// // });

//   ОБЪЕКТЫ

// const obj = new Object();

// const options = {
//     name: "test",
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(options["colors"]["border"]);

// // console.log(options.name, options.colors);

// // delete options.name;
// // console.log(options.name);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство: ${i}, имеет значение ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Свойство: ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);


// МАССИВЫ


// let arr = [2, 4, 7 , 1, 5, 0]

// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }


// for (let value of arr) {
//     console.log(value);
// }
// console.log(arr.length);

// ==============================

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

//    Разбивание строки в массив и обратно и сортировка
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);
// products.sort();
// console.log(products.join('; '));

// ==============================

//  Сортировка массива с числами:

// const arr1 = [2, 13, 28, 8 , 10];
// arr1.sort(compareNum);
// console.log(arr1);

// function compareNum(a, b) {
//     return a - b;
// }

// ==============================

// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);
// // --------

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);
// // --------

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 22;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     i: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// // ---------

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasda'

// console.log(newArray);
// console.log(oldArray);

// // ----

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'lifejournal', 'bloger'],
//     internet = [...video,...blogs, 'vk', 'facebook'];

// console.log(internet);


// ----

// function log1(a, b ,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };

// const numb = [2, 5, 8];

// log1(...numb);

// ----

// const arr2 = ["a", "b"];

// const  newAarray = [...arr2];
// newAarray[1] = "y";
// console.log(newAarray);
// console.log(arr2);

// ----

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q}
// console.log(newQ);