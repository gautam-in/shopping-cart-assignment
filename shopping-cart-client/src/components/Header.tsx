import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({handleShow}:{handleShow:()=>void}) => {

  const cartTotalQuantity = useSelector(
    (state:any) => state.updateCartItems.cartTotalQuantity
  );

    return (<header className='mx-md-0 w-100'>
              <Row className='header-container container-fluid pt-1 px-1 pt-md-2 pt-xs-0 mx-md-0'>
                <Col xs={3}  className='header-left'>
                <img src='/static/images/logo_2x.png' alt='logo' className='mt-lg-0 mb-1 float-lg-right'/>
                </Col >
                <Col xs={6}  className='header-center position-relative'>
                  <ul className='my-0 ml-2 d-none d-md-block'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Product</Link></li>
                  </ul>
                </Col>
                <Col xs={3} className='header-right pl-5'>
                  <div className='d-flex flex-column float-md-right float-lg-none'>
                    <div className='d-none d-md-block px-3'>
                      <small className='mr-2'><Link to='/sign-in' className='d-inline'>SignIn</Link></small>
                      <small><Link to='sign-up' className='d-inline'>Register</Link></small>
                    </div>
                    <div onClick={handleShow}>
                      <button className='px-1 px-md-3 py-md-1 py-lg-2 border-0 cart-button'>
                      <img src='/static/images/cart.svg' alt='cart' height='20px'/>
                      <small className='ml-2'>{cartTotalQuantity} items</small>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </header>
    )
}

export default Header;