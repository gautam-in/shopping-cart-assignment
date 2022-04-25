import * as Yup from 'yup';

const minLengthForPassword = 6;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gm;

const messages = {
    required: 'This field is required',
    minLength: `Enter atleast ${minLengthForPassword} characters`,
    email: 'Enter a valid email',
    passwordsMissMatch: 'Password & Confirm password should be the same',
    invalidPasswordPattern: 'Password should contain atleast 1 character and 1 number'
};

export const loginInitialValues = {
    email: '',
    password: ''
};

export const loginSchema = Yup.object().shape({
    email: Yup.string().email(messages.email).required(messages.required),
    password: Yup.string().required(messages.required).min(minLengthForPassword, messages.minLength).matches(passwordRegex, messages.invalidPasswordPattern)
});

export const signUpInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required(messages.required),
    lastName: Yup.string().required(messages.required),
    email: Yup.string().email(messages.email).required(messages.required),
    password: Yup.string().required(messages.required).min(minLengthForPassword, messages.minLength).matches(passwordRegex, messages.invalidPasswordPattern),
    confirmPassword: Yup.string().required(messages.required).oneOf([Yup.ref('password'), null], messages.passwordsMissMatch)
});