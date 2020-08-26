window.onload = () => {
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const idInput = document.createElement('input');
    const usernameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const passInput = document.createElement('input');
    const passValidate = document.createElement('input');
    const submitBtn = document.createElement('button');

    mainDiv.id = 'mainDiv';
    mainDiv.name = 'mainDiv';

    heading.id = 'heading';
    heading.name = 'heading';
    heading.innerText = 'Update Your Information Here!';

    form.id = 'form';
    form.name = 'form';

    idInput.id = 'idInput';
    idInput.name = 'idInput';
    idInput.placeholder = 'Enter ID Number';
    idInput.type = 'text';

    usernameInput.id = 'usernameInput';
    usernameInput.name = 'usernameInput';
    usernameInput.placeholder = 'Enter Valid Username';
    usernameInput.type = 'text';
    usernameInput.minLength = 3;
    usernameInput.maxLength = 33;

    emailInput.id = 'emailInput';
    emailInput.name = 'emailInput';
    emailInput.placeholder = 'Enter Valid Email';
    emailInput.type = 'email';

    passInput.id = 'passInput';
    passInput.name = 'passInput';
    passInput.placeholder = 'Enter Password';
    passInput.type = 'password';
    passInput.minLength = 7;

    passValidate.id = 'passValidate';
    passValidate.name = 'passValidate';
    passValidate.placeholder = 'Re-enter Password';
    passValidate.type = 'password';

    submitBtn.id = 'submitBtn';
    submitBtn.name = 'submitBtn';
    submitBtn.innerText = 'Submit';

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitBtn);
    form.appendChild(idInput);
    form.appendChild(usernameInput);
    form.appendChild(emailInput);
    form.appendChild(passInput);
    form.appendChild(passValidate);

    let inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.classList.add('input');
        console.log(inputs);
    }

    submitBtn.addEventListener('click', function (){
        console.log('Submitting new information...')
        for (const forms of form.children) {
            console.log(forms)
        }
    });

    submitBtn.onclick = submitNew;

}

function submitNew() {
    const formElem = document.getElementById('form');
    const reqBody = {};
    const userId = formElem.idInput.value.trim()
    if (userId == '') {
        return alert('Must provide user ID');
    } else if (userId.length != 24) {
        return alert('Id must be in proper format');    
    }

    console.log('passes id test');

    const nonIdInputsFilled = 0;

    //building the req body
    for (const input of formElem) {
            const val = input.value.trim();
            if (val != '' && input.name != 'id') { //only add non-empty values and excludes id from the req body
                reqBody[input.name] = val
                return alert('You must fill in empty fields!!');
            }
        }

    // if (Object.keys(reqBody).length == 0) {
    //     return alert('One input must be filled');
    // }

    if (nonIdInputsFilled == 0) {
        return alert('One input must be filled')
    }

    const endpoint = `${location.origin}/user/update/${formElem.idInput.value}`

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', endpoint);
    xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        console.log(`this is the res: ${res}`);
    }

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(reqBody));
    
}