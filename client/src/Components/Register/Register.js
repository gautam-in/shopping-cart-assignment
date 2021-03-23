import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { RegisterText } from "../../Constants/ConstantText";
import "./Register.scss";

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
  };

  return (
    <main className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={formData.firstName}
          label="First Name"
          onChange={handleChange}
          htmlFor="firstNameInput"
          ariaLabel="FirstName Input"
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={formData.lastName}
          label="Last Name"
          onChange={handleChange}
          htmlFor="lastNameInput"
          ariaLabel="LastName Input"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          label="Email"
          onChange={handleChange}
          htmlFor="emailInput"
          ariaLabel="Email Input"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          label="Password"
          onChange={handleChange}
          htmlFor="passwordInput"
          ariaLabel="Password Input"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          htmlFor="confirmPasswordInput"
          ariaLabel="Confirm Password Input"
          required
        />
        <CustomButton type="submit">{RegisterText}</CustomButton>
      </form>
    </main>
  );
}

export default Register;
