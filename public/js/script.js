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

function display(elem) {
    var x = elem.getAttribute("id");
    if (x != null) {
        listFilter(x);
    } else {
        createHTML(productListData);
    }


}

function listFilter(value) {
    var finalistData = [{}];
    finalistData = Object.assign({}, productListData);
    finalistData.products = productListData.products.filter(function(val) {
        if (val.category === value) {

            return val;
        }
    });

    console.log(finalistData);
    createHTML(finalistData);
}

/*============================================================================================================== */