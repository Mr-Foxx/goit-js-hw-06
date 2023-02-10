

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click',randomColor)

function randomColor(event) {
  
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



