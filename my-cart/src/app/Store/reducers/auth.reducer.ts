import { AuthState } from "../actions/auth.state";
import * as authActions from '../actions/auth.actions'

const InitialState = {} as AuthState;
export function authReducer(state = InitialState, action: { type: string, payload?: any }) {
        switch (action.type) {
                case authActions.SIGN_IN:
                        return { ...state, ...{ ...action.payload, error: null } }
                case authActions.SIGN_UP:
                        return { ...state, ...{ ...action.payload, error: null } }
                case authActions.LOG_OUT:
                        return {}
                case authActions.AUTH_ERROR:
                        return { ...state, error: action.payload }
                default:
                        return state;
        }
}