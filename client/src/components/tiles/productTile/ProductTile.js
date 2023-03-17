import React, { lazy, useEffect } from "react";
import styles from "./ProductTile.module.scss";
import { add } from '../../../redux/CartSlice';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';


const ProductTile = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (payload) => {
        dispatch(add(payload));
        const toastConfig = {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            };
        toast('product added to cart successfully',toastConfig);
    }
  return ( 
    <div className={styles.productTile}>
        <h2 className={styles.productTitle}>{product?.name}</h2>
        <div className={styles.productDetails}>
            <img className={styles.productImage} src={product?.imageURL} />
            <div className={styles.productDescriptionBox}>
                <div className={styles.productDescription}>{product?.description}</div>
                <div className={styles.ctaContainer}>
                    <span className={styles.mrp}>MRP Rs {product?.price}</span><button onClick={() => handleAddToCart({id:product.id, details:product, quantity: 1})} className={styles.productCta}>Buy Now</button>
                </div>
            </div>
        </div>
    </div> 
  )
}
export default ProductTile;