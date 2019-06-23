"use strict";

var validation = false;

callback = function callback(flag, id, value) {
    validation = flag;
    document.getElementById(id).innerHTML = value;
};

document.getElementById("submit-register").addEventListener("click", function () {
    var ele = document.getElementById('register-form');
    ele.childNodes.forEach(function (element) {
        if (element.nodeName == "INPUT") {
            if (document.getElementById(element.id).value == "") {
                callback(false, 'error', "Fields can not be blank.");
            }
        }
    });
});

function validate(e) {
    switch (e.id) {
        case 'fname':
            if (e.value) {
                callback(true, 'error', "");
            }
            break;
        case 'lname':
            if (e.value) {
                callback(true, 'error', "");
            }
            break;
        case 'email':
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (e.value) {
                if (reg.test(e.value)) {
                    callback(true, 'email-error', "");
                } else {
                    callback(false, 'email-error', "Please enter valid email address.");
                }
            } else {
                callback(false, 'email-error', "");
            }
            break;
        case 'password':
            var decimal = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
            if (e.value) {
                if (e.value.match(decimal)) {
                    callback(true, 'password-error', "");
                } else {
                    callback(false, 'password-error', "Please enter valid password.");
                }
            } else {
                callback(false, 'password-error', "");
            }
            break;
        case 'cpassword':
            if (e.value) {
                if (e.value === document.getElementById("password").value) {
                    callback(true, 'cpassword-error', "");
                } else {
                    callback(false, 'cpassword-error', "Password does not match.");
                }
            } else {
                callback(false, 'cpassword-error', "");
            }
            break;
    }
}