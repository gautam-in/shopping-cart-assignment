import React from "react";
import "./style.scss";

function Input(props) {
  const { type, placeholder, maxLength, value, onChange, id, errorMessage } =
    props;
  return (
    <div className="input__wrapper">
      <input
        type={type}
        id={id}
        required
        value={value}
        onChange={onChange}
        max={maxLength}
      />
      <label htmlFor={id} className="input__label">
        {placeholder}{" "}
      </label>
      <p className="input--error">{errorMessage && errorMessage}</p>
    </div>
  );
}
export default Input;
// Input.defaultProps = {
//   type: "text",
//   placeholder: "Email",
//   maxLength: 60,
//   value="",
//   onChange="",
//   id: "",
//   errorMessage: "",
// };
