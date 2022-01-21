import "./Header.scss";
// import logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="sub-container">
        <Link to="/">
          <img src="/images/logo.png" className="logo-image" alt="logo" />
        </Link>
        <nav className="nav-items">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/products" className="link">
            Products
          </Link>
        </nav>
        <div className="nav-wrapper">
          <nav className="login">
            <Link to="/signin" className="link">
              SignIn
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
          </nav>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
