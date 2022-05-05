import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CheckoutMessage() {
  useEffect(() => {
    sessionStorage.removeItem('cart');
  }, []);
  return (
    <section>
      <h2>Order placed successfully</h2>
      <Link to='/products'>Continue shopping</Link>
    </section>
  );
}

export default CheckoutMessage;
