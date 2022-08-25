import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./product-list.styles.scss";
export const ProductsList = ({ data }) => {
  return (
    <section className="product-list-container">
      {data.map(({ name, id, imageURL, description, price }) => {
        return (
          <div key={id} className="product-container">
            <div className="product-title">{name}</div>
            <div className="product-img-container">
              <img src={imageURL} alt={name} className="product-img" />
            </div>
            <div className="product-second-child">
              <div className="product-desc">
                <p>{description}</p>
              </div>
              <div className="buy-now">
                <p>Mrp Rs. {price}</p>
                <div className="button-container">
                  <Button title="Buy Now" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

ProductsList.propTypes = {
  data: PropTypes.array,
};
