import React, { useState } from "react";
function TextInput({ type, label, name, rules, register, errors, mandatory }) {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor={name} className={mandatory && "label"}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        {...register(`${name}`, {
          required: mandatory && `${label} is mandatory`,
          ...rules,
        })}
        value={value}
        onChange={(e) => setValue(e.target.value.trim())}
      />
      <span
        style={{
          color: "red",
          fontSize: "12px",
          textAlign: "right",
          margin: "-10px 10px 10px",
        }}
      >
        {errors[name] && errors[name].message}
      </span>
    </>
  );
}

export default TextInput;
