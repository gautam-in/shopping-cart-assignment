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

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProductToCart\": () => (/* binding */ addProductToCart),\n/* harmony export */   \"openCart\": () => (/* binding */ openCart)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n\nlet CART_ITEMS = [];\n\nfunction addProductToCart(product) {\n  // check if product already exists in cart\n  const productAlreadyExist = CART_ITEMS.filter(item => item.id === product.id).length > 0;\n\n  if (!productAlreadyExist) {\n    product.quantity = 1;\n    CART_ITEMS = [...CART_ITEMS, product]; // Update cart items number\n\n    const cartElm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.cart__btn--click');\n    cartElm.innerHTML = `<i class=\"fas fa-shopping-cart\"></i> ${CART_ITEMS.length} items`;\n  }\n}\n\nfunction openCart(e) {\n  if (e) {\n    e.preventDefault();\n  }\n\n  const modal = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('#myModal');\n  const body = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('body');\n  let span = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.close');\n\n  span.onclick = function () {\n    modal.style.display = 'none';\n    body.style.overflow = \"auto\";\n  };\n\n  let cartTotalPrice = 0;\n  modal.style.display = 'block';\n  body.style.overflow = \"hidden\";\n  const modalBody = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.modal__body');\n  const modalFooter = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.modal__footer');\n\n  if (CART_ITEMS.length === 0) {\n    // Show Empty cart\n    modalBody.innerHTML = '';\n    modalFooter.innerHTML = '';\n    const buttonCta = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('button', 'btn btn-primary', 'Start Shopping');\n    buttonCta.type = 'button';\n    buttonCta.addEventListener('click', () => {\n      modal.style.display = 'none';\n    });\n    modalFooter.appendChild(buttonCta);\n    modalFooter.style.margin = 0;\n    const div = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'flex-column flex-jc-c flex-ai-c', null, `<h2>No items in your cart</h2>\n        <p class=\"m-t-1\">Your favorite items are just a click away</p>`);\n    div.style.marginTop = '30%';\n    modalBody.appendChild(div);\n    modalBody.style.background = 'white';\n  } else {\n    // Build cart\n    const cartHeader = document.getElementById('cartHeader');\n    cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;\n    modalBody.innerHTML = '';\n    modalFooter.innerHTML = `<p>Promo code can be applied on payment page</p>\n                <button type=\"button\" class=\"btn flex flex-jc-sb\">\n                  Proceed to Checkout <span>Rs.187</span>\n                </button>`;\n    modalFooter.style.marginTop = '5px';\n\n    modalFooter.onclick = function () {\n      modal.style.display = 'none';\n    };\n\n    CART_ITEMS.map(product => {\n      const {\n        name,\n        imageURL,\n        price,\n        quantity\n      } = product;\n      const row = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'row');\n      modalBody.appendChild(row);\n      const img = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('img', 'img-modal');\n      img.src = imageURL;\n      img.alt = name;\n      row.appendChild(img);\n      const cartInfoDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'cart-info');\n      row.appendChild(cartInfoDiv);\n      const h2 = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('h2', '', name);\n      cartInfoDiv.appendChild(h2);\n      const controlButtonDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'control-buttons');\n      cartInfoDiv.appendChild(controlButtonDiv);\n      const minusIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('i', 'fas fa-minus-circle');\n      minusIcon.addEventListener('click', () => decreaseQuantity(product));\n      const plusIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('i', 'fas fa-plus-circle');\n      plusIcon.addEventListener('click', () => addQuantity(product));\n      const multiplier = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', quantity);\n      controlButtonDiv.appendChild(minusIcon);\n      controlButtonDiv.appendChild(multiplier);\n      controlButtonDiv.appendChild(plusIcon);\n      const spanCross = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', 'multiplier', 'x');\n      cartInfoDiv.appendChild(spanCross);\n      const totalPrice = price * quantity;\n      cartTotalPrice += totalPrice;\n      const spanPrice = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', `Rs.${totalPrice}`);\n      cartInfoDiv.appendChild(spanPrice);\n      const divPrice = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'price');\n      const spanPrice2 = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', `Rs.${totalPrice}`);\n      row.appendChild(divPrice);\n      divPrice.appendChild(spanPrice2);\n    }); // Append offer div\n\n    const divOffer = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'offer');\n    modalBody.appendChild(divOffer);\n    const offerImg = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('img');\n    offerImg.src = './static/images/lowest-price.png';\n    offerImg.alt = 'Offer Image';\n    span = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', \"You won't find it cheaper anywhere\");\n    divOffer.appendChild(offerImg);\n    divOffer.appendChild(span); // Update price on checkout button\n\n    const checkOutPriceElm = document.querySelector('.modal__footer button span');\n    checkOutPriceElm.innerText = `Rs.${cartTotalPrice}`;\n  }\n}\n\nfunction addQuantity(product) {\n  console.log({\n    product: product\n  });\n  CART_ITEMS.forEach(item => {\n    if (item.id === product.id) {\n      item.quantity += 1;\n    }\n  });\n  openCart();\n}\n\nfunction decreaseQuantity(product) {\n  CART_ITEMS.forEach(item => {\n    if (item.id === product.id && item.quantity > 1) {\n      item.quantity -= 1;\n    } else if (item.id === product.id && item.quantity == 1) {\n      CART_ITEMS = CART_ITEMS.filter(function (itemName) {\n        return itemName !== product;\n      });\n    }\n  });\n  cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;\n  const cartElm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.cart__btn--click');\n  cartElm.innerHTML = `<i class=\"fas fa-shopping-cart\"></i> ${CART_ITEMS.length} items`;\n  openCart();\n}\n\ndocument.querySelector('body').addEventListener('click', function (event) {\n  if (event.target.className.split(' ').includes('cart__btn--click')) {\n    // do your action on your 'li' or whatever it is you're listening for\n    openCart(event);\n  }\n});\n\n\n//# sourceURL=webpack://assignment/./src/js/cart.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchItemsByUrl\": () => (/* binding */ fetchItemsByUrl),\n/* harmony export */   \"getElementByProps\": () => (/* binding */ getElementByProps),\n/* harmony export */   \"insertAdjacentElement\": () => (/* binding */ insertAdjacentElement),\n/* harmony export */   \"createElementHelper\": () => (/* binding */ createElementHelper)\n/* harmony export */ });\nasync function fetchItemsByUrl(url) {\n  const response = await fetch(url);\n  let data = null;\n\n  if (response.ok) {\n    data = await response.json();\n  }\n\n  return data;\n}\n\nfunction getElementByProps(prop) {\n  return document.querySelector(prop);\n} // function getElementByProps(prop){\n//     return document.querySelectorAll(prop);\n// }\n\n\nfunction insertAdjacentElement(targetElement, position, content) {\n  return targetElement.insertAdjacentHTML(position, content);\n}\n\nfunction createElementHelper(type, classList, innerText, innerHTML) {\n  const customElement = document.createElement(type);\n  if (classList) customElement.classList = classList;\n  if (innerText) customElement.innerText = innerText;\n  if (innerHTML) customElement.innerHTML = innerHTML;\n  return customElement;\n}\n\n\n\n//# sourceURL=webpack://assignment/./src/js/utility.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/cart.js");
/******/ 	
/******/ })()
;