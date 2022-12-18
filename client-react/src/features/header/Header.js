import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';

export const Header = () => {
  const logoURL = '/static/images/logo.png';
  const cartImageURL = '/static/images/cart.svg';
  const BASE_URL = "http://127.0.0.1:5500";

  return (
    <Navbar expand="lg" className='p-0 justify-content-between'>
      <Navbar.Brand href="#"><img src={BASE_URL + logoURL} alt="company logo" width="125px" /></Navbar.Brand>
      <Nav className="flex-row page-nav">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav.Item>
        </Nav>
      <div className='justify-content-end '>
        <Nav className="flex-row">
          <Nav.Item>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <button className='cart-btn'>
          <img src={BASE_URL + cartImageURL} width="16px" alt='Cart Icon' />Items
          {/* {cartList.length} {cartList.length <= 1 ? 'item' : 'items'} */}
        </button>
      </div>
    </Navbar>
  )
}
