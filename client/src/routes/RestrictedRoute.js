import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userInfo } from "../utils/constants";

function RestrictedRoute({ component: Component, ...rest }) {
  const isAuthenticated = userInfo.isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/", from: props.location }} />;
        }
      }}
    />
  );
}

export default RestrictedRoute;
