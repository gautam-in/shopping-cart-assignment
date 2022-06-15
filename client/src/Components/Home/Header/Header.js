import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isLoggedIn, logout } from "../../../Services/Storage";
import { CartContext } from "../../../Context/CartContextState";
import Cart from "../../Cart/Cart";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import { ReactComponent as CartvSvg} from "../../cart.svg";

export default (props) => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();
  const [loggedin, setLoggedin] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    logout();
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
      <div className="maincontainer">
        <div className="logo">
          <Link className="links" to="/">
            <img src="/static/images/logo.png" className="logo" alt="" />
          </Link>
        </div>
        <div className="heading-menu">
          <Link className="links" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="links" to="/product">
            <h3>Products</h3>
          </Link>
        </div>
        <div className="hidden-menu">
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
          <div className="cart-box-show">
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
              <Link onClick={handleLogout} to="/login" className="links">
                Logout
              </Link>
            )}
          </div>

          <div className="cart-icon" onClick={toggleCart}>
            <div className={`App max-height-100`} style={{ fill: "#970000", width: "30%" }}>
              <CartvSvg />
            </div>
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
