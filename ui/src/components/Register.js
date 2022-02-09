import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Form.scss";

export default function Register() {
  return (
    <div>
      <Container className="signin-container">
        <Row>
          <Col className="section-left">
            <div className="font-lg">
              <b>Signup</b>
            </div>
            <div className="font-sm">
              We do not share your personal details with anyone.
            </div>
          </Col>
          <Col className="section-right">

            <form action="/" method="get">
              <label htmlFor="fname" className="form-elements">
                First Name
              </label>
              <br />
              <input type="text" id="fname" className="form-elements"autocomplete="off" required />
              <br />

              <label htmlFor="lname" className="form-elements">
                Last Name
              </label>
              <br />
              <input type="text" id="lname" className="form-elements"autocomplete="off" required />
              <br />

              <label htmlFor="email" className="form-elements">
                Email
              </label>
              <br />
              <input type="email" id="email" className="form-elements"autocomplete="off" required />
              <br />

              <label htmlFor="pw" className="form-elements">
                Password
              </label>
              <br />
              <input type="password" id="pw" className="form-elements"autocomplete="off" required />
              <br />

              <label htmlFor="confpw" className="form-elements">
                Confirm Password
              </label>
              <br />
              <input type="password" id="confpw" className="form-elements"autocomplete="off" required />
              <br />

              <input
                type="submit"
                value="Signup"
                className="form-elements card-btn"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
