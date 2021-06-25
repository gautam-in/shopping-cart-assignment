import CartStyles from "./styles/CartStyle";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCartOpen } from "../actions";

export default function Cart(){
    const cartOpen = useSelector(state => state.categories.cartOpen);
    const cartItems = useSelector(state => state.categories.cartItems?.cart);
    const totalPrice = useSelector(state => state.categories.cartItems?.totalPrice);
    const dispatch = useDispatch();
    const renderCartItems = (cartItems) => {
        return cartItems.map(cartItem => <CartItem key={cartItem.id} addedProduct={cartItem} />)
    }
    const totalPricHtml = ``;
    return <CartStyles open={cartOpen}>
         <header>
            <h4>My Cart {cartItems ? `(${cartItems.length} items)` : ''} </h4>
            <FontAwesomeIcon icon={faTimes} onClick={()=> dispatch(setCartOpen(false))} />
        </header>
       {cartItems?.length > 0 ? 
       <>
       <main className="scroller">{renderCartItems(cartItems)}</main> 
       <section>
                <img src='/static/images/lowest-price.png' alt="lowest price image" />
                <p>You won't find it cheaper anywhere </p>
        </section>
       <footer>
           <p>Promo code can be applied on payment page</p>
           <CustomButton text={<>Proceed to checkout <span > Rs. {totalPrice}</span></>} classes="checkout-btn" />
       </footer>
       </>
       :
        <>
            <main className="no-items">
                <h2>No items in the card</h2>
                <p>your favourite items are just click away</p>
            </main>
            <footer>
            <CustomButton text={`start shopping`} classes="start-shopping-btn" />
            </footer>
        </>
       }
    </CartStyles>
}