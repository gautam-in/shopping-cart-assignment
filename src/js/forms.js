import { FormValidator } from './utils'

// If page is Login or Register, validate form
if (document.getElementById('login-page') || document.getElementById('register-page')) {
    window.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const formType = form.name;
    
        let formFields = []
        if (formType === 'login') {
            formFields = ['email', 'password']
        } else {
            formFields = ['fname', 'lname', 'email', 'password', 'confirm_password']
        }
    
        const validator = new FormValidator(form, formType, formFields);
    
        validator.initialize();
    });
}