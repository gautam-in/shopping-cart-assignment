import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

import { CategorySideNavView } from '../../features/categories/CategorySideNavView';
import { ProductListView } from '../../features/productList/ProductListView';
import { getFilteredData } from '../../features/productList/ProductListSlice';

export const ProductListPage = () => {
    const location = useLocation();
    const categoryId = location.state?.selectedCategoryId;
    const category = useSelector(state => state.category);
    const list = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        categoryId && dispatch(getFilteredData(categoryId))
    }, [categoryId])

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
