import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";

import useDevice from "../utils/customHooks/useDevices";

const CustomRoute = ({ component: Component, ...rest }) => {
  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <Route
      {...rest}
      render={(props) => {
        const pathName = props.location.pathname;
        const isAvailable = props.location.pathname == props.match.path;
        // debugger;
        if (isDesktop && pathName == "/cart") {
          return <Redirect to="/products" />;
        } else {
          return isAvailable ? <Component /> : <Redirect to="/not-found" />;
        }
      }}
    />
  );
};

export default CustomRoute;
