import React from 'react';
import Menu from './components/Menu';
import CartList from './components/CartList';
import Footer from './components/Footer';

function Cart() {
  return (
    <div className="page-container">
      <Menu />
      <CartList />
      <Footer />
    </div>
  );
}

export default Cart;
