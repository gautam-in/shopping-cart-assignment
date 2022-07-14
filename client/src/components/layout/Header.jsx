import React, { useState } from "react";
import { Navbar, Container, Nav, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import Cart from "../../static/images/cart.svg";
import "./layout.css";
import MiniCart from "../miniCart/MiniCart";
function Header() {
  const [showCart, setShowCart] = useState(false);
  const [itemCount] = useState(0);
  const navigateToCart = () => {
    setShowCart(true);
  };
  return (
    <>
      <Navbar expand="lg" bg="light" id="headerContainer">
        <Container>
          <Col className="col-3">
            <Navbar.Brand href="/">
              <img src={logo} alt="Sabka Bazar" width="150" />
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col className="d-flex justify-content-around">
              <Nav>
                <Col className="col-6">
                  <Link to="/home" className="customLink">
                    Home
                  </Link>
                </Col>
                <Col className="col-6">
                  <Link to="/products" className="customLink">
                    Products
                  </Link>
                </Col>
              </Nav>
            </Col>
            <Col>
              <section className="w-50 userOptions">
                <div>
                  <Link to="/login" className="customLink">
                    Login
                  </Link>
                  <Link to="/signup" className="customLink">
                    Register
                  </Link>
                </div>
                <Button
                  className="w-50"
                  style={{
                    background: "#d3d3d3",
                    border: "none",
                    borderRadius: 0,
                    color: "black",
                    position: "relative",
                  }}
                  onClick={navigateToCart}
                >
                  <img className="cartIcon" src={Cart} alt="Cart" />
                  {itemCount} items
                </Button>
                {showCart ? (
                  <MiniCart show={showCart} onHide={() => setShowCart(false)} />
                ) : (
                  <></>
                )}
              </section>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
