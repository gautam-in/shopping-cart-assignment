function validateLogin() {
    var form = document.querySelectorAll(CONSTANS.FORM_INPUT_FIELD);

    let arr = Array.from(form);

    for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        validate(item);
    }

    if (CONSTANS.PASSWORD_STATUS && CONSTANS.EMAIL_STATUS) {
        return true;
    } else {
        return false;
    }

}