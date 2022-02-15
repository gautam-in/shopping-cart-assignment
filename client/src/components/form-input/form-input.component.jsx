import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label && (
        <FormInputLabel
          className={props.value && props.value.length > 0 && "shrink"}
        >
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
