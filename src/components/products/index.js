import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Button, Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import Cart from './../cart';
import "../products/products.scss";
import { addProductToCart, decreaseQuantity, removeProductFromCart } from "../../actions/cartActions";

const Products = () => {
  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);
  let [categoryId, setCategoryId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
    .get("http://localhost:3000/categories")
    .then(response => {
      setCategories(response.data);
    })
    .catch(function(error) {
        // manipulate the error response here
    });
    axios
    .get("http://localhost:3000/products")
    .then(response => {
      setProducts(response.data);
    })
    .catch(function(error) {
        // manipulate the error response here
    });
  }, []);

  const filterProducts = (categoryId) => {
    setCategoryId(categoryId);
  }

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
    setModalShow(true);
  }

  return (
      <section id="products-wrapper">
        <Container>
          <Row>
            <Col md={2} className="filter-section">
              <ListGroup  data-test="categoriesList" variant="flush">
                { 
                categories ? categories.sort((a, b) => a.order - b.order).map(catRecord =>
                  catRecord.order != -1 ? <ListGroup.Item data-test="categoryListItem" key={catRecord.key} onClick={() => filterProducts(catRecord.id)}>{catRecord.name}</ListGroup.Item> : null
                ) : null
                }
              </ListGroup>
            </Col>
            <Col md={10} className="products-section">
              <Row>
              {
                products ? products.filter(product => categoryId === null || product.category === categoryId).map(productsRecord =>
                  <Col md={3} key={productsRecord.key}>
                    <Card className="card-section" id={productsRecord.id}>
                      <Card.Body>
                        <Card.Title>{productsRecord.name}</Card.Title>
                        <Card.Img id={productsRecord.id} alt={productsRecord.name} title={productsRecord.name} variant="top" src={productsRecord.imageURL} />
                        <Card.Text>
                          {productsRecord.description}
                        </Card.Text>
                        <span className="price-section">MRP Rs. {productsRecord.price}</span>
                        <Button data-test="addToCartButton" variant="primary" className="buy-btn default-btn-style" onClick={() => addToCart(productsRecord)}>Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ) : null
              }
              </Row>
            </Col>
          </Row>
        </Container>
        {modalShow ? <Cart show={modalShow} onHide={() => setModalShow(false)}/> : null}
      </section>
  );
};

export default Products;