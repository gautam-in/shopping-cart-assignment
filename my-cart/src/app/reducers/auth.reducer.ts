import { AuthState } from "../auth/AuthState";
import * as authActions from '../auth/auth.actions'

const InitialState = {} as AuthState;
export function authReducer(state=InitialState,action:{type:string,payload?:any}){
      switch(action.type){
          case authActions.SIGN_IN :
             return {...state,...action.payload}
          case authActions.SIGN_UP :
                  return {...state,...action.payload}
          case authActions.LOG_OUT :
                  return {}
          default :
               return state;
      }
}