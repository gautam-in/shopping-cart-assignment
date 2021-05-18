import React from "react";
import "./Login.scss";
import Button from "../../components/UI/Button/Button";
export default function Login() {
  return (
    <div className="formContainer">
      <div className="form-heading-container">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="inputContainer">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label for="name" className="form__label">
            Email
          </label>
        </div>
        <div class="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <label for="name" className="form__label">
            Password
          </label>
        </div>
        <div className="form__group field">
          <Button text="Login" className="buttonStyle" />
        </div>
      </div>
    </div>
  );
}
