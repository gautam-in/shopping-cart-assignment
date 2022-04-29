import React, { useState,useEffect } from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../images/logo.png"
import cart from "../images/cart.svg"
import './Header.css'
import CartItemList from './CartItemList';


function Header({ItemCount}) {
 
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login');
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const cartCount= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
  
  
  return (
    <>
  <Navbar  className='Header'>
  <Container>
    <Navbar.Brand><Link to="/"><img alt="logo"className='logo' src={logo}/></Link></Navbar.Brand>
    <div className='home-products d-none d-md-block'>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    </div>
    <div>
    <div className='text-end d-none d-md-block' >
    {localStorage.getItem('isLoggedIn') !== 'true' && (
    <Link to="/login">Sign In</Link>)}
    {localStorage.getItem('isLoggedIn') !== 'true' && (
    <Link to="/register">Register</Link>)}
    {localStorage.getItem('isLoggedIn') == 'true' && (
    <Nav.Link href="javascript:void(0)" onClick={handleLogout}>Log out</Nav.Link>
    )}
    </div>
    <Navbar.Brand className='d-flex justify-content-end'><img alt="cart" src={cart}/>
    <Nav.Link  onClick={handleShow}>{cartCount} items</Nav.Link>
    </Navbar.Brand>
    </div>
  </Container>
</Navbar>
<CartItemList ItemCount={ItemCount} show={show} handleClose={handleClose}/>
</>
    );
}

export default Header;
