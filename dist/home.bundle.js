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

/***/ "./client/src/pages/home.js":
/*!**********************************!*\
  !*** ./client/src/pages/home.js ***!
  \**********************************/
/***/ (() => {

eval("//variable declarations\r\nlet bannerItems = \"\";\r\nlet productItems = \"\";\r\n\r\n//returns all the banners\r\nasync function bannersData() {\r\n    try {\r\n      let response = await fetch(\"http://localhost:5000/banners\");\r\n      let banners = await response.json(); // ok\r\n      displayBannerItems(banners);\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\nfunction displayBannerItems(banners){\r\n    for(let i=0; i<banners.length; i++)\r\n    {\r\n        if(i===0){\r\n            fillCrousalActiveElement(banners[0]);\r\n        }\r\n        else{\r\n            fillCrousalElements(banners[i])\r\n        }\r\n    }\r\n}\r\n\r\nfunction fillCrousalActiveElement(banners){\r\n    bannerItems += `<div class=\"item active offers\">\r\n    <img\r\n    src=\"../../..${banners.bannerImageUrl}\"\r\n    alt=\"${banners.bannerImageAlt}\"\r\n    width=100vw\r\n    height=100vh\r\n    \r\n  />\r\n  </div>`\r\n  document.querySelector(\".carousel-inner\").innerHTML = bannerItems;\r\n\r\n}\r\nfunction fillCrousalElements(banners){\r\n    \r\n    bannerItems += `<div class=\"item offers\">\r\n    <img\r\n    src=\"../../..${banners.bannerImageUrl}\"\r\n    alt=\"${banners.bannerImageAlt}\"\r\n    width=100vw\r\n    height=100vh\r\n  />\r\n  </div>`\r\n  document.querySelector(\".carousel-inner\").innerHTML = bannerItems;\r\n\r\n}\r\n\r\n\r\n//returns all the categories\r\nasync function productsData() {\r\n    try {\r\n      let response = await fetch(\"http://localhost:5000/categories\");\r\n      let categories = await response.json(); // ok\r\n      displayCategoriesItems(categories);\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\nfunction displayCategoriesItems(categories){\r\n    let enabledCategories = [];\r\n    for(let i=0; i<categories.length; i++)\r\n    {\r\n\r\n        if(categories[i].enabled){\r\n            enabledCategories.push(categories[i])\r\n\r\n        }\r\n        \r\n       \r\n    }\r\n    console.log(enabledCategories)\r\n\r\n    for(let i=0; i<enabledCategories.length; i++)\r\n    {\r\n            fillCategoriesActiveElement(enabledCategories[i])\r\n    }\r\n    \r\n}\r\n\r\nfunction fillCategoriesActiveElement(categories){\r\n    if(categories.order % 2 === 0){\r\n        productItems += `<div style=\"order: ${categories.order}\">\r\n      <ul class=\"product_home\">\r\n        <li><strong>${categories.name}</strong></li>\r\n        <li>${categories.description}</li>\r\n        <li><button><a href=\"./products.html\">Explore ${categories.key}</a></button></li>\r\n      </ul>\r\n      <img\r\n        width=\"300\"\r\n        height=\"300\"\r\n        class=\"prodcutsImages\"\r\n        src=\"../../..${categories.imageUrl}\"\r\n        alt=\"${categories.description}\"\r\n      /></div>`\r\n      \r\n    }\r\n    else{\r\n        productItems += `<div style=\"order: ${categories.order}\"><img\r\n        width=\"300\"\r\n        height=\"300\"\r\n        class=\"prodcutsImages\"\r\n        src=\"../../..${categories.imageUrl}\"\r\n        alt=\"${categories.description}\"\r\n      />\r\n      <ul class=\"product_home\">\r\n        <li><strong>${categories.name}</strong></li>\r\n        <li>${categories.description}</li>\r\n        <li><button><a href=\"#\">Explore ${categories.key}</a></button></li>\r\n      </ul></div>`\r\n    }\r\n    \r\n\r\n  document.querySelector(\".productsCategory\").innerHTML = productItems;\r\n\r\n}\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\",()=>{bannersData();productsData();});\r\n\n\n//# sourceURL=webpack://code-exercise/./client/src/pages/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/pages/home.js"]();
/******/ 	
/******/ })()
;