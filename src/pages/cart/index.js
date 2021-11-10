import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

import './Cart.scss';

const Cart = () => {

  const { total, cartItems, itemCount, checkout} = useCart();
  
  return ( 
    <Layout title="Cart" description="This is the Cart page" >
      <div className="cart-content">
        {itemCount == 0 ? (<div 
          className="empty-cart-message">
          <h3>No items in your cart</h3>
          <h5 style={{marginTop: '-7px'}}>Your favourite items are just a click away.</h5>
          <Link to="/store" style={{width: '100%'}}>
            <button className='cart-cta'>Start Shopping</button>
          </Link>
        </div>) : (<><div className="cart-products">
          <div className="cart-heading">
            <p>My Cart <span style={{fontSize: '16px'}}>({cartItems.length} item)</span></p>
          </div>
          <>
            <CartProducts/>                               
            { checkout && <div className="text-center text-success">
              <p>Checkout successfull</p>
              <Link to="/" className="btn btn-outline-success btn-sm">{`Proceed To Checout ${formatNumber(total)}`}</Link>
            </div>
            }
            <div className="offer-banner">
              <img className="offer-image"
                src="../static/images/lowest-price.png"
                alt="Lowest Price Gauranteed" />
              <p>You wont find it cheaper anywhere!</p>
            </div>                            
          </>
        </div>
        <div className="checkout-section">
          <div className="promo-msg">Promo code can be applied on payment page</div>
          <button className="checkout"><span style={{float: 'left'}}>Proceed to checkout</span><span style={{float: 'right'}}>{`${total} >`}</span></button>
        </div></>)       
        }   
      </div>
    </Layout>
  );
};
 
export default Cart;