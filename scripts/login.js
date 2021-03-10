let form = document.querySelector(".login-form");
let errorConstantsObj = errorConstants;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.email.value == "" || form.password.value == "") {
        if (form.email.value == "") {
            document.querySelector("#emailError").innerHTML =
                errorConstantsObj.EMAIL_REQUIRED_ERROR;
        } else {
            document.querySelector("#passwordError").innerHTML =
                errorConstantsObj.PASSWORD_REQUIRED_ERROR;
        }
        return false;
    } else {
        if (!validateEmail(form.email.value)) {
            document.querySelector("#emailError").innerHTML =
                errorConstantsObj.EMAIL_INVALID_ERROR;
            return false;
        }
    }
    location.href = "index.html" + "#loggedIn";
});

let formElementsForLogin = ["email", "password"];
clearValidationsOnKeyDown(formElementsForLogin);
