import e from 'cors'
import React, {useState, useRef } from 'react'
import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { handleCartUpdate } from '../../redux/actions'
import CartItem from "./CartItem"
import lowestIcon from "../../images/lowest-price.png"
import modal from "../../styles/modal"

const Cart = ({setCart}) => {
    const cart = useSelector((store) => store.cart);
    const ref = React.useRef();
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);

    const history = useHistory();

    const close = (event)=>{
        event.stopPropagation();
        setCart(false);
    }

    const confirmOrder = () =>{
        setConfirm(true);
        setTimeout(()=>{
            setConfirm(false);
            setCart(false);
            dispatch(handleCartUpdate());
            history.push("home");
        }, 800);
    }

    const price = () =>{
        let price = 0;
        for(let i of cart){
            price += (i.price * i.qnty);
        }
        return price;
    }

    React.useEffect(()=>{
        ref.current.focus();
    }, []);

    return (
        <div className="modal" aria-label="Shopping Cart">
            <div className="modal-content cart-container" onClick={(e) => e.stopPropagation()} >
                <div className="modal-header cart-head">
                    <span className="cart-title"> My Cart({cart.length})</span>
                    <button ref={ref} className="cart-close-button .close" onClick={close} aria-label="Close" >
                        x
                    </button>
                </div>

                {cart.length > 0 ? (
                    <>
                        <div className="cart-body">
                            <div className="cart-items-container">
                                {
                                cart.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))
                                }
                            </div>
                            <div className="lowest-price-container">
                                <img src={lowestIcon} alt="lowest-price-guarantee" />
                                <span>You won't find it cheaper anywhere.</span>
                            </div>
                        </div>
                        <div className="cart-footer">
                            <span className="promo-info">Promo Code can be applied on payment page.</span>
                            <button className="btn-primary btn-lg">
                                <span>Proceed to checkout</span>
                                <span>&nbsp;&nbsp;Rs. {price()} &nbsp; <b>→</b> </span>
                            </button>
                        </div>
                    </>
                    ) : (
                        <>
                            <div className="cart-body align-center">
                                <span>No items in your cart</span>
                                <span> Your favourite items are just a click away!</span>
                            </div>
                            <div className="cart-footer">

                            </div>
                        </>
                )}

            </div>
        </div>
    )
}

export default Cart;