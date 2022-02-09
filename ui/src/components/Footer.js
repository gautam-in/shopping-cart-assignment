import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Footer.scss';

export default function Footer() {
  return <div className='footer-main'>
    <Container>
      <Row>
        <Col>
          Copyright 2011-2018 Sabka Baazar Grocery Supplies Pvt Ltd
        </Col>
      </Row>
    </Container>
  </div>;
}
