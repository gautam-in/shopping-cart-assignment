import PropTypes from "prop-types";
import Product from "./Product";
import "./product-list.styles.scss";
export const ProductsList = ({ data }) => {
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

ProductsList.propTypes = {
  data: PropTypes.array,
};
