let form = document.querySelector(".login-form");
let errorConstantsObj = errorConstants;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.email.value !== "") {
        if (!validateEmail(form.email.value)) {
            document.querySelector("#emailError").innerHTML =
                errorConstantsObj.EMAIL_INVALID_ERROR;
            return false;
        }
    }
    if (form.password.value !== "" && form.confirmPassword.value !== "") {
        if (form.password.value !== form.confirmPassword.value) {
            document.querySelector("#confirmPasswordError").innerHTML =
                errorConstantsObj.PASSWORDS_DO_NOT_MATCH_ERROR;
            return false;
        }
    }
    if (
        form.email.value == "" ||
        form.password.value == "" ||
        form.firstName.value == "" ||
        form.lastName.value == "" ||
        form.confirmPassword.value == ""
    ) {
        if (form.email.value == "") {
            document.querySelector("#emailError").innerHTML =
                errorConstantsObj.EMAIL_REQUIRED_ERROR;
        }
        if (form.password.value == "") {
            document.querySelector("#passwordError").innerHTML =
                errorConstantsObj.PASSWORD_REQUIRED_ERROR;
        }
        if (form.password.value == "") {
            document.querySelector("#firstNameError").innerHTML =
                errorConstantsObj.FIRST_NAME_REQUIRED_ERROR;
        }
        if (form.password.value == "") {
            document.querySelector("#lastNameError").innerHTML =
                errorConstantsObj.LAST_NAME_REQUIRED_ERROR;
        }
        if (form.password.value == "") {
            document.querySelector("#confirmPasswordError").innerHTML =
                errorConstantsObj.CONFIRM_PASSWORD_REQUIRED_ERROR;
        }
        return false;
    }
    location.href = "login.html";
});

let formElementsForRegister = [
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
];
clearValidationsOnKeyDown(formElementsForRegister);
