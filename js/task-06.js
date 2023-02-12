
const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        
        addChange('valid', 'invalid')
    } else {
       addChange('invalid', 'valid')
    }
}

function addChange(a, b) {
    input.classList.add(a)
     input.classList.remove(b);
        
}


