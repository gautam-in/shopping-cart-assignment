// Constants for form

function getConstants() {
    return {

        FORM: '.form',
        FORM_INPUT_FIELD: '.form .form-group input',
        FORM_ERROR_CLASS: 'p.error',
        EMAIL_VALIDATION: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        PASSWORD_VALIDATION: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,14}$/,
        PASSWORD_ERROR_MSG: 'Invalid password (Password should contain 6 to 14 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character)',
        EMAIL_ERROR_MSG: 'Invalid Email Address',
        EMPTY_ERROR_MSG: 'Fields should not be empty!',
        PASSWORD_MISSMATCH: 'Mismatch password!',
        EMAIL_STATUS: false,
        PASSWORD_STATUS: false,
        NAME_STATUS: false,
        CONFIRM_PASSWORD_STATUS: false
    }

}