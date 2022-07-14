import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Header = () => {
return (<header className='mx-lg-5 mx-md-0 w-100'>
          <Row className='header-container pt-1 px-1 pt-md-2 pt-xs-0 mx-lg-5 mx-md-0'>
            <Col xs={3}  className='header-left'>
            <img src='/static/images/logo_2x.png' alt='logo' className='mt-lg-0 mb-1 float-lg-right'/>
            </Col >
            <Col xs={6}  className='header-center position-relative'>
              <ul className='my-0 ml-2 d-none d-md-block'>
                <li>Home</li>
                <li>Product</li>
              </ul>
            </Col>
            <Col xs={3} className='header-right'>
              <div className='d-flex flex-column float-md-right float-lg-none'>
                <div className='d-none d-md-block px-3'>
                  <small className='mr-2'>SignIn</small>
                  <small>Register</small>
                </div>
                <div>
                  <button className='px-1 px-md-3 py-md-1 py-lg-2 border-0 cart-button'>
                  <img src='/static/images/cart.svg' alt='cart' height='20px'/>
                  <small className='ml-2'>1 items</small>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </header>
)
}

export default Header;