import { fn } from "../../Utils";
import css from "./Input.module.css";
function Input(props) {
    let {label,name,id,type,required=true,value='',handleChange=fn}=props;
  return (
    <div className={css.InputContainer}>
      <input type={type} name={name} id={id} autocomplete="off" autoFill={false} onChange={handleChange} value={value} required={required} />
      <span className={css.Bar}></span>
      <label htmlFor="name">{label}</label>
    </div>
  );
}

export default Input;
