export default function useValidate(values) {
    let errors = {};
    if (values.form === 'sign-in') {
        console.log(values);
    } else {
        if (!values.firstname.trim()) {
            errors.firstname = 'first name is required';
        }
        else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
            errors.firstname = 'Enter a valid name';
        }

        if (!values.lastname.trim()) {
            errors.lastname = 'last name is required';
        }
        else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
            errors.lastname = 'Enter a valid name';
        }

        if (!values.email) {
            errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be 6 characters or more';
        }

        if (!values.confirm_password) {
            errors.confirm_password = 'confirm password is required';
        } else if (values.confirm_password !== values.password) {
            errors.confirm_password = 'Passwords do not match';
        }
    }
    return errors;
}