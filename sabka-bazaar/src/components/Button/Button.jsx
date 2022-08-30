import "./button.styles.scss";
import PropTypes from "prop-types";

const BUTTON_TYPE_CLASSES = {
  circularBtn: "circular-btn",
};
export const Button = ({ title, type, ...otherProps }) => {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};
