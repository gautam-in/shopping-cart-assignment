import React from "react";

import style from "./form-input.module.css";

export const Input = ({ type, label, ...otherProps }) => {
  return (
    <>
      <div className={style.inputSection}>
        <input className={style.inputField} type={type} {...otherProps} />

        {label ? (
          <label
            className={`${otherProps.value.length ? style.shrink : ""} ${
              style.label
            }`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};
