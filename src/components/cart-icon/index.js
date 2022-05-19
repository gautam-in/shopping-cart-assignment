import { useContext } from 'react';
import { CartContext } from '../../contexts/banners.context copy';
import {ReactComponent as ReactLogo} from '../../static/images/cart.svg';
import './cart-icon.scss';

const CartIcon = () => {
    const {setIsCartOpen, isCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="user-cart" onClick={toggleIsCartOpen}>
            <ReactLogo className='cart-icon'/>
            <span className="user-cart--status">0 items</span>
        </div>
    );
}

export default CartIcon;