import React from 'react';
import '../CSS/Product.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../actions/addtocart.action';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const buyNowHandler = (productId) => {
        console.log(productId);
        dispatch(addtocart(productId))
    }
    return (
        <div className='product'>
            <h3>{product.name}</h3>
            <div className='productImage'>
                <img src={product.imageURL} alt={product.name}/>
            </div>
            <p>{product.description}</p>
            <div className='priceAndPurchase'>
                <p>MRP Rs.{product.price}</p>
                <button onClick={() => buyNowHandler(product.id)}>Buy Now</button>
            </div>
        </div>
    )
}


export default ProductCard