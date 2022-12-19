import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

import { Cart } from '../cart/Cart';

import './Header.scss';

export const Header = (props) => {
  const logoURL = '/static/images/logo.png';
  const cartImageURL = '/static/images/cart.svg';
  const BASE_URL = "http://127.0.0.1:5500";

  const [modalShow, setModalShow] = React.useState(false);
  const {cartList} = props;
  return (
    <Navbar expand="lg" className='p-0 justify-content-between align-items-stretch'>
      <Navbar.Brand href="#"><img src={BASE_URL + logoURL} alt="company logo" width="125px" /></Navbar.Brand>
      <Nav className="flex-row page-nav d-none d-md-flex">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav.Item>
        </Nav>
      <div className='d-flex flex-row flex-md-column'>
        <Nav className="flex-row d-none d-md-flex">
          <Nav.Item>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <button className='cart-btn' onClick={() => setModalShow(true)}>
          <img src={BASE_URL + cartImageURL} width="16px" alt='Cart Icon' />
          {cartList.cart.length <= 1 ? 'item' : 'items'} {cartList.cart.length}
        </button>
      </div>
      <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Navbar>
  )
}