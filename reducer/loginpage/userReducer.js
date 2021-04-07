import * as types  from "../../constants/actionTypes";

const initialState ={
    registeredUsers:[],
    currentLogedInUser:'',
}
 const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_USER: 
        // storing all the registered users
        return {
            ...state,
            registeredUsers: state.registeredUsers.concat(action.userEmail)
        }
        case types.LOG_IN: 
        return {
            ...state,
            currentLogedInUser:action.email
        }
        case types.LOG_OUT: 
        return {
            ...state,
            currentLogedInUser:false,
            cartData:[]
        }
        default:
            return state
    }
};
export default userReducer
