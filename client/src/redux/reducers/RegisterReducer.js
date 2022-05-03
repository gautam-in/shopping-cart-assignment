import { RegisterActionTypes } from "../constants/registerAction_types"

const initialState={
    registeredUsers:[]
}

export const RegisterReducer=(state=initialState,{type,payload})=>{

    if(type==RegisterActionTypes.SET_REGISTER_DATA){

        const existedUser=state.registeredUsers.filter(item=>item.email===payload.email);
        const index=state.registeredUsers.findIndex(item=>item.email===payload.email)
        if(existedUser.length>0){
            state.registeredUsers[index]['password']=payload.password;
            return {...state,registeredUsers:[...state.registeredUsers]}
        }
        else{
            return {...state,registeredUsers:[...state.registeredUsers,{...payload}]} 
        }
    }
    else{
        return {...state}
    }

}