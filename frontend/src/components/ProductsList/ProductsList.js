import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductsList.scss";


export default function ProductsList(props) {
    const {products}= props;
    return (
        <div className="product-container">
            {products.length > 0 &&
                products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
        </div>
    )
}