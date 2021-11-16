(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 5372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Products),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(3218);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./styles/CategoryFilter.module.css
var CategoryFilter_module = __webpack_require__(802);
var CategoryFilter_module_default = /*#__PURE__*/__webpack_require__.n(CategoryFilter_module);
// EXTERNAL MODULE: ./redux/features/productFilterSlice.js
var productFilterSlice = __webpack_require__(8417);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/CategoryFilter/CategoryFilter.js







function CategoryFilter({
  id,
  name
}) {
  const [isLessThan700px] = (0,react_.useMediaQuery)('(max-width: 700px)');
  const dispatch = (0,external_react_redux_.useDispatch)();
  const filterList = (0,external_react_redux_.useSelector)(state => state.productFilter.appliedFilters);

  function clickHandler(categoryid) {
    dispatch((0,productFilterSlice/* addOrRemoveFilter */.wJ)(categoryid));
  }

  if (isLessThan700px) {
    return /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
      className: `${filterList !== null && filterList !== void 0 && filterList.includes(id) ? (CategoryFilter_module_default()).active : ''}`,
      onClick: () => {
        clickHandler(id);
      },
      width: "100%",
      children: name
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${(CategoryFilter_module_default()).CategoryFilterContainer} ${filterList !== null && filterList !== void 0 && filterList.includes(id) ? (CategoryFilter_module_default()).active : ''}`,
    onClick: () => {
      clickHandler(id);
    },
    children: name
  });
}

/* harmony default export */ const CategoryFilter_CategoryFilter = (/*#__PURE__*/external_react_default().memo(CategoryFilter));
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(1888);
;// CONCATENATED MODULE: ./components/CategoryFilter/CategoryFilterList.js








function CategoryFilterList() {
  const [isLessThan700px] = (0,react_.useMediaQuery)('(max-width: 700px)');
  const {
    0: categoryList,
    1: setCategoryList
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const fetchData = () => {
      (0,api/* default */.Z)('categories').then(res => setCategoryList(res));
    };

    fetchData();
  }, []);

  function populateCategoryList(category) {
    return /*#__PURE__*/jsx_runtime_.jsx(CategoryFilter_CategoryFilter, {
      id: category.id,
      name: category.name
    }, category.id);
  }

  if (isLessThan700px) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
        width: "100vw",
        as: react_.Button,
        rightIcon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsChevronDoubleDown */.t3p, {}),
        children: "Categories"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuList, {
        width: "100vw",
        children: categoryList && categoryList.map(populateCategoryList)
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: categoryList && categoryList.map(populateCategoryList)
  });
}
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
// EXTERNAL MODULE: ./styles/ProductCard.module.css
var ProductCard_module = __webpack_require__(2765);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
// EXTERNAL MODULE: ./redux/features/cartSlice.js
var cartSlice = __webpack_require__(2140);
;// CONCATENATED MODULE: ./components/Products/ProductCard.js







function ProductCard({
  id,
  name,
  imageURL,
  description,
  price
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const toast = (0,react_.useToast)();

  function addToCartHandler() {
    dispatch((0,cartSlice/* addToCart */.Xq)({
      id,
      name,
      imageURL,
      description,
      price
    }));
    toast({
      title: 'Product added to cart',
      description: name,
      status: 'success',
      duration: 800,
      isClosable: true
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ProductCard_module_default()).ProductCardContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductCard_module_default()).ProductName,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: name
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductCard_module_default()).ProductImage,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: imageURL,
        layout: "fill",
        objectFit: "contain",
        alt: name
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductCard_module_default()).ProductDescription,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ProductCard_module_default()).ProductPriceAndButton,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
        width: "100%",
        colorScheme: "red",
        bgColor: "var(--category-banner-card-button-color)",
        size: "sm",
        borderRadius: 0,
        _hover: {
          bg: 'var(--white)',
          color: 'var(--primary)',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0 0.5rem 1rem'
        },
        onClick: addToCartHandler,
        isFullWidth: true,
        children: ["Buy now @ Rs. ", price]
      })
    })]
  });
}
// EXTERNAL MODULE: ./styles/ProductList.module.css
var ProductList_module = __webpack_require__(1513);
var ProductList_module_default = /*#__PURE__*/__webpack_require__.n(ProductList_module);
;// CONCATENATED MODULE: ./components/Products/ProductList.js
/* eslint-disable max-len */





function ProductList({
  productsData
}) {
  const appliedFilters = (0,external_react_redux_.useSelector)(state => state.productFilter.appliedFilters);
  const {
    0: filteredProducts,
    1: setFilteredProducts
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    // Filter products from all products which have same category as appliedFilters
    const filteredProductList = productsData.filter(product => {
      if (appliedFilters.includes(product.category)) {
        return true;
      }

      return false;
    }); // setting filtered products to state

    setFilteredProducts(filteredProductList);
  }, [appliedFilters, productsData]);

  function populateProducts(product) {
    return /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
      id: product.id,
      name: product.name,
      imageURL: product.imageURL,
      description: product.description,
      category: product.category,
      price: product.price
    }, product.id);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (ProductList_module_default()).ProductListContainer,
    "data-testid": "product-list",
    children: filteredProducts.length >= 1 ? filteredProducts.map(populateProducts) : productsData.map(populateProducts)
  });
}
// EXTERNAL MODULE: ./styles/Products.module.css
var Products_module = __webpack_require__(1183);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
;// CONCATENATED MODULE: ./pages/products.js





function Products({
  productsData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Products_module_default()).ProductsContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Products_module_default()).CategoryFiltorSection,
      children: /*#__PURE__*/jsx_runtime_.jsx(CategoryFilterList, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Products_module_default()).ProductListContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx(ProductList, {
        productsData: productsData
      })
    })]
  });
}
async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      productsData: data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 12 hours
    revalidate: 43200 // In seconds

  };
}

/***/ }),

/***/ 1888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SERVER_URI = "http://localhost:5000" || 0;

const service = (serviceName, params) => {
  const service = {
    products: {
      url: `${SERVER_URI}/products`
    },
    categories: {
      url: `${SERVER_URI}/categories`
    },
    banners: {
      url: `${SERVER_URI}/banners`
    },
    addToCart: {
      method: 'POST',
      url: `${SERVER_URI}/addToCart`,
      body: params
    }
  };
  return service[serviceName];
};

const customRequestHandler = async (serviceName, data = {}) => {
  const {
    method = 'GET',
    url,
    body
  } = service(serviceName, data);
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body)
  });
  return await response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customRequestHandler);

/***/ }),

/***/ 802:
/***/ ((module) => {

// Exports
module.exports = {
	"CategoryFilterContainer": "CategoryFilter_CategoryFilterContainer__34Mc1",
	"active": "CategoryFilter_active__3k8Gc"
};


/***/ }),

/***/ 2765:
/***/ ((module) => {

// Exports
module.exports = {
	"ProductCardContainer": "ProductCard_ProductCardContainer__3Dc75",
	"ProductPriceAndButton": "ProductCard_ProductPriceAndButton__2UYWU",
	"ProductName": "ProductCard_ProductName__eK-iu",
	"ProductPrice": "ProductCard_ProductPrice__hJD1_",
	"ProductImage": "ProductCard_ProductImage__Hxd5J",
	"ProductDescription": "ProductCard_ProductDescription__2H64q"
};


/***/ }),

/***/ 1513:
/***/ ((module) => {

// Exports
module.exports = {
	"ProductListContainer": "ProductList_ProductListContainer__39H7D"
};


/***/ }),

/***/ 1183:
/***/ ((module) => {

// Exports
module.exports = {
	"ProductsContainer": "Products_ProductsContainer__kJGWM",
	"CategoryFiltorSection": "Products_CategoryFiltorSection__2iCZj",
	"ProductListContainer": "Products_ProductListContainer__1yodN"
};


/***/ }),

/***/ 3426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [780,579,188,218,140,417], () => (__webpack_exec__(5372)));
module.exports = __webpack_exports__;

})();