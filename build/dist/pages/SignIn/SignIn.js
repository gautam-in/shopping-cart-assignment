import React from "../../../_snowpack/pkg/react.js";
import "./SignIn.css.proxy.js";
const SignIn = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "signin"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "signin__header"
  }, /* @__PURE__ */ React.createElement("h2", null, "Login"), /* @__PURE__ */ React.createElement("p", null, "Get access to your Orders, Wishlist and Recommendations")), /* @__PURE__ */ React.createElement("div", {
    className: "signin__form"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ React.createElement("input", {
    name: "email",
    id: "email",
    type: "text",
    placeholder: "Email",
    autoFocus: true
  }), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password"
  }), /* @__PURE__ */ React.createElement("button", null, "Sign In"))));
};
export default SignIn;
