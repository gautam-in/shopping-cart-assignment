import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import FormInput from "./FormInput";
import { createAuthUserWithEmailAndPassword } from "../utils/firebase.utils";
import "../styles/register.scss";

const RegisterPage = () => {
  const navigate = useNavigate();

  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      user && navigate("/");
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") alert("user exists");
      console.log("user creation failed", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-container">
      <div className="sign-up-header">
        <h2 className="title">SignUp</h2>
        <span>We do not share your details with anyone.</span>
      </div>
      <div>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          label="First Name"
          required
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          label="Last Name"
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleChange}
          inputMode="numeric"
          pattern="^(?=.*[a-zA-Z])(?=.*[0-9])(?!.* ).{6,}$"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="max" onSubmit={handleSubmit}>
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
