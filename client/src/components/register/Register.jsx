import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../login/login.css";
const formInputValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [fieldValues, setFieldValues] = useState(formInputValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValues({ ...formInputValues, [name]: value });
  };

  return (
    <div className="auth-container">
      <div className="login-container">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="login-container">
        <Form>
          <div className="group">
            <label className="form-input-label">First Name</label>
            <input
              type="text"
              className="form-input"
              required
              name="firstName"
              value={fieldValues.firstName}
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
              value={fieldValues.lastName}
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
              value={fieldValues.email}
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
              value={fieldValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              required
              name="confirmPassword"
              value={fieldValues.confirmPassword}
              onChange={handleChange}
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
