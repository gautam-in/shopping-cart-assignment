export  function validateRegistration(values) {
  let errors = {};
  var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.firstName) {
    errors.firstName = "FirstName can not be empty";
  } else if (values.firstName.length < 3 || values.firstName.length > 100) {
    errors.firstName = "Title should be in 3 to 100 words";
  }
  if (!values.lastName) {
    errors.lastName = "Contact Name can not be empty";
  } else if (values.lastName.length < 3 || values.lastName.length > 100) {
    errors.lastName = "Contact Name should be in 3 to 100 words";
  }
  if (!values.email) {
    errors.email = "Email can not be empty";
  } else if (
    !values.email.match(email)  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password can not be empty";
  }

  if(!values.confirmPassword){
      errors.confirmPassword="confirmPassword can not be empty"
  }

  if(values.password!==values.confirmPassword){
      errors.confirmPassword="password and confirmation password do not match."
  }
  return errors;
}
