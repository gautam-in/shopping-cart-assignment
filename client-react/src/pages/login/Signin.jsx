import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { FloatingLabel, Form } from 'react-bootstrap';

import './login.scss';

export const Signin = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [fieldValidationErrors, setFormValidationErrors] = useState({
    email: '',
    password: ''
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
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        validateValue = emailValid ? '' : 'invalid';
        break;
      case 'password':
        let passwordValid = value.length >= 6;
        validateValue = passwordValid ? '' : ' is too short';
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
    <div className='sign-in mb-64'>
      <Row>
        <Col className='text-align-top'>
          <h3><strong>Login</strong></h3>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </Col>

        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group
              className="form-group mb-4">
              <FloatingLabel
                controlId="email"
                label="Email"
              >
                <Form.Control type="email" placeholder="Email" name="email" onChange={onHandleChange} aria-required="true"/>
              </FloatingLabel>
              {fieldValidationErrors.email ? (
                <Form.Text className="text-muted text-red" aria-invalid="true">
                  Email is not valid.
                </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <FloatingLabel
                controlId="password"
                label="Password"
              >
                <Form.Control type="password" placeholder="Password" name="password" onChange={onHandleChange} aria-required="true"/>
              </FloatingLabel>
              {fieldValidationErrors.password ? (
                <Form.Text className="text-muted text-red" aria-invalid="true">
                  Password is not valid.
                </Form.Text>
              ) : null}
            </Form.Group>
            <button className='login-btn'>Login</button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
