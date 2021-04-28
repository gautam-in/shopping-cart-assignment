import React from "react";

import HeaderLogo from "../common/headerLogo";

import "./index.scss";

import cartIcon from "../../../static/images/cart.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <HeaderLogo />
        <div className="nav_container">
          {/* <div className="nav_primary">
            <div>NAV ITEM</div>
          </div> */}
          <div className="nav_secondary">
            <div className="cart_logo_container">
              <img className="cart_logo" src={cartIcon} />
              <span>{`${0} items`}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
