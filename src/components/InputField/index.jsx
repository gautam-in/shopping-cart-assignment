import React, { Component } from "react";
import "./InputField.scss";

class InputField extends Component {
  render() {
    const {
      fieldControl,
      fieldName,
      error,
      type = "text",
      required = "true",
      value,
      handleChange,
    } = this.props;
    return (
      <>
        <label htmlFor={fieldControl}>
          {fieldName || fieldControl[0].toUpperCase() + fieldControl.slice(1)}
        </label>
        {error && error.length > 0 && (
          <div className="error-message">
            {typeof error === "object" ? (
              <small>
                Sorry, this field:
                <ul>
                  {error.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </small>
            ) : (
              <small>{error}</small>
            )}
          </div>
        )}
        <input
          type={type}
          id={fieldControl}
          name={fieldControl}
          aria-required={required}
          value={value}
          onChange={handleChange}
        />
      </>
    );
  }
}

export default InputField;
