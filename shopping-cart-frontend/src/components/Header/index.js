import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import { Cart } from "../Cart";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <Link to="/">
          <img src={images.logoSmall} alt="logo" className="logo" />
        </Link>
        <nav>
          <div className="d-flex justify-content-end mb-3 auth-nav">
            <Link to="/signin" className="mx-3">
              Signin
            </Link>
            <Link to="/register" className="mx-3">
              {" "}
              Register
            </Link>
          </div>
          <div className="d-flex justify-content-between main-nav-container">
            <div className="main-nav">
              <Link to="/" className="mx-3">
                Home
              </Link>
              <Link to="/products"> Products</Link>
            </div>

            <Cart />
          </div>
        </nav>
      </div>
    </header>
  );
};
