import React from 'react';
import { addToCart } from '../../../store/actions/cartAction';
import "./ProductItem.css"
import { useDispatch } from 'react-redux';

export default function ProductItem(props) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(props.productDetail));
        alert("Product added to cart");
    };

    return (
        <div className="productCard" key={props.productDetail.id}>
            <div className="productTitle">{props.productDetail.name}</div>
            <div className="productImageDescContainer">
                <div className="productImage">
                    <img src={props.productDetail.imageURL} alt="imagename"/>
                </div>
                <div className="productDesc">
                    {props.productDetail.description}
                </div>
            </div>
            <div className="priceContainer">
                <div className="productPrice">
                    MRP Rs.{props.productDetail.price}
                </div>
            <button className="buyNowBtn" onClick={() => handleAddToCart()} aria-label="Buy Now">Buy Now</button>
            <button className="buyNowBtnMobile" onClick={() => handleAddToCart()} aria-label="Buy Now">
                    Buy Now @ Rs.{props.productDetail.price}
            </button>
            </div>
        </div>
    );
}