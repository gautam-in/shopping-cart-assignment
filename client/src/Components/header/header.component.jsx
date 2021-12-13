import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.styles.css";

const Header = () => {
  const name = sessionStorage.getItem("name");
  const cart = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img
              className='logo-img'
              src='/static/images/logo.png'
              alt='sbka-bazaar-logo'
            />
          </Link>
        </div>
        <div className='menu'>
          <Link to={"/"} className='left-menu'>
            Home
          </Link>
          <Link to={"/products"} className='left-menu'>
            Products
          </Link>
        </div>
        <div className='auth-cart'>
          <div className='auth'>
            {isLoggedIn ? (
              <>
                <div className='right-menu'>Hi {name}</div>
                <div className='right-menu'>Sign Out</div>
              </>
            ) : (
              <>
                <Link className='right-menu' to={"/signin"}>
                  <div>SignIn</div>
                </Link>
                <Link className='right-menu' to={"/signup"}>
                  <div>Register</div>
                </Link>
              </>
            )}
          </div>
          <Link to={"/cart"} className='cart'>
            <img
              className='cart-img'
              src='/static/images/cart.svg'
              alt='cart'
            />
            <div className='cart-count'>{cart.length} items</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
