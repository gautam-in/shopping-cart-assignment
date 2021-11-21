import { CartContainer,CartItemContainer, CartBody, CartHeader, CartHeaderTitle, ProductImageContainer, ProductTitle, QuantitySeaction, ProductPrice, CheckoutBtnContainer, CheckoutBtn } from "../../styles/Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { incrementProductQuantity } from "../../../store/actions/authAction";
import { useRouter } from 'next/router';
import { connect } from "react-redux";

const CartList = ({ isLoggedIn , loggedInUser}) => {
    const router = useRouter()
    const closeOverlay = () => {
        document.querySelector(".overlay").style.display = "none";
    }

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.auth.cart.cartItems)
    return (
        <CartContainer>
                <CartHeader>
                    <CartHeaderTitle>Cart Items ({cartItems.length})</CartHeaderTitle>
                    <h3 className="icon" onClick={closeOverlay}>x</h3>
                </CartHeader>
                { cartItems.length > 0 ? (
                        <CartBody>
                        {
                            cartItems.map(cartItem => (
                                <CartItemContainer>
                                    <ProductImageContainer>
                                        <img src={cartItem.imageURL} />
                                    </ProductImageContainer>
                                    <ProductTitle>{cartItem.name}</ProductTitle>
                                    <QuantitySeaction> &nbsp;&nbsp; <button onClick={() => dispatch(incrementProductQuantity(cartItem, {}))}> + </button> &nbsp;{cartItem.quantity} &nbsp; <button> - </button></QuantitySeaction>
                                    <ProductPrice>MRP Rs: {cartItem.price}</ProductPrice>
                                </CartItemContainer>
                            )) 
                        } 
                        </CartBody> 
                    ) : 
                        <div class="noItemsInfo">
                            <h3>No Items in your cart</h3>
                            <p>Your favourite Items are just a click away</p>
                        </div>
                }


                {  cartItems.length > 0 ? ( 
                <CheckoutBtnContainer>
                    <p>Referral Code applied at the checkout page</p>
                    <CheckoutBtn>
                        Checkout Now
                    </CheckoutBtn>
                </CheckoutBtnContainer>
                ) : 
                <CheckoutBtnContainer>
                    <CheckoutBtn onClick={() => {
                        closeOverlay()
                        router.push({ pathname: '/'})
                        }}>
                        Start Shopping
                    </CheckoutBtn>
                </CheckoutBtnContainer>}   
        </CartContainer>
    )
} 

const mapStateToProps = (state) => ({
    isLoggedIn : state.auth.isLoggedIn,
    loggedInUser : state.auth.loggedInUser
})
  
export default connect(mapStateToProps, null)(CartList)