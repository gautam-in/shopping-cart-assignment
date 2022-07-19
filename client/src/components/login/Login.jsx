import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";
const loginFieldInputs = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [fieldValue, setFieldValue] = useState(loginFieldInputs);
  const { email, password } = fieldValue;
  const handleLoginChanges = (event) => {
    const { name, value } = event.target;
    setFieldValue({ ...fieldValue, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    navigate("/home");
  };
  return (
    <div className="auth-container">
      <div className="login-container">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="login-container">
        <Form onSubmit={handleLogin}>
          <div className="group">
            <label className="form-input-label">Email</label>
            <input
              type="email"
              className="form-input"
              required
              name="email"
              value={email}
              onChange={handleLoginChanges}
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
              onChange={handleLoginChanges}
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
};

export default Login;
