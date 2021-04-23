import React, { useEffect, useState } from "react";
import HeaderLogo from "../../atoms/HeaderLogo/HeaderLogo";
import NavigationLinks from "../../molecules/NavigationLinks/NavigationLinks";
import CartButton from "../../molecules/CartButton/CartButton";
import EntryAccessButton from "../../atoms/EntryAccessButton";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  const mobileSize = 600;
  const [isMobile, setisMobile] = useState(false);

  const handleWindowResize = () => {
    setisMobile(window.innerWidth > mobileSize);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <header className="header_container">
        {/* <h1>testing</h1> */}
        <HeaderLogo />

        <div className="width_full">
          {isMobile && (
            <div className="entry_access">
              <EntryAccessButton linkTo="/login">SignIn</EntryAccessButton>
              <EntryAccessButton linkTo="/register">Register</EntryAccessButton>
            </div>
          )}

          <div className="header_content_alignment">
            {isMobile && <NavigationLinks />}
            <CartButton />
          </div>
        </div>
      </header>
      <div className="bottom_grad"></div>
    </>
  );
}

export default Header;
