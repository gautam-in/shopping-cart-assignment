"use strict";
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 2140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "hc": () => (/* binding */ addQty),
/* harmony export */   "hT": () => (/* binding */ removeQty),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export cartList */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable brace-style */

/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

const INITIAL_STATE = {
  // {id, name , imgURL, description, qty, price}
  cartList: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    // add to cart action
    addToCart: (state, action) => {
      // if product is already present then update qty. Else add to cartList with qty : 1
      const isProductPresent = state.cartList.find(cart => cart.id === action.payload.id);

      if (isProductPresent) {
        // updated cart list
        const newCartList = state.cartList.map(cart => {
          if (cart.id === action.payload.id) {
            return _objectSpread(_objectSpread({}, cart), {}, {
              qty: cart.qty + 1
            });
          }

          return cart;
        });
        state.cartList = newCartList;
      } else {
        state.cartList.push(_objectSpread(_objectSpread({}, action.payload), {}, {
          qty: 1
        }));
      }
    },
    // addQty by id action
    addQty: (state, action) => {
      const newCartList = state.cartList.map(cart => {
        if (cart.id === action.payload) return _objectSpread(_objectSpread({}, cart), {}, {
          qty: cart.qty + 1
        });
        return cart;
      });
      state.cartList = newCartList;
    },
    // removeQty by id action
    removeQty: (state, action) => {
      // check if the delete clicked cart product id qty is 1
      const qtyIsOne = state.cartList.find(cart => {
        if (cart.id === action.payload && cart.qty === 1) {
          return true;
        }

        return false;
      }); // if qty is one then remove that product from cart.

      if (qtyIsOne) {
        const newCartList = state.cartList.filter(cart => cart.id !== action.payload);
        state.cartList = newCartList;
      } // else decrease qty with one.
      else {
        const newCartList = state.cartList.map(cart => {
          if (cart.id === action.payload) return _objectSpread(_objectSpread({}, cart), {}, {
            qty: cart.qty - 1
          });
          return cart;
        });
        state.cartList = newCartList;
      }
    }
  }
});
const {
  addToCart,
  addQty,
  removeQty
} = cartSlice.actions;
const cartList = state => state.cart.cartList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

/***/ })

};
;