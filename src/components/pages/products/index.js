import React from 'react';
import { useParams } from 'react-router-dom';
import { redirectToCategory } from '../../../utils/helpers';
import Dropdown from '../../atoms/dropdown';

import useCustGetData from '../../atoms/use-custom-getdata';
import Sidebar from '../../molecules/sidebar';
import PlpProducts from '../../rows/plp-products';

import './products.scss';

const Products = () => {

    const { id } = useParams();
    let categoryTypes = [];

    const categoriesData = useCustGetData('/categories');
    const { data, loading } = id ? useCustGetData('/products', id) : useCustGetData('/products');

    if (categoriesData && categoriesData.data) {
        categoryTypes = categoriesData.data.map(item => ({ id: item.id, categoryType: item.name }));
    }

    const onSelect = (e) => {
        let href = "";
        if(e && e.target && e.target.value!=="select") {
            href = `/products/${e.target.value}`;
        } else {
            href = `/products`;
        }
        redirectToCategory(href);
    }

    return (
        loading ? <></>
            : <div className='products-container'>
                <div className='mobile-only'><Dropdown items={categoryTypes} onSelect={onSelect} activeId={id}/></div>
                <div className='nav-sidebar'><Sidebar items={categoryTypes} activeId={id} /></div>
                <div className='products'><PlpProducts products={data} /></div>
            </div>
    )
}

export default Products;