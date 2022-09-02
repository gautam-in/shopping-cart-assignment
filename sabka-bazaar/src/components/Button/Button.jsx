import "./button.styles.scss";
import PropTypes from "prop-types";

const BUTTON_TYPE_CLASSES = {
  circularBtn: "circular-btn",
  checkoutBtn: "checkout-btn",
  baseBtn: "button",
  startShopping: "start-shopping",
  exploreBtn: "explore-btn",
};
export const Button = ({ title, type = "baseBtn", price, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
      {type !== "checkoutBtn" ? (
        <div>{title}</div>
      ) : (
        <>
          <div>{title}</div>
          <div className="price-container">
            <div>Rs.{price}</div>
            <div>&gt;</div>
          </div>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
};
