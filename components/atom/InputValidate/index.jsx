import style from "./inputValidate.module.scss"

const InputValidate = ({ name, label, type, className, rules, errors, register }) => (
   <>
      <input {...register(name, rules)}
         type={type}
         className={className} />
      <label>{label}</label>
      <span className={style.error_message}>
         {errors[name] ? errors[name].message : <>&nbsp;</>}
      </span>
   </>
);

export default InputValidate;