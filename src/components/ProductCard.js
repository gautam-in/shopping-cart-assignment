import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import classes from '../css/productcard.css';

const ProductCard = ({ productDetails, addToCart }) => {
    return (
        <section className={classes['product-card']}>
            <h3 className={classes.title}>{productDetails.name}</h3>
            <div className={classes['description-container']}>
                <img className={classes.img} src={productDetails.imageURL} alt={productDetails.name} />
                <div className={classes['description-div']}>
                    <p className={classes.description}>{productDetails.description}</p>
                </div>
            </div>
            <div className={classes['buy-now']}>
                <p className={classes.price}>MRP Rs.{productDetails.price}</p>
                <button className={classes.buttons} onClick={() => addToCart(productDetails.id)}>
                    Buy Now
                    <span className={classes['buy-now-price']}>&nbsp; @ {productDetails.price}</span>
                </button>
            </div>
        </section>
    )
}

export default ProductCard;