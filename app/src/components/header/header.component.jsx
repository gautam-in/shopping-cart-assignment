import './navigation.scss';
import { Link, Outlet } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from '../footer/footer';
import { Fragment } from 'react';
const Navigation = () => {
    const location = useLocation();
    const { pathname } = location;
    const cartItems = useSelector((state => state.cart))
    const filterData = () => {
        let newTotalQuantity = 0;
        cartItems.forEach((item) => {
            newTotalQuantity += item.count;
        });
        return newTotalQuantity
    }
    return (
        <Fragment>
            <div className='header-section'>
                <div className="container">
                    <div className='navigation'>

                        <Navbar.Brand >
                            <Link to="/" className='logo-container'><img src="static/images/logo.png" alt="logo" /></Link>
                        </Navbar.Brand>

                        <Nav className="me-auto">
                            <Link className={'nav-link ' + (pathname === '/' ? 'active' : '')} to="/">Home</Link>
                            <Link className={'nav-link ' + (pathname === '/products' ? 'active' : '')} to="/products">Products</Link>
                        </Nav>
                        <Nav>
                            <div className='login-sec'>
                                <Link to='/login' className={(pathname === '/login' ? 'active' : '')}>Sign In</Link>
                                <Link to='/signup' className={(pathname === '/signup' ? 'active' : '')}>Register</Link>
                            </div>
                            <Nav className='cart-logo'>
                                <Link to='/cart' className={(pathname === '/cart' ? 'active' : '')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    {filterData()}  Cart
                                </Link>

                            </Nav>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </Fragment>

    );
}

export default Navigation;
