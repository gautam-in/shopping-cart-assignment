/*-------------------------- slider functonality --------------------------*/
var slideIndex = 1;
var showSlides = function (n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("mySlidesHide");
        slides[i].classList.remove("mySlidesShow");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].classList.add("mySlidesShow");
    slides[slideIndex - 1].classList.remove("mySlidesHide");
    dots[slideIndex - 1].className += " active";
};

if (document.location.pathname == "/") {
    showSlides(slideIndex);
    document.getElementById("prev").addEventListener("click", function () {
        plusSlides(-1);
    });

    document.getElementById("next").addEventListener("click", function () {
        plusSlides(1);
    });

    setInterval(function () { plusSlides(1); }, 1000);
};

plusSlides = function (n) {
    showSlides(slideIndex += n);
};

currentSlide = function (n) {
    showSlides(slideIndex = n);
};

/*-------------------------- Cart functonality --------------------------*/
closeCart = function () {
    document.getElementById('cart').style.display = 'none';
};

allitemInCart = function () {
    var url = window.location.origin + "/cart/allitem";
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            let totalCheckoutAmt = document.getElementById("total-checkout-amt");
            document.getElementById("item-count").innerHTML = data.itemCounter;
            let totalCheckoutPrice = 0;
            data.productInCart.forEach(element, function () {
                totalCheckoutPrice = totalCheckoutPrice + element.totalPrice;
            });
            totalCheckoutAmt.innerHTML = totalCheckoutPrice;
        }
    };
    xmlHttpReq.onerror = function () { };
    xmlHttpReq.send();
}

buyItem = function (id, operation) {
    var url = window.location.origin + '/cart/' + id + '/' + operation;
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            updateCart(data.itemCounter);
        }
    };
    xmlHttpReq.onerror = function () { };
    xmlHttpReq.send();
}

updateCart = function (itemCounter) {
    document.getElementById('item-count').innerHTML = itemCounter;
}

updateCheckoutAmount = function () {
    var totalAmt = document.getElementsByClassName("total-amt");
    let totalCheckoutAmt = document.getElementById("total-checkout-amt");
    let totalCheckoutPrice = 0;
    for (let i = 0; i < totalAmt.length; i++) {
        totalCheckoutPrice = totalCheckoutPrice + parseInt(totalAmt[i].innerHTML);
    }
    totalCheckoutAmt.innerHTML = totalCheckoutPrice;
}

addRemoveItem = function (id, index, price, task) {
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
}

if (window.location.pathname === "/cart") {
    allitemInCart();
    updateCheckoutAmount();
}

