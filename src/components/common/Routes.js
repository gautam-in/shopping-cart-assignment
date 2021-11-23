import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("../home/Home"));
const Login = lazy(() => import("../auth/Login"));
const SignUp = lazy(() => import("../auth/SignUp"));
const NotFoundPage = lazy(() => import("../common/NotFoundPage"));
const Product = lazy(() => import("../product/Product"));

export default function Routes() {
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:id" component={Product} />
          <Route path="*" exact={true} component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}
