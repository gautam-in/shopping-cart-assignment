import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, Col, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { ReactComponent as Cart } from "../../static/images/cart.svg";
import "./layout.css";
import MiniCart from "../miniCart/MiniCart";
import Footer from "./Footer";
import { ShopContext } from "../../contexts/shoppingContext";
function Header() {
  const { showCart, setShowCart, itemCount } = useContext(ShopContext);
  const navigateToCart = () => {
    setShowCart(true);
  };
  return (
    <React.Fragment>
      <Navbar expand="lg" bg="light" fixed="top">
        <Container>
          <Col className="col-4">
            <Navbar.Brand href="/">
              <img src={logo} alt="Sabka Bazar" width="150" />
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle />
          <Navbar.Collapse className="col-8 justify-content-between">
            <Nav>
              <Link to="/home" className="customLink">
                Home
              </Link>
              <Link to="/products" className="customLink">
                Products
              </Link>
            </Nav>
            <section className="w-50 userOptionsContainer">
              <div className="userOptions">
                <Link to="/login" className="customLink">
                  Login
                </Link>
                <Link to="/signup" className="customLink">
                  Register
                </Link>
              </div>
              <Button
                style={{
                  background: "#d3d3d3",
                  border: "none",
                  borderRadius: 0,
                  color: "black",
                  position: "relative",
                  width: "33%",
                  alignSelf: "end",
                }}
                onClick={navigateToCart}
              >
                <Cart className="cartIcon" />
                {itemCount} items
              </Button>
              {showCart ? (
                <MiniCart show={showCart} onHide={() => setShowCart(false)} />
              ) : (
                <></>
              )}
            </section>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
export default Header;
