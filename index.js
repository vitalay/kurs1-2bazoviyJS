
let button = document.querySelector('button');
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', () => {
    counter++;
    counterText.innerText = counter;
});
// DOM - Document Object Model