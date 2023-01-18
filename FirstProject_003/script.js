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

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

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