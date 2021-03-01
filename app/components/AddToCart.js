import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import lowesPrice from '../images/lowest-price.png';

const AddToCart = (props) => {
  const { cartItem, openAddtocart, handleCount } = props;


  const incrementCount = (value, id) => {
    ++value;
    handleCount(value, id)
  }
  const decrementCount = (value, id) => {
    if (value === 1) {
      return false;
    }
    --value;
    handleCount(value, id);
  }
  const totalPriceofCart = () => {
    var totalPrice = 0;
    cartItem.map(item => {
      totalPrice = (item.price * item.count) + totalPrice
    })
    return totalPrice;
  }
  /**
    * Code for load Dyanamic Image Urls without importing each image files
    */
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '../images/')] = r(item); });
    return images;
  }
  /**
   * Use Importall and webpack Require.context('directory', useSubdirectories: boolean, regExp)
   */
  const images = importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
  return (
    <div className="addtocart">
      <div className="cart-header">
        <h4>My Cart{Array.isArray(cartItem) && cartItem.length > 0 ? '(' + cartItem.length + ' item)' : ''}</h4>
        <i className="cartClose" onClick={() => openAddtocart(false)} >X</i>
      </div>
      {
        Array.isArray(cartItem) && cartItem.length > 0 ? <div className="cart-with-item">
          <div className="cart-item-inner">
          <ul>
            {
              cartItem.map(item =>
                <li key={item.id}>
                  <img src={images[item.imageURL]} alt={item.sku} />
                  <div className="title-quantity">
                    <h4>{item.name}</h4>
                    <div className="quantity-box">
                      <div className="quantity-action">
                        <span className="minus-quantity" onClick={() => decrementCount(item.count, item.id)}>-</span>
                        <input type="text" name="count" min="1" disabled="true" onChange={(e) => handleCount(e.target.value, item.id)} value={item.count} />
                        <span className="plus-quantity" onClick={() => incrementCount(item.count, item.id)} >+</span>
                      </div>
                      <div className="item-price">
                        X  <span>Rs.{item.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-total-price">Rs.{item.price * item.count}</div>
                </li>
              )
            }
          </ul>
          <div className="lowest-price">
            <img src={lowesPrice} alt="" />
            <span>You won't find it cheaper anywhere</span>
          </div>
          </div>
          <div className="cart-footer">
            <span className="promo-info"> Promo code can be applied on payment page</span>
            <button className="btn checkout">
              <span className="proceed-checkout">Proceed to Checkout</span>
              <span className="cart-total-price">Rs. {totalPriceofCart()} <span>></span></span>
            </button>
          </div>
          
        </div> :
          <div className="empty-cart">
            <div className="no-items">
              <strong>No items in your cart</strong>
              <span>Your favourite items are just a click away</span>
            </div>
            <NavLink to="/product" className="btn startShopping">Start Shopping</NavLink>
          </div>
      }



    </div>
  )
}
export default memo(AddToCart);