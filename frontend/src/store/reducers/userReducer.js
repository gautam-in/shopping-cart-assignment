import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from "../actions/userAction"

const intialState = {
    currentUser:{},
    isLogin:true
}

export default (state = intialState,action) => {
    switch(action.type){
        case USER_SIGNUP:
            return{
                ...state,
                currentUser:action.info
            }
        case USER_LOGIN:
            return{
                ...state,
                isLogin:true
            }
        case USER_LOGOUT:
            return{
                ...state,
                isLogin:false
            }
    }
    return state
}