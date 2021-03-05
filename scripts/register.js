let form = document.querySelector('.login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.email.value !== "") {
        if (!validateEmail(form.email.value)) {
            document.querySelector('#emailError').innerHTML = "*Please enter valid email*"
            return false;
        }
    }
    if (form.password.value !== "" && form.confirmPassword.value !== "") {
        if (form.password.value !== form.confirmPassword.value) {
            document.querySelector('#confirmPasswordError').innerHTML = "*Passwords do not match*"
            return false;
        }
    }
    if (form.email.value == "" || form.password.value == "" ||
        form.firstName.value == "" || form.lastName.value == "" || form.confirmPassword.value == "") {
        if (form.email.value == "") {
            document.querySelector('#emailError').innerHTML = "*Please enter email*"
        }
        if (form.password.value == "") {
            document.querySelector('#passwordError').innerHTML = "*Please enter password*"
        }
        if (form.password.value == "") {
            document.querySelector('#firstNameError').innerHTML = "*Please enter first name*"
        }
        if (form.password.value == "") {
            document.querySelector('#lastNameError').innerHTML = "*Please enter last name*"
        }
        if (form.password.value == "") {
            document.querySelector('#confirmPasswordError').innerHTML = "*Please enter confirm password*"
        }
        return false;

    };


    location.href = 'login.html'


})


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clearValidationsOnKeyDown() {
    let formElements = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    formElements.forEach(el => {
        form[el].addEventListener('keydown', (e) => {
            if (e.target.value !== "") {
                document.querySelector(`#${el}Error`).innerHTML = "";
            }
        })
    })
}

clearValidationsOnKeyDown();

