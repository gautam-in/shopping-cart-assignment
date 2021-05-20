import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const isAvailable = props.location.pathname == props.match.path;
        return isAvailable ? <Component /> : <Redirect to="/not-found" />;
      }}
    />
  );
};

export default CustomRoute;
