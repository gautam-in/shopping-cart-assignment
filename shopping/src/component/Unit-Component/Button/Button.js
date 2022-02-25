import React from "react";
function Button(props) {
  /// const classes = props.classes;
  return (
    <button className="buttonMain" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
