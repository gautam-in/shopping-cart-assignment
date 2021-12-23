import { useField } from 'formik';
import './textField.scss';

function TextField({ id = '', label = '', disabled = false, inputClassName = '', ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  return (
    <div className="group">
      <input id={id || field.name} {...field} {...props} disabled={disabled} className={inputClassName} />
      <span className="bar"></span>

      <label htmlFor={id || field.name}>{label}</label>
      {hasError && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default TextField;
