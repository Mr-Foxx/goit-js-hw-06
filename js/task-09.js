

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click',randomColor)

function randomColor(event) {
  
 const color = getRandomHexColor();

  body.style.backgroundColor = color;
  colorSpan.textContent = color;
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



