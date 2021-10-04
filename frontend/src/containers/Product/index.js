import React, { useState } from 'react';
import Header from '../../components/header';
import SideMenu from '../Category/side-menu';
import ProductList from './product-list';

const Product = () => {
    let defaultCategoryId = window.location.href.indexOf('id')>0 ? window.location.href.split('id=')[1]:null;
    let [categoryId, setCategoryId] = useState(defaultCategoryId)

    const setCategory = (id) => {
        setCategoryId(id)
    }
    return (
        <div className="container">
            <Header />
            <div className="grid-container">
                <SideMenu setCategoryId={setCategory} />
                <ProductList categoryId={categoryId} />
            </div>
        </div>

    )
}
export default Product