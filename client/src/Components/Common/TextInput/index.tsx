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
  const isInvalid = touched && errors

  return (
    <div className={`input-group ${touched && errors ? "error" : ""}`}>
      <input
        className="input-control"
        type={type}
        id={name}
        name={name}
        placeholder=" "
        aria-label={name}
        aria-required={true}
        aria-invalid={!!isInvalid}
        aria-describedby={`error-${name}`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor={name} className="input-label">
        {label}
      </label>

      {isInvalid ? (
        <div className="input-error" id={`error-${name}`} aria-live="polite">
          {errors}
        </div>
      ) : null}
    </div>
  )
}
