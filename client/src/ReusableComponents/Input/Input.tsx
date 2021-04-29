import React from "react";
import styles from "./Input.module.scss";

const Input: any = (props: any) => {
  const { id, placeholder } = props;
  return (
    <div className={styles.container}>
      <input className={styles.inputBox} {...props} />
      <label className={styles.label} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
