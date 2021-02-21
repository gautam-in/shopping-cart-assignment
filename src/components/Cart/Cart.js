import React from "react";
import { connect } from "react-redux";

import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
// import cartlogo from "../../assets/images/cart.svg";
import classes from "./Cart.css";

const Cart = (props) => {
  return (
    <div className={classes.Cart} onClick={() => props.onCartClick(true)}>
      <img src={`../../static/images/cart.svg`} alt="Cart img" />
      <span>{props.cartList.length} items</span>
    </div >
  );
};
const mapStateToProps = (state) => {
  return {
    cartList: state.product.addToCartProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCartClick: (value) => dispatch(actions.cartHandler(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Cart, axios));
