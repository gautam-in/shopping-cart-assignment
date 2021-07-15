import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("../home/Home"));
const Product = lazy(() => import("../product/Product"));
const wildRoute = lazy(() => import("./wildRoute"));
const Login = lazy(() => import("../authentication/Login"));
const SignUp = lazy(() => import("../authentication/SignUp"));

function Routes() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-block">
            <div className="loader"></div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="*" exact={true} component={wildRoute} />
        </Switch>
      </Suspense>
    </>
  );
}

export default Routes;
