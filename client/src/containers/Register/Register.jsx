import React from "react";
import "./Register.scss";
import Button from "../../components/UI/Button/Button";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="formHeadingContainer">
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="inputContainer">
        <div className="formGroup field">
          <input
            type="input"
            className="formField"
            placeholder="first_name"
            name="first_name"
            id="first_name"
            required
          />
          <label for="first_name" className="formLabel">
            First Name
          </label>
        </div>
        <div className="formGroup field">
          <input
            type="input"
            className="formField"
            placeholder="last_name"
            name="last_name"
            id="last_name"
            required
          />
          <label for="last_name" className="formLabel">
            Last Name
          </label>
        </div>
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
        <div class="formGroup field">
          <input
            type="password"
            className="formField"
            placeholder="confirm_password"
            name="confirm_password"
            id="confirm_password"
            required
          />
          <label for="name" className="formLabel">
            Confirm Password
          </label>
        </div>
        <div className="formGroup field">
          <Button text="Register" className="buttonStyle" />
        </div>
      </div>
    </div>
  );
}
