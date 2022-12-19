import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import './login.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export const Signin = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [fieldValidationErrors, setFormValidationErrors] = useState({
    email: '',
    password: ''
  })

  const onHandleChange = e => {
    const nextFormState = {
      ...formFields,
      [e.target.name]: e.target.value,
    };
    setFormFields(nextFormState);
    validateField(e.target.name, e.target.value)
  };

  const validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        let passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    setFormValidationErrors(fieldValidationErrors);
  }

  
  return (
    <section className='sign-in'>
      <Row>
        <Col className='text-align-top'>
          <h3><strong>Login</strong></h3>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </Col>

        <Col>
          <Form>
            <Form.Group
              className="form-group mb-5">
              <Form.Control type="email" placeholder=" " required onChange={onHandleChange} name="email" />
              <Form.Label>
                <span>Email</span>
              </Form.Label>
              {fieldValidationErrors.email ? (
              <Form.Text className="text-muted">
                Email is not Valid.
              </Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <Form.Control type="password" placeholder="" required onChange={onHandleChange} name="password"/>
              <Form.Label>
                <span>Password</span>
              </Form.Label>
              {fieldValidationErrors.password ? (
              <Form.Text className="text-muted">
                Password is not Valid.
              </Form.Text>
              ) : null}
            </Form.Group>
            <button className='login-btn'>Login</button>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
