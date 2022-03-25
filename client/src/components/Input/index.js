import "./Input.scss";
import { Field, ErrorMessage } from "formik";

export const Input = ({ name, type, label, errors, required = true }) => {
  const isError = errors[name];
  return (
    <div className={`input-float ${isError && "error"} `}>
      <Field
        type={type}
        name={name}
        placeholder=" "
        aria-invalid={isError}
        aria-labelledby={name}
        aria-required={required}
      />
      <label id={name}>{label}</label>

      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};
