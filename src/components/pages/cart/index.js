import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, removeFromCartAction, showModal } from '../../../redux/actions';
import { RESET } from '../../../redux/actionTypes';
import { _LOWEST_PRICE_MSG, _CHECKOUT_MSG, _EMPTY_CART_MSG, _PROMO_MSG, _PAYMENT_SUCCESS } from '../../../utils/constants';
import EmptyCart from '../../atoms/empty-cart';
import Image from '../../atoms/image';
import Modal from '../../atoms/modal';
import CartItem from '../../molecules/cart-item';

import './cart.scss';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartCount, cart, totalAmount } = useSelector((state) => state);

    const[show, setShow] = useState(false);

    const handleCount = (id, count) => {
        if (count > -1) {
            const updatedCart = cart[id];
            updatedCart.count = count;
            console.log("updatedData", updatedCart);
            dispatch(addToCartAction(id, updatedCart));
        }
    }

    const removeFromCart = (e) => {
        if(e.target && e.target.id) {
            dispatch(removeFromCartAction(e.target.id));
        }
    }

    const onOrder =(e) => {
        
        setShow(!show);
        dispatch({type:RESET});
        e.stopPropagation()
    }

    const onPayment = (e) => {
        setShow(!show);
        e.stopPropagation()
    }

    console.log("cart", cart);
    console.log("totalPrice", totalAmount);

    return (
        <div className='cart'>
            {
                Object.keys(cart).length > 0 ?
                    <>
                        <div className='cart-count'>My Cart ({cartCount} item(s))</div>
                        <div className='cart-items' onClick={removeFromCart}>
                            {
                                Object.keys(cart).map(cartItem => (
                                    <div key={cartItem}>
                                        <CartItem
                                            cartItem={cart[cartItem]}
                                            handleCount={handleCount}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='lowest-price'>
                            <Image src='/static/images/lowest-price.png' height='40px' />
                            <div>{_LOWEST_PRICE_MSG}</div>
                        </div>
                        <div className='proceed-to-pay' onClick={onOrder}>
                            <div className='container'>
                                <div>{_PROMO_MSG}</div>
                                <div>
                                    <div>{_CHECKOUT_MSG}</div>
                                    <div>{`Rs.${totalAmount}`}<span>{'>'}</span></div>
                                </div>
                            </div>
                        </div></>
                    : <div><EmptyCart /></div>
            }
            {
                <Modal handleClose={onPayment} show={show}>{_PAYMENT_SUCCESS}</Modal>
            }
        </div>
    )
}

export default Cart;