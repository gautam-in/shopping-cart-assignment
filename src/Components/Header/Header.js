import React, { useContext } from "react";
import { Link} from "react-router-dom";
import logo from '../../static/images/logo.png';
import CartImage from "../../static/images/cart.svg";
import { useMediaQuery } from "../utility/useMediaQuery";
import { useHistory } from "react-router-dom";
import CartModal from "../Cart/cartModal";
import  {GlobalAppContext}  from "../../Context/GlobalAppContext";
import "./Header.css"

export default function Header() {
    const {
        cartItems: { count, cartOpen },
        dispatch,
      } = useContext(GlobalAppContext);
      
  const countItems = count === 1 ? `${count} item` : `${count} items`;
  
  const history = useHistory();
  const browserWidth = useMediaQuery("(min-width: 770px)");

  const handleBrowserWidth = () => {
    browserWidth
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : history.push("/cartpage");
  };

  return (
    <header className="header">
        <section className="header-section">
            <Link to="/">
                <img src={logo} className="logo-image" alt="Sabka Bazar Image" />
            </Link>
            <nav className="header-section-product-links">
                <Link to="/" className="header-section-product-links-item">
                Home
                </Link>
                <Link
                to="/products"
                className="header-section-product-links-item"
                >
                Products
                </Link>
            </nav>
            <div className="header-section-register-links">
                <nav className="header-section-register-links-login">
                <Link
                    to="/signin"
                    className="header-section-register-links-login-item"
                >
                    SignIn
                </Link>
                <Link
                    to="/register"
                    className="header-section-register-links-login-item"
                >
                    Register
                </Link>
                </nav>
                <div
                    className="cart-wrapper"
                    onClick={() => {
                      handleBrowserWidth();
                    }}
                    tabIndex={0}
                >
                    <img src={CartImage} className=" cart-wrapper__image image-wrapper" alt="Cart Image" />
                    <p className="cart-wrapper__text">{countItems} </p>
                </div>
                {cartOpen ? (
                    <CartModal cartOpen={cartOpen} />
                    ) : ("")
                }
            </div>
        </section>
  </header>

  );
}
