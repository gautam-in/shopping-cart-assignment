import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Row from "components/row/row";
import Column from "components/column/column";
import MainNavigation from "components/mainNavigaton/mainNavigation";

const Header = (): React.ReactElement => {
  return (
    <header>
      <Row className="header-row">
        <Column lg={6} md={6} sm={6} xs={6} className="header-nav-column">
          <img src={"/static/images/logo.png"} alt="app logo" className="app-logo" />
          <MainNavigation />
        </Column>
        <Column lg={6} md={6} sm={6} xs={6} className="header-cart-column">
          <div className="login-nav">
            <Link to="/login" className="login-nav-link">
              SignIn
            </Link>
            <Link to="/register" className="login-nav-link">
              Register
            </Link>
          </div>
          <div className="cart-box" onClick={() => console.log("cart clicked")}>
            <i className="ion-android-cart"></i>
            <span>0 items</span>
          </div>
        </Column>
      </Row>
    </header>
  );
};

export default Header;
