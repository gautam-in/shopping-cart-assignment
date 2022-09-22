import PropTypes from "prop-types";

import { BUTTON_TYPES } from "../../constants";
import "./button.scss";

const Button = ({ children, buttonType, onClickHandler }) => (
  <button type={buttonType} onClick={onClickHandler}>
    {children}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  onClickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonType: BUTTON_TYPES.BUTTON,
};

export default Button;
