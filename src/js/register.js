let placeholderTxt;

function onSignin(e) {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let registerCredentials = { firstName, lastName, email, password };
    console.log('registerCredentials', registerCredentials);
    // getData();
    e.preventDefault();
}

function onInputFocus(e) {
    let inputElement = e.target;
    placeholderTxt = inputElement.placeholder;
    inputElement.placeholder = '';
    let inputElementId = inputElement.id;
    let label = document.querySelector(`[for=${inputElementId}]`);
    label.style.visibility = 'visible';
    label.style.color = '#2dc9a9'
}

function onInputBlur(e) {
    let inputElement = e.target;
    inputElement.placeholder = placeholderTxt;
    let inputElementId = inputElement.id;
    let label = document.querySelector(`[for=${inputElementId}]`);
    label.style.visibility = 'hidden';
    label.style.color = '#adadad'

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errEl = document.querySelector('.form-group-passwordMatched');
    if(confirmPassword) {
        if( password !== confirmPassword) {
            errEl.style.display = 'block'
        } else {
            errEl.style.display = 'none'
        }
    }

}

function getData() {
    fetch("./../../server/categories/index.get.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong !");
        })
        .then(function (posts) {
            console.log("Within Chained Then Method !");
            console.log(posts);
        })
        .catch(function (err) {
            console.log(err);
        });
}