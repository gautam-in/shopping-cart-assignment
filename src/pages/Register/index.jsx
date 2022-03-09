import React from "react";
import { useState } from "react";
import FormInput from "../../components/FormInput";
import { Button } from "../../global.styles";
import { RegisterContainer } from "./register.styles";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setUserEmail("");
    setUserPassword("");
    setUserPassword2("");
  };
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
          onSubmit={(e) => {
            e.preventDefault();
            if (userPassword !== userPassword2) {
              clearForm();
              alert("Passwords did not match");
              return;
            }
            console.log(
              firstName,
              lastName,
              userEmail,
              userPassword,
              userPassword2
            );
            clearForm();
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FormInput
            name="firstName"
            type="text"
            value={firstName}
            label="First Name"
            handleChange={(e) => setFirstName(e.target.value)}
            required
          />
          <FormInput
            name="lastName"
            type="text"
            value={lastName}
            label="Last Name"
            handleChange={(e) => setLastName(e.target.value)}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={userEmail}
            label="Email"
            handleChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={userPassword}
            label="Password"
            handleChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <FormInput
            name="password2"
            type="password"
            value={userPassword2}
            label="Confirm Password"
            handleChange={(e) => setUserPassword2(e.target.value)}
            required
          />
          <Button style={{ marginTop: "30px" }} type="submit">
            Signup
          </Button>
        </form>
      </div>
    </RegisterContainer>
  );
};

export default Register;
