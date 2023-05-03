import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {Link}from 'react-router-dom';
import Modal from './cartModal';
import '../styles/header.scss'
const Header = () => {
    const [openCart, setOpenCart] = useState(false);
    const count = useSelector(state => state.cart.totalItems);
    const openCartHandler = () => {
        setOpenCart(true);
    }
    return(
        <>
           <div className="header">
            <nav className="header_container">
            <div className="left-logo">
            <Link to='/home'><img src='/static/images/logo.png' alt="sabka Bazaar"></img></Link>
            </div>
           <nav className='nav-links'>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
           </nav>
           <div className='right-nav-login'>
            <nav className='login-links'>
                <Link to='/signIn'>SignIn</Link>
                <Link to='/register'>Register</Link>
            </nav>

           <div className='cart' onClick={openCartHandler}>
            
                <img src='/static/images/cart.svg' alt='cart icon'></img>
                <span>{count}item
            </span>
           </div>
            </div>

           </nav>
           </div>
           {openCart? <Modal setOpenCart={setOpenCart}/> : null}
        </>
    )
}

export default Header;