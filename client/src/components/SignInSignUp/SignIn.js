import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <h2>Login</h2>
          <h6>Get access to your Orders, Wishlists and Recommendations</h6>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="danger" className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
