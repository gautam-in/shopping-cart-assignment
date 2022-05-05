import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PRODUCTS } from '../../constants/routes';
import AppContext from '../../contexts/appContext/app-context';
import './index.scss';

const Cart = () => {
    const history = useHistory();
    const {
        appState: { cartCount, cartItems },
        updateCart,
        removeCart,
    } = useContext(AppContext);

    const handleCartUpdate = useCallback(
        (item) => () => {
            updateCart(item);
        },
        [updateCart],
    );

    const handleCartRemove = useCallback(
        (item) => () => {
            removeCart(item);
        },
        [removeCart],
    );

    return (
        <div className="cart-container">
            <div className="header-container">
                <h4 className="heading">
                    My cart
                    <span style={{ fontSize: 'small' }}>{cartCount > 0 ? ` (${cartCount} Item)` : null}</span>
                </h4>
            </div>

            <ul className="cart_list">
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item) => (
                            <li className="cart_list-item" key={item.id}>
                                <img src={item.imageURL} className="cart_list-img" alt={item.name} />
                                <div className="cart_list-details">
                                    <span className="cart_list-name truncate" style={{ display: 'block' }}>
                                        {item.name}
                                    </span>
                                    <button className="btn-decrement" onClick={handleCartRemove(item)}>
                                        -
                                    </button>
                                    <span className="quantity">{item.qty}</span>
                                    <button className="btn-increment" onClick={handleCartUpdate(item)}>
                                        +
                                    </button>
                                    <span className="into-qty">X</span>
                                    <span className="cart_list-price">₹ {item.price}</span>
                                    <span className="cart_list-item-total">₹ {item.qty * item.price}</span>
                                </div>
                            </li>
                        ))}
                        <li className="lowest_price-banner">
                            <img
                                className="lowest_price-img"
                                src="/static/images/lowest-price.png"
                                alt="Lowest Price Guaranteed"
                            />
                            <span className="lowest_price-text">You won't find it cheaper anywhere</span>
                        </li>
                    </>
                ) : (
                    <div className="no-item-text">
                        <b style={{ fontSize: 'small' }}>No items in your cart</b>
                        <p style={{ fontSize: 'small' }}>Your favourite items are just a click away</p>
                    </div>
                )}
            </ul>

            <div className="checkout">
                {cartCount > 0 ? (
                    <div>
                        <p className="checkout-heading" style={{ fontSize: 'small' }}>
                            Promo code can be applied on the checkout page.
                        </p>
                        <button className="checkout-button" onClick={() => alert('Order Placed Successfully')}>
                            <span className="checkout-text">Proceed to checkout</span>
                            <span className="checkout-price">
                                {`₹ ${cartItems.reduce((total, item) => {
                                    return total + item.price * item.qty;
                                }, 0)} >`}
                            </span>
                        </button>
                    </div>
                ) : (
                    <button className="start_shopping-button" onClick={() => history.push(PRODUCTS)}>
                        <span className="checkout-text">Start Shopping</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;
