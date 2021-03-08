let form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.email.value == "" && form.password.value == "") {
        document.querySelector("#emailError").innerHTML = "*Please enter email*";
        document.querySelector("#passwordError").innerHTML =
            "*Please enter password*";
        return false;
    } else if (form.password.value == "" && form.email.value !== "") {
        if (!validateEmail(form.email.value)) {
            document.querySelector("#emailError").innerHTML =
                "*Please enter valid email*";
        }
        document.querySelector("#passwordError").innerHTML =
            "*Please enter password*";
        return false;
    } else if (form.email.value == "" && form.password.value !== "") {
        document.querySelector("#emailError").innerHTML = "*Please enter email*";
        return false;
    } else {
        if (!validateEmail(form.email.value)) {
            document.querySelector("#emailError").innerHTML =
                "*Please enter valid email*";
            return false;
        }
    }

    location.href = "index.html" + "#loggedIn";
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clearValidationsOnKeyDown() {
    let formElements = ["email", "password"];
    formElements.forEach((el) => {
        form[el].addEventListener("keydown", (e) => {
            if (e.target.value !== "") {
                document.querySelector(`#${el}Error`).innerHTML = "";
            }
        });
    });
}

clearValidationsOnKeyDown();
