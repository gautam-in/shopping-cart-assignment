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
if (window.location.pathname == "/") {
    var carousal = document.getElementById("next");
    setInterval(() => {
        carousal.click();
    }, 5000);
}


// Cart functonality

function request_server() {
    var url = window.location.origin + "/cart/allitem";
    // console.log("request: ", url);


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let data = myJson;
            let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
            document.getElementById("item_counter").innerHTML = data.item_counter;
            let totalCheckoutPrice = 0;
            data.cartItems.forEach(element => {
                totalCheckoutPrice = totalCheckoutPrice + element.total_price;
            });
            totalCheckoutSpan.innerHTML = totalCheckoutPrice;
            // console.log(JSON.stringify(myJson));
        });
}

function updateCart(item_counter) {
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
    totalCheckoutSpan.innerHTML = totalCheckoutPrice;
}

if (window.location.pathname === "/cart") {
    request_server();
    updateCheckoutAmount();
}


function buy(id, operation) {
    var url = window.location.origin + `/cart/${id}/${operation}`;
    console.log(url);
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            updateCart(data.item_counter);
        } else { }
    };
    xmlHttpReq.onerror = function () { };
    xmlHttpReq.send();
}

function addRemoveItem(id, index, price, task) {
    var input = document.getElementById("prod" + index);
    var totalCost;
    if (task == 'minus') {
        if (input.value > 0) {
            input.value = input.value - 1;
            totalCost = input.value * price;
            document.getElementById("totalp" + index).innerHTML = totalCost;
            buy(id, 'remove');
            request_server();
            //updateCart(d.item_counter);
        } else { }
    } else if (task == 'plus') {
        input.value++;
        totalCost = input.value * price;
        document.getElementById("totalp" + index).innerHTML = totalCost;
        buy(id, 'add');
        request_server();
    } else { }
}





