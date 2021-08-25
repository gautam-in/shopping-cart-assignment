function loadRegisterPage() {
    setHeaderElement();
}

document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!checkInputs()) {
        location.pathname = "/src/home_page.html";
    }
});
function checkInputs() {
    var isErrorPresent = false;
    var fName = document.getElementById("fName");
    var lName = document.getElementById("lName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");

    if (fName.value === "") {
        setError(fName, "The first name cannot be blank !");
        isErrorPresent = true;
    } else if (!isValidName(fName.value)) {
        setError(fName, "The first name entered is wrong !");
        isErrorPresent = true;
    } else {
        setSuccess(fName);
    }

    if (lName.value === "") {
        setError(lName, "The last name cannot be blank !");
        isErrorPresent = true;
    } else if (!isValidName(lName.value)) {
        setError(lName, "The last name entered is wrong !");
        isErrorPresent = true;
    } else {
        setSuccess(lName);
    }

    if (email.value === "") {
        setError(email, "The email cannot be blank !");
        isErrorPresent = true;
    } else if (!isValidEmail(email.value)) {
        setError(email, "The email entered is wrong !");
        isErrorPresent = true;
    } else {
        setSuccess(email);
    }

    if (password.value === "") {
        setError(password, "The password cannot be blank !");
        isErrorPresent = true;
    } else if (!isValidPassword(password.value)) {
        setError(
            password,
            "Password should be min 6 characters alphanumeric and no spaces."
        );
        isErrorPresent = true;
    } else {
        setSuccess(password);
    }

    if (confirmPassword.value === "") {
        setError(confirmPassword, "This field cannot be blank !");
        isErrorPresent = true;
    } else if (confirmPassword.value != password.value) {
        setError(confirmPassword, "This field should be same as password.");
        isErrorPresent = true;
    } else {
        setSuccess(confirmPassword);
    }

    return isErrorPresent;
}
function isValidName(nameValue) {
    var pattern = /^[a-zA-Z ]{2,12}$/;
    return pattern.test(String(nameValue));
}
function isValidEmail(emailValue) {
    var pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(emailValue).toLowerCase());
}
function isValidPassword(passwordValue) {
    var pattern = /^(?=.*?[A-Z|a-z])(?=.*?[0-9]).{6,}$/;
    return pattern.test(String(passwordValue).toLowerCase());
}
function setError(input, message) {
    input.nextElementSibling.classList.remove("hide");
    input.nextElementSibling.classList.add("show");
    input.nextElementSibling.innerText = message;
}
function setSuccess(input) {
    if (input.nextElementSibling.classList.contains("show")) {
        input.nextElementSibling.classList.remove("show");
        input.nextElementSibling.classList.add("hide");
    }
}
