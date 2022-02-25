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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/footer.js":
/*!**********************************!*\
  !*** ./client/scripts/footer.js ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\nclass Footer extends HTMLElement {\n  constructor() {\n    super();\n  }\n\n  connectedCallback() {\n    this.innerHTML = `\n        <footer class=\"footer-container\">\n            <div class=\"container\">\n                Copyright &copy; 2011 - 2018 Sabka Bazaar Grocery Supplies Pvt Ltd\n            </div>\n        </footer>\n        `;\n  }\n\n}\n\n//# sourceURL=webpack:///./client/scripts/footer.js?");

/***/ }),

/***/ "./client/scripts/header.js":
/*!**********************************!*\
  !*** ./client/scripts/header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\nclass Header extends HTMLElement {\n  constructor() {\n    super();\n  }\n\n  connectedCallback() {\n    this.innerHTML = `\n        <header class='header'>\n        <section>\n        <img class='header-logo' src='../../static/images/logo.png' alt='sabka bazar logo'/>\n        </section>\n        <nav class=\"center-nav\">\n        <a href='./index.html' style='padding : 10px;'>Home</a>\n        <a style='padding : 10px;' href='./products.html'>Products</a>\n        </nav>\n        <section>\n        <div style='display : flex; justify-content : space-between; padding : 6px 5px'>\n        <a href='./login.html'>Login</a>\n        <a href='./register.html'>Register</a>\n        </div>\n        <section id='items-cart'>\n        <img \n        id=\"cart-btn\"\n        role=\"button\"\n        aria-label=\"View Cart\"\n        tabindex=\"0\"\n        src=\"../../static/images/cart.svg\"\n        alt=\"cart icon\"/>\n        <p style='font-size : 1rem; padding-right : 10px'>\n        ${window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')).length : 0} \n        Items\n        </p>\n        </section>\n        </section>\n        </header>\n        `;\n    document.getElementById('cart-btn').addEventListener('click', showCart); //function definitions\n\n    function showCart() {\n      let modal = document.createElement('custom-modal');\n      document.body.appendChild(modal);\n      modal.setAttribute('cartitems', window.localStorage.getItem('cart'));\n      let customModal = document.querySelector('custom-modal');\n      customModal.setAttribute('cartitems', window.localStorage.getItem('cart'));\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./client/scripts/header.js?");

/***/ }),

/***/ "./client/scripts/index.js":
/*!*********************************!*\
  !*** ./client/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./client/scripts/modal.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./client/scripts/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./client/scripts/footer.js\");\n\n\n\ncustomElements.define('custom-header', _header_js__WEBPACK_IMPORTED_MODULE_1__[\"Header\"]);\ncustomElements.define('custom-modal', _modal_js__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]);\ncustomElements.define('custom-footer', _footer_js__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"]);\n\n//# sourceURL=webpack:///./client/scripts/index.js?");

/***/ }),

/***/ "./client/scripts/modal.js":
/*!*********************************!*\
  !*** ./client/scripts/modal.js ***!
  \*********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nclass Modal extends HTMLElement {\n  constructor() {\n    super();\n    this._total = 0;\n  }\n\n  connectedCallback() {\n    this.innerHTML = `\n        <div id=\"backdrop\"></div>\n        <div id=\"modal\">\n        <header id=\"modal-header\">\n            <p id=\"modal-header-content\"><strong>My Cart (\n            ${window.localStorage.getItem(\"cart\") ? JSON.parse(window.localStorage.getItem(\"cart\")).length : 0}\n            Items)</strong></p>\n            <div id=\"modal-close\">&#10006;</div>\n        </header>\n        <main id=\"modal-main\">\n        <div id=\"modal-main-content\"></div>\n        <script type=\"text/x-handlebars-template\" id=\"modal-template\">\n        {{#each items}}\n            <section id=\"cart-item\">\n            <img src={{this.imageURL}} alt={{this.name}}/>\n            <section id=\"cart-item-main\">\n            <div><strong>{{this.name}}</strong></div>\n            <section id=\"cart-item-main-footer\">\n            <button id=\"decrement\" type\"button\" class=\"round-btn\">-</button>\n            <div id=\"counter\">1</div>\n            <button id=\"increment\" type=\"button\" class=\"round-btn\">+</button>\n            <div style=\"font-size : 1rem;\">&#215</div>\n            <div>Rs <span id=\"item-price\">{{this.price}}</span></div>\n            <section id=\"item-total\"></section>\n            </section>\n            </section>\n            </section>\n        {{/each}}\n        </script>\n        <section id=\"main-content-footer\">\n        <img src=\"../../static/images/lowest-price.png\" alt=\"image for lowest price quaranteed\"></img>\n        <p>You won't find it cheaper anywhere</p>\n        </section>\n        </main>\n        <footer id=\"modal-footer\">\n        <section id=\"promo\">Promo can be applied on payment page</section>\n        <setion id=\"checkout\">\n        <button type=\"button\">Proceed To CheckOut</button>\n        </section>\n        </footer>\n        </div>\n        `;\n    document.getElementById(\"modal-close\").addEventListener(\"click\", () => {\n      let modal = document.querySelector(\"body custom-modal\");\n      modal.remove();\n    });\n    let template = Handlebars.compile(document.querySelector(\"#modal-template\").innerHTML);\n    let data = template({\n      items: JSON.parse(window.localStorage.getItem(\"cart\"))\n    });\n    document.getElementById(\"modal-main-content\").innerHTML += data;\n    document.querySelectorAll(\"#decrement\").forEach(node => {\n      let parentEle = node.parentElement;\n      node.addEventListener(\"click\", () => {\n        if (parentEle.querySelector(\"#counter\").innerText > 0) {\n          parentEle.querySelector(\"#counter\").innerText -= 1;\n          parentEle.querySelector(\"#item-total\").innerText = parseInt(parentEle.querySelector(\"#item-price\").innerText) * parseInt(parentEle.querySelector(\"#counter\").innerText);\n        } else {}\n      });\n    });\n    document.querySelectorAll(\"#increment\").forEach(node => {\n      let parentEle = node.parentElement;\n      node.addEventListener(\"click\", () => {\n        parentEle.querySelector(\"#counter\").innerText = parseInt(parentEle.querySelector(\"#counter\").innerText) + 1;\n        parentEle.querySelector(\"#item-total\").innerText = parseInt(parentEle.querySelector(\"#item-price\").innerText) * parseInt(parentEle.querySelector(\"#counter\").innerText);\n      });\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./client/scripts/modal.js?");

/***/ })

/******/ });