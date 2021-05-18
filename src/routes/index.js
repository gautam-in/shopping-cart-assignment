import React, { lazy } from "react";
import { Route } from "react-router-dom";

import CustomRoute from "./customRoute";

const Home = lazy(() => import("../containers/home"));
const Register = lazy(() => import("../containers/registerMyBazar"));
const LoginMyBazar = lazy(() => import("../containers/loginMyBazar"));
const ProductList = lazy(() => import("../containers/productList"));
const Cart = lazy(() => import("../containers/cartPage"));
const NotFound = lazy(() => import("../containers/404"));

const Routes = () => {
  return (
    <>
      <CustomRoute path="/" exact component={Home} />
      <CustomRoute path="/home" exact component={Home} />
      <CustomRoute path="/login-your-account" component={LoginMyBazar} />
      <CustomRoute path="/create-your-account" component={Register} />
      <CustomRoute path="/products" component={ProductList} />
      <CustomRoute path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
    </>
  );
};

export default Routes;
