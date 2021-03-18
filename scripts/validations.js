function clearValidationsOnKeyDown(formElements) {
    formElements.forEach((el) => {
        form[el].addEventListener("keydown", (e) => {
            if (e.target.value !== "") {
                document.querySelector(`#${el}Error`).innerHTML = "";
            }
        });
    });
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = re.test(String(email).toLowerCase());
    return test;

}

function validate(e) {
    if (e.target.value == "") {
        document.querySelector(`#${e.target.name}Error`).innerHTML = `*Please enter ${e.target.nextElementSibling.innerText}*`;
    } else {
        if (e.target.name == 'email') {
            if (!validateEmail(form.email.value)) {
                document.querySelector("#emailError").innerHTML =
                    errorConstantsObj.EMAIL_INVALID_ERROR;
                return false;
            }
        }
    }
}



