const valid = (function() {
    const CONSTANS = {
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
    return {
        validate: (item) => {
            if (item.type == 'text') {
                if (item.value == '') {
                    document.getElementsByClassName('error')[0].innerHTML = CONSTANS.EMPTY_ERROR_MSG;
                    CONSTANS.NAME_STATUS = false;
                } else {
                    document.getElementsByClassName('error')[0].innerHTML = "";
                    CONSTANS.NAME_STATUS = true;
                }
            }

            if (item.type == 'email') {
                if (item.value == '') {
                    document.getElementsByClassName("error-email")[0].innerHTML = CONSTANS.EMPTY_ERROR_MSG;
                    CONSTANS.EMAIL_STATUS = false;
                } else if (item.value != '') {

                    if (!CONSTANS.EMAIL_VALIDATION.test(item.value)) {

                        document.getElementsByClassName("error-email")[0].innerHTML = CONSTANS.EMAIL_ERROR_MSG;
                        CONSTANS.EMAIL_STATUS = false;
                    } else {

                        document.getElementsByClassName("error-email")[0].innerHTML = "";
                        CONSTANS.EMAIL_STATUS = true;
                    }
                }
            }
            if (item.type == 'password') {
                if (item.value == '') {
                    document.getElementsByClassName("error-psw")[0].innerHTML = CONSTANS.EMPTY_ERROR_MSG;
                    CONSTANS.PASSWORD_STATUS = false;
                } else if (item.value != '') {

                    if (!CONSTANS.PASSWORD_VALIDATION.test(item.value)) {
                        document.getElementsByClassName("error-psw")[0].innerHTML = CONSTANS.PASSWORD_ERROR_MSG;
                        CONSTANS.PASSWORD_STATUS = false;
                    } else {
                        document.getElementsByClassName("error-psw")[0].innerHTML = "";
                        CONSTANS.PASSWORD_STATUS = true;
                    }
                }
            }
        },


        validateLogin: () => {
            var form = document.querySelectorAll(CONSTANS.FORM_INPUT_FIELD);

            let arr = Array.from(form);

            for (var i = 0; i < arr.length; i++) {
                let item = arr[i];
                valid.validate(item);
            }

            if (CONSTANS.PASSWORD_STATUS && CONSTANS.EMAIL_STATUS) {
                return true;
            } else {
                return false;
            }
        },
        confirmPwd: () => {
            var password = document.getElementById('psw').value;
            var cnfpassword = document.getElementById('psw-repeat').value;
            if (cnfpassword != password) {
                document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "Passwords do not match";
                CONSTANS.CONFIRM_PASSWORD_STATUS = false;
            } else {
                document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "";
                CONSTANS.CONFIRM_PASSWORD_STATUS = true;
            }
        },
        validateRegister: () => {
            var form = document.querySelectorAll(CONSTANS.FORM_INPUT_FIELD);
            let arr = Array.from(form);
            for (var i = 0; i < arr.length; i++) {
                let item = arr[i];
                valid.validate(item);
            }
            valid.confirmPwd();

            if (CONSTANS.NAME_STATUS && CONSTANS.PASSWORD_STATUS && CONSTANS.EMAIL_STATUS && CONSTANS.CONFIRM_PASSWORD_STATUS) {
                return true;
            } else {
                return false;
            }
        }
    };
})();