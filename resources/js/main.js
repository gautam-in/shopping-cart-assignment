var slideIndex = 1;

showSlides(slideIndex);

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
setInterval(() => {
    carousal.click();
}, 5000);

// Cart functonality

function request_server() {
    var url = window.location.origin + "/cart/allitem";

    console.log(url);
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
            console.log(" >>>>>>>>>>>>>>> ", totalCheckoutSpan);
            let totalCheckoutPrice = 0;
            data.cartItems.forEach(element => {
                totalCheckoutPrice = totalCheckoutPrice + element.total_price;
            });
            console.log(" >>>>>>>>>>>>>>> ", totalCheckoutPrice);

            totalCheckoutSpan.innerHTML = totalCheckoutPrice;
        } else {
            console.log("We conected to the server, but it returned an error.");
        }
    };

    xmlHttpReq.onerror = function () {
        console.log("Connection Error");
    };
    xmlHttpReq.send();
}

request_server();

function buy(id, operation) {
    var url = window.location.origin + `/cart/${id}/${operation}`;
    console.log(url);
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function () {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            updateCart(data.item_counter);
        } else {}
    };
    xmlHttpReq.onerror = function () {};
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
        } else {}
    } else if (task == 'plus') {
        input.value++;
        totalCost = input.value * price;
        document.getElementById("totalp" + index).innerHTML = totalCost;
        buy(id, 'add');
        request_server();
    } else {}
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
updateCheckoutAmount();

// function buy(id, operation, endpoint) {
//     var url = window.location.origin+`/cart/${endpoint}/${id}/${operation}`;
//     let xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open("GET", url, true);
//     xmlHttpReq.onload = function () {
//         if (xmlHttpReq.status >= 200 && xmlHttpReq.status < 400) {
//             let data = JSON.parse(xmlHttpReq.responseText);
//            // console.log(data);
//             updateCart(data.item_counter);
//         } else {
//            // console.log("We conected to the server, but it returned an error.");
//         }
//     }
//     xmlHttpReq.onerror = function () {
//        // console.log("Connection Error");
//     }
//     xmlHttpReq.send();
// }

// function addCount(id, prodid, price) {
//     var input = document.getElementById("prod" + prodid);
//     input.value = parseInt(input.value) + 1;
//     item_counter = input.value;
//     buy(id, 'add', 'addtocart');
//     updateTotalCart(prodid, price);
// }

// function minusCount(id, prodid, price) {
//     var input = document.getElementById("prod" + prodid);
//     input.value = parseInt(input.value) - 1;
//    // console.log(input.value);
//     if (input.value >= 0) {
//         item_counter = input.value;
//         buy(id, 'remove', 'addtocart');
//     } else if (input.value == 0) {
//         input.value = 0;
//         buy(id, 'remove', 'remove-item');
//     }
//     updateTotalCart(prodid, price);
//     //updateCheckoutAmount();
// }

// function updateCart(item_counter) {
//     document.getElementsByClassName("cart-count")[0].innerHTML = item_counter;
//     if (window.location.pathname == "/product") {
//         window.location.href = "/cart";
//     }
//     updateCheckoutAmount();
// }

// function updateTotalCart(prodid, price) {
//     var input = document.getElementById("prod" + prodid);
//     var totalPrice = parseInt(price) * parseInt(input.value);
//     document.getElementsByClassName("totalp" + prodid)[0].innerHTML = totalPrice;
// }

// function updateCheckoutAmount() {
//     var checkoutAccumulation = document.getElementsByClassName("total");
//     let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
//     let totalCheckoutPrice = 0;
//     for (let i = 0; i < checkoutAccumulation.length; i++) {        
//         totalCheckoutPrice = totalCheckoutPrice + parseInt(checkoutAccumulation[i].innerHTML );
//     }
//     totalCheckoutSpan.innerHTML = "Rs. " + totalCheckoutPrice;
// }