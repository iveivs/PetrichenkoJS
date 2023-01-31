// "use strict" 
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('coral', 'trtrtrttrrtt'));


// console.log(btns[0].classList.remove('some'));

// console.log(btns[0].classList.toggle('some'));


// console.log(btns[1].classList.add('coral'));

// if (btns[1].classList.contains('coral')) {
//     console.log('coral');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('coral')) {
    //     btns[1].classList.add('coral');
    // } else {
    //     btns[1].classList.remove('coral');
    // }

    btns[1].classList.toggle('coral');
});

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});

const btn = document.createElement('button'); 
btn.classList.add('coral');
wrapper.append(btn);



