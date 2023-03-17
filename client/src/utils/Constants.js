 export const validEmail = new RegExp(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
 );

 export const validPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)" + "(?=.*[-+_!@#$%^&*., ?]).+$"
 );

 export const domain = process.env.REACT_APP_DOMAIN;