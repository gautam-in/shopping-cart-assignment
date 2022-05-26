import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import {ReactComponent as ReactLogo} from '../../static/images/cart.svg';
import './cart-icon.scss';

const CartIcon = () => {
    const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext);
    const navigate = useNavigate();

    const displayCart = () => {
        if(window.screen.width >=992) {
            setIsCartOpen(!isCartOpen);
        } else {
            navigate('/cart');
        }
    }

    // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    // const navigateToCart = () => navigate('/cart');
    return (
        <div className="user-cart" onClick={displayCart}>
            <ReactLogo className='cart-icon'/>
            <span className="user-cart--status">{cartCount} items</span>
        </div>
    );
}

export default CartIcon;