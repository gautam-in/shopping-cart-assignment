import React from "react";
import "./Logo.scss";
import sabkaBazarLogo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link className="logo" to="/">
    <img src={sabkaBazarLogo} alt="Navigate to HomePage" />
  </Link>
);

export default Logo;
