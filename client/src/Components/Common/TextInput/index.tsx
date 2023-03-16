import { TextInputProps } from "./models"

import "./styles.scss"

export const TextInput = ({
  type,
  label,
  name,
  value,
  touched,
  errors,
  handleChange,
  handleBlur,
}: TextInputProps) => {
  return (
    <div className={`input-group ${touched && errors ? "error" : ""}`}>
      <input
        className="input-control"
        type={type}
        id={name}
        name={name}
        placeholder=" "
        aria-label={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor={name} className="input-label">
        {label}
      </label>

      {touched && errors ? (
        <div className="input-error" data-testid={`${name}-error`}>
          {errors}
        </div>
      ) : null}
    </div>
  )
}
