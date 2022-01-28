import React from 'react';
import logo from '../../resources/images/logo.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="Logo" />
      </section>
      <nav className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </nav>
      <section className="right-heading">
        <a href="#signin" className='signin'>SignIn</a>
        <a href="#register" className='register'>Register</a>
        {/* <span className='cart-button'><i className="fas fa-shopping-cart">{0 + "  " + "Items"}</i></span> */}
        <a href="#cart" className='cart-button'><i className="fas fa-shopping-cart"><span>{0} Items</span></i></a>          
      </section>
    </header>
  )
}
