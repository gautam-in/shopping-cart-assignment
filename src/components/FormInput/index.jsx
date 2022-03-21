import React from "react";

import { FormContainer } from "./formInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormContainer>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </FormContainer>
  );
};

export default FormInput;