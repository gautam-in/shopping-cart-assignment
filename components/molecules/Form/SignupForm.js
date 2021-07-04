import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      
      <div>
        <label htmlFor="password">Confirm Password</label>
        <Field name="password" component="input" type="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(SignUpForm)

export default SignUpForm