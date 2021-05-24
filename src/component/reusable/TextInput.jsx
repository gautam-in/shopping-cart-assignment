import React from "react";
function TextInput({ type, label, name, rules, register, errors }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        {...register(`${name}`, {
          required: `${label} is mandatory`,
          ...rules,
        })}
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
