import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {CartItem} from "../CartItem/CartItem.js";
import {useViewport} from "../../hooks/useViewport.js";
import {IoMdClose} from "../../../_snowpack/pkg/react-icons/io.js";
import {GrFormNext} from "../../../_snowpack/pkg/react-icons/gr.js";
import lowestPriceBanner from "../../../static/images/lowest-price.png.proxy.js";
import "./CartPopup.css.proxy.js";
export const CartPopup = ({cartProps, popupProps}) => {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const windowWidth = useViewport();
  const {cartState, cartDispatch} = cartProps;
  const {cartPopupToggle, setCartPopupToggle} = popupProps;
  const getCartItem = (product) => {
    return /* @__PURE__ */ React.createElement(CartItem, {
      key: product.id,
      product,
      cartDispatch
    });
  };
  const closeCartPopup = () => {
    setCartPopupToggle(false);
  };
  useEffect(() => {
    setTotalCartValue(cartState.reduce((accumulator, product) => product.qty ? accumulator + product.price * product.qty : accumulator + product.price, 0));
  }, [cartState]);
  return windowWidth < 768 ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, cartPopupToggle ? /* @__PURE__ */ React.createElement("div", {
    className: "overlay",
    onClick: closeCartPopup
  }) : null, /* @__PURE__ */ React.createElement("div", {
    className: `cart-popup${cartPopupToggle ? " show-popup" : " hide-popup"}`
  }, /* @__PURE__ */ React.createElement("header", {
    className: "cart-popup__header"
  }, /* @__PURE__ */ React.createElement("h4", null, cartState.length > 0 ? `My Cart (${cartState.length} items)` : `My Cart`), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "popup-close"
  }, /* @__PURE__ */ React.createElement(IoMdClose, {
    className: "close-popup-icon",
    onClick: closeCartPopup
  }))), cartState.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "cart-popup__body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cart-popup__details"
  }, cartState.map((product) => {
    return getCartItem(product);
  }), /* @__PURE__ */ React.createElement("div", {
    className: "cart-popup__lowest-price-banner"
  }, /* @__PURE__ */ React.createElement("img", {
    src: lowestPriceBanner,
    alt: "Lowest price guaranteed"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "cart-popup__checkout"
  }, /* @__PURE__ */ React.createElement("p", null, "Promo code can be applied on payment page"), /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement("span", null, "Proceed to checkout"), /* @__PURE__ */ React.createElement("span", null, "Rs ", totalCartValue), /* @__PURE__ */ React.createElement(GrFormNext, {
    className: "proceed-icon"
  })))) : /* @__PURE__ */ React.createElement("div", {
    className: "cart-popup__body--empty"
  }, /* @__PURE__ */ React.createElement("h1", null, "No items in your cart"), /* @__PURE__ */ React.createElement("p", null, "Your favourite items are just a click away"), /* @__PURE__ */ React.createElement(Link, {
    to: "/products/all",
    onClick: closeCartPopup
  }, "Start Shopping"))));
};
export default CartPopup;
