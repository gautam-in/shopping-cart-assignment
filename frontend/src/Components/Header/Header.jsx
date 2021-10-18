import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Svg from "../../Helper/SvgComponent";
import "./Header.scss";

import { isLoggedIn, logout } from "../../Helper/loginFunc";
import { AddToCartContext } from "../../Context/AddToCartContext";
import Cart from "../../Components/Cart/Cart";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../../Components/Cart/components/Menu/Menu";

const Header = (props) => {
  const { cart, setCart } = useContext(AddToCartContext);
  const history = useHistory();
  const [loggedin, setLoggedin] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    logout();
    history.push("/login");
  };
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const toggleCart = (id) => {
    setCartOpen(!cartOpen);
  };
  useEffect(() => {
    isLoggedIn() ? setLoggedin(true) : setLoggedin(false);
  }, [history.location.pathname]);
  return (
    <section className="header-section">
      <div className="header-main-container">
        <div className="header-logo">
          <Link className="links" to="/">
            <img src="/images/logo.png" className="logo" alt="" />
          </Link>
        </div>
        <div className="header-menu">
          <Link className="links" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="links" to="/product">
            <h3>Products</h3>
          </Link>
        </div>
        <div className="header-hidden-menu">
          <MenuIcon onClick={handleMenu} />
          {toggleMenu && (
            <Menu
              toggleMenu={toggleMenu}
              loggedin={loggedin}
              handleLogout={handleLogout}
              toggleCart={toggleCart}
              cart={cart}
            />
          )}
        </div>
        {cartOpen && (
          <div className="header-cartmenu">
            <Cart handleClose={toggleCart} cartItems={cart} />
          </div>
        )}
        <div className="cart-signin">
          <div className="signin">
            {!loggedin ? (
              <>
                <Link className="links" to="/login">
                  SignIn
                </Link>
                <Link className="links" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <Link onClick={handleLogout} className="links">
                Logout
              </Link>
            )}
          </div>

          <div className="cart-icon" onClick={toggleCart}>
            <Svg name="cart" style={{ fill: "#970000", width: "30%" }} />
            <span className="item">{cart.length + " "}items</span>
            {cartOpen && <div onClick={toggleCart} className="backdrop"></div>}
            {cartOpen && (
              <div className="cart-box">
                <Cart
                  handleClose={toggleCart}
                  updateCart={setCart}
                  cartItems={cart}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
