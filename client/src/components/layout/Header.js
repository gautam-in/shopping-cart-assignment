import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="signin" to="/login">SignIn</Link>
        <Link className="register" to="/register">Register</Link>
        <a href="cart" className='cart-button'><i className="fas fa-shopping-cart"><span>{0} Items</span></i></a>          
      </section>
    </header>
  )
}
