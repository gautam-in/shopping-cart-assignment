import InputValidate from "../../atom/InputValidate"

const TextInput = ({ name, label, className, errors, register, rules, required}) => (
   <>
      <InputValidate
         type="text"
         name={name}
         label={label}
         register={register}
         className={className}
         rules={{ ...rules, required: required ? (typeof required === "string" ? required : `${label} is required`) : false }}
         errors={errors} />
   </>
);

export default TextInput