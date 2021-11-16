export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const signup = (userInfo) => {
    return async (dispatch) => {
        dispatch({type:USER_SIGNUP,info:userInfo})
    }
}

export const login = (userInfo) => {
    return async (dispatch,getState) => {
        try {
            const user = getState().User.currentUser;
            if(user.email !== userInfo.email){
                throw new Error('Email not registered');
            }
            if(user.password !== userInfo.password){
                throw new Error('Incorrect Password');
            }
            dispatch({type:USER_LOGIN});
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({type:USER_LOGOUT})
    }
}

