import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage/homePage.component";
import Footer from "./components/footer/footer.component";
import SignInPage from "./pages/sign-in/signInPage.component";
import SignUpPage from "./pages/sign-up/signUpPage.component";
import PlpPage from "./pages/PLPPage/PlpPage.component";
import Cart from "./components/Cart/cart.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "./redux/cart/cart.selectors";

function App({ hidden }) {
  return (
    <div>
      <Header></Header>
      {!hidden ? <Cart></Cart> : null}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/PLP" component={PlpPage}></Route>
        <Route path="/login" component={SignInPage}></Route>
        <Route path="/register" component={SignUpPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(App);
