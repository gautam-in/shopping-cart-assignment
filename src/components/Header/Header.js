import React from "react";
import "./Header.scss";

import LeftHeaderNavigation from "./Navigation/LeftHeaderNavigation";
import RightHeaderNavigation from "./Navigation/RightHeaderNavigation";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__main">
        <LeftHeaderNavigation />
        <RightHeaderNavigation
          cartItems={props.cartItems}
          openCartWindow={props.openCartWindow}
        />
      </div>
    </header>
  );
};

export default Header;
