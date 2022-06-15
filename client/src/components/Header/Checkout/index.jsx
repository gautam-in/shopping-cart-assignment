import React from 'react'
import Button from '../../Utilities/Button';

const Checkout = ({ cartPrice }) => {
    return (
        <div className="checkout">
            <p>Promo code can be applied on payment page</p>
            <Button>
                <p>Proceed to checkout</p>
                <span>Rs.{cartPrice}</span>
            </Button>
        </div>
    )
}

export default Checkout;