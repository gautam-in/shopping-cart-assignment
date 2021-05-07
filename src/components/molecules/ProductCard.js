import React from 'react';


export default function ProductCard(props) {    
    const productObj = props.product;

    const buyNowClickHandler = (productObj) => {              
        
    }

    return (
        <div className="productCard">
            <h3>{productObj.name}</h3>
            <div className="cardImage">
            <img src = {productObj.imageURL} alt = 'pic' />
            </div>
            <div className="cardContent">
            <p> {productObj.description} </p>
             
                <button className="btn-primary" onClick = { () => buyNowClickHandler(productObj)}>
                    Buy Now @ {`MRP Rs.${productObj.price}`}
                </button>
           
            </div>
        </div>
    )
}




