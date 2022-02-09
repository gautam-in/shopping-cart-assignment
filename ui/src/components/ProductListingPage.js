import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";
import "../styles/ProductListingPage.scss";

export default function ProductListingPage() {
  const [categories, setCategories] = useState([]);
  const [curCategoryId, setCurCategoryId] = useState("all");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then(({ data }) => {
        data.sort((a, b) => a.order - b.order);
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const cart = useContext(CartContext);

  const handleCategoryClick = (id) => {
    curCategoryId === id ? setCurCategoryId("all") : setCurCategoryId(id);
  };

  const handleBuyNowClick = (product) => {
    // api post
    axios
      .post(
        "http://localhost:5000/addToCart",
        {
          id: product.id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then(({ data }) => {
        data.response === "Success" && console.log(data.responseMessage);
      })
      .catch((err) => console.error(err));
    cart.addItem(product);

    // console.log('product added to cart - id: ', product.id);
  };

  return (
    <div>
      <Container className="plp-container">
        <Row>
          <Col md={2}>
            {/* Side Navbar begin*/}
            <Stack gap={1} className="plp-sidenav">
              {categories.map((category) => {
                return category.order > 0 ? (
                  <div
                    key={category.id}
                    className={`category-selector ${
                      curCategoryId === category.id && "category-selected"
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.name}
                  </div>
                ) : null;
              })}
            </Stack>
            {/* Side Navbar end*/}
          </Col>
          <Col md={10} className="plp-content">
            {/* Product catelogue begin */}
            <Row xs={1} md={4} className="g-4">
              {products.map((product) => {
                return curCategoryId === "all" ||
                  curCategoryId === product.category ? (
                  <Col key={product.id}>
                    <Card>
                      <Card.Body>
                        <div className="card-title">{product.name}</div>
                        <Card.Img src={product.imageURL} alt={product.id} />
                        <div className="card-description">
                          {product.description}
                        </div>
                        <div className="card-bottom-container">
                          <div>{`MRP Rs.${product.price}`}</div>
                          <button
                            className="card-btn"
                            onClick={() => handleBuyNowClick(product)}
                          >
                            Buy Now
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ) : // ) : curCategoryId === product.category ? (
                //   <Col key={product.id}>
                //     <Card>
                //       <Card.Body>
                //         <div className="card-title">{product.name}</div>
                //         <Card.Img src={product.imageURL} />
                //         <div className="card-description">
                //           {product.description}
                //         </div>
                //         <div className="card-bottom-container">
                //           <div>{`MRP Rs.${product.price}`}</div>
                //           <button className="card-btn">Buy Now</button>
                //         </div>
                //       </Card.Body>
                //     </Card>
                //   </Col>
                null;
              })}
            </Row>
            {/* Product catelogue end */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
