import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <h2>Signup</h2>
          <h6>We do not share your personal details with anyone.</h6>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="danger" className="w-100" type="submit">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
