import React from "../../../_snowpack/pkg/react.js";
import searchImage from "../../../static/images/search.png.proxy.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import "./PageNotFound.css.proxy.js";
const PageNotFound = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "page-not-found"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "page-not-found__content"
  }, /* @__PURE__ */ React.createElement("div", null, "4"), /* @__PURE__ */ React.createElement("div", {
    className: "page-not-found__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: searchImage,
    alt: "404 page not found"
  })), /* @__PURE__ */ React.createElement("div", null, "4")), /* @__PURE__ */ React.createElement("section", {
    className: "links-to-try"
  }, /* @__PURE__ */ React.createElement("h2", null, "Page Not Found"), /* @__PURE__ */ React.createElement("h4", null, "Please try using the below links"), /* @__PURE__ */ React.createElement("div", {
    className: "available-links"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(Link, {
    to: "/signin"
  }, "SignIn"), /* @__PURE__ */ React.createElement(Link, {
    to: "/register"
  }, "Register"), /* @__PURE__ */ React.createElement(Link, {
    to: "/products/all"
  }, "Products"))));
};
export default PageNotFound;
