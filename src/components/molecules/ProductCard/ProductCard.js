import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/actionCreators';
import './ProductCard.scss';
export default function ProductCard({ product }) {
    const productObj = product;
    const dispatch = useDispatch();
    const buyNowClickHandler = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div className="product-card">
            <h3 className="product-header">{productObj.name}</h3>
            <div className="product-content">
                <div className="product-image">
                    <img src={productObj.imageURL} alt='pic' />
                </div>
                <div className="product-detail">
                    <p> {productObj.description} </p>
                    <button className="btn-primary product-mobile-button" onClick={() => buyNowClickHandler(productObj)}>
                        Buy Now @ {`MRP Rs.${productObj.price}`}
                    </button>

                </div>

            </div>
            <div className='product-footer'>
                <p>MRP Rs.{productObj.price}</p>
                <button type='button' className="btn-primary" onClick={() => buyNowClickHandler(productObj)} >
                    Buy Now
                    </button>
            </div>
        </div>
    )
}




