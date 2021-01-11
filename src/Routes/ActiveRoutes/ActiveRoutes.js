import React from "react";
import { Route } from "react-router-dom";

import ActiveContainer from "./ActiveContainer";
import { Login, Register } from "../../Modules";

// Application Routes // product, order
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const activeRoutes = routes.map(route => {
  const { path, component: Component } = route;
  return (
    <Route
      exact
      path={path}
      key={path}
      render={routeProps => <ActiveContainer component={Component} {...routeProps} />}
    />
  );
});

export default activeRoutes;
