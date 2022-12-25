import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

import { imageURL } from '../../utils/URL';
import { Cart } from '../cart/Cart';

import './Header.scss';

export const Header = (props) => {
  const { cartList } = props;
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <header>
      <div className='container app-container'>
        <Navbar expand="lg" className='p-0 justify-content-between align-items-stretch'>
          <Navbar.Brand href="/" className='d-flex align-items-center'><img src={process.env.REACT_APP_BASE_URL + imageURL.logoURL} alt="company logo" width="125px" /></Navbar.Brand>
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
                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/signup">Register</Nav.Link>
              </Nav.Item>
            </Nav>
            <button className='cart-btn' onClick={() => setModalShow(true)}>
              <img src={process.env.REACT_APP_BASE_URL + imageURL.cartImageURL} width="16px" alt='Cart Icon' />
              {cartList.cart.length} {cartList.cart.length <= 1 ? 'item' : 'items'} 
            </button>
          </div>
          <Cart
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Navbar>
      </div>
    </header>
  )
}