
Handlebars.registerHelper('inc', function (index, options) {
    return parseInt(index) + 1;
});

let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
}


let categoriesXHttp = new XMLHttpRequest();
categoriesXHttp.open("GET", "categories", true);
categoriesXHttp.onload = function () {
    if (categoriesXHttp.status >= 200 && categoriesXHttp.status < 400) {
        let data = JSON.parse(categoriesXHttp.responseText);
        createCategoryContainer(data);
    } else {
        console.log("We conected to the server, but it returned an error.");
    }
}
categoriesXHttp.onerror = function () {
    console.log("Connection Error");
}
categoriesXHttp.send();

let bannerXHttp = new XMLHttpRequest();
bannerXHttp.open("GET", "banners", true);
bannerXHttp.onload = function () {
    if (bannerXHttp.status >= 200 && bannerXHttp.status < 400) {
        let data = JSON.parse(bannerXHttp.responseText);
        createSlideshowDots(data);
        createSlideshow(data);
    } else {
        console.log("We conected to the server, but it returned an error.");
    }
}
bannerXHttp.onerror = function () {
    console.log("Connection Error");
}
bannerXHttp.send();


function createCategoryContainer(data) {
    let categoryTemplate = document.getElementById("categoryTemplates").innerHTML;
    let compiledTemplate = Handlebars.compile(categoryTemplate);
    let generatedHtml = compiledTemplate(data);

    let categoryContainer = document.getElementById("category_container");
    categoryContainer.innerHTML = generatedHtml;
}

function createSlideshowDots(data) {
    let categoryTemplate = document.getElementById("slideshow-row__dotTemplates").innerHTML;
    let compiledTemplate = Handlebars.compile(categoryTemplate);
    let generatedHtml = compiledTemplate(data);

    let categoryContainer = document.getElementById("slideshow-row__dot");
    categoryContainer.innerHTML += generatedHtml;
}

function createSlideshow(data) {
    let slideshowTemplates = document.getElementById("slideshowTemplates").innerHTML;
    let slideshowCompiledTemplate = Handlebars.compile(slideshowTemplates);
    let generatedHtml = slideshowCompiledTemplate(data);

    let categoryContainer = document.getElementById("slideshow");
    categoryContainer.innerHTML += generatedHtml;


    showSlides(slideIndex);

    let elem = document.getElementById("next");
    setInterval(function () {
        elem.click();
    }, 10000);
}
