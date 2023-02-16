import React from "react";
import "./InputText.css";

function InputText({ label, onChange, value }) {
  return (
    <div className="box">
      <div>
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={label}
        />
        <label for={label}>{label}</label>
      </div>
    </div>
  );
}

export default InputText;
