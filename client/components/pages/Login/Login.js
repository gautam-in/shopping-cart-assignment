import React from "react";
import { useHistory } from "react-router";

import useForm from "../../../customHooks/useForm";

import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import {
  loginButton,
  emailRegex,
  loginEmailLabel,
  loginPasswordLabel,
  emailRegexError,
} from "../../../constant";

import "./Login.scss";

const initialState = { email: "", password: "" };

function Login() {
  const history = useHistory();

  let rules = {
    email: ["required", emailRegex, emailRegexError],
    password: ["required"],
  };

  const { inputs, errors, handleChange } = useForm(initialState, rules);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login called", inputs);
    if (Object.keys(errors).length === 0) {
      history.push("/");
    }
  };

  return (
    <div className="flexed login">
      <div>
        <h1>Login </h1>
        <h2>Get access to your Orders, Wishlist and Recommendations</h2>
      </div>
      <form onSubmit={handleLogin} method="POST">
        <FormField
          label={loginEmailLabel}
          type="text"
          name="email"
          id="email"
          value={inputs.email}
          errors={errors.email}
          onChange={handleChange}
          required
        />
        <FormField
          label={loginPasswordLabel}
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          errors={errors.password}
          onChange={handleChange}
          required
        />
        <Button
        //disabled={Object.keys(errors).length !== 0}
        >
          {loginButton}
        </Button>
      </form>
    </div>
  );
}

export default Login;
