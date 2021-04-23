import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import ProductsListing from "./components/pages/ProductsListing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Footer from "./components/organisms/Footer/Footer";

import "App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={ProductsListing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect path="/" to="home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
