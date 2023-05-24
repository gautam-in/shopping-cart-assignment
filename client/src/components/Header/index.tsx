import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import "./styles.scss";
import { FunctionComponent, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Cart } from "../Cart";

type HeaderProps = {
  skipToMainContent: string;
  home: string;
  products: string;
  signin: string;
  register: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  skipToMainContent,
  home,
  products,
  signin,
  register,
}) => {
  const { state } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <header className="header">
      <a href="#main" className="skip-to-content">
        {skipToMainContent}
      </a>
      <div className="container header__wrapper">
        <Link to="/" className="header__logo">
          <img
            src="/static/images/logo.png"
            alt="Sabka Bazar logo"
            className="logo"
          />
        </Link>

        <nav className="header__primary-navigation hidden@mobile">
          <ul className="header__primary-navigation__list">
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/products">{products}</Link>
            </li>
          </ul>
        </nav>

        <nav className="header__secondary-navigation">
          <ul className="header__secondary-navigation__list hidden@mobile">
            <li>
              <Link to="/auth/signin">{signin}</Link>
            </li>
            <li>
              <Link to="/auth/register">{register}</Link>
            </li>
          </ul>
          <div className="header__navigation-cart">
            <button onClick={() => setIsCartVisible(!isCartVisible)}>
              <MdShoppingCart aria-hidden="true" />{" "}
              <span>
                {state.itemCount === 1
                  ? `${state.itemCount} item`
                  : `${state.itemCount} items`}
              </span>
            </button>
          </div>
        </nav>
      </div>
      {isCartVisible && (
        <Cart show={isCartVisible} setShowCart={setIsCartVisible} />
      )}
    </header>
  );
};

export default Header;
