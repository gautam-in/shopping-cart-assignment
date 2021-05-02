import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component />;
      }}
    />
  );
};

export default CustomRoute;
