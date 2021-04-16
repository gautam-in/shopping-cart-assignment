import React ,{lazy,Suspense}from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Login = lazy(()=>import('./components/login'));

const Register =lazy(()=>import( "./components/signUp/index"));
const Product = lazy(()=>import("./components/productList/index"));
const Home = lazy(()=>import("./components/home/home"));

function Routes({ setCart, categories }) {
  return (
    <Switch>
      <Suspense fallback ={<div>Loading...</div>}>
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
      </Suspense>
    </Switch>
  );
}

export default Routes;
