import React from "react";
import "./button.styles.scss";

function Button({ text, onClick = null }) {
  return (
    <div className="button-cont">
      <button className="button-prm" onClick={() => onClick && onClick()} aria-label={text}>
        {text}
      </button>
    </div>
  );
}

export default Button;
