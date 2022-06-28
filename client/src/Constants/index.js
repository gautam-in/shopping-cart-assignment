export const USER_REGEX = /^[A-z][A-z0-9-_]{2,50}$/;
export const CHECK_FOR_TWO_CHAR_REGEX = /^[A-Za-z]{2}/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const CHECK_FOR_AT_THE_RATE = /\S+@/;
export const CHECK_FOR_PERIOD = /\S+@\S+\.\S+/;

export const NAME_REGEX = {
    'check_two_char': CHECK_FOR_TWO_CHAR_REGEX,
    'check_overall': USER_REGEX,
};

export const EMAIL_REGEX = {
    'check_address': CHECK_FOR_AT_THE_RATE,
    'check_period': CHECK_FOR_PERIOD,
}

export const NAME_ERROR = {
    'check_two_char': 'It must be minimum of 2 characters long',
    'check_overall': 'Letters, Numbers, Underscore, Hypens allowed',
}

export const EMAIL_ERROR = {
    'check_address': 'Please include @ in the email address',
    'check_period': 'Please include . in the email address',
}

export const PWD_ERROR = 'It must include uppercase, lowercase letters, a number and a speacial character.';
export const CONFIRM_PWD_ERROR = 'It must match with the above password';