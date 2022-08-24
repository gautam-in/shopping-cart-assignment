import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-first-container">
        <div className="logo-container">
          <NavLink to="/">
            <img
              src="/static/images/logo.png"
              className="nav-logo-img"
              alt="Sabka Bazaar"
            />
          </NavLink>
        </div>

        <ul className="nav-links-container">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-second-container">
        <ul className="nav-links-container">
          <li>
            <NavLink className="nav-link" to="/sign-in">
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
        <div className="cart-container">
          <NavLink to="/">
            <img
              src="/static/images/cart.svg"
              className="cart-img"
              alt="Go to cart"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
