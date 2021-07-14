import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Product from "../product/Product";
import ErrorRoute from "./ErrorRoute";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route>
          <ErrorRoute />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
