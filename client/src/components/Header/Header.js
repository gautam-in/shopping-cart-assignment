import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ handleShow, cartItems }) => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="static/images/logo.png" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav
          className="me-auto d-none d-md-flex flex-row justify-content-between"
          style={{ width: "125px" }}
        >
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </Nav>
        <Navbar.Text style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="d-none d-md-flex flex-row justify-content-between mb-2"
            style={{ width: "125px" }}
          >
            <Link to="/signin">SignIn</Link>
            <Link to="/register">Register</Link>
          </div>
          <Button variant="secondary" onClick={handleShow}>
            <img src="static/images/cart.svg" alt="cart" width={20} />{" "}
            {cartItems.length} items
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
