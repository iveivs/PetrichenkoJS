const btns = document.querySelectorAll('button'),
    overlay =  document.querySelector('.overlay');

// btn.onclick = function() {  // Такой код практически не используется
//     alert('Click');
// }

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     // console.log('Hoveer');
// });
// -----------------------------
// let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
btns.forEach(item => {
    item.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();

    console.log(event.target);
});