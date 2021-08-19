import React from "react";
import "./formField.scss";

const FormField = ({ label, errorText, type, name, id }) => (
  <>
    <label for={id}>{label}</label>
    <input type={type} id={id} name={name} />
  </>
);

export default FormField;
