import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import "./textField.scss";
interface IProps {
  label?: string;
  placeholder: string;
  name: string;
  id: string;
  type: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  inputClassName?: string;
  labelClassName?: string;
}
export const TextField = ({ label, inputClassName = "", labelClassName = "", className = "", id = "", disabled = false, ...props }: IProps): React.ReactElement => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  const wrapperClass = classNames("custom", "form__group", className, {
    "error-inp": hasError
  });

  const inputWrapperClass = classNames("form__field", inputClassName);
  const labelWrapperClass = classNames("form__label", labelClassName);

  return (
    <div className={wrapperClass} key={id || field.name}>
      <input id={id || field.name} {...field} {...props} disabled={disabled} className={inputWrapperClass} autoComplete={"off"} />
      <label htmlFor={id || field.name} className={labelWrapperClass}>
        {label}
      </label>
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
};
export default TextField;
