import React from "react";
import style from "../../ui/Button/Button.module.css";

export default function Button({ children, ...rest }) {
  return (
    <>
      <button {...rest} className={style.Button}>
        {children}
      </button>
    </>
  );
}
