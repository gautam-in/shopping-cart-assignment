import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../actions/actionCreators';

export default function ProductCard({product}) {    
    const productObj = product;
    const dispatch = useDispatch();
    const buyNowClickHandler = (item) => {   
        console.log(item);           
        dispatch(addToCart(item));
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




