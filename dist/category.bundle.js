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

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.scss */ \"./src/category.scss\");\n/* harmony import */ var _category_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.html */ \"./src/category.html\");\n/* harmony import */ var _static_images_category_beverages_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/category/beverages.png */ \"./static/images/category/beverages.png\");\n/* harmony import */ var _static_images_category_bakery_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/category/bakery.png */ \"./static/images/category/bakery.png\");\n/* harmony import */ var _static_images_category_beauty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/category/beauty.png */ \"./static/images/category/beauty.png\");\n/* harmony import */ var _static_images_category_baby_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/category/baby.png */ \"./static/images/category/baby.png\");\n/* harmony import */ var _static_images_products_fruit_n_veg_kiwi_green_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/products/fruit-n-veg/kiwi-green.jpg */ \"./static/images/products/fruit-n-veg/kiwi-green.jpg\");\n/* harmony import */ var _static_images_category_fruits_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/images/category/fruits.png */ \"./static/images/category/fruits.png\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar productImageList = [_static_images_category_beverages_png__WEBPACK_IMPORTED_MODULE_2__, _static_images_category_bakery_png__WEBPACK_IMPORTED_MODULE_3__, _static_images_category_beauty_png__WEBPACK_IMPORTED_MODULE_4__, _static_images_category_baby_png__WEBPACK_IMPORTED_MODULE_5__, _static_images_products_fruit_n_veg_kiwi_green_jpg__WEBPACK_IMPORTED_MODULE_6__, _static_images_category_fruits_png__WEBPACK_IMPORTED_MODULE_7__];\nvar mainNav = document.getElementById(\"js-menu\");\nvar navBarToggle = document.getElementById(\"js-navbar-toggle\");\nnavBarToggle.addEventListener(\"click\", function () {\n  mainNav.classList.toggle(\"active\");\n});\n\nfunction onLoadCartNumbers() {\n  var productCartCounter = localStorage.getItem('cartCounter');\n  console.log(productCartCounter);\n\n  if (productCartCounter) {\n    document.querySelector('.cart-count').textContent = productCartCounter;\n  }\n}\n\nonLoadCartNumbers();\nvar prodList = document.getElementById('prod');\nfetch('http://localhost:5000/categories').then(function (res) {\n  return res.json();\n}).then(function (resp) {\n  return console.log(resp);\n});\n\nfunction getFromAPI(url, callback) {\n  var obj;\n  fetch(url).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    return obj = data;\n  }).then(function () {\n    return callback(obj);\n  });\n}\n\ngetFromAPI('http://localhost:5000/categories', getData);\n\nfunction getData(arrOfObjs) {\n  arrOfObjs.forEach(function (x, ind) {\n    prodList.innerHTML += \" <div class=\\\"product-card\\\">\\n        <div class=\\\"product-info\\\">\\n          <h5>\".concat(x.name, \"</h5>         \\n          <p>\").concat(x.description, \"</p>       \\n          <a href=\\\"products.html\\\"> <button id=\\\"cart-button\\\" >Explore \").concat(x.name, \"</button></a>\\n        </div>\\n        <div class=\\\"product-image\\\">\\n        <img src=\").concat(productImageList[ind], \" alt=\").concat(x.name, \">\\n        </div>\\n      </div>\");\n  });\n}\n\nwindow.addToCart = function (name, price, inCart, tag) {\n  console.log(name, price, tag, inCart);\n  var cartObj = {\n    tag: tag,\n    name: name,\n    price: price,\n    inCart: inCart\n  }; //  console.log(cartObj)\n\n  var productCartCounter = localStorage.getItem('cartCounter');\n  productCartCounter = parseInt(productCartCounter);\n\n  if (productCartCounter) {\n    localStorage.setItem('cartCounter', productCartCounter + 1);\n    document.querySelector('.cart-count').textContent = productCartCounter + 1;\n  } else {\n    localStorage.setItem('cartCounter', 1);\n    document.querySelector('.cart-count').textContent = 1;\n  }\n\n  setItems(cartObj);\n  totalCost(cartObj);\n};\n\nfunction setItems(product) {\n  console.log(product);\n  var cartItems = localStorage.getItem('productsInCart');\n  cartItems = JSON.parse(cartItems);\n\n  if (cartItems != null) {\n    if (cartItems[product.tag] == undefined) {\n      cartItems = _objectSpread(_objectSpread({}, cartItems), {}, _defineProperty({}, product.tag, product));\n    }\n\n    cartItems[product.tag].inCart += 1;\n  } else {\n    product.inCart = 1;\n    cartItems = _defineProperty({}, product.tag, product);\n  }\n\n  localStorage.setItem(\"productsInCart\", JSON.stringify(cartItems));\n}\n\nfunction totalCost(product) {\n  var cartCost = localStorage.getItem('totalCost');\n\n  if (cartCost != null) {\n    cartCost = parseInt(cartCost);\n    localStorage.setItem(\"totalCost\", cartCost + parseInt(product.price));\n  } else {\n    localStorage.setItem(\"totalCost\", parseInt(product.price));\n  }\n}\n\n//# sourceURL=webpack://code-exercise/./src/category.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/category.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/category.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navbar {\\n  font-size: 16px;\\n  color: #000;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  padding-bottom: 10px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  background-color: #fff;\\n  z-index: 9;\\n}\\n\\n.main-nav {\\n  list-style-type: none;\\n  display: none;\\n}\\n\\n.nav-links,\\n.logo {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\n.main-nav li {\\n  text-align: center;\\n  margin: 15px auto;\\n}\\n\\n.logo {\\n  display: inline-block;\\n  font-size: 22px;\\n  margin-top: 10px;\\n  margin-left: 20px;\\n}\\n\\n.navbar-toggle {\\n  position: absolute;\\n  top: 10px;\\n  right: 20px;\\n  cursor: pointer;\\n  color: #000;\\n  font-size: 24px;\\n}\\n\\n.active {\\n  display: block;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .navbar {\\n    display: flex;\\n    justify-content: space-between;\\n    padding-bottom: 0;\\n    height: 70px;\\n    align-items: center;\\n  }\\n\\n  .main-nav {\\n    display: flex;\\n    margin-right: 30px;\\n    flex-direction: row;\\n    justify-content: flex-end;\\n  }\\n\\n  .main-nav li {\\n    margin: 0;\\n  }\\n\\n  .nav-links {\\n    margin-left: 30px;\\n  }\\n\\n  .logo {\\n    margin-top: 0;\\n  }\\n\\n  .navbar-toggle {\\n    display: none;\\n  }\\n\\n  .logo:hover,\\n.nav-links:hover {\\n    color: #000;\\n  }\\n}\\n.fa-shopping-cart {\\n  font-size: 25px;\\n  color: #e6005c;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Gill Sans\\\", \\\"Gill Sans MT\\\", Calibri, \\\"Trebuchet MS\\\", sans-serif;\\n}\\n\\n.product-filter {\\n  display: flex;\\n  background-color: #fff;\\n  margin-top: 100px;\\n  flex-direction: column;\\n}\\n.product-filter h1 {\\n  flex-grow: 1;\\n}\\n.product-filter .sort {\\n  display: flex;\\n  background-color: #bbb;\\n}\\n.product-filter .collection-sort {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.products {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.product-card {\\n  padding: 2%;\\n  flex: 1 100%;\\n  /*// shorthand of flex-grow + flex-basis*/\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  margin: 15px;\\n  display: flex;\\n}\\n@media screen and (min-width: 600px) {\\n  .product-card {\\n    flex: 1 50%;\\n  }\\n}\\n@media screen and (min-width: 800px) {\\n  .product-card {\\n    flex: 1 25%;\\n  }\\n}\\n@media screen and (min-width: 1080px) {\\n  .product-card {\\n    flex: 1 20%;\\n  }\\n}\\n@media screen and (min-width: 800px) {\\n  .product-card:nth-child(1), .product-card:nth-child(2) {\\n    flex: 2 50%;\\n  }\\n}\\n@media screen and (min-width: 1080px) {\\n  .product-card:nth-child(1), .product-card:nth-child(2) {\\n    flex: 1 20%;\\n  }\\n}\\n.product-card img {\\n  max-width: 40%;\\n  height: auto;\\n  float: right;\\n}\\n.product-card a {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.product-card .product-info {\\n  margin-top: auto;\\n  text-align: center;\\n}\\n.product-card .product-info h5 {\\n  font-size: 16px;\\n  margin-bottom: 20px;\\n}\\n.product-card .product-info h6 {\\n  font-size: 16px;\\n  margin-top: 20px;\\n}\\n.product-card .product-info p {\\n  margin-top: 20px;\\n  font-size: 12px;\\n  line-height: 1.5;\\n  padding: 10px;\\n  text-align: left !important;\\n}\\n.product-card .product-info button {\\n  border: none;\\n  outline: 0;\\n  padding: 12px;\\n  color: white;\\n  background-color: #e6005c;\\n  text-align: center;\\n  cursor: pointer;\\n  width: 50%;\\n  font-size: 14px;\\n}\\n@media screen and (max-width: 600px) {\\n  .product-card .product-info {\\n    margin-top: auto;\\n  }\\n  .product-card .product-info h5 {\\n    font-size: 16px;\\n    margin-bottom: 20px;\\n  }\\n  .product-card .product-info h6 {\\n    font-size: 16px;\\n    margin-top: 20px;\\n  }\\n  .product-card .product-info p {\\n    margin-top: 20px;\\n    font-size: 12px;\\n    line-height: 1.5;\\n    padding: 10px;\\n    text-align: left !important;\\n  }\\n  .product-card .product-info button {\\n    border: none;\\n    outline: 0;\\n    padding: 10px;\\n    color: white;\\n    background-color: #e6005c;\\n    text-align: center;\\n    cursor: pointer;\\n    width: 90% !important;\\n    font-size: 14px;\\n  }\\n  .product-card img {\\n    max-width: 80% !important;\\n    height: auto;\\n    float: right;\\n    margin-top: 80px;\\n  }\\n}\\n\\n#form {\\n  margin: 50px auto;\\n  text-align: center;\\n  padding: 45px 30px 15px;\\n  position: relative;\\n  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.2);\\n  border-radius: 1px;\\n  height: 450px;\\n  overflow: hidden;\\n}\\n\\n#form #toggle-forms {\\n  position: absolute;\\n  top: 15px;\\n  right: 30px;\\n  border: 1px solid #3a4a5d;\\n  border-radius: 20px;\\n  overflow: hidden;\\n  z-index: 99;\\n}\\n\\n#form #toggle-forms > button {\\n  border: none;\\n  background: none;\\n  background-color: #34495e;\\n  border: 1px solid #22303e;\\n  color: #FFF;\\n  float: left;\\n  border-bottom-right-radius: 20px;\\n  border-top-right-radius: 20px;\\n  padding: 2px 10px;\\n}\\n\\n#form #toggle-forms > button:first-of-type {\\n  border-right: 0;\\n  border-bottom-right-radius: 0;\\n  border-top-right-radius: 0;\\n  border-top-left-radius: 20px;\\n  border-bottom-left-radius: 20px;\\n}\\n\\n#form #toggle-forms > button.active {\\n  background-color: #3498db;\\n}\\n\\n#form form h4 {\\n  text-transform: capitalize;\\n}\\n\\n.input-field label.active {\\n  color: #FFF !important;\\n  font-size: 1.1rem;\\n}\\n\\n#form form input:focus {\\n  border-bottom-color: dodgerblue !important;\\n}\\n\\n#form .row > button {\\n  background-color: dodgerblue;\\n}\\n\\ninput {\\n  color: #FFF;\\n  padding-left: 15px !important;\\n  border: none;\\n}\\n\\n#form form {\\n  padding: 45px 30px 15px;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  transition: all 0.3s linear;\\n  z-index: 2;\\n}\\n\\n#form form:last-of-type {\\n  left: 100%;\\n}\\n\\n#form.active form:first-of-type {\\n  left: -100% !important;\\n}\\n\\n#form.active form:last-of-type {\\n  left: 0 !important;\\n}\\n\\n@media (max-width: 767px) {\\n  #form {\\n    width: 290px !important;\\n  }\\n}\\n.animate {\\n  height: 100%;\\n  display: block;\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n}\\n\\n.animate > li {\\n  position: absolute;\\n  height: 50px;\\n  width: 50px;\\n  top: 100%;\\n  left: 10px;\\n  background-color: rgba(255, 255, 255, 0.1);\\n  z-index: -1;\\n  overflow: hidden;\\n  animation: move 10s linear infinite;\\n}\\n\\n.animate > li:nth-last-of-type(2) {\\n  left: 70px;\\n  animation-delay: 3.5s;\\n  height: 15px;\\n  width: 15px;\\n}\\n\\n.animate > li:nth-last-of-type(3) {\\n  left: 140px;\\n  animation-delay: 3s;\\n}\\n\\n.animate > li:nth-last-of-type(4) {\\n  left: 210px;\\n  animation-delay: 5.5s;\\n}\\n\\n.animate > li:nth-last-of-type(5) {\\n  left: 280px;\\n  animation-delay: 1.8s;\\n  height: 65px;\\n  width: 65px;\\n}\\n\\n.animate > li:nth-last-of-type(6) {\\n  left: 140px;\\n  animation-delay: 6.8s;\\n  height: 25px;\\n  width: 25px;\\n}\\n\\n.animate > li:nth-last-of-type(7) {\\n  left: 280px;\\n  animation-delay: 5s;\\n  height: 35px;\\n  width: 35px;\\n}\\n\\n@keyframes move {\\n  to {\\n    top: -50px;\\n    transform: rotate(360deg);\\n  }\\n}\\n.forgot {\\n  color: dodgerblue;\\n}\\n\\n.forgot:hover {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code-exercise/./src/category.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/category.html":
/*!***************************!*\
  !*** ./src/category.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/images/logo.png */ \"./static/images/logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>Product Category</title>\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\\\">\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <nav class=\\\"navbar\\\">\\r\\n        <span class=\\\"navbar-toggle\\\" id=\\\"js-navbar-toggle\\\">\\r\\n          <i class=\\\"fa fa-bars\\\"></i>\\r\\n        </span>\\r\\n        <a href=\\\"category.html\\\" class=\\\"logo\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" height=\\\"65%\\\"width=\\\"65%\\\">\\r\\n        </a>\\r\\n        <ul class=\\\"main-nav\\\" id=\\\"js-menu\\\">\\r\\n          <li>\\r\\n            \\r\\n            <a href=\\\"category.html\\\" class=\\\"nav-links\\\">Home</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"products.html\\\" class=\\\"nav-links\\\">Products</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"index.html\\\" class=\\\"nav-links\\\">Sign In</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"register.html\\\" class=\\\"nav-links\\\">Sign Up</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"cart.html\\\" class=\\\"nav-links\\\">\\r\\n              <i class=\\\"fa fa-shopping-cart\\\" aria-hidden=\\\"true\\\"></i> <span class=\\\"cart-count\\\">0</span> Items\\r\\n            </a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </nav>\\r\\n\\r\\n  <section class=\\\"products product-filter\\\" id=\\\"prod\\\">\\r\\n\\r\\n  </section>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code-exercise/./src/category.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/category.scss":
/*!***************************!*\
  !*** ./src/category.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./category.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/category.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://code-exercise/./src/category.scss?");

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

/***/ "./static/images/category/baby.png":
/*!*****************************************!*\
  !*** ./static/images/category/baby.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/202bade8c603e6823ea0.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/category/baby.png?");

/***/ }),

/***/ "./static/images/category/bakery.png":
/*!*******************************************!*\
  !*** ./static/images/category/bakery.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/28ce7a733cc8f46921fe.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/category/bakery.png?");

/***/ }),

/***/ "./static/images/category/beauty.png":
/*!*******************************************!*\
  !*** ./static/images/category/beauty.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/48dd64912a18c4335440.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/category/beauty.png?");

/***/ }),

/***/ "./static/images/category/beverages.png":
/*!**********************************************!*\
  !*** ./static/images/category/beverages.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/c2ae89e5a48a45fdc807.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/category/beverages.png?");

/***/ }),

/***/ "./static/images/category/fruits.png":
/*!*******************************************!*\
  !*** ./static/images/category/fruits.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/864736dff7fa5e00210f.png\";\n\n//# sourceURL=webpack://code-exercise/./static/images/category/fruits.png?");

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
/******/ 			"category": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/category.js");
/******/ 	
/******/ })()
;