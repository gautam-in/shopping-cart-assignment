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
function request_server() {
    var url = window.location.origin + "/cart/allitem";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let data = myJson;
            let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
            document.getElementById("item_counter").innerHTML = data.item_counter;
            let totalCheckoutPrice = 0;
            data.cartItems.forEach(function(element) {
                totalCheckoutPrice = totalCheckoutPrice + element.total_price;
            });
            totalCheckoutSpan.innerHTML = "Rs. " + totalCheckoutPrice;
        });
}

function updateCart(item_counter, cartItems) {
    document.getElementsByClassName("cart-count")[0].innerHTML = item_counter;
    if (window.location.pathname == "/product") {
        window.location.href = "/cart";
    }
    updateCheckoutAmount();
}

function updateCheckoutAmount() {
    var checkoutAccumulation = document.getElementsByClassName("total");
    let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
    let totalCheckoutPrice = 0;
    for (let i = 0; i < checkoutAccumulation.length; i++) {
        totalCheckoutPrice = totalCheckoutPrice + parseInt(checkoutAccumulation[i].innerHTML);
    }
    totalCheckoutSpan.innerHTML = "Rs. " + totalCheckoutPrice;
}

if (window.location.pathname === "/cart") {
    request_server();
    updateCheckoutAmount();
}


function buy(id, operation) {
    var url = window.location.origin + "/cart/" + id + "/" + operation;
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function() {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            updateCart(data.item_counter, data.cartItems);
        } else {}
    };
    xmlHttpReq.onerror = function() {};
    xmlHttpReq.send();
}

function addRemoveItem(id, index, price, task) {
    var input = document.getElementById("prod" + index);
    var totalCost;
    if (task == 'minus') {
        if (input.value > 0) {
            input.value = input.value - 1;
            totalCost = input.value * price;
            document.getElementById("totalp" + index).innerHTML = "Rs." + totalCost;
            buy(id, 'remove');
            request_server();
        } else {}
    } else if (task == 'plus') {
        input.value++;
        totalCost = input.value * price;
        document.getElementById("totalp" + index).innerHTML = "Rs." + totalCost;
        buy(id, 'add');
        request_server();
    } else {}
}

function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("display-block") == -1) {
        x.className += "display-block";
    } else {
        x.className = x.className.replace("display-block", "");
    }
}

function navigateToHome() {
    window.location.href = "/";
}

function navigateToProducts() {
    window.location.href = "/products";
}

//===================================================================================================

//============================================================================================================

// JS for Mobile Category Dropdown
var ul = null;
var toggleBtn = '';
var targ = null;
window.onload = function() {
    toggleBtn = document.querySelector('.category-mobile');
    targ = document.querySelector('.category-block');
    ul = document.querySelector('.test');
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('category'));
    //toggleBtn.text = '';
    if (urlParams.get('category') == null) {
        toggleBtn.innerHTML = "Categories" + '<span class="caret"></span>';
    } else {
        toggleBtn.innerHTML = urlParams.get('category') + '<span class="caret"></span>';
    }

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