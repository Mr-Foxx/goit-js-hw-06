

const ainput = document.querySelector('#font-size-control');
const text=document.querySelector('#text')

ainput.addEventListener('input',onChangeValue);

function onChangeValue(event) {
    text.style.fontSize = ainput.value + 'px';
}




