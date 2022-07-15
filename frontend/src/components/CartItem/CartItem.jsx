import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeItem } from '../../redux/cart/cart.actions';

import './CartItem.scss';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const onRemove = (cartItem) => {
        dispatch(removeItem(cartItem))
    }

    const onAddItem = (cartItem) => {
        dispatch(addCartItem(cartItem))
    }

    const getMultiOfProduct = (cartItem) => +cartItem.price * +cartItem.quantity

    return (
        <div className='cart-item'>
            <img src={"assets/"+item.imageUrl} alt={item.name} aria-label={item.name} />
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={() => onRemove(item)}>
                        &#10094;
                    </div>
                    <span className='value'>{item.quantity}</span>
                    <div className='arrow' onClick={() => onAddItem(item)}>
                        &#10095;
                    </div>
                    <span className='mul-items'>&#9587;</span>
                    <span className='sub-price'>Rs. {item.price}</span>
                </span>
            </div>
            <span className='price'>Rs.  {getMultiOfProduct(item)}</span>
        </div>
    )
};

export default CartItem;
