import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Cart from './../cart';
import "../navbar/navbar.scss";
import logoIcon from "../../../public/static/images/logo.png";
import cartIcon from "../../../public/static/images/cart.svg";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
      <nav>
      <Container>
        <Row>
          <Col md={6}>
            <div className='nav-left'>
              <div id='app-logo'>
                <img id="01" alt="app-logo" title="app-logo" src={logoIcon} />
              </div>
              <div className='menu-options'>
                <span data-test="homeButton" className='home' onClick={() => navigate('./home')}>Home</span>
                <span data-test="productsButton" className='products' onClick={() => navigate('./products')}>Products</span>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='nav-right'>
              <div className='login-options'>
                <span data-test="signinButton" onClick={() => navigate('./login')}>SignIn</span>
                <span data-test="signupButton" className='left-spacer' onClick={() => navigate('./signup')}>Register</span>
              </div>
              <div data-test="cartButton" className='cart-wrapper' onClick={() => setModalShow(true)}>
                <span className='cart-icon'>
                  <img id="02" alt="add-to-cart" title="add-to-cart" src={cartIcon} />
                </span>
                <span className='cart-count'>{cartItems.length} item{cartItems.length ? 's' : ''}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {modalShow ? <Cart show={modalShow} onHide={() => setModalShow(false)}/> : null}
      </nav>
  );
};

export default Navbar;