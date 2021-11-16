import React from "react";
import './ProductItem.css';

const ProductItem = ({id,title,imagesrc,description,price,buy}) => {

    return(
        <div className="Card">
            
            <div className="desktop">
                <h6>{title}</h6>
                <img src={process.env.PUBLIC_URL + `${imagesrc}`} alt={title} style={{maxWidth:'100%',height:'auto',paddingTop:'5%',paddingBottom:'5%',objectFit:'contain'}}/>
                <div style={{backgroundColor:'#efeeee',flexGrow:'1'}}>
                    <p style={{padding:'3%'}}>{description}</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5%',paddingBottom:'5%'}}>
                    <span>MRP Rs.{price}</span>
                    <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',transition:'0.2s all'}} onClick={()=>{buy(id)}}> Buy Now </button>
                </div>
            </div>

            <div className="tablet">
                <h6>{title}</h6>
                <div style={{display:'flex',flexGrow:'1',justifyContent:'space-between'}}>
                    <img src={process.env.PUBLIC_URL + `${imagesrc}`} alt={title} style={{maxWidth:'50%',height:'auto',paddingTop:'5%',paddingBottom:'5%',objectFit:'contain'}}/>
                    <div style={{backgroundColor:'#efeeee',flexGrow:'1'}}>
                        <p style={{padding:'3%'}}>{description}</p>
                    </div>
                </div>
                <div style={{display:'flex',paddingTop:'5%',paddingBottom:'5%'}}>
                    <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',width:'100%'}} onClick={()=>{buy(id)}}> Buy Now @Rs.{price} </button>
                </div>
            </div>

            <div className="mobile">
                <h6>{title}</h6>
                <div style={{display:'flex',flexGrow:'1',justifyContent:'space-between'}}>
                    <img src={process.env.PUBLIC_URL + `${imagesrc}`} alt={title} style={{maxWidth:'50%',height:'auto',paddingTop:'5%',paddingBottom:'5%',objectFit:'contain'}}/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{backgroundColor:'#efeeee',flexGrow:'1'}}>
                            <p style={{padding:'3%'}}>{description}</p>
                        </div>
                        <div style={{display:'flex',paddingTop:'5%',paddingBottom:'5%'}}>
                            <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',width:'100%'}} onClick={()=>{buy(id)}}> Buy Now @Rs.{price} </button>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default ProductItem;