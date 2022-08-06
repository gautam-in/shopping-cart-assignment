import axios from "../../utils/axios"
import { LoginActionTypes } from "../constants/loginAction_types"
export const LoginAction = (data) => {

    return async (dispatch) => {
        try {
            const res = await axios.post('login', data);
            //TODO: Do not store token inside storage. Let it be inside cookie.
            // Get rid of localstorage related logic. Hvae seen auth_token being used and numbe rof places.
            localStorage.setItem('auth_token', res.data.token);
            dispatch({
                type: LoginActionTypes.LOGIN,
                payload: res.data
            })
        } catch (error) {

        }

    }
}