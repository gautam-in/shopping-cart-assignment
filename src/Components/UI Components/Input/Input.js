import "./Input.scss";

const Input = ({ input, handleChange, value }) => {
  const { inputId, placeholder, type } = input;
  return (
    <>
      <input
        type={type}
        className="input"
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={value}
        onChange={handleChange}
        required
      />
      <label htmlFor={inputId} className="floating-label">
        {placeholder}
      </label>
    </>
  );
};

export default Input;
