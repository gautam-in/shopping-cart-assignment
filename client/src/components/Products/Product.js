import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Product = ({ product, addToCart }) => {
  return (
    <Card className="h-100 p-3">
      <Row className="g-0">
        <Col lg={12}>
          <Card.Title
            style={{ maxHeight: "70px", minHeight: "70px", overflow: "hidden" }}
          >
            {product.name}
          </Card.Title>
        </Col>
        <Col xs={6} lg={12}>
          <Card.Img variant="top" src={product.imageURL} />
        </Col>
        <Col xs={6} lg={12}>
          <Card.Body className="p-0">
            <Col lg={6} xs={12} className="w-100">
              <Card.Text
                style={{
                  background: "#eee",
                  padding: "5px",
                  maxHeight: "100px",
                  minHeight: "100px",
                  overflow: "hidden",
                  marginTop: "10px",
                }}
              >
                {product.description}
              </Card.Text>
            </Col>
            <Col
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <Card.Text className="none-display mb-0">
                MRP Rs.{product.price}
              </Card.Text>
              <Col xs={12} md={12} lg={6}>
                <Button variant="danger" onClick={() => addToCart(product.id)}>
                  {window.screen.width < 991
                    ? `Buy Now @ MRP Rs.${product.price}`
                    : "Buy Now"}
                </Button>
              </Col>
            </Col>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;
