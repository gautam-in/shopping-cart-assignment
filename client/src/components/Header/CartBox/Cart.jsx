import React from 'react'
import Button from '../../Utilities/Button';
import Checkout from '../Checkout';
import CartMobile from './CartMobile';

const Cart = () => {
    return (
        <div className="cart">
            <CartDesktop />
            <CartMobile />
            {(cartItems && cartItems.length > 0) ?
                (<Checkout />)
                :
                (
                    <Button>
                        <p>Start Shopping</p>
                    </Button>
                )
            }

        </div>
    )
}

export default Cart;