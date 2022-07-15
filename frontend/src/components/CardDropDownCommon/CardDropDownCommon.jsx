import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CardDropDownCommon.scss';
import { useNavigate } from 'react-router-dom';

const CardDropDownCommon = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const { cartItems, itemCount, cartTotal } = useSelector(createStructuredSelector({
        cartItems: selectCartItems,
        itemCount: selectCartItemsCount,
        cartTotal: selectCartTotal,
    }))

    const onToggleCartHidden = () => {
        dispatch(toggleCartHidden())
    }

    return (
        <div className='cart-dropdown'>
            <header className='cart-header'>
                <h2>My Cart ({itemCount} item)</h2>
                <span className="close" onClick={onToggleCartHidden}>&times;</span>
            </header>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem._id} item={cartItem} />
                    ))
                ) : (
                    <><span className='empty-message'>
                        <div>

                        </div>
                        <span>No items in your cart</span>
                        <span>Your favourite items are just a click away</span>
                    </span>
                    </>
                )}
                {cartItems.length > 0 &&
                    <footer className='cart-footer'>
                        <img src="assets//lowest-price.png" alt='lowest price' aria-label='lowest price'></img>
                        <span>You wont find it cheaper anywhere</span>
                    </footer>
                }
            </div>

            {cartItems.length > 0 && <footer className='checkout-btn'>
                <span>Promo Code can be applied on payment page</span>
                <Button
                    size='large'
                    onClick={() => {
                        navigate("/checkout", { replace: true });
                        dispatch(toggleCartHidden());
                    }}
                    text={"GO TO CHECKOUT"}
                    title="GO TO CHECKOUT"
                >
                    <div className='checkout-btn-content'>
                        <span>Proceed to Checkout</span>
                        <span>Rs. {cartTotal}	<span>&rarr;</span></span>
                    </div>
                </Button></footer>}
        </div>

    )
};

export default CardDropDownCommon;
