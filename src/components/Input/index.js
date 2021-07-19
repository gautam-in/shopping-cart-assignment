import React from "react";
import { InputGroup, InputField, InputLabel } from "./styled";

export default function Input({ id, label, ...restProps }) {
  return (
    <InputGroup>
      <InputField id={id} {...restProps} />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </InputGroup>
  );
}
