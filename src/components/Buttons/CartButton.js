import React from 'react'
import './CartButton.scss'

export default function CartButton(props) {
    return (
        <button className="cart-button" onClick={props.handleClick}>
            <img src="public\static\images\cart.svg" alt="cart-logo" className="cart-button-icon" />
            <span>
                {props.cartItems} {props.cartItems <= 1 ? 'Item' : 'Items'}
            </span>
        </button>
    )
}
