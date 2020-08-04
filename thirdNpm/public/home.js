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
    heading.id = 'heading';
    form.id = 'form';
    emailInput.id = 'emailInput';
    userNameInput.id = 'userNameInput';
    passInput.id = 'passInput';
    passConfirmInput.id = 'passConfirmInput';
    submitButton.id = 'submitButton';    

    heading.innerText = 'Register Today!!';

    emailInput.placeholder = 'Enter Email';
    emailInput.type = 'email';

    userNameInput.placeholder = 'Enter Username';

    passInput.placeholder = 'Enter Password';
    passInput.type = 'password';

    passConfirmInput.placeholder = 'Enter Password';
    passConfirmInput.placeholder = 'Enter Password Again';

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

    //log the form/elements one by one with the for..in for..of
    // let forms = document.getElementsByClassName('input');
    // for (const form of forms) {
    //     console.log(forms);
    // }

    //set event listener for submit btn, log 'submitting..' to the console, 
    submitButton.addEventListener('click', function(){
        console.log('Submitting...');
        for (const forms of form.children) {
            console.log(forms);
        }
    });

}