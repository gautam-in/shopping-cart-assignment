import "./text-input.styles.scss";
import PropTypes from "prop-types";

export const TextInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="text-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps?.value?.length ? "shrink" : ""
          } text-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
};
