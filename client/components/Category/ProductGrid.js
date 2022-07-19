import React from 'react';
import styles from '../../styles/product-grid.module.scss'
import ProductItem from "./ProductItem";

const ProductGrid = ({products}) => {
    return (
        <div className={styles.gridContainer}>
            {products && products.map(product => <ProductItem key={product._id} product={product}/> )}
        </div>
    );
};

export default ProductGrid;