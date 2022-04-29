

export const login = {
    email:'required|email',
    password:'required'
}

export const register = {
    firstName:'required',
    lastName:'required',
    email:'required|email',
    userPassword:'required|alpha_num|min:6,string',
    confirmPassword:'required|alpha_num|min:6,string'
}