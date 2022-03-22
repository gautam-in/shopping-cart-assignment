import "./formInputWithError.scss";

const FormInputWithError = ({ label, name, errorMessage, ...props }) => {
  return (
    <div className="input-error-container">
      <div className="input-container">
        <input
          {...props}
          className={errorMessage ? "has-error" : ""}
          name={name}
        />
        <label htmlFor={name} className={props.value ? "shrink" : ""}>
          {label}
        </label>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
    </div>
  );
};

export default FormInputWithError;
