const loginForm = document.querySelector('#login-page .login_form form');
const signupForm = document.querySelector('#register-page .register_form form');

const formInputs = Array.from(document.querySelectorAll('form input'));

// Highlight the inputs when they're focused and have value
const highlightInput = (input) => {
    input.value.length > 0 ? input.classList.add("highlight") : input.classList.remove("highlight")
}

if (document.getElementById('login-page') || document.getElementById('register-page')) {
    formInputs.forEach((input) => {
        input.addEventListener('input', () => highlightInput(input));
    }) 
}

// Login Form Validation
const validateLoginForm = (event) => {
    event.preventDefault();
    const errors = [];
    const email = document.querySelector('.login_form .input_group #email').value.trim();
    const password = document.querySelector('.login_form .input_group #password').value.trim();

    const isEmailEmpty = email.length === 0;
    const isPasswordEmpty = password.length === 0;

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailRegex.test(email);

    // Required Field
    if (isEmailEmpty) {
        errors.push({
            fieldName: 'login-email',
            errorMsg: ["Email can't be empty"] 
        });
    }


    if (isPasswordEmpty) {
        errors.push({
            fieldName: 'login-password',
            errorMsg: ["Password can't be empty"] 
        });
    }

    // Invalid Email
    if (!isEmailEmpty && !isEmailValid) {
        errors.push({
            fieldName: 'login-email',
            errorMsg: ["Invalid email"] 
        });
    }

    // If errors present, append Error messages in DOM
    if (errors.length > 0) {
        const emailErrors = errors.filter((err) => err.fieldName.includes('email'));
        const passwordErrors = errors.filter((err) => err.fieldName.includes('password'));

        const emailErrorElem = document.querySelector('.login_form .error_msg.email_errors');
        const passwordErrorElem = document.querySelector('.login_form .error_msg.password_errors');

        emailErrorElem.innerHTML = '';
        passwordErrorElem.innerHTML = '';

        if (passwordErrors.length > 0) {
            const errorUl = document.createElement("ul");

            passwordErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            passwordErrorElem.appendChild(errorUl);
            document.querySelector('.login_form .input_group #password').focus();
        }


        if (emailErrors.length > 0) {
            const errorUl = document.createElement("ul");

            emailErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            emailErrorElem.appendChild(errorUl);
            document.querySelector('.login_form .input_group #email').focus();
        }

        return false;

    } else {
        // Reset & Submit form if no errors
        loginForm.submit();
        loginForm.reset();
    }

}


// Signup Form Validation
const validateSignUpForm = (event) => {
    event.preventDefault();
    const errors = [];
    const firstName = document.querySelector('.register_form .input_group #fname').value.trim();
    const lastName = document.querySelector('.register_form .input_group #lname').value.trim();
    const email = document.querySelector('.register_form .input_group #email').value.trim();
    const password = document.querySelector('.register_form .input_group #password').value.trim();
    const confirmPassword = document.querySelector('.register_form .input_group #confirm_password').value.trim();

    const isFirstNameEmpty = firstName.length === 0;
    const isLastNameEmpty = lastName.length === 0;
    const isEmailEmpty = email.length === 0;
    const isPasswordEmpty = password.length === 0;
    const isConfirmPasswordEmpty = confirmPassword.length === 0;

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailRegex.test(email);

    // Regex Checks if Password contains:
        // White spaces
        // A number and Alphabet
        // Minimum 6 characters
          
    const passwordRegex = /^s*(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const isPasswordValid = passwordRegex.test(password);

    // Required Field
    if (isFirstNameEmpty) {
        errors.push({
            fieldName: 'signup-fname',
            errorMsg: ["First name can't be empty"] 
        });
    }


    if (isLastNameEmpty) {
        errors.push({
            fieldName: 'signup-lname',
            errorMsg: ["Last name can't be empty"] 
        });
    }

    if (isEmailEmpty) {
        errors.push({
            fieldName: 'signup-email',
            errorMsg: ["Email can't be empty"] 
        });
    }

    if (isPasswordEmpty) {
        errors.push({
            fieldName: 'signup-password',
            errorMsg: ["Password can't be empty"] 
        });
    }

    if (isConfirmPasswordEmpty) {
        errors.push({
            fieldName: 'signup-confirmpwd',
            errorMsg: ["Please confirm your password"] 
        });
    }

    // Invalid Email
    if (!isEmailEmpty && !isEmailValid) {
        errors.push({
            fieldName: 'login-email',
            errorMsg: ["Invalid email"] 
        });
    }

    // Invalid password
    if (!isPasswordEmpty && !isPasswordValid) {
        errors.push({
            fieldName: 'signup-password',
            errorMsg: ["A password must contain atleast 6 characters", "A password must contain atleast 1 number and 1 alphabet", "A password must not contain spaces"] 
        });
    }
    

    // Passwords don't match
    if (!isPasswordEmpty && isPasswordValid && password !== confirmPassword) {
        errors.push({
            fieldName: 'signup-confirmpwd',
            errorMsg: ["Passwords don't match"] 
        });
    }

    // If errors present, append Error messages in DOM
    if (errors.length > 0) {
        const firstNameErrors = errors.filter((err) => err.fieldName.includes('fname'));
        const lastNameErrors = errors.filter((err) => err.fieldName.includes('lname'));

        const emailErrors = errors.filter((err) => err.fieldName.includes('email'));
        const passwordErrors = errors.filter((err) => err.fieldName.includes('password'));
        const confirmPasswordErrors = errors.filter((err) => err.fieldName.includes('confirmpwd'));

        const firstNameErrorElem = document.querySelector('.register_form .error_msg.fname_errors');
        const lastNameErrorElem = document.querySelector('.register_form .error_msg.lname_errors');
        const emailErrorElem = document.querySelector('.register_form .error_msg.email_errors');
        const passwordErrorElem = document.querySelector('.register_form .error_msg.password_errors');
        const confirmPasswordErrorElem = document.querySelector('.register_form .error_msg.cnf_password_errors');

        firstNameErrorElem.innerHTML = '';
        lastNameErrorElem.innerHTML = '';
        emailErrorElem.innerHTML = '';
        passwordErrorElem.innerHTML = '';
        confirmPasswordErrorElem.innerHTML = '';

        if (confirmPasswordErrors.length > 0) {
            const errorUl = document.createElement("ul");

            confirmPasswordErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            confirmPasswordErrorElem.appendChild(errorUl);
            document.querySelector('.register_form .input_group #confirm_password').focus();
        }

        if (passwordErrors.length > 0) {
            const errorUl = document.createElement("ul");

            passwordErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            passwordErrorElem.appendChild(errorUl);
            document.querySelector('.register_form .input_group #password').focus();
        }


        if (emailErrors.length > 0) {
            const errorUl = document.createElement("ul");

            emailErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            emailErrorElem.appendChild(errorUl);
            document.querySelector('.register_form .input_group #email').focus();
        }

        if (lastNameErrors.length > 0) {
            const errorUl = document.createElement("ul");

            lastNameErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            lastNameErrorElem.appendChild(errorUl);
            document.querySelector('.register_form .input_group #lname').focus();
        }


        if (firstNameErrors.length > 0) {
            const errorUl = document.createElement("ul");

            firstNameErrors[0].errorMsg.forEach((error) => {
                const errorLi = document.createElement("li");
                errorLi.appendChild(document.createTextNode(error));
                errorUl.appendChild(errorLi);
            })
            firstNameErrorElem.appendChild(errorUl);
            document.querySelector('.register_form .input_group #fname').focus();
        }


        return false;

    } else {
        // Reset & Submit form if no errors
        signupForm.submit();
        signupForm.reset();
    }

}


// Handle Login Form Submit
if (document.getElementById('login-page')) {
    loginForm.addEventListener('submit', () => validateLoginForm(event))
}

// Handle Signup Form Submit
if (document.getElementById('register-page')) {
    signupForm.addEventListener('submit', () => validateSignUpForm(event))
}

