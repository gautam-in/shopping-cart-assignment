import React from "../../../_snowpack/pkg/react.js";
import {Nav} from "../Nav/Nav.js";
import {NavMobile} from "../NavMobile/NavMobile.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import {useViewport} from "../../hooks/useViewport.js";
import logo from "../../../static/images/logo.png.proxy.js";
import "./Header.css.proxy.js";
export const Header = ({cartSize, popupProps}) => {
  const windowWidth = useViewport();
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header__logo"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo,
    alt: "Sabka Bazaar Logo"
  }))), windowWidth > 768 ? /* @__PURE__ */ React.createElement(Nav, {
    cartSize,
    popupProps
  }) : /* @__PURE__ */ React.createElement(NavMobile, {
    cartSize
  }));
};
export default Header;
