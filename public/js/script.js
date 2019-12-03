function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
                var output = ''
                    //var output1 = ''
                for (var i = 0; i < data.length; i++) {
                    output += '<div class="mySlides fade">'
                    output += '<img src="' + data[i].bannerImageUrl + '">'
                    output += '</div>'
                }
                output += '<a class="prev" onclick="plusSlides(-1)">' + "&#10094;" + '</a>' +
                    '<a class="next" onclick="plusSlides(1)">' + "&#10095;" + '</a>'
                document.getElementById("img-container").innerHTML = output

                setTimeout(() => {
                    showSlides(1);
                }, 2000);

            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

window.onload = ajax_get('http://localhost:3000/banners', function(obj) {});

var slideIndex = 1;

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

/*============================================================================================================= */

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/categoryval');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);

        createHTML(data)
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
};

ourRequest.send();

// Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
//     return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
// });
var myTemplate = require("./home.hbs");

function createHTML(categoryData) {
    // var rawTemplate = document.getElementById("listTemplate").innerHTML;
    // var compiledTemplate = Handlebars.compile(rawTemplate);
    // var ourGeneratedHTML = compiledTemplate(categoryData);

    var categoryContainer = document.getElementById("category-list");
    categoryContainer.innerHTML = home(categoryData);
}