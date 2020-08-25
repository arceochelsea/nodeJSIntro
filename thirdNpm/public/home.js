window.onload = () => { //does not need a nme because it will only fire once
    //create a form and append to one div 

    //(1)create 'blank' element
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    const userNameInput = document.createElement('input');
    const passInput = document.createElement('input');
    const passConfirmInput = document.createElement('input');
    const submitButton = document.createElement('button');
    
    
    //(2)set properties and event listeners
    //id for each element
    mainDiv.id = 'mainDiv';
    mainDiv.name = 'mainDiv';

    heading.id = 'heading';
    heading.name = 'heading';

    form.id = 'form';
    form.name = 'form';

    emailInput.id = 'emailInput';
    emailInput.name = 'email';
    emailInput.minLength = 6;
    emailInput.maxLength = 200;

    userNameInput.id = 'userNameInput';
    userNameInput.name = 'username';
    userNameInput.minLength = 3;
    userNameInput.maxLength = 33;

    passInput.id = 'passInput';
    passInput.name = 'password';
    passInput.minLength = 7;

    passConfirmInput.id = 'passConfirmInput';
    passConfirmInput.name = 'password2';

    submitButton.id = 'submitButton';
    submitButton.name = 'submitButton';    

    heading.innerText = 'Register Today!!';

    emailInput.placeholder = 'Enter Email';
    emailInput.type = 'email';

    userNameInput.placeholder = 'Enter Username';

    passInput.placeholder = 'Enter Password';
    passInput.type = 'password';

    passConfirmInput.placeholder = 'Enter Password Again';
    passConfirmInput.type = 'password';


    submitButton.innerText = 'Register';

    //(3)append to the DOM
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton);
    form.appendChild(emailInput);
    form.appendChild(userNameInput);
    form.appendChild(passInput);
    form.appendChild(passConfirmInput);


    //classname for the inputs
    let inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.classList.add('input');
    //    console.log(inputs);
    } 

    //set event listener for submit btn, log 'submitting..' to the console, 
    submitButton.addEventListener('click', function(){
        console.log('Submitting...');
        for (const forms of form.children) {
            console.log(forms);
        }
    });

    submitButton.onclick = submitReg;

}

function submitReg() { //any object that is iteriable 
    const formElem = document.getElementById('form');
    const reqBody = {};

    for (const input of formElem) {
        //console.log(input.value);
        reqBody[input.name] = input.value
    }

    let passedValidation = true;

    if (reqBody.username.length > 33 || reqBody.username.length < 3) {
        alert('Username must be within the range of 3-33 characters');
        passedValidation = false;
    }

    if (reqBody.password !== reqBody.password2) {
        alert('Passwords did not match');
        passedValidation = false;
    }

   // const formElem = document.getElementById('form');
   // const reqBody = {};
    const userEmail = formElem.emailInput.value.trim();
    if (userEmail == '') {
        return alert('Please provide an email address');
    } else if (userEmail.length < 6) {
        return alert('Email must be in proper format');
    }

//    console.log('email passes test');

    if (passedValidation) {

        const endpoint = location.origin + '/user/register';

        //XHR
        const xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint);
        xhr.onload = () => {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
        }
    
        xhr.setRequestHeader('Content-Type', 'application/json')
    
        xhr.send(JSON.stringify(reqBody));
    }
    }   