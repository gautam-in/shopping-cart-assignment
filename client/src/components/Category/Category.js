import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Category = ({ category }) => {
  return category.order % 2 !== 0 ? (
    <Container className="border-bottom">
      <Row>
        <Col>
          <Card.Img variant="top" src={category.imageUrl} />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.description}</Card.Text>
            <Button variant="danger">Explore {category.key}</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container className="border-bottom">
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.description}</Card.Text>
            <Button variant="danger">Explore {category.key}</Button>
          </Card.Body>
        </Col>
        <Col>
          <Card.Img variant="bottom" src={category.imageUrl} />
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
