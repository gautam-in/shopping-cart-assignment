import { CartContainer,CartItemContainer, CartBody, CartHeader, CartHeaderTitle, ProductImageContainer, ProductTitle, QuantitySeaction, ProductPrice, CheckoutBtnContainer, CheckoutBtn } from "../../styles/Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { incrementProductQuantity } from "../../../store/actions/authAction";

export default function CartList() {
    const closeOverlay = () => {
        document.querySelector(".overlay").style.display = "none";
    }

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.auth.cart.cartItems)
    console.log(cartItems)
    return (
        <CartContainer>
                <CartHeader>
                    <CartHeaderTitle>Cart Items {cartItems.length}</CartHeaderTitle>
                    <h3 className="icon" onClick={closeOverlay}>x</h3>
                </CartHeader>
                <CartBody>
                    {
                        cartItems.map(cartItem => (
                            <CartItemContainer>
                                <ProductImageContainer>
                                    <img src={cartItem.imageURL} />
                                </ProductImageContainer>
                                <ProductTitle>{cartItem.name}</ProductTitle>
                                <QuantitySeaction>Quantity: &nbsp;&nbsp; <button onClick={() => dispatch(incrementProductQuantity(cartItem, {}))}> + </button> &nbsp;{cartItem.quantity} &nbsp; <button> - </button></QuantitySeaction>
                                <ProductPrice>MRP Rs: {cartItem.price}</ProductPrice>
                            </CartItemContainer>
                        ))
                    }
                </CartBody>

                <CheckoutBtnContainer>
                    <p>Referral Code applied at the checkout page</p>
                    <CheckoutBtn>
                        Checkout Now
                    </CheckoutBtn>
                </CheckoutBtnContainer>
        </CartContainer>
    )
} 