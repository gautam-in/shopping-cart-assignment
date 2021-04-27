import React from "react";
import { Link } from "react-router-dom";

import Image from "../image";

import logo from "../../../../static/images/logo.png";
import logo_2x from "../../../../static/images/logo_2x.png";

import "./index.scss";

const HeaderLogo = () => {
  const imagePropsData = {
    src_2x:logo_2x,
    src:logo,
    alt: "Sabka Bazar",
    imgClassName: "logo"
  };
  return (
    <div className="logo_container">
      <Link to="/">
        <Image {...imagePropsData} />
      </Link>
    </div>
  );
};

export default HeaderLogo;
