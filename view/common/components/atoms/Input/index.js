// import React from "react";
import style from "./Input.module.scss";

export default function Input(props) {
  const { className, children, onChange, ...rest } = props;
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };
  return (
    <>
      <div>
        <div className={style.input_container}>
          <input
            id={props.name}
            className={style.input_text}
            onChange={handleChange}
            autoComplete="off"
            {...rest}
          />
          <label className={style.input_label} htmlFor={props.name}>
            {props.name}
          </label>
        </div>
      </div>
    </>
  );
}
