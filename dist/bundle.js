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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var header = \"<nav>\\n                <div class=\\\"row\\\">\\n                    <a href=\\\"#\\\">\\n                        <img src=\\\"/dist/images/logo.png\\\" alt=\\\"Sabka Bazaar\\\" srcset=\\\"\\\" class=\\\"logo\\\">\\n                    </a>\\n                    <div>\\n                        <span class=\\\"cart_btn\\\">\\n                            <a href=\\\"#\\\" class=\\\"btn_to_cart\\\">\\n                                <i class=\\\"cart_icon\\\">\\n                                    <svg version=\\\"1.1\\\" width=\\\"30\\\" id=\\\"Layer_1\\\" focusable=\\\"false\\\"\\n                                        xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\"\\n                                        x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 24 24\\\" style=\\\"enable-background:new 0 0 24 24;\\\"\\n                                        xml:space=\\\"preserve\\\">\\n                                        <path\\n                                            d=\\\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h3l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\\\" />\\n                                    </svg>\\n                                    <span>0</span>\\n                                </i>\\n                                <span>0 items</span>\\n                            </a>\\n                        </span>\\n                        \\n                        <input type=\\\"checkbox\\\" id=\\\"toggle\\\">                  \\n                        <label class=\\\"nav-btn\\\" for=\\\"toggle\\\">\\n                            <span class=\\\"hamburger\\\">\\n                                <span class=\\\"line-1\\\"></span>\\n                                <span class=\\\"line-2\\\"></span>\\n                                <span class=\\\"line-3\\\"></span>\\n                                <span class=\\\"cross\\\"></span>\\n                            </span>\\n                        </label>\\n\\n                        \\n                        <div class=\\\"nav_link\\\">\\n                            <ul class=\\\"sup_nav\\\">\\n                                <li><a href=\\\"index.html\\\">Home</a></li>\\n                                <li><a href=\\\"products.html\\\">Products</a></li>\\n                            </ul>\\n                            <ul class=\\\"sub_nav\\\">\\n                                <li><a href=\\\"login.html\\\">SignIn</a></li>\\n                                <li><a href=\\\"signup.html\\\">Register</a></li>\\n                            </ul>\\n                        </div>\\n                    </div>\\n                </div>\\n                </nav>\";\nvar footer = \"<section class=\\\"row\\\">\\n                <p>\\n                    Copyright &copy; 2011 &mdash; 2018 Sabka Bazaar Grocery Supplies Pvt Ltd\\n                </p>\\n                </section>\";\n\n(function () {\n  document.getElementById(\"header\").innerHTML = header;\n  document.getElementById(\"footer\").innerHTML = footer;\n})();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/carousel.scss":
/*!********************************!*\
  !*** ./src/scss/carousel.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/carousel.scss?");

/***/ }),

/***/ "./src/scss/home.scss":
/*!****************************!*\
  !*** ./src/scss/home.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/home.scss?");

/***/ }),

/***/ "./src/scss/login.scss":
/*!*****************************!*\
  !*** ./src/scss/login.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/login.scss?");

/***/ }),

/***/ "./src/scss/products.scss":
/*!********************************!*\
  !*** ./src/scss/products.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/products.scss?");

/***/ }),

/***/ "./src/scss/query.scss":
/*!*****************************!*\
  !*** ./src/scss/query.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/query.scss?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/products.scss ./src/scss/login.scss ./src/scss/carousel.scss ./src/scss/query.scss ./src/scss/home.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\n__webpack_require__(/*! ./src/scss/products.scss */\"./src/scss/products.scss\");\n__webpack_require__(/*! ./src/scss/login.scss */\"./src/scss/login.scss\");\n__webpack_require__(/*! ./src/scss/carousel.scss */\"./src/scss/carousel.scss\");\n__webpack_require__(/*! ./src/scss/query.scss */\"./src/scss/query.scss\");\nmodule.exports = __webpack_require__(/*! ./src/scss/home.scss */\"./src/scss/home.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/scss/products.scss_./src/scss/login.scss_./src/scss/carousel.scss_./src/scss/query.scss_./src/scss/home.scss?");

/***/ })

/******/ });