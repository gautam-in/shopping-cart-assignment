import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../pages/Cart";
import CartContext from "../../store/cart-context";
import "./style.scss";
import { Link } from "react-router-dom";

function Header() {
  const ctx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    document.body.style.overflow = "hidden";
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <header className="header">
        <img
          className="header__logo"
          src="static/images/logo.png"
          alt="Sabka Bazaar logo"
        />

        <div className="header__links">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/PLP" className="products-text">
            Products
          </Link>
        </div>
        <div className="header__cartIcon">
          <div className="flex">
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Register</Link>
          </div>
          <div onClick={showCartHandler} className="cartIcon" tabIndex="0">
            <img
              className="cartIcon__img"
              src="static/images/cart.svg"
              alt="cartSvg"
            />
            {ctx.totalItems}
            {ctx.totalItems === 1 ? "item" : "items"}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
