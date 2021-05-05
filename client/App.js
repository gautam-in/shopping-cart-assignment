import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./components/redux/store";

import Home from "./components/pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import ProductsListing from "./components/pages/ProductsListing/ProductsListing";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Footer from "./components/organisms/Footer/Footer";

import "App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={ProductsListing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect path="/" to="home" />
        </Switch>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
