import React from "../../../_snowpack/pkg/react.js";
import "./Register.css.proxy.js";
const Register = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "register"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "register__header"
  }, /* @__PURE__ */ React.createElement("h2", null, "Sign Up"), /* @__PURE__ */ React.createElement("p", null, "We do not share your personal data with anyone")), /* @__PURE__ */ React.createElement("div", {
    className: "register__form"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ React.createElement("input", {
    name: "firstname",
    id: "firstname",
    type: "text",
    placeholder: "Firstname",
    autoFocus: true
  }), /* @__PURE__ */ React.createElement("input", {
    name: "lastname",
    id: "lastname",
    type: "text",
    placeholder: "Lastname"
  }), /* @__PURE__ */ React.createElement("input", {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Email"
  }), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password"
  }), /* @__PURE__ */ React.createElement("input", {
    name: "confirm-password",
    id: "confirm-password",
    type: "password",
    placeholder: "Confirm Password"
  }), /* @__PURE__ */ React.createElement("button", null, "Register"))));
};
export default Register;
