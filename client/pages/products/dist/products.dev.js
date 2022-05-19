"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var products;
var cart;
var SERVER = 'http://localhost';
var PORT = '5001';

function fetchData(type) {
  return fetch("".concat(SERVER, ":").concat(PORT, "/").concat(type)).then(function (response) {
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

function renderCategoryList() {
  var categoryList, template, index, categoryContainer;
  return regeneratorRuntime.async(function renderCategoryList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetchData('categories'));

        case 2:
          categoryList = _context.sent;
          template = '';

          for (index = 0; index < categoryList.length; index++) {
            if (categoryList[index].enabled) {
              template += "\n            <div class=\"category\" key=\"".concat(categoryList[index].id, "\">\n                <span key=\"").concat(categoryList[index].id, "\">").concat(categoryList[index].name, "</span>\n            </div>\n            ");
            }
          }

          categoryContainer = document.getElementById('category__list');
          categoryContainer.innerHTML += template;
          categoryContainer.addEventListener('click', function (e) {
            var element = e.target;

            if (element.hasAttribute('key')) {
              renderProductsList(element.getAttribute('key'));
            }
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderProductsList(categoryId) {
  var currentProducts, template, index;
  return regeneratorRuntime.async(function renderProductsList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchData('products'));

        case 2:
          products = _context2.sent;
          template = '';

          if (categoryId) {
            categoryId = categoryId.charAt(0) == '?' ? categoryId.substring(1) : categoryId;
            currentProducts = products.filter(function (d) {
              if (d.category === categoryId) return d;
            });
          } else {
            currentProducts = _toConsumableArray(products);
          }

          for (index = 0; index < currentProducts.length; index++) {
            template += "\n        <div class=\"product__card\">\n            <div class=\"product__heading\">\n                <h3>".concat(currentProducts[index].name, "</h3>\n            </div>\n            <div class=\"product__subcard\">\n                <img width=\"250\" height=\"250\" src=\"../../../").concat(currentProducts[index].imageURL, "\" alt=\"").concat(currentProducts[index].name, "\"/>\n                <div class=\"product__desc\">\n                    <div class=\"product__detail\">\n                        <p>").concat(currentProducts[index].description, "</p>\n                    </div>\n                    <div class=\"product__price\">\n                        <span id=\"price\">Rs. ").concat(currentProducts[index].price, "</span>\n                        <button onclick=\"buyProduct('").concat(currentProducts[index].id, "')\">Buy Now <span id=\"atsymbol\">@</span></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
            document.getElementById('products__container').innerHTML = template;
          }

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function buyProduct(productId) {
  var product = products.filter(function (d) {
    if (productId === d.id) return d;
  });

  if (!cart) {
    cart = new Cart([], 1);
    cart.render();
    cart.showCart();
    cart.addCartItem(product);
  } else {
    cart.addCartItem(product);
  }
}

function openCart() {
  if (cart) cart.showCart();else {
    cart = new Cart([], 0);
    cart.render();
    cart.showCart();
  }
}

function dropdownOnChange(e) {
  var id = '?' + e;
  renderProductsList(id);
}

renderCategoryList();
renderProductsList(window.location.search);
//# sourceMappingURL=products.dev.js.map
