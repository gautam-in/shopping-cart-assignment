import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <div className="floatLabel">
      <input
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        type={props.type}
      />
      <label className={props.value !== "" ? "active" : ""} htmlFor={props.id}>
        {props.placeholder}
      </label>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
