import React, { HTMLInputTypeAttribute } from "react";
import "./InputText.css";

const InputText:React.FC<{label:string, type?:HTMLInputTypeAttribute, name:string}>=({ label, type="text", name })=> {
  return (
    <div className="box">
      <div>
        <input
          type={type}
          name={name}
          required
          id={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
}

export default InputText;
