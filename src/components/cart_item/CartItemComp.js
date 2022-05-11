import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './cartitem.style.scss';

const CartItemComp = ( {item}) => {
    
   const {name, imageURL, quantity, price} = item
   const {removeItemToCart, addItemToCart} = useContext(CartContext)
   console.log(item);
    return(
        <div className='cart-item-container'>
            <img src={imageURL} />
            <div className='item-details'>
            <h6>{name}</h6>
            <span>Rs. {price} x {quantity}</span>
            
            </div>
            <button onClick={() => removeItemToCart(item)}>Decrement</button>
            <button onClick={() => addItemToCart(item)}>Increment</button>
        </div>
    )
}
export default CartItemComp