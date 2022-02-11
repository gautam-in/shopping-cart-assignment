import React from 'react';

import { connect } from 'react-redux';
import Checkout from '../../components/checkout/checkout.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems }) => {
  return <Checkout cartItems={cartItems} />;
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
