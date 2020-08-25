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

    emailInput.id = 'emailInput';
    emailInput.name = 'emailInput';
    emailInput.placeholder = 'Enter Valid Email';
    emailInput.type = 'email';

    passInput.id = 'passInput';
    passInput.name = 'passInput';
    passInput.placeholder = 'Enter Password';
    passInput.type = 'password';

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
    for (const input of formElem) {
        if (input.value === '') {
            //reqBody[input.name] = input.value
            alert('must put something in empty fields');
        } else {
            reqBody[input.name] = input.value    
        }
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