import { useNavigate } from "react-router-dom"
import { LoginActionTypes } from "../constants/loginAction_types"

const initialState={
    user:{}
}
export const LoginReducer=(state=initialState,{type,payload})=>{
    if(type==LoginActionTypes.LOGIN){
        return {...state,user:{...payload}}
    }
    else{
        return {...state}
    }
}