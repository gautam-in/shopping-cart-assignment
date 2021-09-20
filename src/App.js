import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Listing from "./pages/Listing/Listing";
import Cart from "./pages/Cart/Cart"
import Register from "./pages/Resigter/Register";
import SignIn from "./pages/SignIn/SignIn"

export default function App() {
  return (
    <>
      <div className="container content">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}
