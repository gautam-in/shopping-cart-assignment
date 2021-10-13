import css from "./Input.module.css";
function Input(props) {
    let {label,name,id,type,formState,rule={}}=props;
    if(!id){
      id=name;
    }
    let {handleChange,handleError,inputs,inputError}=formState;
    let value=inputs[name] || '';
  return (
    <div className={css.InputContainer} data-error={!!inputError[name]}>
      <input type={type} name={name} id={id} onBlur={(e)=>handleError(e,rule)} autoComplete="off" onChange={handleChange} value={value}/>
      <span className={css.Bar}></span>
      <label htmlFor="name">{label}</label>
      <div className={css.Error}>{inputError[name]}</div>
    </div>
  );
}

export default Input;
