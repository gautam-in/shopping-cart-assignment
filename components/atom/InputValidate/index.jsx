import style from "./inputValidate.module.scss"
import { useForm } from "react-hook-form";

const InputValidate = ({ name, label, type, className, rules, errors, register, watch }) => {
   const value = watch(name, "")
   console.log(value)
   return (
      <>
         <input {...register(name, rules)}
            type={type}
            className={`${className} ${value ? 'has-content' : '' }`} />
         <label>{label}</label>
         <span className={style.error_message}>
            {errors[name] ? errors[name].message : <>&nbsp;</>}
         </span>
      </>
   )
};

export default InputValidate;