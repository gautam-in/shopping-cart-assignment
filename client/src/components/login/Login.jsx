import React, { useState } from "react";
import { Col, Container, Button, Form } from "react-bootstrap";
import "./login.css";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const getUserData = async () => {
  //     const res = await fetch("http://localhost:3000/users");
  //     const json = await res.json();
  //     loginCheck(json);
  //   };

  //   const loginCheck = (loginRecords) => {
  //     if (email.length > 0 && password.length > 0) {
  //       const findRes = loginRecords.find((item) => {
  //         if (item.email === email && item.confirm_password === password) {
  //           sessionStorage.setItem("userLoggedIn", true);
  //           navigate("/home");
  //           return true;
  //         }
  //         return false;
  //       });
  //       if (!findRes) {
  //         toast("Please enter correct details");
  //       }
  //     } else {
  //       toast("Please enter email id and password");
  //     }
  //   };

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     getUserData();
  //   };
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
