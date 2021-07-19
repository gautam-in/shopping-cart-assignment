import { AUTH } from "../types";

const initialState = {
    auth:''
}
export default (state = initialState, action) => {
    switch(action.type){
        case AUTH: 
        return {
            ...state,
            auth:action.payload
        }
        default:
        return state;
    }
}