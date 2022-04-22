import * as Yup from 'yup';

const minLengthForPassword = 6;

const messages = {
    required: 'This field is required',
    minLength: `Enter atleast ${minLengthForPassword} characters`,
    email: 'Enter a valid email',
    passwordsMissMatch: 'Password & Confirm password should be the same'
};

export const loginInitialValues = {
    email: '',
    password: ''
};

export const loginSchema = Yup.object().shape({
    email: Yup.string().email(messages.email).required(messages.required),
    password: Yup.string().required(messages.required).min(minLengthForPassword, messages.minLength)
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
    password: Yup.string().required(messages.required).min(minLengthForPassword, messages.minLength),
    confirmPassword: Yup.string().required(messages.required).oneOf([Yup.ref('password'), null], messages.passwordsMissMatch)
});