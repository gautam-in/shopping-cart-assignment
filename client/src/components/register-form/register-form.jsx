import React, { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { useNavigate } from "react-router-dom";
import "./register-form.styles.css";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const requiredErrors = {
  firstName: "First name is required.",
  lastName: "Last name is required.",
  email: "Email  is required.",
  password: "Password is required.",
  confirmPassword: "First name is required.",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, firstName, confirmPassword, lastName } = formFields;
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
      if (!formFields[property] && property !== "confirmPassword") {
        errors[property] = requiredErrors[property];
        isFormValid = false;
      }
      setFormErrors(errors);
    }
    return isFormValid;
  };

  const handleErrors = (name, value) => {
    let errors = formErrors;

    switch (name) {
      case "firstName":
        errors.firstName = !value ? `${requiredErrors["firstName"]}` : "";
        break;
      case "lastName":
        errors.lastName = !value ? `${requiredErrors["lastName"]}` : "";
        break;
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
      case "confirmPassword":
        if (value !== password) {
          errors.confirmPassword = "Password doesn't match.";
        } else {
          errors.confirmPassword = "";
        }
        break;
      default:
        break;
    }

    const isFormValid =
      !!errors.firstName ||
      !!errors.lastName ||
      !!errors.email ||
      !!errors.password ||
      !!errors.confirmPassword
        ? false
        : true;
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
          label="First Name"
          onChange={handleChange}
          name="firstName"
          value={firstName}
          error={formErrors.firstName}
        />
        <FormInput
          label="Last Name"
          onChange={handleChange}
          name="lastName"
          value={lastName}
          error={formErrors.lastName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          error={formErrors.confirmPassword}
        />
        <div className="buttons-container">
          <Button
            style={{ width: "100%", padding: "0.5rem 0 0.5rem 0" }}
            type="submit"
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
