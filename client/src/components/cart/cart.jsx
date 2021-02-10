import React from 'react'
import "./cart.scss"
import Item from "./lib/items"

function Cart({ setCart }) {
    function close(e) {
        e.stopPropagation();
        setCart(false);
    }
    return (
        <div onClick={close} className="container">
            <div onClick={(e) => e.stopPropagation()} className="cart">
                <header>
                    <span> My Cart(1 item)
                      </span>
                    <span className={"cross"} onClick={close}>
                        x</span>         </header>
                <div className="items">
                           <Item/>
                           <Item/>
                </div>
                <div className="lowest">
                    <div>
                        <img src="./static/images/lowest-price.png" alt="" />
                    </div>
                    <div>
                        You won't find it cheaper anywhere.

                     </div>
                </div>
                <div className={"checkout"}>
                    <small>
                        Promo code can be applied on payment page.
                    </small>
                    <div className="btn checkoutBtn">
                        <span>Proceed to checkout
                    </span>
                        <span>
                            Rs. 187 &nbsp;&nbsp;&nbsp; <b>{"  >"}</b>  
                        </span>                     </div>
                </div>
            </div>



        </div>
    )
}

export default Cart
