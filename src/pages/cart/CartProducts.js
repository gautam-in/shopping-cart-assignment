import React from 'react';

import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';
import './CartProducts.scss';

const CartProducts = () => {

  const { cartItems } = useCart();

  return ( 
    <div className='cart-items'>

      {
        cartItems.map(product => <CartItem key={product.id} product={product}/>)
      }
    </div>

  );
};
 
export default CartProducts;