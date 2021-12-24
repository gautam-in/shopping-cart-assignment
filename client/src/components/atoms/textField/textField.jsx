import classNames from 'classnames';
import { useField } from 'formik';
import './textField.scss';

function TextField({ id = '', label = '', disabled = false, customInputClassName = '', ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;
  const inputClassName = classNames('input', customInputClassName);

  return (
    <div className="input__wrapper">
      <input id={id || field.name} {...field} {...props} disabled={disabled} className={inputClassName} />
      <span className="bar"></span>

      <label htmlFor={id || field.name}>{label}</label>
      {hasError && <p className="input__error_msg">{error}</p>}
    </div>
  );
}

export default TextField;
