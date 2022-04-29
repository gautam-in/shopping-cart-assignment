import classes from "./Input.module.css";

const Input = ({ input, handleChange, value }) => {
  const { inputId, placeholder, type } = input;
  return (
    <>
      <input
        type={type}
        className={classes.input}
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={value}
        onChange={handleChange}
        required
      />
      <label htmlFor={inputId} className={classes.floating__label}>
        {placeholder}
      </label>
    </>
  );
};

export default Input;
