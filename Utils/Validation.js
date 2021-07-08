import * as yup from 'yup';

export const loginValidation = () => {
	 
    return yup.object({
      email : yup.string().email('Invalid Email address format').required('Email address is required').trim(),
      password: yup
        .string()
        .required("Password is Required")
        .test(
          "regex",
          "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
          val => {
            let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
            return regExp.test(val);
          }
        ),
    })

}

export const RegisterValidation = () => {
	 
  return yup.object({
    firstname: yup.string()
              .max(100, 'Name cannot exceed 100 characters')
              .test('alphabetsonly', 'Name should not contain Numbers and Special characters', function (val) {
                  return /^[a-zA-Z\s]*$/.test(val);
          }).required('First Name is Required'),
    lastname: yup.string()
          .max(100, 'Name cannot exceed 100 characters')
          .test('alphabetsonly', 'Name should not contain Numbers and Special characters', function (val) {
              return /^[a-zA-Z\s]*$/.test(val);
      }).required('Last Name is Required'),
    email : yup.string().email('Invalid Email address format').required('Email address is required').trim(),
    password: yup.string()
                .required("Password is Required")
                .test(
                  "regex",
                  "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                  val => {
                    let regExp = new RegExp(
                      "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    return regExp.test(val);
                  }
                ),
    confirmPassword: yup.string().required("Password is Required")
                        .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

}


