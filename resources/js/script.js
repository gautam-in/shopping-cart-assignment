/*-------------------------- slider functonality --------------------------*/
var slideIndex = 1;
const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

if (document.location.pathname == "/") {
    showSlides(slideIndex);
};

plusSlides = (n) => {
    showSlides(slideIndex += n);
};

currentSlide = (n) => {
    showSlides(slideIndex = n);
};

openCart = () => {
    document.getElementById('cart').style.display = 'block';
};

closeCart = () => {
    document.getElementById('cart').style.display = 'none';
};

var item_counter = 0;

function addItemToCart(id, operation) {
    var url = window.location.href + '/' + id + '/' + operation;
    console.log(url);
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, true);
    xmlHttpReq.onload = function() {
        if (xmlHttpReq.status == 200) {
            let data = JSON.parse(xmlHttpReq.responseText);
            updateCart(data.item_counter);
        } else {}
    };
    xmlHttpReq.onerror = function() {};
    xmlHttpReq.send();
}

updateCart = (item_counter) => {
    document.getElementById('item_count').innerHTML = item_counter;
    updateCheckoutAmount();
}

updateCheckoutAmount = () => {

}