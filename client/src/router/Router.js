import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Home from "../containers/Home/Home";
import ApplicationUrls from "./ApplicationRoutes";
import ScrollToTop from "./ScrollToTop";

const Router = () => (
  <ScrollToTop>
    <Switch>
      {/* <Redirect to={ApplicationUrls.HOME} /> */}
      <Route exact path={ApplicationUrls.LOGIN} component={Login} />
      <Route exact path={ApplicationUrls.REGISTER} component={Register} />
      <Route exact path={ApplicationUrls.HOME} component={Home} />
    </Switch>
  </ScrollToTop>
);

export default Router;
