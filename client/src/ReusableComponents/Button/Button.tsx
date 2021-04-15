import React, { useEffect, useState } from "react";
import styles from "./Button.module.scss";

const Button: any = (props: any) => {
  const { width } = props;

  return (
    <button className={`${styles["btn-style"]}`} style={{ width: width }}>
      {props.children}
    </button>
  );
};

export default Button;
