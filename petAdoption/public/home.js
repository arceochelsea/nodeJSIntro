window.onload = () => { 

    //(1)create 'blank' element
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    const password = document.createElement('input');
    const petSearch = document.createElement('input');
    const zipcode = document.createElement('input');
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

    petSearch.id = 'petSearch';
    petSearch.name = 'petSearch';

    password.id = 'password';
    password.name = 'password';

    zipcode.id = 'zipcode';
    zipcode.name = 'zipcode';

    submitButton.id = 'submitButton';
    submitButton.name = 'submitButton';    

    heading.innerText = 'Find a purrfect match near you!!';

    emailInput.placeholder = 'Enter Email';
    emailInput.type = 'email';

    petSearch.placeholder = 'Enter Kind of Pet';
    petSearch.type = 'text';

    password.placeholder = 'Enter Password';
    password.type = 'password';

    zipcode.placeholder = 'Enter Zipcode';
    zipcode.type = 'text';

    submitButton.innerText = 'Submit';

    //(3)append to the DOM
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton);
    form.appendChild(emailInput);
    form.appendChild(password);
    form.appendChild(petSearch);
    form.appendChild(zipcode);

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

function submitReg() { 
    const formElem = document.getElementById('form');
    const reqBody = {};

    for (const input of formElem) {
        //console.log(input.value);
        reqBody[input.name] = input.value
    }

    let passedValidation = true;

    if (passedValidation) {

        const endpoint = location.origin + '/home';

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