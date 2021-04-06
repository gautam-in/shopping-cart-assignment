import * as types  from "../../constants/actionTypes";

const initialState ={
    registeredUsers:[],
    currentLogedInUser:'jamaluddinshaik6@gmail.com',
}
 const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_USER: 
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
