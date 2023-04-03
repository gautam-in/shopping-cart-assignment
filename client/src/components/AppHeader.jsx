import logo from "/static/images/logo_2x.png";
import cartIcon from "/static/images/cart.svg";
import "../assets/styles/components/AppHeader.scss";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context";

const AppHeader = () => {
  const setSearchParams = useSearchParams();
  const { totalItems } = useContext(CartContext);

  return (
    <div className="app-header">
      <div className="container">
        <div className="wrapper-navigation">
          <Link to="/">
            <img src={logo} alt="Sabka Bazaar" className="img-logo" />
          </Link>

          <nav aria-label="main menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="wrapper-signin-register">
            <Link to="/login" className="btn-link">
              SignIn
            </Link>
            <Link to="/register" className="btn-link">
              Register
            </Link>
          </div>

          <button
            className="btn-cart"
            aria-label="view cart"
            onClick={() => {
              setSearchParams[1]((prev) => [
                ...prev.entries(),
                ["cart", "true"],
              ]);
              document.body.parentElement.style.overflow = "hidden";
            }}
          >
            <img
              src={cartIcon}
              alt="cart"
              aria-hidden
              className="img-cart-icon"
            />
            {totalItems.length} item{totalItems.length > 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
