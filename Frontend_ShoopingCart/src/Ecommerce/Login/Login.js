import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';

function Login() {
  const [emaillog, setEmaillog] = useState(' ');
  const [passwordlog, setPasswordlog] = useState(' ');
  const [validated, setValidated] = useState(false);
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    let pass1 = localStorage.getItem('sanskarPassword');
    const pass = pass1?.replaceAll('"', '');
    let mail1 = localStorage.getItem('sanskarEmail');
    const mail = mail1?.replaceAll('"', '');
    console.log(pass, mail, 'flag');
    console.log(emaillog, passwordlog, 'emaillog');

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log('EMPTY');
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  console.log(home, 'home');
  console.log(flag, 'flag');

  return (
    <div>
      {home ? (
        <div className="row">
          <div className="col-lg-2 col-sm-0"> </div>
          <div className="col-lg-3 col-sm-4  mt-5">
            <h3> Login</h3>
            <div>
              <p class=" mt-3 px-1 small">
                get access to your orders, Wishlist and Recommendation
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt-5 p-3">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleLogin}
            >
              <Form.Label> Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                required
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>

              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                required
                onChange={(event) =>
                  setPasswordlog(event.target.value)
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
              <br />
              {flag && (
                <Alert color="primary" variant="warning">
                  Please enter correct Email and Password
                </Alert>
              )}
              <button type="submit" class="btn btn-danger btn-xl">
                Login
              </button>
            </Form>
          </div>

          <div className="col-lg-4 col-sm-2"></div>
          <Footer />
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default Login;
