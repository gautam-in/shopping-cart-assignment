import React from "react";

function Input(props) {
  // const classes = props.classes;
  return (
    <input
      className={"inputMain"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      checked={props.value}
      type={props.type}
      style={{ ...props.style }}
      aria-required={props.ariaRequired}
      aria-invalid={props.ariaInvalid}
      aria-describedby={props.ariaDescribed}
      id={props.id}
    ></input>
  );
}

export default Input;
