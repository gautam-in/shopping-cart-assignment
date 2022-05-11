import React , {useContext} from 'react';
import logo from '../static/images/logo.png'
import {Figure, Navbar, Container, Nav} from 'react-bootstrap'
import './TopNavbar.style.scss'
import CartIcon from '../components/cart_icon/CartIconComp';
import MiniCartComp from '../components/mini_cart/MiniCartComp'
import {CartContext} from '../contexts/CartContext'

function TopNavbar(props) {
    const {isCartOpen} =useContext(CartContext)
    console.log(sessionStorage.getItem('email'));
    return (
        <div>
        <Navbar bg="light" fixed="top" className='shadow'>
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="sabka bazar"
                />
                </Navbar.Brand>
                <Nav.Link  href="/"><span className='link'>Home</span></Nav.Link>
                <Nav.Link href="plp"><span className='link'>Products</span></Nav.Link>
                
                {sessionStorage.getItem('email')? <Nav.Link href="/">Sign out</Nav.Link>: <Nav.Link href="login"><span className='link'>Signin</span></Nav.Link>}
                <Nav.Link href="signup"><span className='link'>Register</span></Nav.Link>
                <span className="justify-content-end"><span className='link'><CartIcon /></span></span >
            </Container>
            {isCartOpen && <MiniCartComp />}
            
        </Navbar>
        
        </div>
    );
}

export default TopNavbar;