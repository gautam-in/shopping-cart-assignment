import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import thumb from "./thumb1.jpg";

import Home from "./components/pages/Home";
import Header from "./components/organisms/Header";
import ProductsListing from "./components/pages/ProductsListing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Footer from "./components/organisms/Footer/Footer";

import "App.css";
const App = () => {
  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
