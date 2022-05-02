import React, { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { useNavigate } from "react-router-dom";
import "./login-form.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const requiredErrors = {
  email: "Email  is required.",
  password: "Password is required.",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidate() && formValid) {
      navigate("/products");
    }
  };

  const handleValidate = () => {
    let isFormValid = true;
    const errors = { ...formErrors };
    for (const property in formFields) {
      if (!formFields[property]) {
        errors[property] = requiredErrors[property];
        isFormValid = false;
      }
      setFormErrors(errors);
    }
    return isFormValid;
  };

  const handleErrors = (name, value) => {
    const errors = formErrors;

    switch (name) {
      case "email":
        if (!value) {
          errors.email = `${requiredErrors["email"]}`;
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
          errors.email = "Email is not valid.";
        } else {
          errors.email = "";
        }
        break;
      case "password":
        if (!value) {
          errors.password = `${requiredErrors["password"]}`;
        } else if (value.length < 6) {
          errors.password = "Password must have minimum 6 characters.";
        } else if (value.split(" ").length > 1) {
          errors.password = "Password should not contains space.";
        } else if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
          errors.password =
            "Password should contains alteast one character and a number.";
        } else {
          errors.password = "";
        }
        break;
      default:
        break;
    }
    const isFormValid = !!errors.email || !!errors.password ? false : true;
    setFormErrors(errors);
    setFormValid(isFormValid);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    handleErrors(name, value);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
          value={email}
          error={formErrors.email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          error={formErrors.password}
        />
        <div className="buttons-container">
          <Button
            style={{ width: "100%", padding: "0.5rem 0 0.5rem 0" }}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
