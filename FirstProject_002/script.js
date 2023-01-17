"use strict";

// LESSON 16

function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage('Hello World');



// function calc(a, b) {
//   return a +  b;
// }
// console.log(calc(4, 5));


function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
  console.log('Hi');
};
logger();


const calc = (a,b) => a + b;
//  или
const calc2 = (c, d) => { return c + d };

console.log(calc(3, 4));
console.log(calc2(5, 7));

// =================================

// LESSON 17

const str = 'test';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf('q'));

const logg = 'Hello World';

console.log(logg.slice(6, 11));

console.log(logg.substring(0, 6));

console.log(logg.substr(4, 5));


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));


