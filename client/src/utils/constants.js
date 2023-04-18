export const API_BASE_URL = 'http://localhost:5000'

export const validations = {
    required: {required: "The field is required"},
    email: { validate: (value) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value) || 'Invalid email'},
    password: {validate: {
        minChar: v => /^.{6,}$/.test(v) || 'At least 6 characters is required',
        alphabet: v => /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) || 'Must have a number and alphabet',
        nonWhiteSpace: v => /^\S*$/.test(v) || 'Cannot have white space',
    }},
    confirmPassword: (password,confirmPassword) => password === confirmPassword || 'password deosn\'t match'
}