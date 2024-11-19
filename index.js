let button = document.querySelector("button");
let resetButton = document.querySelector(".button2");
let counterText = document.querySelector(".counter");
let counter = 0;

button.addEventListener("click", () => {
  counter++;
  counterText.innerText = counter;

  resetButton.addEventListener("click", () => {
    counter = 0;
    counterText.innerText = counter;
  });
});
// DOM - Document Object Model
