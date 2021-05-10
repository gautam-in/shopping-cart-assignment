import InputValidate from "../../atom/InputValidate"

const TextInput = ({ name, label, className, errors, register, watch,rules, required}) => (
   <>
      <InputValidate
         type="text"
         name={name}
         label={label}
         register={register}
         watch={watch}
         className={className}
         rules={{ ...rules, required: required ? (typeof required === "string" ? required : `${label} is required`) : false }}
         errors={errors} />
   </>
);

export default TextInput