import React from "react";
import "./Login.scss";
import Button from "../../components/UI/Button/Button";
export default function Login() {
  return (
    <div className="formContainer">
      <div className="formHeadingContainer">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="inputContainer">
        <div className="formGroup field">
          <input
            type="input"
            className="formField"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label for="name" className="formLabel">
            Email
          </label>
        </div>
        <div class="formGroup field">
          <input
            type="password"
            className="formField"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <label for="name" className="formLabel">
            Password
          </label>
        </div>
        <div className="formGroup field">
          <Button text="Login" className="buttonStyle" />
        </div>
      </div>
    </div>
  );
}
