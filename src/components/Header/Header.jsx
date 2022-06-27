import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../Header/Header.scss";
import { MdShoppingCart } from "react-icons/md";
import CartModel from "../CartModel/CartModel";
import { useSelector } from "react-redux";
import { selectCartTotalCount } from "../../redux/selectors/cardSelector";

const Header = () => {
  const Navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalCount = useSelector(selectCartTotalCount);

  const handleCartOpen = () => {
    if (window.screen.width >= 992) {
      setIsCartOpen(!isCartOpen);
      isCartOpen
        ? (document.getElementById("overlay").style.display = "none")
        : (document.getElementById("overlay").style.display = "block");

      isCartOpen
        ? (document.body.style.overflow = "unset")
        : (document.body.style.overflow = "hidden");
    } else {
      Navigate("/cart");
    }
  };
  return (
    <>
      <div id="overlay"></div>
      <header className="header-container">
        <div className="image-container">
          <Link to="/">
            <img
              className="image-logo"
              src="/static/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-right-container">
          <div className="signin-rigester-container">
            <Link className="singin-signup-link " to="/signin">
              SignIn
            </Link>
            <Link className="singin-signup-link " to="/register">
              Register
            </Link>
          </div>
          <div className="links-cart-container">
            <div className="link-container">
              <Link className="link" to={"/"}>
                Home
              </Link>
              <Link className="link" to={"/products"}>
                Products
              </Link>
            </div>
            <div className="products-cart-container">
              <div className="cart" onClick={handleCartOpen}>
                <MdShoppingCart className="cart-icon" />
                {totalCount} Items
              </div>
            </div>
          </div>
        </div>
      </header>
      {isCartOpen && <CartModel handleCartOpen={handleCartOpen} />}
      <Outlet />
    </>
  );
};

export default Header;
