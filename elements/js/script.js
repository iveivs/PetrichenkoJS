'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');
// // const btns = document.getElementsByTagName('button')[1];


// // console.log(btns);
// console.log(btns[1]);


// const circles = document.getElementsByClassName('circle');
// console.log(circles);


// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// ---------------

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

document.body.append(div);
// wrapper.appendChild(div); // старый метод
// document.querySelector('.wrapper').append(div); 

// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.insertBefore(div, hearts[1]); // старый метод

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML =  "<h1>Hello World</h1>";
// div.textContent = "Hello"

div.insertAdjacentHTML('beforebegin', '<h2>Hi</h2>');





