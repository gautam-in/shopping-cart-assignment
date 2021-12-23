import React from 'react'
import './Sidedrawer.css'
import Backdrop from '../utils/Backdrop/Backdrop'
import Cart from "./cart/Cart"

const SideDrawer =(props)=>{
    let classnav=["SideDrawer", "Open"]
    if(!props.open){
        classnav=["SideDrawer", "Close"]
    }
    let shop = "Start Shopping";
    let s= null;
    let total = 0;
    Object.keys(props.products).forEach((item)=>{
        if(props.products[item].qty>0)
        {
            total = total + (props.products[item].qty*props.products[item].price)
        }
    })
    let isEmpty = Object.keys(props.products).length<=0? true: false
    if(!isEmpty)
    {
        shop="Proceed to Checkout";
        s=<div>
        Rs {total} &nbsp;&gt;</div>
    }
    return(
        <>
        <Backdrop show={props.open} display={props.close}/>
        <div className={classnav.join(" ")}>
            <div className="bar">
                <div className="text"><b>MyCart</b></div>
                <button className="modalclose" onClick={props.close}>X</button>
            </div>
            <div className={isEmpty?"cartItemsEmpty":"cartItems"}>
               {isEmpty?<section className="emptyCart"> <b>No items in your cart</b>
                <br/>Your favourite items are just a click away
                </section>:
                Object.keys(props.products).map((item)=>{
                    return <Cart {...props.products[item]} key={props.products[item].id}/>
                })
                }
               
            </div>
            {!isEmpty && <div className="promo">Promo code can be applied on the payment page</div>}
            <button className="shop" style={isEmpty? {justifyContent:'center'}: null}>
                <div>{shop}</div>
                {s}</button>
        </div>
        </>
 )
}

export default SideDrawer