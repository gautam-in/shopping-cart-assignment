export const USER_REGEX = /^[A-z][A-z0-9-_]{1,50}$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const USER_ERROR = 'It must begins with a letter. Letters, Numbers, Underscore, Hypens allowed';
export const EMAIL_ERROR = 'Please include and @ in the email address';
export const PWD_ERROR = 'It must include uppercase, lowercase letters, a number and a speacial character.';
export const CONFIRM_PWD_ERROR = 'It must match with the above password';

export const REGEX_INPUTS = {
    'first-name': USER_REGEX,
    'last-name': USER_REGEX,
    'email': EMAIL_REGEX,
    'password': PWD_REGEX,
    'confirm-password': PWD_REGEX,
}

export const ERROR_MESSAGES = {
    'first-name': USER_ERROR,
    'last-name': USER_ERROR,
    'email': EMAIL_ERROR,
    'password': PWD_ERROR,
    'confirm-password': CONFIRM_PWD_ERROR,
}