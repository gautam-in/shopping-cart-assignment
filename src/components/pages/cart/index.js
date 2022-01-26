import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../../../redux/actions';
import { LOWEST_PRICE_MSG } from '../../../utils/constants';
import Image from '../../atoms/image';
import CartItem from '../../molecules/cart-item';

import './cart.scss';

const Cart = ({ cartCount, cartItems, addToCart }) => {

    const [counter, setCounter] = useState(0);
    const handleCount = (id, count) => {
        if (count > -1) {
            const updatedCart = cartItems[id];
            updatedCart.count = count;
            console.log("updatedData", updatedCart);
            addToCart(id, updatedCart);
            setCounter(counter + 1);
        }
    }


    console.log("cartItems", cartItems);

    return (
        <div className='cart'>
            {
                Object.keys(cartItems).length > 0 ?
                    <>
                        <div className='cart-count'>My Cart ({cartCount} item(s))</div>
                        <div className='cart-items'>
                            {
                                Object.keys(cartItems).map(cartItem => <div>
                                    <CartItem
                                        cartItem={cartItems[cartItem]}
                                        handleCount={handleCount}
                                    />
                                </div>)
                            }
                        </div>
                        <div className='lowest-price'>
                            <Image src='/static/images/lowest-price.png' height='40px' />
                            <div>{LOWEST_PRICE_MSG}</div>
                        </div></>
                    : <div>You have no items in your shopping cart, start adding some!</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    cartItems: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id, cartItem) => dispatch(addToCartAction(id, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);