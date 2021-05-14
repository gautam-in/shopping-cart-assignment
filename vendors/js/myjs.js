document.addEventListener("DOMContentLoaded", function () {
    loadXMLDoc();
});

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                loadImages(JSON.parse(xmlhttp.responseText));
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}

function loadImages(imageData) {
    for (let i = 0; i < imageData.length; i++) {
        //Slide Div
        var mySlideDiv = document.createElement("div");
        mySlideDiv.setAttribute('class', 'mySlide');
        //Slide number
        var numb = document.createElement("div");
        numb.setAttribute('class', 'numbertext');
        numb.innerHTML = i + 1 + " / " + imageData.length;
        //Image
        var img = document.createElement("img");
        img.setAttribute('class', 'imgClass');
        img.src = "images/" + imageData[i].image_name;
        //Caption
        var cap = document.createElement("div");
        cap.setAttribute('class', 'captiontext');
        cap.innerHTML = toTitleCase(imageData[i].title);
        //Append to mySlide div
        document.getElementById("container").appendChild(mySlideDiv);
        mySlideDiv.appendChild(numb);
        mySlideDiv.appendChild(img);
        mySlideDiv.appendChild(cap);
        //Add dots
        var dots = document.createElement('span');
        dots.setAttribute('class', 'dot');
        dots.setAttribute('onclick', 'currentSlide(' + (i + 1) + ')');;
        document.getElementById('dots').appendChild(dots);
    }
    showSlides(slideIndex);
    //console.log(imageData);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlide');
    console.log(slides.length);
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
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