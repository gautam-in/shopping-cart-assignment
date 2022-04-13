import React from "react";
import "./Input.scss";

function Input(props) {
  return (
    <input
      className="formRow__inputText"
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      name={props.name}
      pattern={props.pattern}
      title={props.title}
      value={props.value}
    />
  );
}

export default Input;
