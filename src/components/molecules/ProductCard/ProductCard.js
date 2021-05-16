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
        <div className="product-card" aria-label={"Product card for" + productObj.name}>
            <h3
                aria-label={"product name is" + productObj.name}
                className="product-header">
                {productObj.name}
            </h3>
            <div className="product-content">
                <div className="product-image">
                    <img
                        src={productObj.imageURL}
                        aria-label={"image of" + productObj.name}
                        alt='pic' />
                </div>
                <div className="product-detail">
                    <p
                        aria-label={"product description is" + productObj.description}>
                        {productObj.description}
                    </p>
                    <button
                        aria-label={"BUY NOW button, the product price is" + productObj.price}
                        className="btn-primary product-mobile-button"
                        onClick={() => buyNowClickHandler(productObj)}>
                        Buy Now @ {`MRP Rs.${productObj.price}`}
                    </button>

                </div>

            </div>
            <div className='product-footer'>
                <p aria-label={"Product price for" + productObj.name + "is" + productObj.price}>
                    MRP Rs.{productObj.price}
                </p>
                <button
                    type='button'
                    aria-label={"BUY NOW button"}
                    className="btn-primary"
                    onClick={() => buyNowClickHandler(productObj)} >
                    Buy Now
                </button>
            </div>
        </div>
    )
}




