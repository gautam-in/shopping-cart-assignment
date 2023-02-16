import React from "react";
import "./InputText.css";

function InputText({ placeholder, onChange, value }) {
  return (
    <div className="box">
      <div>
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <label>{placeholder}</label>
      </div>
    </div>
  );
}

export default InputText;
