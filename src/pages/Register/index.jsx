import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import useForm from "../../hooks/useForm";
import { validateRegistration } from "../../utils/validation";
import { Button } from "../../global.styles";

const Register = () => {
  const navigate=useNavigate()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleRegistration = () => {
    setValues(initialValues);
    navigate("/login")
  };

  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    handleRegistration,
    validateRegistration
  );
  const { firstName, lastName, email, password, confirmPassword } = values;
  console.log("errors", errors);
  return (
    <RegisterContainer>
      <div style={{ alignSelf: "start" }}>
        <h1 style={{ fontSize: 32 }}> Register </h1>
        <p style={{ fontSize: 12, fontWeight: 500 }}>
          We do not share your personal details with anyone
        </p>
      </div>
      <div
        className="register-form"
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FormInput
            name="firstName"
            type="text"
            value={firstName}
            label="First Name"
            handleChange={handleChange}
            error={errors.firstName}
          />
          <FormInput
            name="lastName"
            type="text"
            value={lastName}
            label="Last Name"
            handleChange={handleChange}
            error={errors.lastName}
          />
          <FormInput
            name="email"
            type="text"
            value={email}
            label="Email"
            handleChange={handleChange}
            error={errors.email}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            error={errors.password}
            label="Password"
            handleChange={handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            error={errors.confirmPassword}
            label="Confirm Password"
            handleChange={handleChange}
          />
          <Button style={{ marginTop: "30px" }} type="submit">
            Signup
          </Button>
        </form>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  margin: 0 32px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 64px;
`;

export default Register;
