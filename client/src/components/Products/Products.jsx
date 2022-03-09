import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/products/products.action';
import CategoryList from './CategoryList';
import './products.css';
import ProductList from './ProductsList';

function Products({ match }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(match.params.categoryId));
    }, [match.params.categoryId])

    return (
        <div className="products-section">
            <CategoryList />
            <ProductList />
        </div>
    )

}

export default Products;