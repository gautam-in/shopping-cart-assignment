import ReactDOM  from "react-dom";
import CartItem from "../CartItem/CartItem.component";

import {CartContainerComponent,CartComponent,CartHeader,CartHeaderTitleContainer,
    CartTitle,CartHeaderItems,CartHeaderCloseBtnContainer,
    CartItemsContainer,CartItemsPlaceholder,CartItemsPlaceholderImageContainer,
    CartPlaceholderItemsImage,CartItemsPlaceholderText,CartCheckoutContainer,
    CartCheckoutText,CartCheckoutButton,CartCheckoutButtonText,CartCheckoutButtonPrice} from './Cart.styles';


const Cart = ({clickHandler,...props}) =>{
    return ReactDOM.createPortal(
        <CartContainerComponent>
            <CartComponent>
                <CartHeader>
                    <CartHeaderTitleContainer>
                        <CartTitle>My Cart</CartTitle>
                        <CartHeaderItems>(0 Items)</CartHeaderItems>
                    </CartHeaderTitleContainer>

                    <CartHeaderCloseBtnContainer onClick={clickHandler}>
                        &#10006;
                    </CartHeaderCloseBtnContainer>
                </CartHeader>

                <CartItemsContainer>
                    
                <CartItem />
                

                    
                    <CartItemsPlaceholder>

                            <CartItemsPlaceholderImageContainer>
                                <CartPlaceholderItemsImage src='\static\images\lowest-price.png'/>
                            </CartItemsPlaceholderImageContainer>
                            <CartItemsPlaceholderText>You won't find it cheaper anywhere</CartItemsPlaceholderText>
                    </CartItemsPlaceholder>

                </CartItemsContainer>
                    
                <CartCheckoutContainer>
                    <CartCheckoutText>Promo code can be applied on payment page</CartCheckoutText>
                    <CartCheckoutButton>
                        <CartCheckoutButtonText>Proceed to Checkout</CartCheckoutButtonText>
                        <CartCheckoutButtonPrice>Rs187 <span>{'>'}</span></CartCheckoutButtonPrice>
                    </CartCheckoutButton>
                </CartCheckoutContainer>
            </CartComponent>
        </CartContainerComponent>,
        document.getElementById('cart')
    ) 
}

export default Cart;