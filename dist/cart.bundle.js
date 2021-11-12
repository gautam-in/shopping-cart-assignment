/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.scss */ \"./src/cart.scss\");\n/* harmony import */ var _cart_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.html */ \"./src/cart.html\");\n/* harmony import */ var _static_images_products_fruit_n_veg_kiwi_green_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/fruit-n-veg/kiwi-green.jpg */ \"./static/images/products/fruit-n-veg/kiwi-green.jpg\");\n\n\n\nlocalStorage.getItem('cartCounter') ? document.querySelector('.cart-count').textContent = localStorage.getItem('cartCounter') : document.querySelector('.cart-count').textContent = 0;\n\nfunction displayCart() {\n  var cartItems = localStorage.getItem(\"productsInCart\");\n  var cartCost = localStorage.getItem('totalCost');\n  cartItems = JSON.parse(cartItems);\n  var productContainer = document.querySelector(\".cart-products\");\n  var shoppingCartDiv = document.querySelector(\".shopping-cart\");\n\n  if (cartItems && productContainer) {\n    productContainer.innerHTML = '';\n    Object.values(cartItems).map(function (item) {\n      productContainer.innerHTML += \"\\n            <div class=\\\"product\\\">\\n            <div class=\\\"product-image\\\">\\n              <img src=\".concat(_static_images_products_fruit_n_veg_kiwi_green_jpg__WEBPACK_IMPORTED_MODULE_2__, \">\\n            </div>\\n            <div class=\\\"product-details\\\">\\n              <div class=\\\"product-title\\\">\").concat(item.name, \"</div>\\n            </div>\\n            <div class=\\\"product-price\\\"> \").concat(parseInt(item.price), \"</div>\\n            <div class=\\\"product-quantity\\\">\\n            \").concat(item.inCart, \"\\n            </div>\\n            <div class=\\\"product-line-price\\\"> \").concat(item.inCart * parseInt(item.price), \"</div>\\n          </div>\");\n    });\n    productContainer.innerHTML += \"<div class=\\\"totals\\\">\\n        <div class=\\\"totals-item\\\">\\n          <label>Subtotal</label>\\n          <div class=\\\"totals-value\\\" id=\\\"cart-subtotal\\\"> \".concat(cartCost, \"</div>\\n        </div>\\n      </div>\\n      <button class=\\\"checkout\\\" onclick=\\\"cleanStorage()\\\" >Proceed to Checkout <span>Rs \").concat(cartCost, \"</span></button>\");\n  } else {\n    shoppingCartDiv.innerHTML = \"<h1 class=\\\"noCart-h1\\\">No items in your cart</h1>\\n         <p class=\\\"noCart-p\\\">Your favorite items are just a click away</p>\\n         <button class=\\\"checkout checkout1\\\"><a href=\\\"index.html\\\">Start Shopping<a/></button>\";\n  }\n}\n\nwindow.cleanStorage = function () {\n  localStorage.clear();\n  displayCart();\n};\n\ndisplayCart();\n\n//# sourceURL=webpack://code-exercise/./src/cart.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/cart.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/cart.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".product-image {\\n  float: left;\\n  width: 20%;\\n}\\n\\n.product-details {\\n  float: left;\\n  width: 37%;\\n}\\n\\n.product-price {\\n  float: left;\\n  width: 12%;\\n}\\n\\n.product-quantity {\\n  float: left;\\n  width: 10%;\\n}\\n\\n.product-removal {\\n  float: left;\\n  width: 9%;\\n}\\n\\n.product-line-price {\\n  float: left;\\n  width: 12%;\\n  text-align: right;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Gill Sans\\\", \\\"Gill Sans MT\\\", Calibri, \\\"Trebuchet MS\\\", sans-serif;\\n}\\n\\n.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,\\n.group:after,\\n.shopping-cart:after,\\n.column-labels:after,\\n.product:after,\\n.totals-item:after {\\n  content: \\\"\\\";\\n  display: table;\\n}\\n\\n.group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {\\n  clear: both;\\n}\\n\\n.group, .shopping-cart, .column-labels, .product, .totals-item {\\n  zoom: 1;\\n}\\n\\n.product .product-price:before, .product .product-line-price:before, .totals-value:before {\\n  content: \\\"Rs\\\";\\n}\\n\\n.navbar {\\n  font-size: 16px;\\n  color: #000;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  padding-bottom: 10px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  background-color: #fff;\\n  z-index: 9;\\n}\\n\\n.main-nav {\\n  list-style-type: none;\\n  display: none;\\n}\\n\\n.nav-links,\\n.logo {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\n.main-nav li {\\n  text-align: center;\\n  margin: 15px auto;\\n}\\n\\n.logo {\\n  display: inline-block;\\n  font-size: 22px;\\n  margin-top: 10px;\\n  margin-left: 20px;\\n}\\n\\n.navbar-toggle {\\n  position: absolute;\\n  top: 10px;\\n  right: 20px;\\n  cursor: pointer;\\n  color: #000;\\n  font-size: 24px;\\n}\\n\\n.active {\\n  display: block;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .navbar {\\n    display: flex;\\n    justify-content: space-between;\\n    padding-bottom: 0;\\n    height: 70px;\\n    align-items: center;\\n  }\\n\\n  .main-nav {\\n    display: flex;\\n    margin-right: 30px;\\n    flex-direction: row;\\n    justify-content: flex-end;\\n  }\\n\\n  .main-nav li {\\n    margin: 0;\\n  }\\n\\n  .nav-links {\\n    margin-left: 30px;\\n  }\\n\\n  .logo {\\n    margin-top: 0;\\n  }\\n\\n  .navbar-toggle {\\n    display: none;\\n  }\\n\\n  .logo:hover,\\n.nav-links:hover {\\n    color: #000;\\n  }\\n}\\n.fa-shopping-cart {\\n  font-size: 25px;\\n  color: #e6005c;\\n}\\n\\nlabel {\\n  color: #aaa;\\n}\\n\\n.shopping-cart {\\n  margin-top: 100px;\\n  padding: 20px;\\n}\\n\\n.column-labels label {\\n  padding-bottom: 15px;\\n  margin-bottom: 15px;\\n  border-bottom: 1px solid #eee;\\n}\\n.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {\\n  text-indent: -9999px;\\n}\\n\\n.product {\\n  margin-bottom: 20px;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #eee;\\n}\\n.product .product-image {\\n  text-align: center;\\n}\\n.product .product-image img {\\n  width: 20%;\\n}\\n.product .product-details .product-title {\\n  margin-right: 20px;\\n  font-weight: bold;\\n}\\n.product .product-details .product-description {\\n  margin: 5px 20px 5px 0;\\n  line-height: 1.4em;\\n}\\n.product .product-quantity input {\\n  width: 40px;\\n}\\n.product .remove-product {\\n  border: 0;\\n  padding: 4px 8px;\\n  background-color: #c66;\\n  color: #fff;\\n  font-family: \\\"HelveticaNeue-Medium\\\", \\\"Helvetica Neue Medium\\\";\\n  font-size: 12px;\\n  border-radius: 3px;\\n}\\n.product .remove-product:hover {\\n  background-color: #a44;\\n}\\n\\n.totals .totals-item {\\n  float: right;\\n  clear: both;\\n  width: 100%;\\n  margin-bottom: 10px;\\n}\\n.totals .totals-item label {\\n  float: left;\\n  clear: both;\\n  width: 79%;\\n  text-align: right;\\n}\\n.totals .totals-item .totals-value {\\n  float: right;\\n  width: 21%;\\n  text-align: right;\\n}\\n.totals .totals-item-total {\\n  font-family: \\\"HelveticaNeue-Medium\\\", \\\"Helvetica Neue Medium\\\";\\n}\\n\\n.checkout {\\n  width: 90%;\\n  border: 0;\\n  padding: 10px 25px;\\n  background-color: #e6005c;\\n  color: #fff;\\n  font-size: 18px;\\n  border-radius: 3px;\\n  position: fixed;\\n  bottom: 10px;\\n  left: 5%;\\n  text-align: left;\\n}\\n.checkout span {\\n  float: right;\\n}\\n\\n@media screen and (min-width: 767px) {\\n  .totals-value {\\n    float: right;\\n    width: 21%;\\n    text-align: right;\\n    margin-right: 110px;\\n    margin-top: -20px;\\n  }\\n}\\n@media screen and (max-width: 650px) {\\n  .shopping-cart {\\n    margin: 0;\\n    padding-top: 20px;\\n    border-top: 1px solid #eee;\\n    margin-top: 100px !important;\\n  }\\n\\n  .column-labels {\\n    display: none;\\n  }\\n\\n  .product-image {\\n    float: right;\\n    width: auto;\\n  }\\n  .product-image img {\\n    margin: 0 0 10px 10px;\\n  }\\n\\n  .product-details {\\n    float: none;\\n    margin-bottom: 10px;\\n    width: auto;\\n  }\\n\\n  .product-price {\\n    clear: both;\\n    width: 70px;\\n  }\\n\\n  .product-quantity {\\n    width: 100px;\\n  }\\n  .product-quantity input {\\n    margin-left: 20px;\\n  }\\n\\n  .product-quantity:before {\\n    content: \\\"x\\\";\\n  }\\n\\n  .product-removal {\\n    width: auto;\\n  }\\n\\n  .product-line-price {\\n    float: right;\\n    width: 70px;\\n  }\\n}\\n@media screen and (max-width: 350px) {\\n  .product-removal {\\n    float: right;\\n  }\\n\\n  .product-line-price {\\n    float: right;\\n    clear: left;\\n    width: auto;\\n    margin-top: 10px;\\n  }\\n\\n  .product .product-line-price:before {\\n    content: \\\"Item Total: $\\\";\\n  }\\n\\n  .totals .totals-item label {\\n    width: 60%;\\n  }\\n  .totals .totals-item .totals-value {\\n    width: 40%;\\n    margin-left: 50px !important;\\n    margin-top: -20px;\\n  }\\n}\\n.noCart-h1 {\\n  text-align: center;\\n}\\n\\n.noCart-p {\\n  text-align: center;\\n  margin-top: 12px;\\n  font-size: 18px;\\n  color: #a1a1a1;\\n}\\n\\n.checkout1 {\\n  text-align: center !important;\\n}\\n.checkout1 a {\\n  color: #fff !important;\\n  text-decoration: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code-exercise/./src/cart.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/cart.html":
/*!***********************!*\
  !*** ./src/cart.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/images/logo.png */ \"./static/images/logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Product Cart</title>\\n    <link\\n      rel=\\\"stylesheet\\\"\\n      href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\\\"\\n    />\\n  </head>\\n\\n  <body>\\n    <nav class=\\\"navbar\\\">\\n      <span class=\\\"navbar-toggle\\\" id=\\\"js-navbar-toggle\\\">\\n        <i class=\\\"fa fa-bars\\\"></i>\\n      </span>\\n      <a href=\\\"category.html\\\" class=\\\"logo\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" height=\\\"65%\\\" width=\\\"65%\\\" />\\n      </a>\\n      <ul class=\\\"main-nav\\\" id=\\\"js-menu\\\">\\n        <li>\\n          <a href=\\\"category.html\\\" class=\\\"nav-links\\\">Home</a>\\n        </li>\\n        <li>\\n          <a href=\\\"products.html\\\" class=\\\"nav-links\\\">Products</a>\\n        </li>\\n        <li>\\n          <a href=\\\"index.html\\\" class=\\\"nav-links\\\">Sign In</a>\\n        </li>\\n        <li>\\n          <a href=\\\"register.html\\\" class=\\\"nav-links\\\">Sign Up</a>\\n        </li>\\n        <li>\\n          <a href=\\\"cart.html\\\" class=\\\"nav-links\\\">\\n            <i class=\\\"fa fa-shopping-cart\\\" aria-hidden=\\\"true\\\"></i>\\n            <span class=\\\"cart-count\\\">0</span> Items\\n          </a>\\n        </li>\\n      </ul>\\n    </nav>\\n    <h1>Shopping Cart</h1>\\n\\n    <div class=\\\"shopping-cart\\\">\\n      <div class=\\\"column-labels\\\">\\n        <label class=\\\"product-image\\\">Image</label>\\n        <label class=\\\"product-details\\\">Product Name</label>\\n        <label class=\\\"product-price\\\">Price</label>\\n        <label class=\\\"product-quantity\\\">Quantity</label>\\n        <label class=\\\"product-line-price\\\">Total</label>\\n      </div>\\n      <div class=\\\"cart-products\\\"></div>\\n    </div>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code-exercise/./src/cart.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/cart.scss":
/*!***********************!*\
  !*** ./src/cart.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./cart.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/cart.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://code-exercise/./src/cart.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./static/images/logo.png":
/*!********************************!*\
  !*** ./static/images/logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/8481ee8780730d370ae0.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/logo.png?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/kiwi-green.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/fruit-n-veg/kiwi-green.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/ae8a7f1700b4f4431759.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/kiwi-green.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"cart": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cart.js");
/******/ 	
/******/ })()
;