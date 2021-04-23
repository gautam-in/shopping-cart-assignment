import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../../static/images/logo.png";
import logo_2x from "/static/images/logo_2x.png";

import { primaryBlack, primaryGrey } from "../../styles/_variables.scss";
import "./HeaderLogo.scss";

function HeaderLogo() {
  return (
    <div>
      {primaryBlack}
      <Link to="/">
        <picture>
          <source media="(min-width:601px)" srcSet={logo_2x} />
          <source media="(max-width:600px)" srcSet={logo} />
          <img src={logo} alt="Sabka Baazar Logo" className="header_logo" />
        </picture>
      </Link>
    </div>
  );
}

export default HeaderLogo;
