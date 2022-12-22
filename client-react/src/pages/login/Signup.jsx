import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import './login.scss';

export const Signup = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [fieldValidationErrors, setFormValidationErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const onHandleChange = e => {
    const errors = {
      ...fieldValidationErrors,
      [e.target.name]: validateField(e.target.name, e.target.value)
    }
    const fields = {
      ...formFields,
      [e.target.name]: e.target.value
    }
    setFormValidationErrors(errors)
    setFormFields(fields)
  };

  const validateField = (fieldName, value) => {
    let validateValue;
    switch (fieldName) {
      case 'firstname':
        validateValue = value !== '' ? '' : 'invalid'
        break;
      case 'lastname':
        validateValue = value !== '' ? '' : 'invalid';
        break;
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        validateValue = emailValid ? '' : 'invalid';
        break;
      case 'password':
        let passwordValid = value.length >= 6;
        validateValue = passwordValid ? '' : ' is too short';
        break;
      case 'confirmPassword':
        validateValue = (value === formFields.password && value !== '') ? '' : 'invalid';
        break;
      default:
        break;
    }
    return validateValue;
  }

  const onSubmit = e => {
    e.preventDefault();

    let validationErrors = {};
    Object.keys(formFields).forEach(name => {
      const error = validateField(name, formFields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setFormValidationErrors({ ...validationErrors });
      return;
    }
    if (formFields.firstname && formFields.lastname && formFields.email && formFields.password && formFields.confirmPassword) {
      navigate('/home');
    }
  };


  return (
    <section className='sign-in'>
      <Row>
        <Col className='text-align-top'>
          <h3><strong>Login</strong></h3>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </Col>

        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="firstname"
                label="First name"
              >
                <Form.Control type="text" placeholder="First name" name="firstname" onChange={onHandleChange} />
              </FloatingLabel>
              {fieldValidationErrors.firstname ? (
                <Form.Text className="text-muted text-red">
                  First name is not Valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="lastname"
                label="Last name"
              >
                <Form.Control type="text" placeholder="Last name" name="lastname" onChange={onHandleChange} />
              </FloatingLabel>
              {fieldValidationErrors.lastname ? (
                <Form.Text className="text-muted text-red">
                  Last name is not Valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="floatingInput"
                label="email"
              >
                <Form.Control type="email" placeholder="Email" name="email" onChange={onHandleChange} />
              </FloatingLabel>
              {fieldValidationErrors.email ? (
                <Form.Text className="text-muted text-red">
                  Email is not Valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="password"
                label="Password"
              >
                <Form.Control type="password" placeholder="Password" name="password" onChange={onHandleChange} />
              </FloatingLabel>
              {fieldValidationErrors.password ? (
                <Form.Text className="text-muted text-red">
                  Password is not Valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="confirmPassword"
                label="Confirm password"
              >
                <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" onChange={onHandleChange} />
              </FloatingLabel>
              {fieldValidationErrors.confirmPassword ? (
                <Form.Text className="text-muted text-red">
                  Confirm password is not Valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <button className='login-btn'>Signup</button>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
