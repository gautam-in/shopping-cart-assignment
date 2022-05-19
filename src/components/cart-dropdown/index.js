import Button from '../button';
import './cart-dropdown.scss';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown__container">
            <div className='cart-items'>
            </div>
            <Button >
                <span className='cart-dropdown-btn-label'>Proceed to Checkout</span>
                <span className='cart-dropdown-price-label'>Rs 187</span>
            </Button>
        </div>
    );
}

export default CartDropDown;