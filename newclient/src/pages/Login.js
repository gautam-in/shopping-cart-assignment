import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../pages/Login.css";

const Login = () => {
  const [user, setUser] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const [validatePassword, setValidatePassword] = useState(false);
  const handlepasswordChange = (e) => {
    const format = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const validate = format.test(e.target.value);
    setValidatePassword(!validate);
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="logincontainer flex">
        <div className="Container-1">
          <h2>Login</h2>
          <p className="ft-1-rem">
            Get access to you Orders,Wishlist and Recommendations
          </p>
        </div>
        <div>
          <Form className="registerForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="inputfield"
                name="email"
                type="email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="inputfield"
                name="password"
                type="password"
                onChange={handlepasswordChange}
                required
              />
            </Form.Group>
            {validatePassword ? (
              <span class="alert alert-warning warningAlert" role="alert">
                Warning! Password minimum length should be 6 and must have a
                number and a alphabet and can not have spaces.
              </span>
            ) : (
              ""
            )}

            <div className="formSubmitButton">
              <button class="btn" disabled={!(user.email && user.password)}>
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
