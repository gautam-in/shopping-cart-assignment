import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login/index";
import Register from "./components/signUp/index";
import Product from "./components/productList/index";
import Home from "./components/home/home";

function Routes({ setCart, categories }) {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products">
        <Product categories={categories} setCart={setCart} />
      </Route>
      <Route exact path="/home">
        <Home categories={categories} />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default Routes;
