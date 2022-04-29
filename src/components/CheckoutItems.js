import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CheckoutItems() {
  useEffect(() => {
    localStorage.removeItem('cart');
  }, []);
  return (
    <div className='checkout container'>
      <h2>Order placed successfully</h2>
      <Link to='/products'>Continue shopping</Link>
    </div>
  );
}

export default CheckoutItems;
