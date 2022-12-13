import React, { useState } from "react";
import "./signupForm.scss";

function SignUpForm() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formFields, setFormFields] = useState(initialValue);
  const [errors, setErrors] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formFields));
    setSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regx.test(values.email)) {
      errors.email = "This is not valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm password is required";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmPassword = "Password entered did not match!";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <div className="leftSection">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone</p>
      </div>
      <div className="rightSection">
        <form onSubmit={handleSubmit} novalidate="novalidate">
          <div>
            <input
              type="text"
              name="firstName"
              autocomplete="off"
              required
              onChange={handleChange}
            />
            <label for="firstName">
              <span>First Name</span>
            </label>
            <p className="error">{errors.firstName} xxxxx</p>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              autocomplete="off"
              required
              onChange={handleChange}
            />
            <label for="lastName">
              <span>Last Name</span>
            </label>
            <p className="error">{errors.lastName}</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              autocomplete="off"
              required
              onChange={handleChange}
            />
            <label for="email">
              <span>Email</span>
            </label>
            <p className="error">{errors.email}</p>
          </div>
          <div>
            <input
              type="password"
              name="password"
              autocomplete="off"
              required
              onChange={handleChange}
            />
            <label for="password">
              <span>Password</span>
            </label>
            <p className="error">{errors.password}</p>
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              autocomplete="off"
              required
              onChange={handleChange}
            />
            <label for="confirmPassword">
              <span>Confirm Password</span>
            </label>
            <p className="error">{errors.confirmPassword}</p>
          </div>
          <button type="submit" className="btn-cls login-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
