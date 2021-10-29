import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { openCloseCart, updateCart } from "../../Store/actions/cart";
import { CART_MODEL, CART_DEFAULT_TEXT, CART_DEFAULT_IMAGE, CART_CLOSE_BTN, CART_EMPTY, CART_STYLE_EMPTY, CHECKOUT_BUTTON, CART_TITLE, CART_STYLE, CART_DEFAULT_STATEMENT, CART_EMPTY_FOOTER, CART_EXPLORE_BUTTON, CART_FOOTER } from "../../Styles/CartStyles";
import CartCard from "../CartCard/CartCard";

export default function CartModel(){
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const total_price = cartItems.reduce((acc, item)=>{
        return acc + item.price * item.count;
    },0);
    const handleRoundBtnClick = (item, operation) =>{

        operation === 'add' ? dispatch(updateCart(item, 'add')) : dispatch(updateCart(item, 'remove'))
    }
    return (
        <CART_MODEL>
            {cartItems.length >= 1 && <CART_STYLE>
                <CART_TITLE>
                    My Cart ({cartItems.length} Item)
                    <CART_CLOSE_BTN onClick={()=>{dispatch(openCloseCart(false))}}>X</CART_CLOSE_BTN>
                </CART_TITLE>
                <CartCard cartItems={cartItems} handleCart={handleRoundBtnClick}/>
                <CART_DEFAULT_STATEMENT>
                    <CART_DEFAULT_IMAGE src="static/images/lowest-price.png" alt="lowest price image" />
                    <CART_DEFAULT_TEXT>You won't find it cheaper anywhere</CART_DEFAULT_TEXT>
                </CART_DEFAULT_STATEMENT>
                <CART_FOOTER>
                    <p>Promo code can be applied on payment page</p>
                    <CHECKOUT_BUTTON>
                        <p>Proceed to Checkout</p>
                        <p>Rs {total_price} &nbsp;&nbsp;&nbsp;&#62;</p>
                    </CHECKOUT_BUTTON>
                </CART_FOOTER>
            </CART_STYLE>}
            { cartItems.length === 0 && <CART_STYLE_EMPTY>
            <CART_TITLE>
                    My Cart ({cartItems.length} Item)
                    <CART_CLOSE_BTN onClick={()=>{dispatch(openCloseCart(false))}}>X</CART_CLOSE_BTN>
                </CART_TITLE>
            <CART_EMPTY><h4>No Items in you cart</h4>
                        <h6>Your favourite items are just a click away</h6>
                    </CART_EMPTY>
            <CART_EMPTY_FOOTER>
            <CART_EXPLORE_BUTTON onClick={()=>{
                dispatch(openCloseCart(false));
                history.push('/products');
                }}>
                        Start Shopping
            </CART_EXPLORE_BUTTON>
            </CART_EMPTY_FOOTER>
            </CART_STYLE_EMPTY>}
        </CART_MODEL>
    )
}