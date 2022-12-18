import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux'

import { CategorySideNavView } from '../../features/categories/CategorySideNavView';
import { ProductListView } from '../../features/productList/ProductListView';
import { fetchProductList, getFilteredData } from '../../features/productList/ProductListSlice';
import { fetchCategoryList } from '../../features/categories/CategorySlice';

export const ProductListPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductList());
        dispatch(fetchCategoryList())
    }, [])
    
    const category = useSelector(state => state.category);
    const list = useSelector(state => state.product);


    const onCategoryClick = (id) => {
        dispatch(getFilteredData(id))
    }

    return (
        <Row>
            <Col md={4} lg={3} className="grey-bg">
                {category.categoryList.length > 0 ? <CategorySideNavView categoryList={category.categoryList} onCategoryClick={onCategoryClick} /> : <span>Loading....</span>}
            </Col>
            <Col md={8} lg={9}>
                {list.filteredList.length > 0 ? <ProductListView list={list.filteredList}/> : <span>Loading....</span>}
            </Col>
        </Row>
    )
}
