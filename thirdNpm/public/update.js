window.onload = () => {
    const mainDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const form = document.createElement('form');
    const usernameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const passInput = document.createElement('input');
    const submitBtn = document.createElement('button');

    mainDiv.id = 'mainDiv';
    mainDiv.name = 'mainDiv';

    heading.id = 'heading';
    heading.name = 'heading';
    heading.innerText = 'Update Your Information Here!';

    form.id = 'form';
    form.name = 'form';

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
    passInput.placeholder = 'Enter Previous Password';
    passInput.type = 'password';

    submitBtn.id = 'submitBtn';
    submitBtn.name = 'submitBtn';
    submitBtn.innerText = 'Submit';

    document.body.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitBtn);
    form.appendChild(usernameInput);
    form.appendChild(emailInput);
    form.appendChild(passInput);

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
        reqBody[input.name] = input.value
    }

    const endpoint = location.origin + '/user/update';

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', endpoint);
    xhr.onload = () => {
        
    }
}