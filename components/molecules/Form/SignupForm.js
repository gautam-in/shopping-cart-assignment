import React from 'react'
import { reduxForm } from 'redux-form'
import InputType from '../../atoms/Input/InputField' 
import Button from '../../atoms/Button/Button' 


let SignUpForm = props => {
  
  const { handleSubmit } = props
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputType cname="form_field" content="Name" type="email" />
      <InputType cname="form_field" content="Email" type="email" />
      <InputType cname="form_field" content="Password" type="password" />
      <InputType cname="form_field" content="Confirm Password" type="password" />
      <Button cname="variant_signin" type="submit">Sign Up</Button>
    </form>
  )
}

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup'
})(SignUpForm)

export default SignUpForm