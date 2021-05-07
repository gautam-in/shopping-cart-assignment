import React from "react";
import "./Button.scss";

function Button({ children, type = "submit", onClick }) {
  return (
    <button className="button noselect" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
