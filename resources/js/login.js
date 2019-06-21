var validation = false;

callback = function (flag, id, value) {
    validation = flag;
    document.getElementById(id).innerHTML = value;
}


document.getElementById("submit-login").addEventListener("click", function () {
    let ele = document.getElementById('login-form');
    ele.childNodes.forEach(function (element) {
        if (element.nodeName == "INPUT") {
            if (document.getElementById(element.id).value == "") {
                callback(false, 'error', "Fields can not be blank.");
            }
        }
    });
    if (validation) {
        window.location.href = window.location.origin + "/";
    }
});


function validate(e) {
    switch (e.id) {
        case 'email':
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (e.value) {
                callback(true, 'error', "");
                if (reg.test(e.value)) {
                    callback(true, 'email-error', "");
                } else {
                    callback(false, 'email-error', "Please enter valid email.");
                }
            } else {
                callback(false, 'email-error', "");
            }
            break;
        case 'password':
            var decimal = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
            if (e.value) {
                callback(true, 'error', "");
                if (e.value.match(decimal)) {
                    callback(true, 'pwd-error', "");
                }
                else {
                    callback(false, 'pwd-error', "Please enter valid password.");
                }
            } else {
                callback(false, 'pwd-error', "");
            }
            break;
        default:
    }

}