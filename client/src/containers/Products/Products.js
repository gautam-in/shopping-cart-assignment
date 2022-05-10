import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";


const Products = ({data,...rest}) => {

  return data.map((val,i) => (
        <Product data={val} key={i} {...rest}/>
  ));
};

Products.propTypes = {
  data: PropTypes.array,
  rest: PropTypes.object
}

Products.defaultProps = {
  data: [],
  rest: {}
}

export default Products;
