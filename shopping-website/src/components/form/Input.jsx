import "./Input.scss";

const Input = ({ type, name, value, onChange, onBlur, label, placeholder, onError }) => {
  return (
      <>
      <div className="inputContainer">
        <input type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className="input" />
        <label htmlFor={name} className="label">{label}</label>
      </div>
      <p style={{color:'red'}}>{onError}</p>
      </>
  );
};

export default Input;
