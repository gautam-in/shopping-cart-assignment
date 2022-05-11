import React, { useState } from 'react';

import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

export default function Register() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [errmsg, setErrorMsg] = useState();
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  var pwd_regx =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})';
  const handleSubmit = (event) => {
    if (!password.match(pwd_regx)) {
      // alert(`Password Minimum length 6 characters,Must have a number and alphabet`)

      setFlag(true);
      setErrorMsg(
        'Password Minimum length 6 characters,Must have a number and alphabet'
      );
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('hii');
    }

    setValidated(true);
    if (
      !firstName ||
      !email ||
      !password ||
      !confirmPassword ||
      !lastName
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem('sanskarEmail', JSON.stringify(email));
      localStorage.setItem(
        'sanskarPassword',
        JSON.stringify(password)
      );
      console.log('Saved in Local Storage');

      setLogin(!login);
    }
  };

  function handleClick() {
    setLogin(!login);
  }
  return (
    <div>
      {login ? (
        <div className="row">
          <div className="col-lg-2 col-sm-0"> </div>
          <div className="col-lg-3 col-sm-4  mt-5">
            <h3>Signup</h3>
            <div>
              <p class=" mt-3 px-1 small">
                We do not Share your personal information with anyone
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mt-5 p-3">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="firstName"
                required
                onChange={(event) => setFirstName(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid First name.
              </Form.Control.Feedback>

              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="lastName"
                required
                onChange={(event) => setLastName(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid last name.
              </Form.Control.Feedback>

              <Form.Label> Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>

              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
              <p className="errMsg">{errmsg && errmsg}</p>

              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                required
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
              <br />

              <button type="submit" class="btn btn-danger btn-xl">
                Sign Up
              </button>

              <p
                onClick={handleClick}
                className="forgot-password text-right mt-2"
              >
                Already registered log in?
              </p>
            </Form>
          </div>

          <div className="col-lg-4 col-sm-2"></div>
          <Footer />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

// <Form.Group as={Col} md="6" controlId="validationCustom03">
// <Form.Label>City</Form.Label>
// <Form.Control type="text" placeholder="City" required />
// <Form.Control.Feedback type="invalid">
//   Please provide a valid city.
// </Form.Control.Feedback>
// </Form.Group>
// <Button type="submit">Submit form</Button>
