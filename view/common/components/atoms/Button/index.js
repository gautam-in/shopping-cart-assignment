// import React from "react";
import style from "./Button.module.scss";

export default function Button({ children, ...rest }) {
  return (
    <>
      <button {...rest} className={style.Button}>
        {children}
      </button>
    </>
  );
}
