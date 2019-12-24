/*============================================================================================================= */

var slideIndex = 1;
if (window.location.pathname == "/") {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var carousal = document.getElementById("next");
setInterval(function() {
    if (carousal) {
        carousal.click();
    }
}, 5000);

/*================================================================================================ */

/*============================================================================================================== */

// JS for Mobile Category Dropdown
var ul = null;
var toggleBtn = '';
var targ = null;
var menu = null;
var list = null;
window.onload = function() {
    toggleBtn = document.querySelector('.category-mobile');
    targ = document.querySelector('.category-block');
    ul = document.querySelector('.test');
    menu = document.querySelector('.menu-hamburger');
    list = document.querySelector('.menu-list');
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('category'));
    //toggleBtn.text = '';
    if (urlParams.get('category') == null) {
        toggleBtn.innerHTML = "Categories" + '<span class="caret"></span>';
    } else {
        toggleBtn.innerHTML = urlParams.get('category') + '<span class="caret"></span>';
    }

}

function toggleMenu(e) {
    list.classList.toggle('disp');
    e.stopPropagation();
}

function toggleNav(e) {

    targ.classList.toggle('disp');
    e.stopPropagation();
}

function changeText(e, id, name) {
    console.log(name)
    toggleBtn.innerHTML = e.target.text;
    targ.classList.toggle('disp');
    location.href = "/product/" + id + "?category=" + name;
    console.log(id);
    e.stopPropagation();

}


//=================================================================================================================
//=================================================================================================================

//JS for Login Form Validation

function ValidateLogin() {
    var name = document.getElementById('email').value;
    var password = document.getElementById('psw').value;


    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,14}$/;
    var statusemail = false;
    var statuspassword = false;
    if (name == '') {
        document.getElementsByClassName("error-email")[0].innerHTML = "Please enter email Id";
        statusemail = false;
    } else if (name != '') {

        if (reg.test(name) == false) {

            document.getElementsByClassName("error-email")[0].innerHTML = "Invalid email-id";
            statusemail = false;
        } else {

            document.getElementsByClassName("error-email")[0].innerHTML = "";
            statusemail = true;
        }
    }

    if (password == '') {
        document.getElementsByClassName("error-psw")[0].innerHTML = "Please enter password";
        //console.log(document.getElementsByClassName("error-email").value);
        statuspassword = false;
    } else if (password != '') {

        if (passw.test(password) == false) {
            document.getElementsByClassName("error-psw")[0].innerHTML = "Invalid password (Password should contain 6 to 14 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character)";
            statuspassword = false;
        } else {
            document.getElementsByClassName("error-psw")[0].innerHTML = "";
            statuspassword = true;
        }
    }

    if (statusemail == true && statuspassword == true) {
        return true;
    } else {
        return false;
    }

}

//=============================================================================================================
//==============================================================================================================

//JS used for register validation

function ValidationRegister() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var cnfpassword = document.getElementById('psw-repeat').value;

    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,14}$/;
    var statusemail = false;
    var statuspassword = false;
    var statusfname = false;
    var statuslname = false;
    var cnfpsw = false;

    if (fname == '') {
        document.getElementsByClassName("error-fname")[0].innerHTML = "Please enter First Name";
        statusfname = false;
    } else {
        document.getElementsByClassName("error-fname")[0].innerHTML = "";
        statusfname = true;
    }
    if (lname == '') {
        document.getElementsByClassName("error-lname")[0].innerHTML = "Please enter Last Name";
        statuslname = false;
    } else {
        document.getElementsByClassName("error-lname")[0].innerHTML = "";
        statuslname = true;
    }

    if (email == '') {
        document.getElementsByClassName("error-email")[0].innerHTML = "Please enter email Id";
        statusemail = false;
    } else if (email != '') {

        if (reg.test(email) == false) {

            document.getElementsByClassName("error-email")[0].innerHTML = "Invalid email-id";
            statusemail = false;
        } else {

            document.getElementsByClassName("error-email")[0].innerHTML = "";
            statusemail = true;
        }
    }

    if (password == '') {
        document.getElementsByClassName("error-psw")[0].innerHTML = "Please enter password";
        //console.log(document.getElementsByClassName("error-email").value);
        statuspassword = false;
    } else if (password != '') {

        if (passw.test(password) == false) {
            document.getElementsByClassName("error-psw")[0].innerHTML = "Invalid password (Password should contain 6 to 14 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character)";
            statuspassword = false;
        } else {
            document.getElementsByClassName("error-psw")[0].innerHTML = "";
            statuspassword = true;
        }
    }

    if (cnfpassword != password) {
        document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "Passwords do not match";
        cnfpsw = false;
    } else {
        document.getElementsByClassName("error-psw-repeat")[0].innerHTML = "";
        cnfpsw = true;
    }

    if (statusfname == true && statuslname == true && statusemail == true && statuspassword == true && cnfpsw == true) {
        return true;
    } else {
        return false;
    }
}