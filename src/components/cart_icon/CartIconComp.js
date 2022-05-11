import { useContext } from 'react';
import './carticon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../static/images/cart.svg';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div onClick={toggleCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='icon-count'>{cartCount}</span>
        </div>
        
        
    )
}
export default CartIcon