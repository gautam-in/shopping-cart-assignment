import React from 'react';
import { addToCart } from '../../store/reducers/cart/action';
import styles from "./productitem.module.css"
import { useSelector, useDispatch } from 'react-redux';

export default function ProductItem(props) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(props.productDetail));
        alert("Product added to cart");
    };

    return (
        <div className={styles.productCard} key={props.productDetail.id}>
            <div className={styles.productTitle}>{props.productDetail.name}</div>
            <div className={styles.productImageDescContainer}>
                <div className={styles.productImage}>
                    <img src={props.productDetail.imageURL} alt="imagename"/>
                </div>
                <div className={styles.productDesc}>
                    {props.productDetail.description}
                </div>
            </div>
            <div className={styles.priceContainer}>
                <div className={styles.productPrice}>
                    MRP Rs.{props.productDetail.price}
                </div>
            <button className={styles.buyNowBtn} onClick={() => handleAddToCart()} aria-label="Buy Now">Buy Now</button>
            <button className={styles.buyNowBtnMobile} onClick={() => handleAddToCart()} aria-label="Buy Now">
                    Buy Now @ Rs.{props.productDetail.price}
            </button>
            </div>
        </div>
    );
}
