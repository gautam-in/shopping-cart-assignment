import React from "react";

const CartItem = ({id,title,imagesrc,qty,price,amount,increase,decrease}) => {

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', backgroundColor:'white',marginBottom:'3%'}}>
            <div style={{display:'flex',columnGap:'5%'}}>
                <div style={{maxWidth:'10%',height:'5%'}}>
                    <img src={process.env.PUBLIC_URL + `${imagesrc}`} style={{maxWidth:'100%',height:'auto'}}/>
                </div>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <h6>  {title} </h6>
                    <div style={{display:'flex',columnGap:'5%'}}>
                        <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',borderRadius:'50%'}} onClick={()=>decrease(id)}> - </button>
                        <span> {qty} </span>
                        <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',borderRadius:'50%'}} onClick={()=>increase(id)}> + </button>
                        <span> X Rs{price} </span>
                    </div>
                </div>
            </div>
            <div style={{paddingRight:'5%'}}>
                <span> Rs{amount}</span>
            </div>
        </div>
    )
}

export default CartItem;