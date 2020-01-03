function validateRegister() {
    var form = document.querySelectorAll(getConstants().FORM_INPUT_FIELD);
    let arr = Array.from(form);
    for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        validate(item);
    }
    confirmPwd();

    if (getConstants().NAME_STATUS && getConstants().PASSWORD_STATUS && getConstants().EMAIL_STATUS && getConstants().CONFIRM_PASSWORD_STATUS) {
        return true;
    } else {
        return false;
    }
}

function confirmPwd() {
    var password = document.getElementById('psw').value;
    var cnfpassword = document.getElementById('psw-repeat').value;
    if (cnfpassword != password) {
        document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "Passwords do not match";
        getConstants().CONFIRM_PASSWORD_STATUS = false;
    } else {
        document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "";
        getConstants().CONFIRM_PASSWORD_STATUS = true;
    }
}