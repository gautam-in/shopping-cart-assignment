import InputValidate from "../../atom/InputValidate"

const emailValidation = {
   pattern: {
      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
      message: "Valid email address is required"
   },
}


const EmailInput = ({ name, label, className, errors, register, required }) => (
   <>
      <InputValidate
         type="email"
         name={name}
         label={label}
         register={register}
         className={className}
         rules={{ ...emailValidation, required: required ? (typeof required === "string" ? required : `${label} is required`) : false }}
         errors={errors} />
   </>
);

export default EmailInput