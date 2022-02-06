import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "../SideNav/SideNav";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const filterProducts = (categoryId) => {
    if (categoryId === "") {
      setProducts(products);
    } else {
      setProducts(
        products.filter((product) => product.category === categoryId)
      );
    }
  };

  return (
    <Container>
      <Row className="g-0">
        <Col md={3}>
          <SideNav filterProducts={filterProducts} />
        </Col>
        <Col md={9} className="p-0">
          <Row className="g-0">
            {products.map((product) => (
              <Col xs={12} md={6} lg={3} className="mb-5" key={product.id}>
                <Product product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
