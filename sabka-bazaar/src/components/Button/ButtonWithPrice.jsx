import "./button.styles.scss";
import PropTypes from "prop-types";

export const ButtonWithPrice = ({ title, price, ...otherProps }) => {
  return (
    <button className={`button-with-price`} {...otherProps}>
      {title} @ Rs.{price}
    </button>
  );
};

ButtonWithPrice.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};
