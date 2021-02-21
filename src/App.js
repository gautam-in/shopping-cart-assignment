import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";

import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";

import * as actions from "./store/actions/index";
import Modal from "./components/UI/Modal/Modal";
import CartComponent from "./containers/CartComponent/CartComponent";

const asyncProductsPage = asyncComponent(() => {
  return import("./containers/ProductsPage/ProductsPage");
});

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/product" exact component={asyncProductsPage} />
        <Redirect to="/home" />
      </Switch>
    );


    return (
      <div>
        <Layout>{routes}</Layout>
        <Modal show={this.props.cartFlag} modalClosed={this.props.onCartClick}>
          <CartComponent />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartFlag: state.product.cartFlag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCartClick: () => dispatch(actions.cartHandler()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
