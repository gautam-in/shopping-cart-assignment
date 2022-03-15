export default function validateForm(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name required";
  }

  // Email
  const emailRegex = RegExp(/\S+@\S+\.\S+/);

  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password do not match";
  }

  return errors;
}
