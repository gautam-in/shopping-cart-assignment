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

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchItemsByUrl\": () => (/* binding */ fetchItemsByUrl),\n/* harmony export */   \"getElementByProps\": () => (/* binding */ getElementByProps),\n/* harmony export */   \"insertAdjacentElement\": () => (/* binding */ insertAdjacentElement),\n/* harmony export */   \"createElementHelper\": () => (/* binding */ createElementHelper)\n/* harmony export */ });\nasync function fetchItemsByUrl(url) {\n  const response = await fetch(url);\n  let data = null;\n\n  if (response.ok) {\n    data = await response.json();\n  }\n\n  return data;\n}\n\nfunction getElementByProps(prop) {\n  return document.querySelector(prop);\n} // function getElementByProps(prop){\n//     return document.querySelectorAll(prop);\n// }\n\n\nfunction insertAdjacentElement(targetElement, position, content) {\n  return targetElement.insertAdjacentHTML(position, content);\n}\n\nfunction createElementHelper(type, classList, innerText, innerHTML) {\n  const customElement = document.createElement(type);\n  if (classList) customElement.classList = classList;\n  if (innerText) customElement.innerText = innerText;\n  if (innerHTML) customElement.innerHTML = innerHTML;\n  return customElement;\n}\n\n\n\n//# sourceURL=webpack://assignment/./src/js/utility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/utility.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;