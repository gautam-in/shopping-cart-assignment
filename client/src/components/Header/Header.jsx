import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo_2x.png";
import ApplicationUrls from "../../router/ApplicationRoutes";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Not working" />
        </div>
        <nav className="navOptions">
          <span>
            <Link to={ApplicationUrls.HOME}>Home</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
        </nav>
        <div style={{ position: "absolute", right: "50px" }}>
          <div className={"cartLogoContainer"}>
            <nav className={"text"}>
              <span>
                <Link to={ApplicationUrls.LOGIN}>SignIn</Link>
              </span>

              <span>
                <Link to={ApplicationUrls.REGISTER}>Register</Link>
              </span>
            </nav>
            <div className={"cartIcon"}>
              <button className="cartbtn" aria-label="Justify">
                <Cart name="cartButton" fill="#e83583" />
              </button>
              <div>0 items</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
