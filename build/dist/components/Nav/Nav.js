import React from "../../../_snowpack/pkg/react.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import {HiShoppingCart} from "../../../_snowpack/pkg/react-icons/hi.js";
import "./Nav.css.proxy.js";
export const Nav = ({cartSize, popupProps}) => {
  const {setCartPopupToggle} = popupProps;
  const openCartPopup = () => {
    setCartPopupToggle(true);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "nav--left"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/products/all",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Products")), /* @__PURE__ */ React.createElement("div", {
    className: "nav--right"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/signin",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "SignIn"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/register",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "nav--cart"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: openCartPopup
  }, /* @__PURE__ */ React.createElement(HiShoppingCart, {
    className: "cart-icon"
  }), /* @__PURE__ */ React.createElement("div", null, cartSize, " items")))));
};
export default Nav;
