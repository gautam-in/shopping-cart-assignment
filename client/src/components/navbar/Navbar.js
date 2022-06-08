import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../components/images/logo.png'
import './navbar.css'
const Navbar = () => {
  const count = useSelector(state=>state.cartSlice.count)
  return (
    <header className="navbarContainer">
      <div className="navbarWrapper">
        <section className="navbarLeft">
          <nav className="navContainer">
            <ul className="nav-menu">
                <li className="nav-item"><img src={logo} className="logo-img" alt="logo"/></li>
                <li  className="nav-item"><Link to="/">Home</Link></li>
                <li  className="nav-item" ><Link to="/products">Products</Link></li>
            </ul>
          </nav>
        </section>
        <section className="navbarRight">
          <nav className="navContainer">
          <nav className="navContainer">
          <ul className="nav-menu">
              <li className="nav-item"><Link to="/sign-up">SignUp</Link></li>
              <li  className="nav-item"><Link to="/login">Login</Link></li>
              <li  className="nav-item"><button className="cart-button"><Link to="/cart">Items {count}</Link></button></li>
          </ul>
        </nav>
          </nav>
        </section>
      </div>
    </header>
  );
};
export default Navbar;
