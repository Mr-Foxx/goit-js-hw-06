
let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');



decrementBtn.addEventListener('click',onDecrementBtnClick);
incrementBtn.addEventListener('click',onIncrementBtnClick);

function onDecrementBtnClick(event) {
    // console.log(event.currentTarget);
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onIncrementBtnClick(event) {
    // console.log(event.currentTarget);
    counterValue += 1;
    valueEl.textContent = counterValue;
}



