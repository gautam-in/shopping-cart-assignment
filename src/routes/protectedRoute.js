import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkLoggedIn } from "../services/index";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = checkLoggedIn();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/login-your-account", from: props.location }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
