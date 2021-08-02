import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.scss';
import { UpdateCart } from '../Cart.action';
import { db } from '../../../config/firebase';
import { isEmpty } from 'lodash';
const CartItem = ({itemsDetail, keyValue}) => {
const dispatch = useDispatch();
const [loading, setLoading] = useState(false)
const user = useSelector(
  (state) =>
      state.app &&
      state.app.userData
);
let cartDetailData = [];
let totalQuantity = 0;
const updateProduct = (id, value) => {
  setLoading(true);
  db?.collection('sabkabazaar')?.doc(user.email).get().then(snapshot => {
    if (!isEmpty(snapshot.data())) {
      cartDetailData = [];
      totalQuantity = snapshot.data().cartProduct.totalQuantity;
      snapshot.data().cartProduct.cartDetail.map((item, key) => {
        let tempData = item;
        if (item.id === id) {
          if (!value) {
            tempData.quantity = tempData.quantity + 1;
            cartDetailData.push(tempData);
          }

          if (value === 'decrement' && tempData.quantity >= 1) {
            tempData.quantity = tempData.quantity - 1;
            if (tempData.quantity === 0) {
              totalQuantity--;
            } else {
              cartDetailData.push(tempData);
            }
          }
        } else {
          cartDetailData.push(tempData);
        }
      })
    }
    db.collection('sabkabazaar').doc(user.email).set({
      cartProduct: {
          cartDetail: cartDetailData,
          totalQuantity: totalQuantity
      }
    })
    .then(() => {
      console.log('Record Updated');
      dispatch(UpdateCart({
        cartDetail: cartDetailData,
        totalQuantity: totalQuantity
      }))
      setLoading(false);
    })
  })
}

const handIncrementValue = () => {
  //dispatch(IncreaseQuantity(keyValue));
  updateProduct(itemsDetail.id);
}
const handDecrementValue = () => {
  // dispatch(DecreaseQuantity(keyValue));
  updateProduct(itemsDetail.id, 'decrement');
}
return (
    <div className="cart-item">
      <div className="item-image">
        <img src={itemsDetail.image} height={80} alt={itemsDetail.name} />
      </div>
      <div className="purchase-description">
        <div className="item-name">{itemsDetail.name}</div>
        <div className="item-quantity">
          <button
            type="button"
            aria-label="decrease quantity by one"
            className={`quant-buttons left ${loading ? 'disabled' :  ''}`}
            onClick={handDecrementValue}
          >
            -
          </button>
          <span>{itemsDetail.quantity}</span>
          <button
            type="button"
            aria-label="increase quantity by one"
            className={`quant-buttons right ${loading ? 'disabled' :  ''}`}
            onClick={handIncrementValue}
          >
            +
          </button>{" "}
          <span aria-label="multiplied-by">x</span>
          &nbsp;Rs.{itemsDetail.price}
        </div>
      </div>
      <div className="item-price">Rs.{itemsDetail.quantity * itemsDetail.price}</div>
    </div>
  );
};

export default CartItem