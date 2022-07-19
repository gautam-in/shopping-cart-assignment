import React from 'react';
import styles from '../../styles/product-grid.module.scss'
import Image from "next/image";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({product : product, quantity : 1}));

    }
    return (
        <div className={styles.gridItem}>
            <h3>{product.name}</h3>
            <div className={styles.productBlock}>
            <Image src={'http:localhost:5000/' + product.imageURL} alt={product.name} sizes={'10vw'} height={200} width={200} layout="responsive" loading="lazy"/>
            <p className={styles.descriptionText}>{product.description}</p>
            </div>
            <div className={styles.priceBlock}>
                <p>MRP Rs.{product.price}</p>
                <button onClick={addToCartHandler}>Buy Now</button>
            </div>

        </div>
    );
};

export default ProductItem;