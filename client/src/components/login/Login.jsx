import React, { useState } from "react";
import { Col, Container, Button, Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="login-container">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="login-container">
        <Form>
          <div className="group">
            <label className="form-input-label">Email</label>
            <input type="email" className="form-input" required name="email" />
          </div>
          <div className="group">
            <label className="form-input-label">Password</label>
            <input
              type="password"
              className="form-input"
              required
              name="password"
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
