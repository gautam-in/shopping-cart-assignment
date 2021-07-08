import {CartStyles,NoItem,CartHeader,CartContainer,LowerItemSection,CartFooter} from "../styles/CartStyle";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../molecules/CartItem";
import CustomButton from "../atom/CustomButton";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCartOpen } from "../../redux/actions";

export default function Cart(){
    const dispatch = useDispatch();
    const cartOpen = useSelector(state => state.cart.cartOpen);
    const cartItems = useSelector(state => state.cart.cartItems?.cart);
    const totalPrice = useSelector(state => state.cart.cartItems?.totalPrice);
    const renderCartItems = (cartItems) => {
        return cartItems.map(cartItem => <CartItem key={cartItem.id} addedProduct={cartItem} />)
    }
    
    return <CartStyles open={cartOpen}>
         <CartHeader>
            <h4>My Cart {cartItems ? `(${cartItems.length} items)` : ''} </h4>
            <FontAwesomeIcon icon={faTimes} onClick={()=> dispatch(setCartOpen(false))} />
        </CartHeader>
       {cartItems?.length>0 ? 
       <>
       <CartContainer className="scroller">{renderCartItems(cartItems)}</CartContainer> 
       <LowerItemSection>
                <img src='/static/images/lowest-price.png' alt="lowest price image" />
                <p>You won't find it cheaper anywhere </p>
        </LowerItemSection>
       <CartFooter>
           <p>Promo code can be applied on payment page</p>
           <CustomButton text={<>Proceed to checkout <span > Rs. {totalPrice}</span></>} classes="checkout-btn" />
       </CartFooter>
       </>
       :
        <>
            <NoItem>
                <h2>No items in the card</h2>
                <p>your favourite items are just click away</p>
            </NoItem>
            <CartFooter>
            <CustomButton text={`start shopping`} classes="shopping-btn" />
            </CartFooter>
        </>
       }
    </CartStyles>
}