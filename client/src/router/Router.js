import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Home from "../containers/Home/Home";
import ApplicationUrls from "./ApplicationRoutes";
import ScrollToTop from "./ScrollToTop";
import Product from "../containers/Product/Product";

import Dropdown from "../components/UI/Dropdown/Dropdown";

const Router = (props) => (
  <ScrollToTop>
    <Switch>
      {/* <Redirect to={ApplicationUrls.HOME} /> */}
      <Route exact path={ApplicationUrls.LOGIN} component={Login} />
      <Route exact path={ApplicationUrls.REGISTER} component={Register} />
      <Route
        exact
        path={ApplicationUrls.HOME}
        component={() => <Home categories={props.categories} />}
      />
      <Route
        exact
        path={ApplicationUrls.PRODUCTS}
        component={() => <Product categories={props.categories} />}
      />
      <Route exact path={ApplicationUrls.CART} component={Dropdown} />
    </Switch>
  </ScrollToTop>
);
export default Router;
