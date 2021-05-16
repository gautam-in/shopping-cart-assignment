import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../../redux/actions/actionCreators';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import './ProductList.scss';
const ProductList = ({ filterId }) => {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products.productsList)
    const [displayList, setDisplayList] = useState([]);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    useEffect(() => {
        if (filterId) {
            setDisplayList(() =>
                productsList.filter((product) => product.category === filterId.toString())
            );
        } else {
            setDisplayList(productsList);
        }
    }, [filterId, productsList]);

    const productsContent = displayList?.map((item, i) => {
        return <ProductCard product={item} key={i} />
    })

    return <section className='product-list'>{productsContent}</section>;
};

ProductList.propTypes = {
    filterId: PropTypes.string
};

ProductList.defaultProps = {
    filterId: null
};

export default ProductList;
