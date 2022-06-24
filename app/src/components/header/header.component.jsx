import './navigation.scss';
import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="container">
            <div className='navigation'>
                <Navbar.Brand >
                    <Link to="/" className='logo-container'><img src="static/images/logo.png" /></Link>
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/products">Products</Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Sign In</Nav.Link>
                    <Nav.Link href="#deets">Register</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      0  Cart
                    </Nav.Link>
                </Nav>
            </div>
            <Outlet />
        </div>

    );
}

export default Navigation;
