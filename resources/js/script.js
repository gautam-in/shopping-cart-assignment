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


/*-------------------------- Cart functonality --------------------------*/
openCart = () => {
    document.getElementById('cart').style.display = 'block';
};

closeCart = () => {
    document.getElementById('cart').style.display = 'none';
};

var item_counter=0;
addItemToCart = (id) => {
    updateCart(item_counter++);
};


updateCart = (item_counter) => {
    document.getElementById('item_count').innerHTML = item_counter;
}
