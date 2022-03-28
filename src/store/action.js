export const SET_FILTER = "SET_FILTER";
export const DECREAMENT = "DECREAMENT";
export const INCREAMENT = "INCREAMENT";
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_USER = 'ADD_USER';


export const setFilter = (payload = null) => {
    return {
        type: SET_FILTER,
        payload: payload,
    };
};

export const decreament = (payload=null)=>{
    return{
        type:DECREAMENT,
        payload:payload,
    };
}

export const increament = (payload=null)=>{
    return{
        type:INCREAMENT,
        payload:payload,
    };
}

export const userLogin = (payload) =>{
    return {
        type:LOGIN,
        payload:payload,
    }
}

export const addUser = (payload) =>{
    return{
        type:ADD_USER,
        payload:payload,
    }
}