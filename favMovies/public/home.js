window.onload = () => { 

    //(1)create 'blank' element
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    const idNum = document.createElement('input');
    const favMovieInput = document.createElement('input');
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

    favMovieInput.id = 'favMovieInput';
    favMovieInput.name = 'favMovieInput';

    idNum.id = 'idNum';
    idNum.name = 'idNum';

    submitButton.id = 'submitButton';
    submitButton.name = 'submitButton';    

    heading.innerText = 'Enter Information Here!!';

    emailInput.placeholder = 'Enter Email';
    emailInput.type = 'email';

    favMovieInput.placeholder = 'Favorite Movie';
    favMovieInput.type = 'text';

    idNum.placeholder = 'Enter ID Number';
    idNum.type = 'number';


    submitButton.innerText = 'Submit';

    //(3)append to the DOM
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton);
    form.appendChild(emailInput);
    form.appendChild(idNum);
    form.appendChild(favMovieInput);



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

    if (favMovieInput.length > 33 || favMovieInput.length < 3) {
        alert('favorite movie must be within the range of 3-33 characters');
        passedValidation = false;
    }

    if (idNum.length !== 6) {
        alert('ID number must be 6 numbers');
        passedValidation = false;
    }

    if (passedValidation) {

        const endpoint = location.origin + '/user/profile';

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