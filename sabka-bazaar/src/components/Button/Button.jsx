import "./button.styles.scss";
import PropTypes from "prop-types";

export const Button = ({ title, ...otherProps }) => {
  return (
    <button className="button" {...otherProps}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
