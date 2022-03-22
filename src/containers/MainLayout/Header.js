import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Cart from "../../components/ShoppingCart";
import { setFilter } from "../../store/action";
import "./header.scss";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { item } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleRedirect = useCallback(
    (route) => () => {history.push(route),
    [history]
    dispatch(setFilter(null))
    }
  );

  const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);

  return (
    <header>
      <div className="navigation" role="navigation">
        <div onClick={handleRedirect("/")}>
          <img className="logo-img" src="static/images/logo.png" alt="logo" />
        </div>
        <nav>
          <ul className="list-n">
            <li>
              <button onClick={handleRedirect("/")}>Home</button>
            </li>
            <li>
              <button onClick={handleRedirect("/products")}>Products</button>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
                <button onClick={handleRedirect("/login")}>SignIn</button>
              </li>
              <li className="link">
                <button onClick={handleRedirect("/register")}>Register</button>
              </li>
            </ul>
          </nav>
          <button className="btn-cart" onClick={toggleCart}>
            <img
              src="static/images/cart.svg"
              alt="cart icon"
              className="icon"
              id="outside"
            />
            <span className="text" id="cart-items">
              {item} Items
            </span>
          </button>
          <div
            id="desktop-cart"
            className="cart-main-cont"
            style={{ display: openCart ? "block" : "none" }}
          >
            <Cart closeCart={toggleCart} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
