import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList() {

    const { products } = useSelector(({ product }) => product)

    return (
        <div className="products-list">
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            }

        </div>
    )
}

export default ProductList;