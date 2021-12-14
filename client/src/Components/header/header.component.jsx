import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSignOut } from "../../reducer/user/user.actions";

import "./header.styles.css";

const Header = () => {
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const cart = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

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
                <div className='right-menu first-name'>
                  Hi, {userCredentials.firstName}
                </div>
                <div
                  className='right-menu'
                  onClick={() => dispatch(userSignOut())}
                >
                  Sign Out
                </div>
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
