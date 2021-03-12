import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import lowesPrice from '../images/lowest-price.png';
import { images } from './common/Common';
import { CART_LABEL_MESSAGE } from '../constant';

const AddToCart = (props) => {
  const { cartItem, openAddtocart, handleCount } = props;
  const history = useHistory();
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
  const handleStartShopping = () => {
    openAddtocart(false);
    history.push('/product');
  }
  return (
    <div className="addtocart">
      <header className="cart-header">
        <h4>My Cart{Array.isArray(cartItem) && cartItem.length > 0 ? '(' + cartItem.length + ' item)' : ''}</h4>
        <i className="cartClose" onClick={() => openAddtocart(false)} >X</i>
      </header>
      {
        Array.isArray(cartItem) && cartItem.length > 0 ? <div className="cart-with-item">
          <section className="cart-item-inner">
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
                          <label for="cart-input"></label>
                          <input id="cart-input" type="text" name="count" min="1" disabled="true" onChange={(e) => handleCount(e.target.value, item.id)} value={item.count} />
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
              <img src={lowesPrice} alt="Price" />
              <span>{CART_LABEL_MESSAGE.CHEAPER_MSG}</span>
            </div>
          </section>
          <footer className="cart-footer">
            <span className="promo-info">{CART_LABEL_MESSAGE.PROMO_CODE_TEXT}</span>
            <button className="btn checkout">
              <span className="proceed-checkout">{CART_LABEL_MESSAGE.CHECKOUT_BTN_TEXT}</span>
              <span className="cart-total-price">Rs. {totalPriceofCart()} <span></span></span>
            </button>
          </footer>

        </div> :
          <section className="empty-cart">
            <div className="no-items">
              <strong>{CART_LABEL_MESSAGE.EMPTY_CART_MSG}</strong>
              <span>{CART_LABEL_MESSAGE.FAVOURITE_ITEMS_TEXT}</span>
            </div>
            <button className="btn startShopping" onClick={handleStartShopping}>{CART_LABEL_MESSAGE.START_SHOPPING_TEXT}</button>
          </section>
      }
    </div>
  )
}
export default memo(AddToCart);
