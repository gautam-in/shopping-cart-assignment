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
                        //output1 += '<span class="dot" onclick="' + currentSlide(i) + '">'
                        //output1 += '</span>'
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

window.onload = ajax_get('/dist/server/banners/index.get.json', function(obj) {});

var slideIndex = 1;
// window.onreadystatechange =
//     showSlides(slideIndex);

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

/* ================================================================================================= */
function ajax_get_category(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
                var output = ''
                var output1 = ''
                var output2 = ''
                for (var i = 0; i < data.length; i++) {
                    //output += '<div class="category">'
                    output2 += '<div class="category-image">'
                    output2 += '<img src="' + data[i].imageUrl + '">'
                    output2 += '</div>'

                    output1 += '<div class="category-details">'
                    output1 += '<h3 class="category-title">' + data[i].name
                    output1 += '</h3>'
                    output1 += '<p class="category-title-details">' + data[i].description
                    output1 += '</p>'
                    output1 += '<button class="category-button">' + 'Explore' + data[i].key
                    output1 += '</button>'
                    output1 += '</div>'

                    if (data[i].order % 2 != 0) {
                        output += output2 + output1
                    } else {
                        output += output1 + output2
                    }
                }

                document.getElementById("main-category-list").innerHTML = output

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
window.onload = ajax_get_category('/dist/server/categories/index.get.json', function(obj) {});