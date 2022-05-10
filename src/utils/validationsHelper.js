import * as Yup from 'yup';
import {minLengthForPassword, passwordRegex, messages} from './constants';

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