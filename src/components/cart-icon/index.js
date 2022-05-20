import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {ReactComponent as ReactLogo} from '../../static/images/cart.svg';
import './cart-icon.scss';

const CartIcon = () => {
    const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="user-cart" onClick={toggleIsCartOpen}>
            <ReactLogo className='cart-icon'/>
            <span className="user-cart--status">{cartCount} items</span>
        </div>
    );
}

export default CartIcon;