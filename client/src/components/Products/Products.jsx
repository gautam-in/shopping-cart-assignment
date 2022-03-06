import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/products.action';
import ProductItem from './ProductItem';
import './products.css';

function Products({ match }) {

    const { products } = useSelector(({ product }) => product)
    const { categories } = useSelector(({ home }) => home)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(match.params.categoryId));
    }, [])

    return (
        <div class="products-section">
            <div class="products-category">
                <div class="category-list">
                    {categories.map((category) => <span key={category.key} class="category-name">{category.name}</span>)}
                </div>
            </div>
            <div class="products-list">
                {
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }

            </div>
        </div>
    )

}

export default Products;