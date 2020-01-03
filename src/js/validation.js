var CONSTANS = getConstants();

function validate(item) {

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
}