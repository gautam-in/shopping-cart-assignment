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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/scripts/loginRegister.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/loginRegister.js":
/*!*****************************************!*\
  !*** ./client/scripts/loginRegister.js ***!
  \*****************************************/
/*! exports provided: Login_Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login_Register\", function() { return Login_Register; });\nclass Login_Register extends HTMLElement {\n  constructor() {\n    super();\n  }\n\n  connectedCallback() {\n    if (this.hasAttribute('register')) this._isRegister = this.getAttribute('register');\n    this.innerHTML = `\n        <main id='main-container'>\n        <section id='title-container'>` + (this._isRegister === 'true' ? `<h2>SignUp</h2>` : `<h2>Login</h2>`) + (this._isRegister === 'true' ? `<p>We do not share your personal details with anyone</p>` : `<p>Get access to your Orders, Wishlists and Recommendations</p>`) + `</section>\n        <aside id=\"form-container\">\n        <form action = \"#\" method = \"post\">` + (this._isRegister === 'true' ? `\n            <label id=\"label\" for = \"firstname\">First Name</label>\n            <input type = \"text\" id = \"firstname\"><br />\n            <label id=\"label\" for = \"lastname\">Last Name</label> \n            <input type = \"text\" id = \"lastname\"><br />` : '') + `<label for = \"email\">Email</label>\n        <input type = \"email\" id = \"email\"><br> \n    \n        <label for = \"password\">Password</label> \n        <input type = \"password\" id = \"password\"><br>` + (this._isRegister === 'true' ? `<label for = \"confirm_password\">Confirm Password</label>\n            <input type = \"password\" id = \"confirm_password\"><br>` : '') + `<button type=\"submit\" id=\"submit-button\">` + (this._isRegister === 'true' ? `SignUp` : `Login`) + `\n        </button>\n        </aside>\n        </main>\n    </form> `;\n  }\n\n  attributeChangedCallback(name, oldVal, newVal) {\n    if (oldVal === newVal) return;\n\n    if (name === 'register') {\n      this._isRegister = newVal;\n    }\n  }\n\n  static get observedAttributes() {\n    return ['register'];\n  }\n\n}\ncustomElements.define('custom-login-register', Login_Register);\n\n//# sourceURL=webpack:///./client/scripts/loginRegister.js?");

/***/ })

/******/ });