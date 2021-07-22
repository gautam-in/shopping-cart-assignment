import React from "react";
import "./mainNavigation.scss";
import { Link } from "react-router-dom";

interface IProps {}

function MainNavigation(props: IProps): React.ReactElement {
  return (
    <ul className="main-nav js--main-nav">
      <li>
        <Link to="#" className="main-nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="main-nav-link">
          Products
        </Link>
      </li>
    </ul>
  );
}

export default MainNavigation;
