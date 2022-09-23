import PropTypes from "prop-types";

import { Button } from "../../components";
import "./products.scss";

const Products = ({ productList }) => {
  const products = productList.map((product) => (
    <div className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.imageURL} alt={product.name} />
      <p className="description">{product.description}</p>
      <div className="price">
        <p>MRP Rs. {product.price}</p>
        <Button onClickHandler={() => {}}>Buy Now</Button>
      </div>
    </div>
  ));

  return <div className="products">{products}</div>;
};

Products.propTypes = {
  productList: PropTypes.array.isRequired,
};

export default Products;
