import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import activeRoutes from "./ActiveRoutes";

const NotFound = () => {
  return <h1>Not Found</h1>;
};

const Routes = () => (
  <Router>
    <Switch>
      {activeRoutes}
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
