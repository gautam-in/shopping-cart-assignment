/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/scripts/productsView.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/productsView.js":
/*!****************************************!*\
  !*** ./client/scripts/productsView.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./client/scripts/utils.js\");\n //IIFE to fetch categories and create navlist\n\n(async () => {\n  const categories = await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])('http://localhost:5000/categories');\n  let categoriesSorted = categories.sort((a, b) => {\n    if (a.order < b.order) return -1;else if (a.order > b.order) return 1;else return 0;\n  });\n  let navList = document.querySelector('.nav-list');\n  categoriesSorted.forEach(category => {\n    let listItem = document.createElement('li');\n    listItem.classList.add('nav-link-item');\n    listItem.setAttribute('role', 'button');\n    listItem.setAttribute('tabindex', '0');\n    listItem.setAttribute('id', category.id);\n    listItem.innerText = category.name;\n    navList.appendChild(listItem);\n  });\n  navList.addEventListener('click', event => filterProducts(event.target.id));\n\n  if (window.localStorage.getItem('categoryId')) {\n    filterProducts(window.localStorage.getItem('categoryId'));\n    document.getElementById(window.localStorage.getItem('categoryId')).focus();\n    window.localStorage.clear();\n  } else {\n    const products = await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])('http://localhost:5000/products');\n    products.forEach(product => {\n      displayProduct(product);\n    });\n  }\n})();\n\nlet productsContainer = document.querySelector('.products-container'); //function definitions\n\nasync function filterProducts(id) {\n  const products = await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])('http://localhost:5000/products');\n  productsContainer.innerHTML = '';\n  products.forEach(product => {\n    if (product.category === id) {\n      displayProduct(product);\n    }\n  });\n}\n\nfunction displayProduct(product) {\n  let productCard = document.createElement('section');\n  productCard.classList.add('product-card');\n  let productImg = document.createElement('img');\n  productImg.classList.add('product-img');\n  productImg.setAttribute('src', '../..' + product.imageURL);\n  productImg.setAttribute('alt', product.name);\n  productCard.appendChild(productImg);\n  let productDescription = document.createElement('section');\n  productDescription.classList.add('product-desc');\n  let productDescContent = document.createElement('p');\n  productDescContent.innerText = product.description;\n  productDescription.appendChild(productDescContent);\n  productCard.appendChild(productDescription);\n  let productFooter = document.createElement('section');\n  productFooter.classList.add('product-footer');\n  let productPrice = document.createElement('p');\n  productPrice.innerText = `MRP Rs.` + product.price;\n  productFooter.appendChild(productPrice);\n  let buyButton = document.createElement('button');\n  buyButton.setAttribute('id', product.id);\n  buyButton.classList.add('add-btn');\n  buyButton.innerText = `Add To Cart`;\n  buyButton.onclick = addProductToCart;\n\n  if (window.localStorage.getItem('cart')) {\n    JSON.parse(window.localStorage.getItem('cart')).forEach(cartItem => {\n      if (product.id === cartItem.id) {\n        buyButton.setAttribute('disabled', true);\n        buyButton.innerText = `Added To Cart`;\n      }\n    });\n  }\n\n  productFooter.appendChild(buyButton);\n  productCard.appendChild(productFooter);\n  productsContainer.appendChild(productCard);\n}\n\nasync function addProductToCart(event) {\n  const products = await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])('http://localhost:5000/products');\n  document.getElementById(event.target.id).setAttribute('disabled', true);\n  document.getElementById(event.target.id).innerText = 'Added To Cart';\n  let cartProduct = products.find(product => product.id === event.target.id);\n  cartProduct.imageURL = '../../' + cartProduct.imageURL;\n  let cart;\n\n  if (window.localStorage.getItem('cart')) {\n    cart = JSON.parse(localStorage.getItem('cart'));\n  } else cart = [];\n\n  cart.push(cartProduct);\n  window.localStorage.setItem('cart', JSON.stringify(cart));\n  document.querySelector('#items-cart p').innerHTML = `${cart.length} Items`;\n}\n\n//# sourceURL=webpack:///./client/scripts/productsView.js?");

/***/ }),

/***/ "./client/scripts/utils.js":
/*!*********************************!*\
  !*** ./client/scripts/utils.js ***!
  \*********************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\nconst fetchData = async (url, method = 'GET') => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (err) {\n    return err;\n  }\n};\n\n//# sourceURL=webpack:///./client/scripts/utils.js?");

/***/ })

/******/ });