import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-item.scss';

const CartItem = ({cartItem}) => {
    const {name, price, quantity, imageURL} = cartItem;
    const { addItemToCart, removeItemFromCart} = useContext(CartContext);

    const addItemHandler = () => {addItemToCart(cartItem)};
    const removeItemHandler = () => {removeItemFromCart(cartItem)};

    // const IncreaseItemQuantity = () => addItemToCart(cartItem);
    return(
        <div className="cart-item">
            <div className='cart-item__img-container'>
                <img className='cart-item__img' src={require(`../../../src${imageURL}`)} alt={`${cartItem.name}`}/>
            </div>
            <div className='cart-item__details'>
                <h3 className='cart-item__details-name'>{name}</h3>
                <div className='cart-item__details-pricing'>
                    <span className='cart-item__details-quantity--icon' onClick={removeItemHandler}>&#45;</span>
                    <span className='cart-item__details-quantity'>{quantity}</span>
                    <span className='cart-item__details-quantity--icon' onClick={addItemHandler}>&#43;</span>
                    <span className='cart-item__details-quantity--multiply'>&#120;</span>
                    <span className='cart-item__details-quantity--price'>Rs {price}</span>
                    <span className='cart-item__details-quantity--total-price'>Rs {price*quantity}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;