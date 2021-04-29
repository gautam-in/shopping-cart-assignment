import React, { useEffect, useState } from "react";
import styles from "./Button.module.scss";

const Button: any = (props: any) => {
  return (
    <button {...props} className={`${props.className} ${styles["btn-style"]}`}>
      {props.children}
    </button>
  );
};

export default Button;
