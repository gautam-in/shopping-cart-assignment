import React from "react";
import "./style.scss";

function Button(props) {
  const { onClick, children, ...rest } = props;

  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
