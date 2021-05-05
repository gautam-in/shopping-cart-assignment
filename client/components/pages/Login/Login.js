import React from "react";
import useForm from "../../customHooks/useForm";

function Login() {
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <div className="flexed">
      <div>
        <span>Login </span>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
