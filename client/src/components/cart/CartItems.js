import React from "react";
import cart from '../../cart.svg';
import "./CartItems.scss"

const CartItems = (props)=>{
    const add = ()=>{
        let qty ={}
        qty.key = props.name;
        qty.qty = props.qty + 1;
        props.setQty(qty);
    }
    const substract = ()=>{
        let qty ={}
        qty.key = props.name;
        if(props.qty>0)
        {
            qty.qty = props.qty - 1;
        }
        else{
            qty.qty = 0
        }
        props.setQty(qty);
    }
    return(
        <div className="cartItem">
           <div className="row">
               <div className="col-3">
                  <img src={props.imageURL} alt={props.name} className="itemImg"/>
               </div>
               <div className="col-9">
                   <div className="row"  data-testid="name"><b style={{margin:"10px"}}>{props.name}</b></div>
                   <div className="row g-sm-0">
                        <div className="col-4">
                            <div className="margin">
                            <button onClick={substract}>−</button>
                            <span className="noofItems">{props.qty}</span>
                            <button onClick={add}>+</button>
                            </div>
                        </div>
                        <div className="col-4 margin" data-testid="price">
                            X Rs {props.price}
                        </div>
                        <div className="col-3 margin" style={{textAlign:"end"}} data-testid="totalprice">
                        Rs {props.price*props.qty}
                   </div>
                   </div>
               </div>
           </div>
        </div>
    )

}

export default CartItems;