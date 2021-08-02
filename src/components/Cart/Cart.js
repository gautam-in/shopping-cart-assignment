import React, {useState} from 'react'
import { CartItem } from './CartItem';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../config/firebase';
import { resetCart } from './Cart.action';
import { PRODUCT_ROUTE } from '../../routes/constants';
import { get } from 'lodash';
import { cartLabels } from './Cart.data';
const Cart = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const { cartData } = cartLabels;
    const items = useSelector((state) => state.cart && state.cart.cartDetail);
    const user = useSelector(
      (state) =>
          state.app &&
          state.app.userData
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const handleButtonClick = () => {
      db?.collection('sabkabazaar')?.doc(user.email).get().then(snapshot => {
        if (snapshot.data().cartProduct.cartDetail.length > 0) {
          setOrderPlaced(true);
          db.collection('sabkabazaar').doc(user.email).set({
            cartProduct: {
                cartDetail: [],
                totalQuantity: 0
            }
          })
          .then(() => {
            dispatch(resetCart());
            setOrderPlaced(true)
          })
        } else {
            history.push(PRODUCT_ROUTE);
        }
      })
    }
    let TotalCart = 0;
    return (
    <div className="cart">
    {items.length > 0 ? (
      <div className="cart-filled">
        <h2>{get(cartData, 'heading.text')}</h2>
        <section>
          {items.map((item, key) => {
            console.log(key)
            TotalCart = (TotalCart + (item.quantity * item.price));
            return (
              <div key={item.id} className="item">
                <CartItem itemsDetail={item} keyValue={key}/>
              </div>
            );
          })}
          <div className="advertisement">
            <img
              className="addv-image"
              src="../static/images/lowest-price.png"
              alt="Lowest price gauranteed"
            />{" "}
            {get(cartData, 'advertisement.text')}
          </div>
        </section>
      </div>
    ) : (
      <div className="cart-empty">
        {!orderPlaced && (
          <>
            <div>
              <h2>{get(cartData, 'noItems')}</h2>
              <p>{get(cartData, 'favouriteItem')}</p>
            </div>
          </>
        )}
        {orderPlaced && (
          <>
            <div>
              <h2>{get(cartData, 'orderPlaced')}</h2>
            </div>
          </>
        )}
      </div>
      
    )}
    <div className="buttons">
      <button
        type="button"
        onClick={handleButtonClick}
        onKeyPress={handleButtonClick}
        tabIndex={0}
      >
        {items.length > 0
          ? `Proceed to checkout Rs.${TotalCart} >`
          : "Start Shopping"}
      </button>
    </div>
  </div>
)
}


export default Cart