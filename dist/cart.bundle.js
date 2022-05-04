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

/***/ "./client/src/components/cart.js":
/*!***************************************!*\
  !*** ./client/src/components/cart.js ***!
  \***************************************/
/***/ (() => {

eval("class CartWebComponent extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n  }\r\n  connectedCallback() {\r\n    this.innerHTML = `<header>\r\n        <div class=\"cart_header\">\r\n        <h4>My Cart</h4>\r\n        <p id=\"close-cart\" onclick=\"closeCart()\"> &#10060 </p>\r\n        </div>\r\n        \r\n    </header>\r\n    <section class=\"cart_items\">\r\n        \r\n    </section>\r\n    <div class=\"cheaper-tag\">\r\n        <img width=85 height=30 src=\"../../../static/images/lowest-price.png\"/>\r\n        <p>You won't find it cheaper anywhere</p>\r\n    </div>\r\n    <footer id=\"cart-footer\">\r\n        <p class=\"promo\">Promo code can be applied on payment page.</p>\r\n        \r\n        <button id=\"checkout-button\"><span>Proceed to checkout</span> <span id=\"cart-value\">Rs. 0</span></button>\r\n        \r\n    </footer>`;\r\n  }\r\n  attributeChangedCallback(name, oldValue, newValue) {\r\n    document.getElementById(\"cart-value\").innerText = \"Rs. \"+ newValue;\r\n  }\r\n  static get observedAttributes() {\r\n    return [\"cart-value\"];\r\n  }\r\n}\r\n\r\ncustomElements.define(\"cart-component\", CartWebComponent);\r\n\n\n//# sourceURL=webpack://code-exercise/./client/src/components/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/components/cart.js"]();
/******/ 	
/******/ })()
;