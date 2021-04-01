import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkLoggedIn } from "../services/LoginService";

function RestrictedRoute({ component: Component, ...rest }) {
  const isAuthenticated = checkLoggedIn();
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
