import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemToCart } from '../store/cart/cart.action';
import { selectCartItems } from '../store/cart/cart.selector';
import Button from './Button';
import './CartItem.scss';


const CartItem = ({product}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addQuantity = () => {
        dispatch(addItemToCart(cartItems, product))
    }

    const removeQuantity = () => {
        dispatch(removeItemToCart(cartItems, product))
    }

return (
    <div className='cartItemCard'>
        <div className='cartItemBody'>
            <img src={product.imageURL} className="cartItemImage" />
            <div className='cartItemDesc'>
                <p className='cartItemDescHeading'>
                    {product.name}
                </p>
                <div className='cartItemCount'>
                    <div className='cartItemButton' onClick={removeQuantity}>-</div>
                    <p style = {{padding: '0 10px',fontWeight:'bold',paddingTop:'15px'}}>
                        { product.quantity}
                    </p>
                    <div className='cartItemButton' onClick={addQuantity}>+</div>
                    <p style={{paddingLeft:'10px',fontWeight:'bold',paddingTop:'15px'}}>
                           X Rs {product.price}
                    </p>
                </div>
            </div>
        </div>
        <div className='cartItemTotal'>
            <p style={{whiteSpace: 'nowrap', fontWeight:'bold'}}>Rs {product.price*product.quantity}</p>
        </div>
    </div>
)

}

export default CartItem;