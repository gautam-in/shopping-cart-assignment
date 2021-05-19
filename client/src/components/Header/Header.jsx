import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo_2x.png";
import ApplicationUrls from "../../router/ApplicationRoutes";
import { LABEL } from "../../constants/constant";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Sabka Bazaar" />
        </div>
        <nav className="navOptions">
          <span>
            <Link to={ApplicationUrls.HOME}>{LABEL.HOME}</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
        </nav>
        <div style={{ position: "absolute", right: "50px" }}>
          <div className={"cartLogoContainer"}>
            <nav className={"text"}>
              <span>
                <Link to={ApplicationUrls.LOGIN}>{LABEL.SIGNIN}</Link>
              </span>

              <span>
                <Link to={ApplicationUrls.REGISTER}>{LABEL.REGISTER}</Link>
              </span>
            </nav>
            <div className={"cartIcon"}>
              <button className="cartbtn">
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
