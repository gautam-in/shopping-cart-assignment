"use strict";

/*-------------------------- slider functonality --------------------------*/
var slideIndex = 1;
var showSlides = function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot"),
        slideslen = slides.length,
        dotslen = dots.length;
    if (n > slideslen) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideslen;
    }
    for (var i = 0; i < slideslen; i++) {
        slides[i].classList.add("hide");
        slides[i].classList.remove("show");
    }
    for (var i = 0; i < dotslen; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].classList.add("show");
    slides[slideIndex - 1].classList.remove("hide");
    dots[slideIndex - 1].className += " active";
};

var plusSlides = function plusSlides(n) {
    showSlides(slideIndex += n);
};

var currentSlide = function currentSlide(n) {
    showSlides(slideIndex = n);
};

if (document.location.pathname == "/") {
    showSlides(slideIndex);
    document.getElementById("prev").addEventListener("click", function () {
        plusSlides(-1);
    });

    document.getElementById("next").addEventListener("click", function () {
        plusSlides(1);
    });

    $('.dot').click(function () {
        currentSlide(this.dataset.attr);
    });
    setInterval(function () {
        plusSlides(1);
    }, 1000);
};

/*-------------------------- Cart functonality --------------------------*/
var allitemInCart = function allitemInCart() {
    var url = window.location.origin + "/cart/allitem";
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
            var _data = JSON.parse(xmlHttpReq.responseText);
            var totalCheckoutAmt = document.getElementById("total-checkout-amt");
            document.getElementById("item-count").innerHTML = _data.itemCounter;
            var totalCheckoutPrice = 0;
            _data.productInCart.forEach(function (element) {
                totalCheckoutPrice = totalCheckoutPrice + element.totalPrice;
            });
            if (totalCheckoutAmt) {
                totalCheckoutAmt.innerHTML = totalCheckoutPrice;
            }
            if (_data.productInCart.length > 0) {
                $('.item-in-cart').addClass('show');
                $('.item-in-cart').removeClass('hide');
                $('.no-item').addClass('hide');
                $('.no-item').removeClass('show');
            } else {
                $('.item-in-cart').addClass('hide');
                $('.item-in-cart').removeClass('show');
                $('.no-item').addClass('show');
                $('.no-item').removeClass('hide');
            }
        }
    };
    xmlHttpReq.send();
};

var buyItem = function buyItem(id, operation) {
    var url = window.location.origin + ("/cart/" + id + "/" + operation);
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
            var _data2 = JSON.parse(xmlHttpReq.responseText);
            updateCart(_data2);
        }
    };
    xmlHttpReq.send();
};

var updateCart = function updateCart(data) {
    document.getElementById('item-count').innerHTML = data.itemCounter;
    if (window.location.pathname == "/cart") {
        document.getElementById('total-item').innerHTML = 'My Cart' + '(' + data.itemCounter + 'item)';
        data.productList.forEach(function (element) {
            if (element.count == 0) {
                $('#item-' + element.id).remove();
            }
        });
        if (data.itemCounter == 0) {
            $('.item-in-cart').addClass('hide');
            $('.item-in-cart').removeClass('show');
            $('.no-item').addClass('show');
            $('.no-item').removeClass('hide');
        }
    }
};

var updateCheckoutAmount = function updateCheckoutAmount() {
    var totalAmt = document.getElementsByClassName("total-amt");
    var totalCheckoutAmt = document.getElementById("total-checkout-amt");
    var totalCheckoutPrice = 0;
    for (var i = 0; i < totalAmt.length; i++) {
        totalCheckoutPrice = totalCheckoutPrice + parseInt(totalAmt[i].innerHTML);
    }
    if (totalCheckoutAmt) {
        totalCheckoutAmt.innerHTML = totalCheckoutPrice;
    }
};

if ($('.buy-item')) {
    $('.buy-item').click(function () {
        var id = this.dataset.id,
            operation = this.dataset.operation;
        buyItem(id, operation);
    });
}

var addRemoveItem = function addRemoveItem(id, index, price, task) {
    var count = parseInt(document.getElementById("prod" + index).innerHTML);
    var totalCost;
    if (task == 'minus') {
        if (count > 0) {
            count = count - 1;
            totalCost = count * price;
            document.getElementById("totalp" + index).innerHTML = totalCost;
            document.getElementById("prod" + index).innerHTML = count;
            buyItem(id, 'remove');
            allitemInCart();
        }
    } else if (task == 'plus') {
        count++;
        totalCost = count * price;
        document.getElementById("totalp" + index).innerHTML = totalCost;
        document.getElementById("prod" + index).innerHTML = count;
        buyItem(id, 'add');
        allitemInCart();
    }
};

if (window.location.pathname === "/cart") {
    $('.add-remove-items').click(function () {
        var id = this.dataset.id,
            operation = this.dataset.operation,
            index = this.dataset.index,
            price = this.dataset.price;
        addRemoveItem(id, index, price, operation);
    });

    allitemInCart();
    updateCheckoutAmount();
}

/*-------------------------- Validation --------------------------*/

var validation = false,
    data = void 0;

(function () {
    var url = "http://localhost:5000/content";
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
            data = JSON.parse(xmlHttpReq.responseText);
        }
    };
    xmlHttpReq.send();
})();

var callback = function callback(flag, classname, value) {
    validation = flag;
    $('.' + classname).html(value);
};

var submitForm = function submitForm() {
    var input = document.getElementsByTagName('input'),
        len = input.length;
    for (var i = 0; i < len; i++) {
        if (input[i].value == "") {
            callback(false, "emptyerror", data.error);
        }
    }
    if (validation) {
        window.location.href = window.location.origin + "/";
    }
};

if (document.location.pathname == "/login") {
    document.getElementById("submit-login").addEventListener("click", function () {
        submitForm();
    });
}

if (document.location.pathname == "/register") {
    document.getElementById("submit-register").addEventListener("click", function () {
        submitForm();
    });
}

function validate(event) {
    callback(true, "emptyerror", "");
    switch (event.name) {
        case 'email':
            var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (event.value) {
                if (emailreg.test(event.value)) {
                    callback(true, "email-error", "");
                } else {
                    callback(false, "email-error", data.emailerror);
                }
            } else {
                callback(false, "email-error", "");
            }
            break;
        case 'password':
            var pwdreg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
            if (event.value) {
                if (pwdreg.test(event.value)) {
                    callback(true, "password-error", "");
                } else {
                    callback(false, "password-error", data.pwderror);
                }
            } else {
                callback(false, "password-error", "");
            }
            break;
        case 'cpassword':
            if (event.value) {
                if (event.value === document.getElementById("password").value) {
                    callback(true, 'cpassword-error', "");
                } else {
                    callback(false, 'cpassword-error', data.cpwderror);
                }
            } else {
                callback(false, 'cpassword-error', "");
            }
            break;
    }
}