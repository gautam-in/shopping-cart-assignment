import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import './login.scss';

export const Signup = () => {
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
              <Form.Control type="text" placeholder="" required name="firstname"/>
              <Form.Label>
                <span>First name</span>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <Form.Control type="text" placeholder="" required name="lastname"/>
              <Form.Label>
                <span>Last name</span>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <Form.Control type="text" placeholder="" required name="email"/>
              <Form.Label>
                <span>Email</span>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <Form.Control type="password" placeholder="" required name="password"/>
              <Form.Label>
                <span>Password</span>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="form-group mb-5">
              <Form.Control type="password" placeholder="" required name="confirm-password"/>
              <Form.Label>
                <span>Confirm Password</span>
              </Form.Label>
            </Form.Group>
            <button className='login-btn'>Signup</button>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
