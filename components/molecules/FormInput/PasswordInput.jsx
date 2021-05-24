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
      const { name, label, className, errors, register, watch, required, match, rules } = this.props
      const required_rule = required ? (typeof required === "string" ? required : `${label} is required`) : false
      const _rules = match ?
         {
            ...passwordValidation,
            ...rules,
            required: required_rule,
            validate: value => value === match || "The passwords do not match"
         }
         :
         {
            ...passwordValidation,
            ...rules,
            required: required_rule,
         }
      return (<>
         <InputValidate
            type="password"
            name={name}
            label={label}
            register={register}
            watch={watch}
            className={className}
            rules={_rules}
            errors={errors} />
      </>)
   }
}

export default PasswordInput