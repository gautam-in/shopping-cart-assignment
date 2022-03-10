import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../footer/footer.scss";

const Footer = () => {
  return (
      <footer>
        <Container>
          <Row>
            <Col md={12}>
              <div className='footer-wrapper'>
                <p>Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};

export default Footer;