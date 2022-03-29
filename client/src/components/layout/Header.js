// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import { ImCart } from 'react-icons/im';

// images
import desktopLogo from '../../../public/images/logo_2x.png';
import mobileLogo from '../../../public/images/logo.png';

/**
 * @returns JSX for rendering Header Section
 */
const Header = ({ setShowCart, cartData }) => {
  // component states
  const [showMobileMenuOverlay, setShowMobileMenuOverlay] = useState(false);

  return (
    <header className={showMobileMenuOverlay ? 'header open' : 'header'}>
      {/* mobile hamburger menu items */}
      {showMobileMenuOverlay && (
        <div className="overlay hide-in-desktop hide-in-tablet">
          <div className="header__menu">
            <Link to="/" onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
              SignUp
            </Link>
            <Link to="/home" onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
              Products
            </Link>
          </div>
        </div>
      )}

      <section className="header__left-section">
        <nav className="header__left-section__nav-links">
          <ul>
            <li>
              <Link to="/home" className="header__left-section__nav-links__logo">
                <img className="hide-in-mobile" src={mobileLogo} alt="logo" />
                <img className="hide-in-tablet" src={desktopLogo} alt="logo" />
              </Link>
            </li>
            <li className="hide-in-mobile">
              <Link to="/home">Home</Link>
            </li>
            <li className="hide-in-mobile">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="header__right-section">
        <nav className="header__right-section__nav-links hide-in-mobile">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>

        <div className="header__right-section__cart" onClick={() => setShowCart(true)}>
          <ImCart className="header__right-section__cart__icon" />
          <span>{cartData.length} items</span>
        </div>

        <button
          id="hamburger"
          className="header__hamburger hide-in-tablet"
          onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
    </header>
  );
};

Header.propTypes = {
  setShowCart: PropTypes.func,
  cartData: PropTypes.array
};

export default Header;
