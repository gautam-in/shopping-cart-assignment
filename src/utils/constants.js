export const alertDismissTime = 5000;

export const minLengthForPassword = 6;

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gm;

export const messages = {
    required: 'This field is required',
    minLength: `Enter atleast ${minLengthForPassword} characters`,
    email: 'Enter a valid email',
    passwordsMissMatch: 'Password & Confirm password should be the same',
    invalidPasswordPattern: 'Password should contain atleast 1 character and 1 number'
};

export const BASE_URL = 'http://localhost:5555';

export const endpoints = {
    BANNERS: 'banners',
    CATEGORIES: 'categories',
    PRODUCTS: 'products',
    ADD_TO_CART: 'addToCart'
};

export const carouselBtnStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 50,
    height: 30,
    cursor: 'pointer',
    background: '#000',
    color: 'white',
    opacity: '0.1'
}

export const indicatorStyles = {
    background: '#d4d4d4',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%'
};