import React from 'react';
import CartItemList from '../components/CartItemList';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Cart() {
  return (
    <>
      <Header />
      <CartItemList />
      <Footer />
      </>
  );
}

export default Cart;
