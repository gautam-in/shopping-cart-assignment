import { Component } from "react"
import InputValidate from "../../atom/InputValidate"

const passwordValidation = {
   minLength: {
      value: 6,
      message: "Password must be 6 characters in length"
   },
}


class PasswordInput extends Component {
   render() {
      const { name, label, className, errors, register, required, match } = this.props
      const required_rule = required ? (typeof required === "string" ? required : `${label} is required`) : false
      const rules = match ?
         {
            ...passwordValidation,
            required: required_rule,
            validate: value => value === match.current || "The passwords do not match"
         }
         :
         {
            ...passwordValidation,
            required: required_rule,
         }
      return (<>
         <InputValidate
            type="password"
            name={name}
            label={label}
            register={register}
            className={className}
            rules={rules}
            errors={errors} />
      </>)
   }
}

export default PasswordInput