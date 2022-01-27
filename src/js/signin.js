function onSignin(e) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let loginCtedential = { email, password };
    console.log('loginCtedential', loginCtedential);
    // getData();
    e.preventDefault();
}

function onInputFocus(e) {
    let inputElementId = e.target.id;
    let label = document.querySelector(`[for=${inputElementId}]`);
    label.style.visibility = 'visible';
    label.style.color = '#2dc9a9'
}

function onInputBlur(e) {
    let inputElementId = e.target.id;
    let label = document.querySelector(`[for=${inputElementId}]`);
    label.style.visibility = 'hidden';
    label.style.color = '#adadad'
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