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
    favMovieInput.name = 'favMovie'; //has to match schema

    idNum.id = 'idNum';
    idNum.name = 'id'; //has to match schema

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
    //let id = idNum.value;

    for (const input of formElem) {
        //console.log(input.value);
        reqBody[input.name] = input.value //reqbody is orginially empty but then input name takes in input value which is what the user provides! ex email(input.name): testing@test.com(input.value)
    }

   // let passedValidation = true;

    // if (favMovieInput.length > 33 || favMovieInput.length < 3) {
    //     alert('favorite movie must be within the range of 3-33 characters');
    //     passedValidation = false;
    // }

    // if (id.length !== 6) { // must be fixed
    //     alert('ID number must be 6 numbers');
    //     console.log(`user id is ${id} and the length is ${id.length}`); // must be fixed
    //     passedValidation = false;
    // }

  //  if (passedValidation) {

        const endpoint = location.origin + '/profile'; //this is path from app.js accessible to all userrouter stuff 

        console.log('hello world');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint);
            xhr.onload = () => {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
            }
        xhr.setRequestHeader('Content-Type', 'application/json') //does not automatically accept json data, we must set it ourselves for post req
        xhr.send(JSON.stringify(reqBody)); //this ultimately sends it to server side
  //  }
}   