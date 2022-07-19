import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
const formInputValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const navigation = useNavigate();
  const [fieldValues, setFieldValues] = useState(formInputValues);
  const { firstName, lastName, email, password, confirmPassword } = fieldValues;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };
  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm password needs to be same as password value.");
    } else {
      navigation("/home");
    }
  };
  return (
    <div className="auth-container">
      <div className="login-container">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="login-container">
        <Form onSubmit={handleSignup}>
          <div className="group">
            <label className="form-input-label">First Name</label>
            <input
              type="text"
              className="form-input"
              required
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Last Name</label>
            <input
              type="text"
              className="form-input"
              required
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Email</label>
            <input
              type="email"
              className="form-input"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Password</label>
            <input
              type="password"
              className="form-input"
              required
              name="password"
              value={password}
              onChange={handleChange}
              minLength="6"
              pattern="^[a-zA-Z0-9]*$"
            />
          </div>
          <div className="group">
            <label className="form-input-label">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              required
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              minLength="6"
              pattern="^[a-zA-Z0-9]*$"
            />
          </div>
          <Button id="customSubmit" className="mt-3" size="sm" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
