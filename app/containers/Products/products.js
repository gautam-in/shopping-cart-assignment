import { useEffect } from 'react';
import Product from '../../components/Product';
import ProductsContainerStyles from './products.styles';
import { fetchProducts } from '../../../store/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Products = ({ products, fetchProducts })=> {
  useEffect(() => {
    fetchProducts()
  }, []);

  const renderProducts = (products) => {
    if (products)
      return products.map((product) => {
        return (
        <Product key={product.id} product={product} />
        );
      });
  };

  return <ProductsContainerStyles>{renderProducts(products)}</ProductsContainerStyles>;
}
const mapStateToProps = (state, {category}) => {
  let products = category ? state.categories?.products?.filter(product => product.category === category) : state.categories?.products;
  return {
    products: products,
  };
};
Products.propTypes ={
products: PropTypes.array,
fetchProducts: PropTypes.func,
category: PropTypes.string
}
export default connect(mapStateToProps, {
  fetchProducts,
})(Products);
