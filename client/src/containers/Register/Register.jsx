import React from "react";
import "./Register.scss";
import Button from "../../components/UI/Button/Button";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="form-heading-container">
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="inputContainer">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="first_name"
            name="first_name"
            id="first_name"
            required
          />
          <label for="first_name" className="form__label">
            First Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="last_name"
            name="last_name"
            id="last_name"
            required
          />
          <label for="last_name" className="form__label">
            Last Name
          </label>
        </div>
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
        <div class="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="confirm_password"
            name="confirm_password"
            id="confirm_password"
            required
          />
          <label for="name" className="form__label">
            Confirm Password
          </label>
        </div>
        <div className="form__group field">
          <Button text="Register" className="buttonStyle" />
        </div>
      </div>
    </div>
  );
}
