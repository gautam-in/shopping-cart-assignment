/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/components/header.js":
/*!*****************************************!*\
  !*** ./client/src/components/header.js ***!
  \*****************************************/
/***/ (() => {

eval("\r\nclass HeaderWebComponent extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.innerHTML = `\r\n        <header class=\"main_header\">\r\n        <a href=\"./home.html\"><img id=\"logo-img\" src=\"../../../static/images/logo_2x.png\" alt=\"Sabka Bazaar\" width=200 height=90></a>\r\n\r\n        <nav class=\"header_nav\">\r\n            <div class=\"left_nav\">\r\n              <a href=\"./home.html\">Home</a>\r\n              <a href=\"./products.html\">Products</a>\r\n            </div>\r\n            <div class=\"right_nav\">\r\n              <div>\r\n              <a href=\"./login.html\">SignIn</a>\r\n              <a href=\"./register.html\">Register</a>\r\n              </div>\r\n            <div class=\"cart_nav\">\r\n              <img onclick=\"openCart()\" class=\"cartImage\" src=\"../../../static/images/cart.svg\" alt=\"cart\">\r\n              <span id=\"item-total-count\">0 Items</span>\r\n            </div>\r\n            </div>\r\n        </nav>\r\n        \r\n        \r\n    </header>`;\r\n  }\r\n  attributeChangedCallback(name, oldValue, newValue) {\r\n\r\n    document.getElementById(\"item-total-count\").innerText = newValue + \" Items\";\r\n}\r\n\r\n\r\n\r\nstatic get observedAttributes() { return ['cart_count']; }\r\n  \r\n}\r\n\r\ncustomElements.define(\"header-component\", HeaderWebComponent);\r\n\n\n//# sourceURL=webpack://code-exercise/./client/src/components/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/components/header.js"]();
/******/ 	
/******/ })()
;