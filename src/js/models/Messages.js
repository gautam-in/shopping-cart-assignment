export const messages = {
  // Login Section
  success: {
    selector: 'success',
    cssSelector: 'message-box-success',
    login: 'Login Successfully',
    signUp: 'Sign Up Successfully'
  },
  failure: {
    selector: 'failure',
    cssSelector: 'message-box-failure',
    login: {
      invalidEmail: 'Please enter valid Email',
      passwordBlank: 'Please Enter Password'
    },
    signUp: {
      invalidEmail: 'Please enter valid Email',
      formMandatory: 'All Fields are mandatory',
      passwordMismatch: 'Passwords must be Same',
      passwordBlank: 'Passwords must contain Values',
      passwordCriteria: '1. Password must be of Minimum length 6 characters</br> 2.Must have a number and alphabet.</br>3.Cannot have spaces'
    }
  },
  warning: {
    selector: 'warning',
    cssSelector: 'message-box-warning',
    incompleteForm: 'Form must be filled before Submit'

  },
  info: {
    selector: 'info',
    cssSelector: 'message-box-info'
  }
}
