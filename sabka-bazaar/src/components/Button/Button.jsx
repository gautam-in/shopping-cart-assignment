import "./button.styles.scss";
import PropTypes from "prop-types";

export const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button-container">
      <button className="button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.array,
};
