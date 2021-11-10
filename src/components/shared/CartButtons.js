import React from 'react';

import { formatNumber } from '../../helpers/utils';

import { useCart } from '../../hooks/useCart';

import './CartButtons.scss';

export default function CartButtons(props) {
  const { addProduct, cartItems, increase, decrease } = useCart();

  const product = props.product;

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  };

  const itemCount = id => {
    return cartItems.find(item => item.id == id).quantity;
  };
    
  return (
    <div className="card-buttons text-center">
      {
        isInCart(product) && <>                     
          <div>            
            <button 
              onClick={() => decrease(product)}
              className="button-action">
              <span>-</span>
            </button>
            <span>{itemCount(product.id)}</span>
            <button 
              onClick={() => increase(product)}
              className="button-action">
              <span>+</span>
            </button>
            <span className="button-remove">&nbsp;x&nbsp;&nbsp;</span>
          </div>
          <span>{`Rs.${product.price}`}</span>
        </>
      }

      {
        !isInCart(product) && <>
          <button onClick={() => addProduct(product)} className="button-addproduct button-sm">
            {`Buy Now @ Rs.${product.price}`}
          </button>
          <div className="button-container">
            <div className="price">{`Rs.${product.price}`}</div>
            <button onClick={() => addProduct(product)} className="button-addproduct button-lg">
                            Buy Now
            </button>
          </div>                    
        </>
      }
                
    </div>
  );
}
