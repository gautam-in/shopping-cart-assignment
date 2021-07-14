const InputBox = ({
  input,
  label,
  required,
  type,
  error,
  onChange,
  onBlur,
  value,
  name,
}) => {
  return (
    <div className={`input-container ${error ? "error" : ""}`}>
      <input
        {...input}
        className="input-field"
        required={required}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        id={label}
        value={value}
      />
      <label htmlFor={label}>{label}</label>
      <p  aria-live="assertive" aria-atomic="true">
        {error}
      </p>
    </div>
  );
};
export default InputBox;
