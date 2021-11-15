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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/js/cart.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n\n\n\n\n//# sourceURL=webpack://assignment/./src/js/app.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProductToCart\": () => (/* binding */ addProductToCart),\n/* harmony export */   \"openCart\": () => (/* binding */ openCart)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n\nlet CART_ITEMS = [];\n\nfunction addProductToCart(product) {\n  // check if product already exists in cart\n  const productAlreadyExist = CART_ITEMS.filter(item => item.id === product.id).length > 0;\n\n  if (!productAlreadyExist) {\n    product.quantity = 1;\n    CART_ITEMS = [...CART_ITEMS, product]; // Update cart items number\n\n    const cartElm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.cart__btn--click');\n    cartElm.innerHTML = `<i class=\"fas fa-shopping-cart\"></i> ${CART_ITEMS.length} items`;\n  }\n}\n\nfunction openCart(e) {\n  if (e) {\n    e.preventDefault();\n  }\n\n  const modal = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('#myModal');\n  const body = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('body');\n  let span = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.close');\n\n  span.onclick = function () {\n    modal.style.display = 'none';\n    body.style.overflow = \"auto\";\n  };\n\n  let cartTotalPrice = 0;\n  modal.style.display = 'block';\n  body.style.overflow = \"hidden\";\n  const modalBody = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.modal__body');\n  const modalFooter = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.modal__footer');\n\n  if (CART_ITEMS.length === 0) {\n    // Show Empty cart\n    modalBody.innerHTML = '';\n    modalFooter.innerHTML = '';\n    const buttonCta = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('button', 'btn btn-primary', 'Start Shopping');\n    buttonCta.type = 'button';\n    buttonCta.addEventListener('click', () => {\n      modal.style.display = 'none';\n    });\n    modalFooter.appendChild(buttonCta);\n    modalFooter.style.margin = 0;\n    const div = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'flex-column flex-jc-c flex-ai-c', null, `<h2>No items in your cart</h2>\n        <p class=\"m-t-1\">Your favorite items are just a click away</p>`);\n    div.style.marginTop = '30%';\n    modalBody.appendChild(div);\n    modalBody.style.background = 'white';\n  } else {\n    // Build cart\n    const cartHeader = document.getElementById('cartHeader');\n    cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;\n    modalBody.innerHTML = '';\n    modalFooter.innerHTML = `<p>Promo code can be applied on payment page</p>\n                <button type=\"button\" class=\"btn flex flex-jc-sb\">\n                  Proceed to Checkout <span>Rs.187</span>\n                </button>`;\n    modalFooter.style.marginTop = '5px';\n\n    modalFooter.onclick = function () {\n      modal.style.display = 'none';\n    };\n\n    CART_ITEMS.map(product => {\n      const {\n        name,\n        imageURL,\n        price,\n        quantity\n      } = product;\n      const row = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'row');\n      modalBody.appendChild(row);\n      const img = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('img', 'img-modal');\n      img.src = imageURL;\n      img.alt = name;\n      row.appendChild(img);\n      const cartInfoDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'cart-info');\n      row.appendChild(cartInfoDiv);\n      const h2 = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('h2', '', name);\n      cartInfoDiv.appendChild(h2);\n      const controlButtonDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'control-buttons');\n      cartInfoDiv.appendChild(controlButtonDiv);\n      const minusIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('i', 'fas fa-minus-circle');\n      minusIcon.addEventListener('click', () => decreaseQuantity(product));\n      const plusIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('i', 'fas fa-plus-circle');\n      plusIcon.addEventListener('click', () => addQuantity(product));\n      const multiplier = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', quantity);\n      controlButtonDiv.appendChild(minusIcon);\n      controlButtonDiv.appendChild(multiplier);\n      controlButtonDiv.appendChild(plusIcon);\n      const spanCross = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', 'multiplier', 'x');\n      cartInfoDiv.appendChild(spanCross);\n      const totalPrice = price * quantity;\n      cartTotalPrice += totalPrice;\n      const spanPrice = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', `Rs.${totalPrice}`);\n      cartInfoDiv.appendChild(spanPrice);\n      const divPrice = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'price');\n      const spanPrice2 = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', `Rs.${totalPrice}`);\n      row.appendChild(divPrice);\n      divPrice.appendChild(spanPrice2);\n    }); // Append offer div\n\n    const divOffer = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('div', 'offer');\n    modalBody.appendChild(divOffer);\n    const offerImg = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('img');\n    offerImg.src = './static/images/lowest-price.png';\n    offerImg.alt = 'Offer Image';\n    span = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElementHelper)('span', '', \"You won't find it cheaper anywhere\");\n    divOffer.appendChild(offerImg);\n    divOffer.appendChild(span); // Update price on checkout button\n\n    const checkOutPriceElm = document.querySelector('.modal__footer button span');\n    checkOutPriceElm.innerText = `Rs.${cartTotalPrice}`;\n  }\n}\n\nfunction addQuantity(product) {\n  console.log({\n    product: product\n  });\n  CART_ITEMS.forEach(item => {\n    if (item.id === product.id) {\n      item.quantity += 1;\n    }\n  });\n  openCart();\n}\n\nfunction decreaseQuantity(product) {\n  CART_ITEMS.forEach(item => {\n    if (item.id === product.id && item.quantity > 1) {\n      item.quantity -= 1;\n    } else if (item.id === product.id && item.quantity == 1) {\n      CART_ITEMS = CART_ITEMS.filter(function (itemName) {\n        return itemName !== product;\n      });\n    }\n  });\n  cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;\n  const cartElm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.getElementByProps)('.cart__btn--click');\n  cartElm.innerHTML = `<i class=\"fas fa-shopping-cart\"></i> ${CART_ITEMS.length} items`;\n  openCart();\n}\n\ndocument.querySelector('body').addEventListener('click', function (event) {\n  if (event.target.className.split(' ').includes('cart__btn--click')) {\n    // do your action on your 'li' or whatever it is you're listening for\n    openCart(event);\n  }\n});\n\n\n//# sourceURL=webpack://assignment/./src/js/cart.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/js/cart.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n\n\nconst DOM_TEMPLATE_TYPE = {\n  category: 'category',\n  banner: 'banner',\n  product: 'product'\n};\n\nasync function getSortedItems(url) {\n  const itemResponse = await (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.fetchItemsByUrl)(url);\n  return itemResponse.sort((a, b) => a.order - b.order);\n}\n\nasync function insertElementToDom(elements, domType, parentElement, position, getTemplate) {\n  const itemContent = elements.map((item, index) => getDomTemplate(domType, item, index, elements.length, getTemplate)).join('');\n  const itemTarget = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.getElementByProps)(parentElement);\n  (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.insertAdjacentElement)(itemTarget, position, itemContent);\n  return true;\n}\n\nfunction getDomTemplate(type, entity, indexOfEntity, entityLength, getTemplate) {\n  let template = '';\n\n  switch (type) {\n    case 'category':\n      template = getTemplate(entity, indexOfEntity);\n      break;\n\n    case 'banner':\n      template = getTemplate(entity, indexOfEntity, entityLength);\n      break;\n\n    case 'product':\n      template = getTemplate(entity, indexOfEntity, entityLength);\n      break;\n\n    default:\n      throw new Error('invalid template');\n  }\n\n  return template;\n}\n\nfunction getCategoryTemplate(entity, index) {\n  if (entity.enabled) {\n    return `<article id=\"${entity.id}\" class=\"category__container \n    ${index % 2 === 0 ? 'container__row--reverse' : ''}\">\n  <img class=\"category__image\" src=\"${entity.imageUrl}\" alt=\"fruit category\">\n  <div class=\"category-text__wrapper\">\n    <div class=\"category__title\">${entity.name}</div>\n    <div class=\"category__description\">${entity.description}</div>\n    <button class=\"category__button btn\">Explore ${entity.key}</button>\n  </div>\n</article>`;\n  }\n\n  return '';\n}\n\nfunction getBannerSlides(banner, index, bannerLength) {\n  const currentSlideNo = index + 1;\n  let prevSlide = '';\n  let nextSlide = currentSlideNo;\n\n  if (currentSlideNo === 1) {\n    prevSlide = bannerLength;\n    nextSlide++;\n  } else if (currentSlideNo === bannerLength) {\n    nextSlide = 1;\n    prevSlide = currentSlideNo - 1;\n  } else {\n    nextSlide = currentSlideNo + 1;\n    prevSlide = currentSlideNo - 1;\n  }\n\n  return `<li id=\"carousel__slide${currentSlideNo}\" tabindex=\"0\" class=\"carousel__slide\">\n         <img class=\"carousel__image\" src=\"${banner.bannerImageUrl}\" alt=\"${banner.bannerImageAlt}\">\n    <div class=\"carousel__snapper\">\n      <a href=\"#carousel__slide${prevSlide}\"\n         class=\"carousel__prev\">Go to previous slide</a>\n      <a href=\"#carousel__slide${nextSlide}\"\n         class=\"carousel__next\">Go to next slide</a>\n    </div>\n  </li>`;\n}\n\nfunction getBannerControls(banner, index) {\n  index++;\n  return `<li class=\"carousel__navigation-item\">\n    <a href=\"#carousel__slide${index}\"\n      class=\"carousel__navigation-button\">Go to slide ${index}</a>\n  </li>`;\n} // function getProductTemplate(product, index) {\n//   return `<div id=\"${index}\" class=\"card\">\n//             <h2>${product.name} </h2>\n//             <img class=\"img-cat\" src=\"${product.imageURL}\"\n//             alt=\"${product.name}\">\n//             <p class=\"card__subtitle\">\n//             ${product.description}\n//             </p>\n//             <div class=\"products-container__cta\">\n//               <span class=\"desktop-show\">MRP Rs.${product.price}</span>\n//               <button class=\"btn button-primary add-product\" type=\"button\">Buy Now\n//                 <span class=\"mobile-show\">@ MRP Rs.${product.price} </span>\n//               </button>\n//             </div>\n//           </div>`;\n// }\n\n\nfunction getProductTemplate(products) {\n  const productSection = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.getElementByProps)('#products');\n  products.forEach((product, index) => {\n    const {\n      name,\n      imageURL,\n      description,\n      price\n    } = product;\n    const cardElement = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('div', 'card');\n    const h2 = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('h2', '', name);\n    const cardImg = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('img', 'img-cat');\n    cardImg.src = imageURL;\n    cardImg.alt = name;\n    const cardSubtitle = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('p', 'card__subtitle', description);\n    const ctaDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('div', 'products__container__cta');\n    const spanMrp = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('span', 'desktop-show', `MRP Rs.${price}`);\n    const ctaBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElementHelper)('button', 'button--primary btn', undefined, `Buy Now <span class=\"mobile-show\">@ MRP Rs.${price} </span>`);\n    ctaBtn.type = 'button';\n    ctaBtn.addEventListener('click', () => (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.addProductToCart)(product));\n    ctaDiv.appendChild(spanMrp);\n    ctaDiv.appendChild(ctaBtn);\n    cardElement.appendChild(h2);\n    cardElement.appendChild(cardImg);\n    cardElement.appendChild(cardSubtitle);\n    cardElement.appendChild(ctaDiv);\n    productSection.appendChild(cardElement);\n  });\n}\n\nasync function loadHome() {\n  const banners = await getSortedItems('http://localhost:5500/shopping-cart-assignment/server/banners/index.get.json');\n  await insertElementToDom(banners, 'banner', '#carousel__viewport', 'afterbegin', getBannerSlides);\n  await insertElementToDom(banners, DOM_TEMPLATE_TYPE.banner, '#carousel__navigation-list', 'afterbegin', getBannerControls);\n  const categories = await getSortedItems('http://localhost:5500/shopping-cart-assignment/server/categories/index.get.json');\n  await insertElementToDom(categories, DOM_TEMPLATE_TYPE.category, '#category__wrapper-container', 'afterbegin', getCategoryTemplate);\n}\n\nasync function loadProducts() {\n  const products = await (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.fetchItemsByUrl)('http://localhost:5500/shopping-cart-assignment/server/products/index.get.json');\n  getProductTemplate(products);\n}\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  switch (document.title) {\n    case 'Sabka Bazar':\n      loadHome();\n      break;\n\n    case 'Products':\n      loadProducts();\n      break;\n\n    default:\n      console.log('loaded');\n  }\n});\n\n//# sourceURL=webpack://assignment/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;