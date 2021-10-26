import "./input.scss";

function Input({type,placeholder,required,name,value}) {
  return (
    <input
      className="formRow__inputText"
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      name={name}
    />
  );
}

export default Input;