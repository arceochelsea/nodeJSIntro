window.onload = () => {
    //create elements
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    const passInput = document.createElement('input');
    const submitButton = document.createElement('button');

    //set properties and event listeners
    //id for each element
    mainDiv.id = 'mainDiv';
    mainDiv.name = 'mainDiv';

    heading.id = 'heading';
    heading.name = 'heading';
    heading.innerText = "Login to see what's happening!";

    form.id = 'form';
    form.name = 'form';

    emailInput.id = 'emailInput';
    emailInput.name = 'emailInput';
    emailInput.placeholder = 'Enter Email';
    emailInput.type = 'email';
    emailInput.minLength = 6;
    emailInput.maxLength = 200;

    passInput.id = 'passInput';
    passInput.name = 'passInput';
    passInput.placeholder = 'Enter Password';
    passInput.type = 'password';
    passInput.minLength = 7;

    submitButton.id = 'submitButton';
    submitButton.name = 'submitButton';
    submitButton.innerText = "Login";

    //append to the DOM
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton);
    form.appendChild(emailInput);
    form.appendChild(passInput);

    //classname for the inputs
    let inputs = document.querySelectorAll('input'); //gets every input
    for (const input of inputs) {
        input.classList.add('input');
        console.log(inputs);
    }

    //set event listener for submit btn
    submitButton.addEventListener('click', function(){
        console.log('Login info submitting....');
        for (const forms of form.children) {
            console.log(forms);
        }
    });

    submitButton.onclick = submitReg;

}

function submitReg() { //any object that is iteriable 
    const formElem = document.getElementById('form');
    const reqBody = {}; //this is where request body will go
    for (const input of formElem) {
        //console.log(input.value);
        reqBody[input.name] = input.value.trim();
    }

    const email = reqBody.emailInput;

    if (email.length < 6 || email.length > 200 || !email.includes('@') || !email.substring(email.indexOf('@')).includes('.')) {
        alert('Please enter valid email address!')
        passedValidation = false;
    }

    const password = reqBody.passInput;

    if (password.length < 7) {
        alert('Password did not meet requirements');
        passedValidation = false;
    }

    //console.log(reqBody);
    const endpoint = location.origin + '/user/login';
    //console.log(reqBody);

    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', endpoint ); //must do PATCH req instead
    xhr.onload = () => {
        const res = JSON.parse(xhr.responseText); //JSON.patch??
        console.log(res);
    }

    xhr.setRequestHeader('Content-Type', 'application/json') //patch post put only for request body

    xhr.send(JSON.stringify(reqBody));
}

