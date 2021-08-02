import { FETCH_USER_REQUEST, LOGOUT_USER } from './app.actionTypes'

export const fetchUser = (user) =>  {
    return {
        type: FETCH_USER_REQUEST,
        payload: user
    }
}

export const signOutUser = () =>  {
    return {
        type: LOGOUT_USER
    }
}

