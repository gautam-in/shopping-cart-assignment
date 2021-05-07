import React from "react";
import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import useForm from "../../customHooks/useForm";

import "./Login.scss";

function Login() {
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("submit called");
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
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
