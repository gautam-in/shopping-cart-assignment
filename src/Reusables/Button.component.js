import React from 'react';
import "../Scss/button.scss";

const Button = ({ text }) => {

  return (
    <div className="button-cont">
      <button className="button-prm"  aria-label={text}>{text}</button>
    </div>

  );

}

export default Button;