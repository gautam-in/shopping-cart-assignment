import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import locale from "../../assets/locale.json";

import "./styles.scss";

const Header = () => {
  const headerLocale = locale.default.application.header;

  return (
    <header className="header">
      <a href="#main" className="skip-to-content">
        {headerLocale.skipToMainContent}
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
              <Link to="/">{headerLocale.home}</Link>
            </li>
            <li>
              <Link to="/products">{headerLocale.products}</Link>
            </li>
          </ul>
        </nav>

        <nav className="header__secondary-navigation">
          <ul className="hidden@mobile">
            <li>
              <Link to="/auth/signin">{headerLocale.signin}</Link>
            </li>
            <li>
              <Link to="/auth/register">{headerLocale.register}</Link>
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
