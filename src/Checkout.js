import React from 'react';
import Menu from './components/Menu';
import CheckoutMessage from './components/CheckoutMessage';
import Footer from './components/Footer';

function Cart() {
  return (
    <div className="page-container">
      <Menu />
      <CheckoutMessage />
      <Footer />
    </div>
  );
}

export default Cart;
