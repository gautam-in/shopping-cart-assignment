import React, { useState } from "react";
import "./Signup.style.js";
import { useHistory } from "react-router-dom";
import { ButtonPink } from "../Products/Product.style";
import { SignPages } from "./Signup.style.js";
import { Form } from "react-bootstrap";
function Signup() {
  const history = useHistory()
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  const SubmitSignup = (e) => {
    e.preventDefault();
    const form = document.querySelector("#signupForm");
    const formData = new FormData(form);
    // console.log("e.target",e);
    const obj = Object.fromEntries(formData.entries());
    // console.log("obj", obj);
    history.push('/');
  };
  function validatePassword(e) {
    const password = e.target.value;
    const name = e.target.name;
    
    const form = document.querySelector("#signupForm");
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    if (
      password.match(/[a-z]/g) &&
      // password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      // password.match(/[^a-zA-Z\d]/g) &&
      password.length >= 6
    ) {
      if (name === "password") {
        setValidPassword(false);
      } else if (name === "confirmPassword") {
        setValidConfirmPassword(false);
        if (obj.password !== obj.confirmPassword) {
          setPasswordNotMatch(true);
        } else {
          setPasswordNotMatch(false);
        }
      }
    } else {
      if (name === "password") {
        setValidPassword(true);
      } else if (name === "confirmPassword") {
        setValidConfirmPassword(true);
        if (obj.password !== obj.confirmPassword) {
          setPasswordNotMatch(true);
        } else {
          setPasswordNotMatch(false);
        }
      }
    }
  };
  return (
    <SignPages className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <p>We do not share your personal details with anyone.</p>
          </div>
          <div className="col-md-6">
            <Form id="signupForm" onSubmit={SubmitSignup}>
              <Form.Group className="form-group mb-4" controlId="firstname">
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue=""
                  name="firstname"
                  required
                />
                <Form.Label>
                  <span>First Name</span>
                </Form.Label>
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="form-group mb-4" controlId="lastname">
                <Form.Control
                  type="text"
                  defaultValue=""
                  placeholder=""
                  name="lastname"
                  required
                />
                <Form.Label>
                  <span>Last Name</span>
                </Form.Label>
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="form-group mb-4" controlId="email">
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="email"
                  // pattern="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"
                  required
                />
                <Form.Label>
                  <span>Email</span>
                </Form.Label>
                {/* {validPassword ? (
                  <Form.Text className="text-muted">
                    Email must have "@" and "."
                  </Form.Text>
                ) : null} */}
              </Form.Group>

              <Form.Group className="form-group mb-4" controlId="password">
                <Form.Control
                  type="password"
                  placeholder=""
                  name="password"
                  onBlur={validatePassword}
                  required
                />
                <Form.Label>
                  <span>Password</span>
                </Form.Label>
                {validPassword ? (
                  <Form.Text className="text-muted">
                    Password is not Valid.
                  </Form.Text>
                ) : null}
                {passwordNotMatch ? (
                  <Form.Text className="text-muted">
                    Confirm password not matching.
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group
                className="form-group mb-4"
                controlId="confirmPassword"
              >
                <Form.Control
                  type="password"
                  placeholder=""
                  defaultValue=""
                  name="confirmPassword"
                  onBlur={validatePassword}
                  required
                />
                <Form.Label>
                  <span>Confirm Password</span>
                </Form.Label>
                {validConfirmPassword ? (
                  <Form.Text className="text-muted">
                    Confirm password is not Valid.
                  </Form.Text>
                ) : null}
                {passwordNotMatch ? (
                  <Form.Text className="text-muted">
                    Confirm password not matching.
                  </Form.Text>
                ) : null}
              </Form.Group>
              {/* <Form.Group className="form-group mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <ButtonPink className="sign-button">Sign up</ButtonPink>
              {/* <Button variant="primary" type="submit"> */}
              {/* Sign Up
              </Button> */}
            </Form>
          </div>
        </div>
      </div>
    </SignPages>
  );
}

export default Signup;
