import { IError } from './IError';
export interface ISignup{
    firstname:{
        "name":string,
        "error": IError
    },
    lastname:{
        "name":string,
        "error": IError
    },
    email:{
        "name":string,
        "error": IError
    },
    password:{
        "name":string,
        "error": IError
    },
    confirmPassword:{
        "name":string,
        "error": IError
    }
}