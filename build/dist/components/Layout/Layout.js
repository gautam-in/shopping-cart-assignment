import React from "../../../_snowpack/pkg/react.js";
import {Outlet} from "../../../_snowpack/pkg/react-router-dom.js";
import {Header, Footer} from "../index.js";
export const Layout = ({cartSize, popupProps}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    cartSize,
    popupProps
  }), /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(Footer, null));
};
export default Layout;
