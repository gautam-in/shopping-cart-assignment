exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CartList)
});

// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(3810);
// EXTERNAL MODULE: ./styles/CartList.module.css
var CartList_module = __webpack_require__(508);
var CartList_module_default = /*#__PURE__*/__webpack_require__.n(CartList_module);
// EXTERNAL MODULE: ../node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(2362);
// EXTERNAL MODULE: ../node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(8349);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/CartCard.module.css
var CartCard_module = __webpack_require__(8858);
var CartCard_module_default = /*#__PURE__*/__webpack_require__.n(CartCard_module);
// EXTERNAL MODULE: ./redux/features/cartSlice.js
var cartSlice = __webpack_require__(2140);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Cart/CartCard.jsx









function CartCard({
  id,
  name,
  imageURL,
  price,
  qty,
  totalPrice
}) {
  const dispatch = (0,external_react_redux_.useDispatch)(); // const [animateState, setAnimateState] = useState(true);

  function handleAddToCart() {
    dispatch((0,cartSlice/* addQty */.hc)(id));
  }

  function handleRemoveCart() {
    // if (qty === 1) setAnimateState(true);
    dispatch((0,cartSlice/* removeQty */.hT)(id));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (CartCard_module_default()).CartCardContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (CartCard_module_default()).CartProductImage,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: imageURL,
        objectFit: "contain",
        layout: "fill",
        alt: "Prodoct Image"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (CartCard_module_default()).CartProductDetails,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (CartCard_module_default()).CartProductName,
        children: name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (CartCard_module_default()).CartQtyAndPrice,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (CartCard_module_default()).MinusQty,
          children: /*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiMinusCircle */.LfR, {
            color: "red",
            size: "30",
            onClick: handleRemoveCart
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (CartCard_module_default()).CartProductQty,
          children: qty
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (CartCard_module_default()).AddQty,
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoIosAddCircle */.S$f, {
            color: "green",
            size: "30",
            onClick: handleAddToCart
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "x"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (CartCard_module_default()).ProductPrice,
          children: [price, "\xA0\u20B9"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (CartCard_module_default()).CartProductTotal,
      children: [totalPrice, "\xA0\u20B9"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Cart/CartList.jsx
/* eslint-disable react/no-unescaped-entities */








function CartList() {
  const cartList = (0,external_react_redux_.useSelector)(state => state.cart.cartList);

  function populateCart(cart) {
    return (
      /*#__PURE__*/
      // Fade from react reveal
      // appear
      jsx_runtime_.jsx((Fade_default()), {
        collapse: true,
        appear: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(CartCard, {
          id: cart.id,
          name: cart.name,
          imageURL: cart.imageURL,
          price: cart.price,
          qty: cart.qty,
          totalPrice: cart.qty * cart.price
        }, cart.id)
      }, cart.id)
    );
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (CartList_module_default()).CartListContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
      children: cartList && cartList.map(populateCart)
    }), cartList.length === 0 && 'No items in the cart', /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (CartList_module_default()).LowpriceBanner,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (CartList_module_default()).LowpriceImg,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/static/images/lowest-price.png",
          objectFit: "contain",
          layout: "fill",
          alt: "lowpriceimg"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (CartList_module_default()).LowpriceText,
        children: "You won't find cheaper anywhere"
      })]
    })]
  });
}

/***/ }),

/***/ 8858:
/***/ ((module) => {

// Exports
module.exports = {
	"CartCardContainer": "CartCard_CartCardContainer__3pHAZ",
	"CartProductImage": "CartCard_CartProductImage__1pJHt",
	"CartProductDetails": "CartCard_CartProductDetails__Bo3eK",
	"CartQtyAndPrice": "CartCard_CartQtyAndPrice__1Gbs6",
	"CartProductName": "CartCard_CartProductName__lGfHS",
	"CartProductTotal": "CartCard_CartProductTotal__1Y_9J"
};


/***/ }),

/***/ 508:
/***/ ((module) => {

// Exports
module.exports = {
	"LowpriceBanner": "CartList_LowpriceBanner__3Vdjw",
	"LowpriceImg": "CartList_LowpriceImg__1jq6T"
};


/***/ })

};
;