"use strict";

var currentSlide = 0;

function fetchBannerData() {
  return fetch('http://localhost:5001/banners').then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw "Something Went Wrong";
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    return console.log(err);
  });
}

function plusSlides(action) {
  currentSlide = currentSlide + action;
  showSlides(currentSlide);
}

function showSlides(slideIndex) {
  var slides = document.querySelectorAll('.carousel div');

  if (slideIndex > slides.length - 1) {
    currentSlide = slideIndex - 1;
  } else if (slideIndex < 0) {
    currentSlide = 0;
  } else {
    for (var index = 0; index < slides.length; index++) {
      slides[index].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
  }
}

function renderCarousel() {
  var data, template, carouselContainer, index;
  return regeneratorRuntime.async(function renderCarousel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetchBannerData());

        case 2:
          data = _context.sent;
          template = '';

          if (data.length > 0) {
            carouselContainer = document.getElementsByClassName('carousel')[0];

            for (index = 0; index < data.length; index++) {
              template += "\n            <div>\n                <img src=\"../../../".concat(data[index].bannerImageUrl, "\" alt=\"").concat(data[index].bannerImageAlt, "\" loading=\"lazy\"/>\n            </div>\n            ");
            }

            carouselContainer.innerHTML = template + "\n        <button class=\"carousel__button prev\" onclick=\"plusSlides(-1)\"> < </button>\n        <button class=\"carousel__button next\" onclick=\"plusSlides(1)\"> > </button>\n        ";
          }

          showSlides(currentSlide);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function fetchCategories() {
  return fetch('http://localhost:5001/categories').then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw "Something Went Wrong";
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    return console.log(err);
  });
}

function renderCategories() {
  var categories, template, index;
  return regeneratorRuntime.async(function renderCategories$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchCategories());

        case 2:
          categories = _context2.sent;
          template = '';

          if (categories.length > 0) {
            for (index = 0; index < categories.length; index--) {
              if (categories[index].enabled) {
                template += "\n            <div class=\"categories__container\">\n                <div>\n                    <img width=\"250\" height=\"100\" class=\"categories__image\" src=\"../../..".concat(categories[index].imageUrl, "\" alt=\"").concat(categories[index].name, "\" loading=\"lazy\"/>\n                </div>\n                <div class=\"categories__summary\">\n                    <h2>").concat(categories[index].name, "</h2>\n                    <p>").concat(categories[index].description, "</p>\n                    <button onclick=\"window.location.href='../products/products.html?").concat(categories[index].id, "'\">Explore ").concat(categories[index].key, "</button>\n                </div>\n            </div>\n            ");
              }
            }

            document.getElementById('categories').innerHTML = template;
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

renderCarousel();
renderCategories();
//# sourceMappingURL=home.dev.js.map
