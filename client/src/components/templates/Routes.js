import { Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));

const Routes = () => {
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
