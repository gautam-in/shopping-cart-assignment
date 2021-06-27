import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { GlobalStyles } from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
