import React from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import useForm from "../../customHooks/useForm";

import "./Login.scss";

const initialState = { email: "", password: "" };

function Login() {
  const history = useHistory();
  const { inputs, errors, handleChange } = useForm(
    initialState,
    Object.keys(initialState)
  );
  /* console.log("errors", errors); */
  const handleLogin = (e) => {
    e.preventDefault();
    const keys = Object.keys(inputs);
    console.log("submit called", keys);

    history.push("/home");
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
          onChange={handleChange}
          required
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <Button
          ariaLabel="Login button. All field are required to login"
          disabled={errors.length !== 0}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
