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
    emailInput.name = 'emailInput';

    userNameInput.id = 'userNameInput';
    userNameInput.name = 'userNameInput';

    passInput.id = 'passInput';
    passInput.name = 'pass1';

    passConfirmInput.id = 'passConfirmInput';
    passConfirmInput.name = 'pass2';

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
    console.log(reqBody);
    const endpoint = location.origin + '/user/post/new';
    console.log(reqBody);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint);
    xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
    }

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(reqBody));
}