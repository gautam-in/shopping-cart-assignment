/* eslint-disable react/jsx-props-no-spreading */
import {useSelector} from 'react-redux';
import Card from '../../../components/Card';
import {allProductsData} from '../../../selector';
import './ProductList.scss';

const ProductList = () => {
  const {loading, data, error} = useSelector((state) => allProductsData(state));

  const productList = data.map((product) => {
    const {id} = product;
    return (
      <li key={id}>
        <Card {...product} />
      </li>
    );
  });
  return (
    <div className="product-list-wrap">
      {loading && <h1>Loading....</h1>}
      {!!data && data.length && <ul className="clearfix">{productList}</ul>}
      {error && <h1>Something went wrong!</h1>}
    </div>
  );
};

export default ProductList;
