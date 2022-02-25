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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/scripts/categories.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/categories.js":
/*!**************************************!*\
  !*** ./client/scripts/categories.js ***!
  \**************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./client/scripts/utils.js\");\n\nclass Category extends HTMLElement {\n  constructor() {\n    super();\n  }\n\n  async connectedCallback() {\n    this.innerHTML = `\n        <main class=\"categories-container\">\n        <section class=\"category-element\"></section>\n        <script src=\"text/x-handlebars-template\" id=\"cat-template\">\n        {{#each items}}\n        {{#if (isEven @index)}}\n        <img class=\"cat-img\" src={{this.imageUrl}} alt={{this.name}}/>\n        <aside class=\"side-content\">\n        <h4>{{this.name}}</h4>\n        <p>{{this.description}}</p>\n        <button class=\"cat-button\" id={{this.id}}>Explore {{this.name}}</button>\n        </aside>\n        {{else}}\n        <aside class=\"side-content\">\n        <h4>{{this.name}}</h4>\n        <p>{{this.description}}</p>\n        <button class=\"cat-button\" id={{this.id}}>Explore {{this.name}}</button>\n        </aside>\n        <img class=\"cat-img\" src={{this.imageUrl}} alt={{this.name}}/>\n        {{/if}}\n        {{/each}}\n        </script>\n        </main>\n        `;\n    const categories = await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])('http://localhost:5000/categories');\n    let categoryEle = document.querySelector('.category-element');\n    categoryEle.addEventListener('click', event => redirectToProduct(event)); //handlebar helper for checking odd/even index\n\n    Handlebars.registerHelper('isEven', function (index) {\n      return index % 2 === 0;\n    });\n    let template = Handlebars.compile(document.querySelector('#cat-template').innerHTML);\n    let data = template({\n      items: categories\n    });\n    document.querySelector('.category-element').innerHTML += data; //function definitions\n\n    function redirectToProduct(event) {\n      if (event.target.classList[0] === 'cat-button') {\n        window.localStorage.setItem('categoryId', event.target.id);\n        window.location.href = '../views/products.html';\n      }\n    }\n  }\n\n}\ncustomElements.define('categories-view', Category);\n\n//# sourceURL=webpack:///./client/scripts/categories.js?");

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