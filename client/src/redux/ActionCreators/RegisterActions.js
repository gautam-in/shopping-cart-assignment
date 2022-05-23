import { RegisterActionTypes } from "../constants/registerAction_types"

export const SetRegister=(data)=>{
    return{
        type:RegisterActionTypes.SET_REGISTER_DATA,
        payload:data
    }
}