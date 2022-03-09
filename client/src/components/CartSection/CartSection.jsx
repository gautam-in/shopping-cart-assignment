import React from 'react'

import { useDispatch } from 'react-redux'
import classes from './CartSection.module.css'
import { addItem, removeItem } from '../../redux/cart/cart.actions'

const CartSection = ({cartItem}) => {

    const dispatch = useDispatch()

    const totalPrice = cartItem.quantity * cartItem.price

    return (
        <div className={classes.cart__section}>
            <img src={cartItem.imageURL} alt={cartItem.name} className={classes.cart__section__image} />
            <div className={classes.container}>
                <h2 className={classes.cart__section__title}>{cartItem.name}</h2>
                <div className={classes.counter}>
                    <button className={classes.counter__button} onClick={()=> dispatch(removeItem(cartItem))}>-</button>
                    <p className={classes.counter__text}>{cartItem.quantity}</p>
                    <button className={classes.counter__button} onClick={()=> dispatch(addItem(cartItem))}>+</button>
                    <p className={classes.counter__multiply}>&#10005;</p>
                    <p className={classes.counter__text}>Rs.{cartItem.price}</p>
                </div>
            </div>
            <p className={classes.cart__section__totalprice}>Rs.{totalPrice}</p>
        </div>
    )
}

export default CartSection