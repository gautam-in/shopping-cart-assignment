import React from "react";
import InputFormElement from "../../components/HtmlElements/InputFormElement";
import "./Login.scss";

export default function Login() {
  return (
    <div className="Login">
      <div className="Login--Header">
        <h2>Login</h2>
        <h4>Get access to your Orders, Wishlist and Recommendations</h4>
      </div>
      <div className="Login--container">
        <InputFormElement
          inputProps={{ type: "text", id: "email" }}
          labelProps={{ for: "email", labelText: "Email" }}
          labelText="Email"
        />
        <InputFormElement
          inputProps={{ type: "password", id: "password" }}
          labelProps={{ for: "password", labelText: "password" }}
          labelText="Password"
        />
        <button>Login</button>
      </div>
    </div>
  );
}
