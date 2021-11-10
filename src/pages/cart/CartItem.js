import React from 'react';

import { useCart } from '../../hooks/useCart';
import CartButtons from '../../components/shared/CartButtons';

const CartItem = ({product}) => {

  const { increase, decrease, removeProduct } = useCart();

  return ( 
    <div className="cart-item">            
      <div className="cart-image">
        <img
          alt={product.name}
          src={product.imageURL} className="img-fluid"
        />
      </div>      
      <div>
        <div className="product-name">{product.name}</div>
        <CartButtons product={product} />                
      </div>
      <div className="price">
        <span style={{fontWeight: 'bold'}}>{`Rs.${product.price*product.quantity}`}</span>
      </div>
    </div>
  );
};
 
export default CartItem;