import React from "react";
import styles from "./Inputbox.module.scss";
export default function Inputbox({ input, handleChange, values, errors }) {
  const { type, placeholder, inputId } = input;

  return (
    <>
      <input
        type={type}
        className={styles["floating-input"]}
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={values}
        onChange={handleChange}
      />
      {errors ? (
        <p className={styles["form-error"]} aria-live="polite">{errors}</p>
      ) : (
        <label htmlFor={inputId} className={styles["floating-label"]}>
          {placeholder}
        </label>
      )}
    </>
  );
}
