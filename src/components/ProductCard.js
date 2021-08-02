import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import classes from '../css/productcard.css';

const ProductCard = ({productDetails, addToCart}) => {
    return (
        <section className = { classes['product-card'] }>
            <h2 className = { classes.title }>{ productDetails.name }</h2>
            <img className = { classes.img } src = { productDetails.imageURL } alt = { productDetails.name } />
            <p className = { classes.description }>{ productDetails.description }</p>
            <div className = { classes['buy-now'] }>
                <p className = { classes.price }>MRP Rs.{ productDetails.price }</p>
                <button className = { classes.buttons } onClick = {() => addToCart(productDetails.id)}>Buy Now</button>
            </div>
        </section>
    )
}

export default ProductCard;