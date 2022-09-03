import PropTypes from "prop-types";
import { memo } from "react";
import Product from "./Product";
import "./product-list.styles.scss";
const ProductsList = ({ data }) => {
  return (
    <section className="product-list-container">
      {data.map(({ name, id, imageURL, description, price }) => {
        return (
          <Product
            key={id}
            name={name}
            id={id}
            imageURL={imageURL}
            description={description}
            price={price}
          />
        );
      })}
    </section>
  );
};

export default memo(ProductsList);

ProductsList.propTypes = {
  data: PropTypes.array,
};
