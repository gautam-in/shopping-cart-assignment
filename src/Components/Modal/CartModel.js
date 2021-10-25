import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { openCart, openCloseCart, updateCart } from "../../Store/actions/cart";
import { actions } from "../../Store/actionTypes/constants";
import CartCard from "../CartCard/CartCard";

const CART_MODEL = styled.div`
    position: fixed;
    width: 100%; 
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.7);
`

const CART_STYLE = styled.div`
    overflow: scroll;
    width: 35vw;
    height: 80vh;
    z-index: 99;
    background: #eeeeee;
    position: fixed;
    bottom: 0%;
    left: 64%;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
const CART_STYLE_EMPTY = styled.div`
    display: grid;
    width: 35vw;
    height: 80vh;
    z-index: 99;
    background: white;
    position: fixed;
    bottom: 0%;
    left: 64%;
`

const CART_TITLE = styled.div`
    display: grid;
    position: fixed;
    width: 34%;
    grid-template-columns: 13fr 1fr;
    margin-top: -40px;
    background: black;
    height: 10vh;
    max-height: 6vh;
    color: white;
    align-items: center;
    padding-left: 20px;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
const CART_FOOTER = styled.footer`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: baseline;
    margin-bottom: 0px;
    background: white;
    align-self: self-end;
    width: 35%;
    position: fixed;
    bottom: 0;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`

const CART_EMPTY_FOOTER = styled.footer`
    display: grid;
    justify-items: center;
    align-items: baseline;
    margin-bottom: 0px;
    background: white;
    height: 10vh;
    align-self: self-end;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
const CHECKOUT_BUTTON = styled.div`
    display: grid;
    grid-template-columns: 82% 1fr;
    box-sizing: border-box;
    width: 95%;
    height: 45px;
    margin-bottom: 10px;
    padding-left: 25px;
    background: #bf2957;
    color: white;
    border-radius: 5;
    cursor: pointer;
    border-radius: 5px;
    :active{
        color: black;
    }
`
const CART_EXPLORE_BUTTON = styled.div`
    display: grid;
    box-sizing: border-box;
    width: 95%;
    height: 45px;
    margin-bottom: 10px;
    justify-items: center;
    align-items: center;
    padding-left: 25px;
    background: #bf2957;
    color: white;
    border-radius: 5;
    cursor: pointer;
    border-radius: 5px;
    :active{
        color: black;
    }
`
const CART_EMPTY = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    background: white;
    width: 100%;
    height: 126%;
`

const CART_CLOSE_BTN = styled.p`
    cursor: pointer;
`
const CART_DEFAULT_STATEMENT = styled.div`
    display: grid;
    grid-template-columns: 18% 80%;
    max-height: 10%;
    height: 10vh;
    align-items: center;
    justify-items: left;
    background: white;
    grid-gap: 2px;
    margin: 34px;
`
const CART_DEFAULT_IMAGE = styled.img`
    width: 66px;
`
const CART_DEFAULT_TEXT = styled.p`
    max-width: 250px;
    min-height: 1rem;
    text-align: center;
    font-size: 0.98rem;
`

export default function CartModel(){
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const handleRoundBtnClick = (item, operation) =>{

        operation === 'add' ? dispatch(updateCart(item, 'add')) : dispatch(updateCart(item, 'remove'))
    }
    return (
        <CART_MODEL>
            {cartItems.length >= 1 && <CART_STYLE>
                <CART_TITLE>
                    My Cart (1 Item)
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
                        <p>Rs 101 &nbsp;&nbsp;&nbsp;&#62;</p>
                    </CHECKOUT_BUTTON>
                </CART_FOOTER>
            </CART_STYLE>}
            { cartItems.length === 0 && <CART_STYLE_EMPTY>
            <CART_TITLE>
                    My Cart (1 Item)
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