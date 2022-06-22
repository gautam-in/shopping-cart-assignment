import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "../Register/Register.scss";

const Register = () => {
  const initialFromFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(initialFromFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="register-container">
      <div className="register-heading">
        <h2>Sign Up</h2>
        <p>We do not share your personal details with anyone</p>
      </div>
      <form action="" className="register-form">
        <Input
          type="text"
          name="firstName"
          value={firstName}
          label="First Name"
          required
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="lastName"
          value={lastName}
          label="Last Name"
          required
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleInputChange}
        />
        <Button type="sign">SignUp</Button>
      </form>
    </div>
  );
};

export default Register;
