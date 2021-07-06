import React from 'react'
import { reduxForm,Field } from 'redux-form'
import styled from 'styled-components'
import InputType from '../../atoms/Input/InputField' 
import Button from '../../atoms/Button/Button' 

let LoginForm = props => {
  
  const { handleSubmit } = props
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputType cname="form_field" content="Email" type="email" />
      <InputType cname="form_field" content="Password" type="password" />
      <Button cname="variant_signin" type="submit">Submit</Button>
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm