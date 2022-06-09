import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {CartItem} from "../../components/index.js";
import {GrFormNext} from "../../../_snowpack/pkg/react-icons/gr.js";
import lowestPriceBanner from "../../../static/images/lowest-price.png.proxy.js";
import "./Cart.css.proxy.js";
const Cart = ({cartState, cartDispatch}) => {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const getCartItem = (product) => {
    return /* @__PURE__ */ React.createElement(CartItem, {
      key: product.id,
      product,
      cartDispatch
    });
  };
  useEffect(() => {
    setTotalCartValue(cartState.reduce((accumulator, product) => product.qty ? accumulator + product.price * product.qty : accumulator + product.price, 0));
  }, [cartState]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "cart"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "cart__header"
  }, cartState.length > 0 ? `My Cart (${cartState.length} items)` : `My Cart`), cartState.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "cart__body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cart__details"
  }, cartState.map((product) => {
    return getCartItem(product);
  }), /* @__PURE__ */ React.createElement("div", {
    className: "cart__lowest-price-banner"
  }, /* @__PURE__ */ React.createElement("img", {
    src: lowestPriceBanner,
    alt: "Lowest price guaranteed"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "cart__checkout"
  }, /* @__PURE__ */ React.createElement("p", null, "Promo code can be applied on payment page"), /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement("span", null, "Proceed to checkout"), /* @__PURE__ */ React.createElement("span", null, "Rs ", totalCartValue), /* @__PURE__ */ React.createElement(GrFormNext, {
    className: "proceed-icon"
  })))) : /* @__PURE__ */ React.createElement("div", {
    className: "cart__body--empty"
  }, /* @__PURE__ */ React.createElement("h1", null, "No items in your cart"), /* @__PURE__ */ React.createElement("p", null, "Your favourite items are just a click away"), /* @__PURE__ */ React.createElement(Link, {
    to: "/products/all"
  }, "Start Shopping")));
};
export default Cart;
