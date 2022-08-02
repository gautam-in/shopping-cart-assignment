import React, { useState } from "react";
import "../pages/Register.css";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [newUser, setNewUser] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  ]);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(false);
  const handleChange = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePasswordChange = (e) => {
    const format = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const validate = format.test(e.target.value);
    setValidatePassword(!validate);
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleConfirmPasswordChange = (e) => {
    const confirmPass = e.target.value;
    const validate = newUser.password !== confirmPass;
    setValidateConfirmPassword(validate);
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="resgistercontainer flex">
        <div className="Container-1">
          <h2>Signup</h2>
          <p className="ft-1-rem">
            we do not share your personal details with anyone.
          </p>
        </div>
        <div>
          <Form className="registerForm">
            <Form.Group controlId="formBasicUsername">
              <Form.Label className="label">First Name</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                className="inputfield"
                name="firstName"
                type="firstname"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastname">
              <Form.Label className="label">Last Name</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Control
                className="inputfield"
                name="lastName"
                type="lastname"
                onChange={handleChange}
                required
              />
            </Form.Group>
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
                onChange={handlePasswordChange}
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
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label className="label">Confirm Password</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Control
                className="inputfield"
                name="confirmPassword"
                type="confirmpassword"
                onChange={handleConfirmPasswordChange}
                required
              />
            </Form.Group>
            {validateConfirmPassword ? (
              <span class="alert alert-warning" role="alert">
                password and confirm password must be save!!
              </span>
            ) : (
              ""
            )}
            <div className="formSubmitButton">
              <button class="btn">Sign Up</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
