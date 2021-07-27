import React from "react";
import "./mainNavigation.scss";
import { Link } from "react-router-dom";
import { allRoutes } from "navigation/allRouteNames";

interface IProps {}

function MainNavigation(props: IProps): React.ReactElement {
  return (
    <ul className="main-nav js--main-nav">
      <li>
        <Link to={allRoutes.HOME} className="main-nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to={allRoutes.PLP} className="main-nav-link">
          Products
        </Link>
      </li>
    </ul>
  );
}

export default MainNavigation;
