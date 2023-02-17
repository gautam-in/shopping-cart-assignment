import React from "react";
import "./InputText.css";

function InputText({ label, type="text", name }) {
  return (
    <div className="box">
      <div>
        <input
          type={type}
          name={name}
          required
        />
        <label >{label}</label>
      </div>
    </div>
  );
}

export default InputText;
