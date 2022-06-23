export const validateEmail = ( email ) => {
    return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
};

export const validatePassword = ( password ) => {    
    return /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
}