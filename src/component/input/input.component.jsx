import "./input.styles.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default Input;
