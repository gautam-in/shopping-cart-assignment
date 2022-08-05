import axios from "../../utils/axios"
import { LoginActionTypes } from "../constants/loginAction_types"
export const LoginAction = (data) => {

    return async (dispatch) => {
        try {
            const res = await axios.post('login', data);
            localStorage.setItem('auth_token', res.data.token);
            dispatch({
                type: LoginActionTypes.LOGIN,
                payload: res.data
            })
        } catch (error) {

        }

    }
}