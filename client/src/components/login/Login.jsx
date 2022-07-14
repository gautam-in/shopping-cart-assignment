import React, { useState } from "react";
import { Col, Container, Button, Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className="d-flex justify-content mt-4">
      <Col>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </Col>
      <Col>
        <Form className="col-sm-6">
          <div className="mb-3">
            <label class="form-label" for="inputEmail">
              Email
            </label>
            <input
              type="email"
              className="form-control "
              id="loginFormInput"
              required
            />
          </div>
          <div className="mb-1">
            <label class="form-label" for="inputPassword">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginFormInput"
              required
            />
          </div>

          <Button id="customSubmit" type="submit" className="mt-4" size="sm">
            Login
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
