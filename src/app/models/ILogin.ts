import { IError } from './IError';
export interface ILogin {
    email:{
        "name":string,
        "error": IError
    },
    password:{
        "name":string,
        "error": IError
    }
}