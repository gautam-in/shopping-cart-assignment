import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import "./styles.scss";
import { FunctionComponent } from "react";

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
          <ul>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/products">{products}</Link>
            </li>
          </ul>
        </nav>

        <nav className="header__secondary-navigation">
          <ul className="hidden@mobile">
            <li>
              <Link to="/auth/signin">{signin}</Link>
            </li>
            <li>
              <Link to="/auth/register">{register}</Link>
            </li>
          </ul>
          <div className="header__navigation-cart">
            <MdShoppingCart /> <span>0 items</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
