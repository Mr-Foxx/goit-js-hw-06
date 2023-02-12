


const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    if (event.target.email.value.trim() === "" || event.target.password.value === "") {
       return alert('The fields must be filled!')
    };

    const formElement = event.currentTarget.elements;

    const email = formElement.email.value;
    const password = formElement.password.value;

    const data = { email, password };
    console.log(data);

    event.target.reset()
}


