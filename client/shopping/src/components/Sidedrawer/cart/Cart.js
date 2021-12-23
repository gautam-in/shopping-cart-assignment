import React from "react";
import useImageLoad from "../../../Hooks/useImageLoad";
import "./Cart.css"
const Cart = (props)=>{
    let r =((props.extotal/props.total)*100).toFixed(2);

    const[error, image] = useImageLoad(props.imageURL)
    console.log(image)
    return(
        <div className="cartItem">
           <div className="row">
               <div className="col-3">
                  {!error && <img src={image} alt="apple" className="itemImg"/>}
               </div>
               <div className="col-9">
                   <div className="row"><b style={{margin:"10px"}}>{props.name}</b></div>
                   <div className="row g-sm-0">
                        <div className="col-4">
                            <div className="margin">
                            <button>−</button>
                            <span className="noofItems">{props.qty}</span>
                            <button>+</button>
                            </div>
                        </div>
                        <div className="col-4 margin">
                            X Rs {props.price}
                        </div>
                        <div className="col-3 margin" style={{textAlign:"end"}}>
                        Rs {props.price*props.qty}
                   </div>
                   </div>
               </div>
           </div>
        </div>
    )

}

export default Cart;