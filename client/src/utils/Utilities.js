import {validEmail, validPassword} from "./Constants";

export const isValidEmail = (email) => {
    if (!validEmail.test(email)) {
        return false;
     }
     return true;
}

export const isValidPassword = (email) => {
    if (!validPassword.test(email)) {
        return false;
     }
     return true;
}

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated');
}

export const signOut = () => {
    return localStorage.removeItem('isAuthenticated');
}