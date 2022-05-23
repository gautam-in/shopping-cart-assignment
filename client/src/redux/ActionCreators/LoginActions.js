import { LoginActionTypes } from "../constants/loginAction_types"

export const LoginAction=(data)=>{
    return {
        type:LoginActionTypes.LOGIN,
        payload:data
    }
}