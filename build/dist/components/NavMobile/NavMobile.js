import React, {useState} from "../../../_snowpack/pkg/react.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import {HiShoppingCart} from "../../../_snowpack/pkg/react-icons/hi.js";
import "./NavMobile.css.proxy.js";
export const NavMobile = ({cartSize}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navMenu = isMobileNavOpen ? "nav--mobile__links show-mobile-nav-menu" : "nav--mobile__links hide-mobile-nav-menu";
  const iconStyleOpen = {backgroundColor: "#f2f3f4"};
  const iconStyleClose = {backgroundColor: "#fff"};
  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const handleClick = () => {
    setIsMobileNavOpen(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "nav--mobile",
    onClick: handleMobileNav,
    style: isMobileNavOpen ? iconStyleOpen : iconStyleClose
  }, /* @__PURE__ */ React.createElement(HiShoppingCart, {
    className: "cart-icon--mobile"
  })), /* @__PURE__ */ React.createElement("main", {
    className: navMenu,
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/products/all",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Products"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/signin",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Sign In"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/register",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Register"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/cart",
    className: ({isActive}) => isActive ? "activeLink" : "inactiveLink"
  }, "Cart ", cartSize > 0 ? `(${cartSize} items)` : null)), cartSize > 0 && /* @__PURE__ */ React.createElement("span", {
    className: "cart-size-indicator"
  }, cartSize));
};
export default NavMobile;
