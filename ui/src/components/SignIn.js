import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Form.scss";

export default function SignIn() {
  return (
    <div>
      <Container className="signin-container">
        <Row>
          <Col className="section-left">
            <div className="font-lg"><b>Login</b></div>
            <div className="font-sm">Get access to your Orders, Wishlist and Recommendation</div>
          </Col>
          <Col className="section-right">
            <form action="/" method="get" >
              <label htmlFor="email" className="form-elements">Email</label>
              <br/>
              <input type="email" id="email" className="form-elements" autocomplete="off" required/>
              <br/>
              <label htmlFor="pw" className="form-elements">Password</label>
              <br/>
              <input type="password" id="pw" className="form-elements" autocomplete="off" minLength={6} required/>
              <br/>
              <input type="submit" value="Login" className="form-elements card-btn"/>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
