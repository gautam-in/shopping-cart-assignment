import classes from "./InputComponent.css";

const InputComponent = ({ input, handleChange, value }) => {
  const { inputId, placeholder, type } = input;
  return (
    <>
      <label htmlFor={inputId} className={classes.floating__label}>
        {placeholder}
      </label>
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
      
    </>
  );
};

export default  InputComponent ;