import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Header = () => {
return (<header className='mx-5'>
          <Row className='pt-3 mx-5'>
            <Col className='header-left'>
            <img src='/static/images/logo_2x.png' alt='logo' className='w-50 float-lg-right'/>
            </Col >
            <Col xl={6} className='header-center position-relative'>
              <ul className='my-0 ml-2'>
                <li>Home</li>
                <li>Product</li>
              </ul>
            </Col>
            <Col className='header-right'>
              <div>
                <small className='mr-2'>SignIn</small>
                <small>Register</small>
              </div>
              <div>
                <button className='px-3 py-2 border-0'>
                  <img src='/static/images/cart.svg' alt='cart' height='20px'/>
                  <small className='ml-2'>1 items</small>
                </button>
              </div>
            </Col>
          </Row>
        </header>
)
}

export default Header;