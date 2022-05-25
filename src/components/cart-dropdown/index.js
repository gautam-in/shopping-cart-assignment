import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button';
import CartItem from '../cart-item';
// import './cart-dropdown.styles.js';
import {
    CartDropDownContainer,
    CartDropDownArrow,
    CartDropDownButtonLabel,
    CartDropDownButtonLabelCenter,
    CartDropDownDisclaimer,
    CartDropDownHeader,
    CartDropDownHeaderTitle,
    CartDropDownItems,
    CartDropDownPriceLabel,
    CartDropDownClose,
    PriceBannerContainer,
    PriceBannerImageContainer
} from './cart-dropdown.styles'

const CartDropDown = () => {
    const {cartItems, cartTotal, cartCount, setIsCartOpen} = useContext(CartContext);
    const closeCartHandler = () => setIsCartOpen(false);
    return (
        <CartDropDownContainer>
            <CartDropDownHeader>
               <CartDropDownHeaderTitle> My Cart</CartDropDownHeaderTitle>
               {cartItems.length ? <span> &#91; {cartCount} Item &#93; </span>: ''}
               <CartDropDownClose onClick={closeCartHandler}>&#88;</CartDropDownClose>
            </CartDropDownHeader>
            <CartDropDownItems empty={cartItems.length}>
                {cartItems.length ?
                    (
                        <Fragment>
                            {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
                            <PriceBannerContainer>
                                <PriceBannerImageContainer>
                                    <img src={require('../../../src/static/images/lowest-price.png')} alt="lowest price"/>
                                </PriceBannerImageContainer>
                                <p>You won't find it cheaper anywhere</p>
                            </PriceBannerContainer>
                        </Fragment>
                    )
                    :
                    <Fragment>
                        <h3>No Items in your cart</h3>
                        <p>Your favourite items are just a click away.</p>
                    </Fragment>
                }
            </CartDropDownItems>
            <div className='cart-dropdown__footer'>
                <CartDropDownDisclaimer>Promo code can be applied on payment page</CartDropDownDisclaimer>
                <Button onClick ={closeCartHandler} btnClass='cart-dropdown-btn'>
                {cartItems.length ?
                    <Fragment>
                    <CartDropDownButtonLabel>Proceed to Checkout</CartDropDownButtonLabel>
                    <CartDropDownPriceLabel>
                        Rs {cartTotal}
                        <CartDropDownArrow>&#62;</CartDropDownArrow>
                    </CartDropDownPriceLabel>
                    </Fragment>
                    :
                    <CartDropDownButtonLabelCenter>Start Shopping</CartDropDownButtonLabelCenter>
                }
                </Button>
            </div>
        </CartDropDownContainer>
    );
}

export default CartDropDown;