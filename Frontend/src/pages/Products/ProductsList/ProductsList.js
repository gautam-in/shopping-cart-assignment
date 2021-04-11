import {useSelector, useDispatch} from 'react-redux';
import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AlertInfo from '../../../components/Alert';
import {SkeletonProduct} from '../../../components/SkeltonLoaders';
import Card from '../../../components/Card';
import {selectCartProductIds, allProductsData} from '../../../selector';
import {createAddToCartRequest} from '../../../actions';
import './ProductList.scss';

const ProductList = React.memo(({filterId}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const {loading, data, error} = useSelector((state) => allProductsData(state));
  const cartProduct = useSelector((state) => selectCartProductIds(state));

  const addCart = useCallback(
    (product) => {
      dispatch(createAddToCartRequest({...product, quantity: 1}));
    },
    [dispatch],
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const productFilter = useCallback(() => {
    const productsData = filterId
      ? data.filter((product) => product.category === filterId.toString())
      : data;
    setProducts(productsData);
  }, [data, filterId]);

  useEffect(() => {
    productFilter();
  }, [productFilter]);

  const productList = products.map((product) => {
    const {id} = product;
    const disabled = !!cartProduct.includes(id);
    return (
      <li key={id} className="col-sm-12 col-md-6 col-lg-3 col-xs-3">
        <Card product={{...product, disabled}} addCart={addCart} />
      </li>
    );
  });

  const skeletonproductList = [...Array(12)].map((i) => (
    <li key={i} className="col-sm-12 col-md-6 col-lg-3 col-xs-3">
      <SkeletonProduct />
    </li>
  ));

  return (
    <div className="product-list-wrap">
      <ul className="clearfix row">
        {loading && skeletonproductList}
        {!loading && !error && productList}
      </ul>
      {error && <AlertInfo />}
    </div>
  );
});

ProductList.propTypes = {
  filterId: PropTypes.string,
};

ProductList.defaultProps = {
  filterId: null,
};

export default ProductList;
