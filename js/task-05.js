
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input',onInputText)

// function onInputText(event) {
//     if (event.currentTarget.value === "" ) {
//         output.textContent = "Anonymous";
//     } else {
//         output.textContent = input.value;
//     }
// }


// function onInputText(event) {
//     output.textContent = event.currentTarget.value === " "
//         ? 'Anonymous'
//         : event.currentTarget.value

// };

function onInputText(event) {
    output.textContent = !event.currentTarget.value.trim() 
        ? 'Anonymous'
        : event.currentTarget.value

};

