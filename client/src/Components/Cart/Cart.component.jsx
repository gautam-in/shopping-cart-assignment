import ReactDOM  from "react-dom";
import CartItem from "../CartItem/CartItem.component";
import useGetCartDetails from "../../Hooks/useGetCartDetails";

import {CartContainerComponent,CartComponent,CartHeader,CartHeaderTitleContainer,
    CartTitle,CartHeaderItems,CartHeaderCloseBtnContainer,
    CartItemsContainer,CartItemsPlaceholder,CartItemsPlaceholderImageContainer,
    CartPlaceholderItemsImage,CartItemsPlaceholderText,CartCheckoutContainer,
    CartCheckoutText,CartCheckoutButton,CartCheckoutButtonText,CartCheckoutButtonPrice,
    CartEmptyContainer,CartEmptyPlaceholder,CartEmptyTitle,CartEmptySubtitle
} from './Cart.styles';


const Cart = ({clickHandler,...props}) =>{

    const {totalPrice,totalQty} = useGetCartDetails();

    return ReactDOM.createPortal(
        <CartContainerComponent>
            <CartComponent>
                <CartHeader>
                    <CartHeaderTitleContainer>
                        <CartTitle>My Cart</CartTitle>
                        {totalQty!==0 && <CartHeaderItems>({totalQty} Items)</CartHeaderItems>}
                    </CartHeaderTitleContainer>

                    <CartHeaderCloseBtnContainer onClick={clickHandler}>
                        &#10006;
                    </CartHeaderCloseBtnContainer>
                </CartHeader>

                <CartItemsContainer>
                    
                    {totalQty!==0 ? (
                        <>
                        <CartItem />
                
                        <CartItemsPlaceholder>
                                <CartItemsPlaceholderImageContainer>
                                    <CartPlaceholderItemsImage src='\static\images\lowest-price.png'/>
                                </CartItemsPlaceholderImageContainer>
                                <CartItemsPlaceholderText>You won't find it cheaper anywhere</CartItemsPlaceholderText>
                        </CartItemsPlaceholder>
                    </>
                    ) : (
                        <CartEmptyContainer>
                            <CartEmptyPlaceholder>
                                <CartEmptyTitle>No Items in your Cart</CartEmptyTitle>
                                <CartEmptySubtitle>Your Favourite items are just a click away</CartEmptySubtitle>
                            </CartEmptyPlaceholder>
                        </CartEmptyContainer>)}

                </CartItemsContainer>
                    
                <CartCheckoutContainer>
                    {totalQty!== 0 ? (
                        <>
                            <CartCheckoutText>Promo code can be applied on payment page</CartCheckoutText>
                        <CartCheckoutButton>
                            <CartCheckoutButtonText>Proceed to Checkout</CartCheckoutButtonText>
                            <CartCheckoutButtonPrice>Rs{totalPrice} <span>{'>'}</span></CartCheckoutButtonPrice>
                        </CartCheckoutButton>
                        </>
                    ) : (
                        <CartCheckoutButton justifyCenter >
                            <CartCheckoutButtonText>Start Shopping</CartCheckoutButtonText>
                        </CartCheckoutButton>
                    )}
                </CartCheckoutContainer>
            </CartComponent>
        </CartContainerComponent>,
        document.getElementById('cart')
    ) 
}

export default Cart;