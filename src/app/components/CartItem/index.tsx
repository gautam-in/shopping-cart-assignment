/**
 *
 * CartItem
 *
 */
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash/map';
import { selectMyCart } from 'app/components/MyCart/selectors';
import { myCartActions } from 'app/components/MyCart/slice';

interface Props {
  handleClose: Function;
}

export const CartItem = memo((props: Props) => {
  const dispatch = useDispatch();

  const cart = useSelector(selectMyCart);

  const manageQty = useCallback((type, id) => {
    const isDecrease = type === 'decrease';
    let tempCart = [...cart];
    const index = tempCart.findIndex(item => item.id === id);

    if (tempCart[index]['quantity'] <= tempCart[index]['stock']) {
      tempCart = map(tempCart, item => {
        if (item.id === id && isDecrease) {
          const updateItem = {
            ...item,
            quantity: item.quantity - 1,
          };
          return updateItem;
        }
        if (item.id === id && !isDecrease) {
          const updateItem = {
            ...item,
            quantity: item.quantity + 1,
          };
          return updateItem;
        }
        return item;
      });
    }

    if (tempCart[index]['quantity'] <= 0) {
      tempCart.splice(index, 1);
    }
    dispatch(myCartActions.addItemSuccess(tempCart));
  }, [dispatch]);

  const getTotal = () => {
    return cart.reduce(
      (acc, nextEl) => acc + nextEl.price * nextEl.quantity,
      0,
    );
  };

  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      props.handleClose();
      event.preventDefault();
    };
  };

  return (
    <>
      <div className="cart-body">
        <div className="cart-items-list">
          {cart.map(item => (
            <div key={item.id} className="cart-item-container">
              <div className="cart-item-content">
                <img src={item.imageURL} alt={item.name} />
                <div className="item-desc">
                  <div className="item-name">{item.name}</div>
                  <div className="btn-group">
                    <button
                      className="dec-btn"
                      onClick={() => manageQty('decrease', item.id)}
                    >
                      -
                    </button>
                    <div className="item-counter">{item.quantity}</div>
                    <button
                      className="inc-btn"
                      onClick={() => manageQty('increase', item.id)}
                    >
                      +
                    </button>
                    <div className="item-price">X&nbsp; Rs.{item.price}</div>
                  </div>
                </div>
                <div className="total-price">
                  Rs.{item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}
          <div className="low-price-banner">
            <img
              src="/static/lowest-price.png"
              alt="You won't find it cheaper anywhere"
            />
            <p>You won't find it cheaper anywhere</p>
          </div>
        </div>
      </div>
      <footer className="cart-footer">
        <p>Promo code can be applied on payment page</p>
        <button className="shopping" onClick={clickHandler()}>
          <div className="checkout-title">Proceed to Checkout</div>
          <div className="cart-total-price">Rs.{getTotal()} &gt;</div>
        </button>
      </footer>
    </>
  );
});
