import React from "react";
import { useHistory } from "react-router";

import useForm from "../../customHooks/useForm";

import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";

import "./Login.scss";

const initialState = { email: "", password: "" };

function Login() {
  const history = useHistory();
  const emailExp = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  let rules = {
    email: ["required", emailExp, "Please provide a valid email"],
    password: ["required"],
  };

  const { inputs, errors, handleChange } = useForm(initialState, rules);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login called", inputs);
    history.push("/");
  };

  return (
    <div className="flexed login">
      <div>
        <h3>Login </h3>
        <div>Get access to your Orders, Wishlist and Recommendations</div>
      </div>
      <form onSubmit={handleLogin}>
        <FormField
          label="Email"
          type="text"
          name="email"
          id="email"
          value={inputs.email}
          errors={errors.email}
          onChange={handleChange}
          required
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          errors={errors.password}
          onChange={handleChange}
          required
        />
        <Button
          aria-label="Login button. All field are required to login"
          disabled={Object.keys(errors).length !== 0}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
