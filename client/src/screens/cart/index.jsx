/* eslint-disable react-hooks/exhaustive-deps */

import CartItem from '../../ui/components/cart-item';
import { cartContainer, cartElementContainer, checkoutContainer, cartItemContainer, checkoutButton } from './style';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState } from 'react';
import { useEffect } from 'react';


const Cart = () => {
    const [cart] = useLocalStorage('cart');
    const calculateTotal = () => cart.reduce((total, curr) => curr.price + total, 0);

    const [cartTotal, setCartTotal] = useState(() => calculateTotal());

    useEffect(() => {
        setCartTotal(() => calculateTotal())
    }, [cart]);

    return (<div style={cartContainer}>
        <div style={cartElementContainer}>
            <h3>My Cart</h3>
            <p>{`(${cart?.length || 0} items)`}</p>
        </div>
        <div style={cartItemContainer}>
            {cart?.map(item => <CartItem cartItem={item} />)}
        </div>
        <div style={cartElementContainer}>
            <img alt='promo' width='100' height='50' src='/static/images/lowest-price.png' />
            <p>You won't find it cheaper anywhere</p>
        </div>
        <div style={checkoutContainer}>
            <p>Promo Code can be applied on Checkout page</p>
            <div style={checkoutButton} >
                <div> Proceed to checkout</div>
                <div>{`Rs. ${cartTotal}`}</div>
            </div>
        </div>
    </div>)
}

export default Cart;