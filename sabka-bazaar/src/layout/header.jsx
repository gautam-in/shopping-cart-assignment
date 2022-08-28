import { NavLink } from "react-router-dom";
import Cart from "../pages/cart";
const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-first-container">
        <div className="logo-container">
          <NavLink to="/">
            <img
              src="/static/images/logo_2x.png"
              srcSet="/static/images/logo_2x.png, /static/images/logo_2x.png"
              width="190"
              height="86"
              alt="Sabka Bazaar"
              className="logo"
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
        <ul className="nav-links-container nav-links-second-container">
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
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
